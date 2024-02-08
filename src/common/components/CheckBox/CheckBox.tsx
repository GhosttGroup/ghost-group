import React, { InputHTMLAttributes } from 'react';
import styles from './CheckBox.module.css';

interface ICheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const CheckBox = (props: ICheckboxProps) => (
  <label className={styles.checkbox}>
    <input type='checkbox' {...props} />
    <span className={styles.checkbox_checkMark} />
    {props.label && <span>{props.label}</span>}
  </label>
);
