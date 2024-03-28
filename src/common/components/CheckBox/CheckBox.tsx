import React, { InputHTMLAttributes } from 'react';

import styles from './CheckBox.module.css';
import { FieldValues, Path, UseFormRegister } from 'react-hook-form';

interface ICheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  name: Path<FieldValues>;
  register: UseFormRegister<any>;
}

export const CheckBox = ({ register, name, ...props }: ICheckboxProps) => (
  <label className={styles.checkbox}>
    <input type='checkbox' {...register(name)} {...props} />
    <span className={styles.checkbox_checkMark} />
    {props.label && <span>{props.label}</span>}
  </label>
);
