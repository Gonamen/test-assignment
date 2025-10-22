import React from 'react';
import './Select.css';
import arrow from '../../icons/arrow.svg';

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {}

const Select = (props: SelectProps) => {
  return (
    <div className="select-wrapper">
      <select className="select" {...props} />
      <img className="arrow" src={arrow} alt="Arrow" />
    </div>
  );
};

export default Select;
