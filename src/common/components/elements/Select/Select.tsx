import React, { useState } from 'react';

import './select.css';

type OptionType = {
  label: string;
  value: string;
}

  // interface ISelectProps extends InputHTMLAttributes<HTMLSelectElement> {

interface ISelectProps {
  options: OptionType[];
  name?: string;
  onChange?: (selectedValue: string) => void;
  label?: string;
  defaultText?: string;
}

function Select({ options, onChange, label, defaultText }: ISelectProps) {
  const [selectedValue, setSelectedValue] = useState('asdasd');
//remove state and onChange, default value
  return (
    <div className='container__select'>
      {label && <label className='custom__label'>{label + '*'}</label>}
      <select
        className='custom__select'
        value={selectedValue}
        onChange={e => {
          // const newValue = ;
          setSelectedValue(e.target.value);
          if (onChange) {
            onChange(e.target.value);
          }
        }}
      >
        <option>{defaultText}</option>
        {options.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Select;
