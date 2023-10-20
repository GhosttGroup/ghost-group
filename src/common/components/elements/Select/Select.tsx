import React, { SelectHTMLAttributes } from 'react';
import './select.css';

type OptionType = {
  label: string;
  value: string;
};

interface ISelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  options: OptionType[];
  label?: string;
  defaultText?: string;
}

function Select({ options, label, ...props }: ISelectProps) {
  return (
    <div className='container__select'>
      {label && <label className='custom__label'>{label + '*'}</label>}

      <select className='custom__select' {...props}>
        <option value='' disabled hidden>
          Select a service
        </option>
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
