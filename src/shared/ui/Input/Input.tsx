import React from 'react';
import search from '../../icons/search.svg';
import './Input.css';
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input: React.FC<InputProps> = (props) => {
  return (
    <div className="input-wrapper">
      <img className="search-icon" src={search} alt="Search" />
      <input className="input" {...props} />
    </div>
  );
};
export default Input;
