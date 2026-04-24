import React from 'react';
import styles from '@/src/components/atoms/Typography/Typography.module.scss';

import { classNames } from '@/src/utils/classNames';

type HeadingProps = {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  children: React.ReactNode;
  className?: string;
};

export const Heading: React.FC<HeadingProps> = ({ level = 2, children, className }) => {
  const Tag = `h${level}` as React.ElementType;
  const headingClass = classNames(styles.heading, styles[`heading--${level}`], className);

  return <Tag className={headingClass}>{children}</Tag>;
};

type TextProps = {
  size?: 'sm' | 'base' | 'lg';
  center?: boolean;
  children: React.ReactNode;
  className?: string;
  as?: 'p' | 'span' | 'div';
};

export const Text: React.FC<TextProps> = ({ size = 'base', center, children, className, as: Tag = 'p' }) => {
  const textClass = classNames(
    styles.text,
    styles[`text--${size}`],
    center ? styles['text--center'] : '',
    className
  );

  return <Tag className={textClass}>{children}</Tag>;
};
