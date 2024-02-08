import React, { SelectHTMLAttributes } from 'react';

import style from './Select.module.css';

type OptionType = {
  label: string;
  value: string;
};

interface ISelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  options: OptionType[];
  label?: string;
  defaultText?: string;
}

export const Select = ({ options, label, ...props }: ISelectProps) => (
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
