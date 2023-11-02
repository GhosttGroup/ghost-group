import React, { ReactNode, ButtonHTMLAttributes, ReactElement } from 'react';
import './button.css';
interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    onClick?: () => void;}

const Button = (props: IButtonProps): ReactElement => (
    <button className="custom_button" {...props}>
        <div className="button-content">
            {props.children}
        </div>
    </button>
);


export default Button;
