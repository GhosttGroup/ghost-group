import React, { InputHTMLAttributes, ReactElement, ReactNode } from 'react';

import { UseFormRegister, FieldValues, RegisterOptions, Path, DeepMap, FieldError } from 'react-hook-form';

import styles from './Input.module.css';
import { FormData } from '../ContactInfo/Form/Form';

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: ReactNode;
  name: Path<FieldValues>;
  rules?: RegisterOptions;
  register?: UseFormRegister<any>;
  errors?: DeepMap<FieldValues, FieldError>;
}

export const Input = ({ register, name, errors, rules, label, ...props }: IInputProps): ReactElement => (
  <div className={styles.container__input}>
    {label && (
      <label>
        {label}
        {rules?.required && '*'}
      </label>
    )}
    <input className={styles.custom__input} {...(register && register(name, rules))} {...props} />
    {errors?.[name] && <p className={styles.errors}>{errors?.[name].message || 'Error'}</p>}
  </div>
);
