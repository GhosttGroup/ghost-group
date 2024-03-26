import React, { ReactNode, ButtonHTMLAttributes, ReactElement } from 'react';

import styles from './Button.module.css';

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  size?: 'xs' | 'xm';
  customClassName?: string;
  buttonType?: 'primary' | 'secondary';
}

export const Button = (props: IButtonProps): ReactElement => {
  const { children, size = 'xs', buttonType } = props;
  return (
    <button
      className={`${styles.custom_button} ${styles[`${buttonType}`]}`}
      {...props}
      style={{
        padding: size === 'xs' ? '8px 32px' : '16px 48px',
      }}
    >
      {children}
    </button>
  );
};
