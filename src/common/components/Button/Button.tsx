import React, { ReactNode, ButtonHTMLAttributes, ReactElement } from 'react';

import styles from './Button.module.css';

interface IButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'buttonType'> {
  children: ReactNode;
  size?: 'xs' | 'xm' | 'md';
  customClassName?: string;
  buttonType?: 'primary' | 'secondary';
}

export const Button = ({ buttonType, children, size = 'xs', ...rest }: IButtonProps): ReactElement => (
  <button
    className={`${styles.custom_button} ${buttonType ? styles[`${buttonType}`] : ''}`}
    style={{
      padding: size === 'xs' ? '8px 32px' : size === 'md' ? '12px 30px' : '14px 18px',
    }}
    {...rest}
  >
    {children}
  </button>
);
