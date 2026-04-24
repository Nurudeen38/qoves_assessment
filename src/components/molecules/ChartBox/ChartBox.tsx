"use client";

import React from 'react';
import styles from '@/src/components/molecules/ChartBox/ChartBox.module.scss';
import { LineChart, Line, BarChart, Bar, ResponsiveContainer, YAxis } from 'recharts';

interface ChartBoxProps {
  title: string;
  type: 'line' | 'bar';
  data: any[];
  dataKey: string;
  color?: string;
  className?: string;
}

export const ChartBox: React.FC<ChartBoxProps> = ({ 
  title, 
  type, 
  data, 
  dataKey, 
  color = "#7D9A96",
  className 
}) => {
  return (
    <div className={`${styles.chartBox} ${className || ''}`}>
      <div className={styles.chartBox__header}>
        <span className={styles['chartBox__header-title']}>{title}</span>
      </div>
      <div className={styles.chartBox__container}>
        <ResponsiveContainer width="100%" height="100%">
          {type === 'line' ? (
            <LineChart data={data}>
              <Line type="monotone" dataKey={dataKey} stroke={color} strokeWidth={2} dot={false} />
              <YAxis domain={['dataMin', 'dataMax']} hide />
            </LineChart>
          ) : (
            <BarChart data={data}>
              <Bar dataKey={dataKey} fill={color} radius={[2, 2, 0, 0]} />
              <YAxis domain={[0, 'dataMax']} hide />
            </BarChart>
          )}
        </ResponsiveContainer>
      </div>
    </div>
  );
};
