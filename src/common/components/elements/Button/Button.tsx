import React, { ReactNode, ButtonHTMLAttributes, ReactElement } from 'react';
import './button.css';

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    onClick?: () => void;}

const Button = (props: IButtonProps): ReactElement => (
    <button className="custom_button" {...props}>
            {props.children}
    </button>
);


export default Button;
