import React, { ReactNode } from 'react';
import { ButtonHTMLAttributes } from 'react';
import './button.css';

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    text?: string;
    children: ReactNode;
}

const Button = (props: IButtonProps) => (
    <button className="button" {...props}>
        {props.text}
        {props.children}
    </button>
);

export default Button;


