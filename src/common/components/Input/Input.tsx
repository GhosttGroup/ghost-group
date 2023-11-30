import React, { InputHTMLAttributes, ReactElement, ReactNode } from 'react';

import style from './Input.module.css';

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: ReactNode;
}

export const Input = (props: IInputProps): ReactElement => (
    <div className={style.container__input}>
      {props.label && (
        <label>
          {props.label}
          {props.required && '*'}
        </label>
      )}
      <input className={style.custom__input} {...props} />
    </div>
  );
