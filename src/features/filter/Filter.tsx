import { memo } from 'react';
import Select from '../../shared/ui/Select/Select';
import './Filter.css';

interface TGameFilterProps {
  value: string;
  onChange: (value: string) => void;
  options: string[];
}

const Filter = memo(({ value, onChange, options }: TGameFilterProps) => {
  if (!options || options.length === 0) return null;

  return (
    <div className="filter">
      <label className="filter__label">Game Type</label>
      <Select value={value} onChange={(e) => onChange(e.target.value)}>
        <option value="all">All</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </Select>
    </div>
  );
});

export default Filter;
