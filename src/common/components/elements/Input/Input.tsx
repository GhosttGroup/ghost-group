import React, { InputHTMLAttributes, ReactElement, ReactNode } from 'react';

import style from './input.module.css';

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: ReactNode;
}

const Input = (props: IInputProps): ReactElement => {
  return (
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
};

export default Input;
