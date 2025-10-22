import { useState, useRef, useEffect } from 'react';
import { TGame } from '../../entities/game';
import Card from '../card/Card';
import './GameList.css';
import logo from '../../shared/icons/logo.svg';

const PAGE_SIZE = 20;

const GameList = ({ games }: { games: TGame[] }) => {
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const observerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && visibleCount < games.length) {
          setVisibleCount((prev) => Math.min(prev + PAGE_SIZE, games.length));
        }
      },
      { threshold: 0.1 },
    );

    if (observerRef.current) {
      observer.observe(observerRef.current);
    }

    return () => {
      if (observerRef.current) {
        observer.unobserve(observerRef.current);
      }
    };
  }, [visibleCount, games.length]);

  const visibleGames = games.slice(0, visibleCount);

  return (
    <div className="game-list">
      <div className="game-list__header">
        <img src={logo} alt="logo" />
        <span>Pragmatic Play</span>
      </div>
      <div className="game-list__list">
        {visibleGames.map((game: TGame) => (
          <Card key={game.gameID} {...game} />
        ))}
        {visibleCount < games.length && (
          <span ref={observerRef} className="game-list__loader">
            Loading more...
          </span>
        )}
      </div>
    </div>
  );
};

export default GameList;
