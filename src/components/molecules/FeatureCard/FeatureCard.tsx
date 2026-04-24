import React from 'react';
import styles from '@/src/components/molecules/FeatureCard/FeatureCard.module.scss';
import { Text } from '@/src/components/atoms/Typography/Typography';

import { classNames } from '@/src/utils/classNames';

interface FeatureCardProps {
  text: string;
  number: string;
  isActive?: boolean;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({ text, number, isActive }) => {
  return (
    <div className={classNames(styles.featureCard, isActive ? styles['featureCard--active'] : undefined)}>
      <div className={styles.featureCard__icon}>{number}</div>
      <Text size="sm" className={isActive ? styles.featureCard__activeText : undefined}>{text}</Text>
    </div>
  );
};
