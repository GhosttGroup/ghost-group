import React, { InputHTMLAttributes, ReactElement } from 'react';
import './input.css';

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const Input = (props: IInputProps): ReactElement => {
  return (
    <div className='container__input'>
      {props.label && <label>{props.label}</label>}
      <input className='custom__input' {...props} />
    </div>
  );
};

export default Input;
