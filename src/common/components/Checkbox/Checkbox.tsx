import React, { ReactNode, InputHTMLAttributes, ReactElement } from 'react';
import styles from './Checkbox.module.css';

interface ICheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
    label: ReactNode;
}

export const Checkbox = (props: ICheckboxProps): ReactElement => (
    <label className={styles.custom_checkbox}>
        <input type={styles.checkbox} {...props} />
        <span className={styles.checkbox_label}>{props.label}</span>
    </label>
);
