"use client";

import React, { useState } from 'react';
import styles from '@/src/components/molecules/AccordionItem/AccordionItem.module.scss';

interface AccordionItemProps {
  question: string;
  answer: string;
}

export const AccordionItem: React.FC<AccordionItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.accordion}>
      <button 
        className={`${styles.accordion__header} ${isOpen ? styles['accordion__header--active'] : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-label={`Toggle answer for: ${question}`}
      >
        <span>{question}</span>
        <span className={`${styles.accordion__icon} ${isOpen ? styles['accordion__icon--active'] : ''}`} aria-hidden="true">+</span>
      </button>
      <div className={`${styles.accordion__content} ${isOpen ? styles['accordion__content--open'] : ''}`}>
        <p>{answer}</p>
      </div>
    </div>
  );
};
