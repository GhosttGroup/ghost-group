import React, { InputHTMLAttributes, ReactElement, ReactNode } from 'react';

import './input.css';

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: ReactNode;
}

const Input = (props: IInputProps): ReactElement => {
  return (
    <div className='container__input'>
      {props.label && (
        <label>
          {props.label}
          {props.required && '*'}
        </label>
      )}
      <input className='custom__input' {...props} />
    </div>
  );
};

export default Input;
