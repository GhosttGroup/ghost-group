import React from 'react';
import './button.css';

interface ButtonProps {
  text?: string;
  onClick?: () => void;
}

const Button = (props: ButtonProps) => {
  return (
      <div className="button-animation">
      <button className="button-click" onClick={props.onClick}>
        {props.text}
      </button>
      </div>
  );
};

export default Button;

