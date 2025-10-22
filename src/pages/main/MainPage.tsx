import React, { useState, useMemo, useCallback } from 'react';
import { useGetGamesQuery } from '../../shared/api/api';
import Search from '../../features/search/Search';
import Filter from '../../features/filter/Filter';
import GameList from '../../features/game-list/GameList';
import { TGame } from '../../entities/game';

const MainPage: React.FC = () => {
  const { data: allGames = [], isLoading } = useGetGamesQuery();
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const uniqueTypes = useMemo(() => [...new Set(allGames.map((game: TGame) => game.gameTypeID))], [allGames]);

  const applySearch = useCallback(
    (games: TGame[]) => {
      if (searchQuery === '') return games;
      return games.filter((game: TGame) =>
        game.gameName.toLowerCase().includes(searchQuery.toLowerCase()),
      );
    },
    [searchQuery],
  );

  const applyFilter = useCallback(
    (games: TGame[]) => {
      if (filter === 'all') return games;
      return games.filter((game: TGame) => game.gameTypeID === filter);
    },
    [filter],
  );

  const filteredGames = useMemo(() => {
    let result = [...allGames];
    result = applySearch(result);
    result = applyFilter(result);
    return result;
  }, [allGames, applySearch, applyFilter]);

  if (isLoading) return <div>Loading games...</div>;

  const handleSearch = () => {
    setSearchQuery(search || '');
  };

  return (
    <div className="main-page">
      <div className="controls">
        <Filter value={filter} onChange={setFilter} options={uniqueTypes} />
        <Search value={search} onChange={setSearch} onSearch={handleSearch} />
      </div>
      <GameList games={filteredGames} />
    </div>
  );
};

export default MainPage;
