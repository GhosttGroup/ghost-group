import React from 'react';
import './button.css';

interface ButtonProps {
  text?: string;
  onClick?: () => void;
}

const Button = (props: ButtonProps) => {
  return (
    <div className='conteiner-button'>
      <button className='custom-button' onClick={props.onClick}>
        {props.text}
      </button>
    </div>
  );
};

export default Button;
