import React, { SelectHTMLAttributes } from 'react';
import './select.css';

import style from './select.module.css';

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
    <div className={style.container__select}>
      {label && <label className={style.custom__label}>{label + '*'}</label>}

      <select className={style.custom__select} {...props}>
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
