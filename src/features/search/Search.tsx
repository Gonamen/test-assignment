import Input from '../../shared/ui/Input/Input';
import Button from '../../shared/ui/Button/Button';
import './Search.css';

interface GameSearchProps {
  value: string;
  onChange: (value: string) => void;
  onSearch: () => void;
}

const Search = ({ value, onChange, onSearch }: GameSearchProps) => {
  return (
    <div className="search">
      <label>Search</label>
      <div className="search__wrapper">
        <Input
          type="text"
          placeholder="Search"
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
        <Button onClick={onSearch}>SEARCH</Button>
      </div>
    </div>
  );
};

export default Search;
