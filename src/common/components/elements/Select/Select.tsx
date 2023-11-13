import React, { SelectHTMLAttributes } from 'react';

import style from './select.module.css';

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
    <div className={style.container__select}>
      {label && <label className='custom__label'>{label + '*'}</label>}

      <select className={style.custom__select} {...props}>
        {defaultText && (
          <option value='' disabled hidden>
            {defaultText}
          </option>
        )}
        {options.map(option => (
          <option className={style.custom__select_option} key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Select;
