import React, { SelectHTMLAttributes } from 'react';

import { DeepMap, FieldError, FieldValues, Path, RegisterOptions, UseFormRegister } from 'react-hook-form';

import style from './Select.module.css';
import styles from '../Input/Input.module.css';

type OptionType = {
  label: string;
  value: string;
};

interface ISelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  options: OptionType[];
  label?: string;
  defaultText?: string;
  register: UseFormRegister<FieldValues>;
  name: Path<FieldValues>;
  rules?: RegisterOptions;
  errors?: DeepMap<FieldValues, FieldError>;
}

export const Select = ({ register, errors, name, rules, defaultText, options, label, ...props }: ISelectProps) => (
  <div className={style.container__select}>
    {label && <label className={style.custom__label}>{label + '*'}</label>}

    <select className={style.custom__select} {...register(name, rules)} {...props}>
      <option value='' hidden>
        {defaultText}
      </option>
      {options.map(option => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
    {errors?.[name] && <p className={styles.errors}>{errors?.[name].message || 'Error'}</p>}
  </div>
);
