import React, { SelectHTMLAttributes } from 'react';
import './select.css';

type OptionType = {
  label: string;
  value: string;
};

interface ISelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  defaultText?: string;
  label?: string;
  options: OptionType[];
}

function Select({ defaultText, label, options, ...props }: ISelectProps) {
  return (
    <div className='container__select'>
      {label && <label className='custom__label'>{label + '*'}</label>}

      <select className='custom__select' {...props}>
        {defaultText && (
          <option value='' disabled hidden>
            {defaultText}
          </option>
        )}
        {options.map(option => (
          <option className='custom__select_option' key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Select;
