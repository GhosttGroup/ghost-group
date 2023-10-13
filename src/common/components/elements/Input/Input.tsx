import './input.css';
import React, {InputHTMLAttributes, ReactElement} from "react";

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
}

const Input = (props: IInputProps): ReactElement => {
    return (
        <div className='custom__input'>
            {props.label && <label>{props.label}</label>}
            <input className='custom__input' {...props} />
        </div>
    );
};

export default Input;
