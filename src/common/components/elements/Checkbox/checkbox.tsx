import React, { ReactNode, InputHTMLAttributes, ReactElement } from 'react';
import './checkbox.css';

interface ICheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
    label: ReactNode;
}

const Checkbox = (props: ICheckboxProps): ReactElement => (
    <label className="custom-checkbox">
        <input type="checkbox" {...props} />
        <span className="checkbox-label">{props.label}</span>
    </label>
);

export default Checkbox;