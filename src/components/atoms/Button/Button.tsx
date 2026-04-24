import React from 'react';
import styles from '@/src/components/atoms/Button/Button.module.scss';

import { classNames } from '@/src/utils/classNames';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'accent';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ variant = 'primary', children, className, ...props }) => {
  const buttonClass = classNames(
    styles.button,
    styles[`button--${variant}`],
    className
  );

  return (
    <button className={buttonClass} {...props}>
      {children}
    </button>
  );
};
