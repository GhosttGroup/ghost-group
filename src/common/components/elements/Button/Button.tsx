import React, { ReactNode, ButtonHTMLAttributes, ReactElement } from 'react';

import style from './button.module.css';

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  size?: 'xs' | 'xm';
}

const Button = (props: IButtonProps): ReactElement => {
  const { children, size = 'xs' } = props;
  return (
    <button className={style.custom_button} {...props} style={{ padding: size === 'xs' ? '8px 32px' : '16px 48px' }}>
      {children}
    </button>
  );
};

export default Button;
