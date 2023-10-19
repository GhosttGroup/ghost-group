import React, { useState } from 'react';
import { TfiAngleDown } from 'react-icons/tfi';
import './select.css';

interface SelectProps {
  options: { label: string; value: string }[];
  name?: string;
  onChange?: (selectedValue: string) => void;
  embeddedText?: string;
  defaultText?: string;
}

function Select({ options, onChange, embeddedText, defaultText }: SelectProps) {
  const [selectedValue, setSelectedValue] = useState('');

  return (
    <div className='container__select'>
      {embeddedText && <label className='custom__label'>{embeddedText + '*'}</label>}
      <select
        className='custom__select'
        value={selectedValue}
        onChange={event => {
          const newValue = event.target.value;
          setSelectedValue(newValue);
          if (onChange) {
            onChange(newValue);
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
