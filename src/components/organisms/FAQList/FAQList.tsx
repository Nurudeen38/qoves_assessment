"use client";

import React, { useRef, useEffect, useState } from 'react';
import styles from '@/src/components/organisms/FAQList/FAQList.module.scss';
import { useGsapAnimations } from '@/src/hooks/useGsapAnimations';
import { FAQ_DATA } from '@/src/constants/data';


export const FAQList: React.FC = () => {
  const listRef = useRef<HTMLDivElement>(null);
  const { gsap, ScrollTrigger } = useGsapAnimations();

  const [activeCategory, setActiveCategory] = useState<string>("General Questions");
  const [activeQuestion, setActiveQuestion] = useState<string>("What is Qoves?");

  useEffect(() => {
    if (listRef.current) {
      gsap.fromTo(
        listRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: listRef.current,
            start: "top 80%",
          }
        }
      );
    }
  }, [gsap, ScrollTrigger]);

  const toggleCategory = (category: string) => {
    if (activeCategory === category) {
      setActiveCategory("");
      setActiveQuestion("");
    } else {
      setActiveCategory(category);
      setActiveQuestion(""); // Reset question when opening a new category
    }
  };

  const toggleQuestion = (question: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeQuestion === question) {
      setActiveQuestion("");
    } else {
      setActiveQuestion(question);
    }
  };

  return (
    <section className={styles.faq}>
      <div className={styles.faq__header}>
        <span className={styles.faq__brand}>YOUR QUESTIONS</span>
        <h2 className={styles.faq__title}>
          Frequently asked <span className={styles.faq__titleAccent}>questions</span>
        </h2>
        <p className={styles.faq__subtitle}>
          If you have any further questions, please use the chat box in the bottom right or contact us by email at hello@qoves.com
        </p>
      </div>

      <div className={styles.faq__list} ref={listRef}>
        {FAQ_DATA.map((cat, catIndex) => {
          const isCategoryOpen = activeCategory === cat.category;

          return (
            <div
              key={catIndex}
              className={`${styles.category} ${isCategoryOpen ? styles['category--open'] : ''}`}
            >
              <button
                className={styles.category__header}
                onClick={() => toggleCategory(cat.category)}
              >
                <span>{cat.category}</span>
                <span className={styles.category__icon}>
                  {isCategoryOpen ? '×' : '+'}
                </span>
              </button>

              <div
                className={styles.category__content}
                style={{
                  maxHeight: isCategoryOpen ? '2000px' : '0',
                  opacity: isCategoryOpen ? 1 : 0
                }}
              >
                <div className={styles.questionList}>
                  {cat.items.map((item, itemIndex) => {
                    const isQuestionOpen = activeQuestion === item.question;
                    return (
                      <div
                        key={itemIndex}
                        className={`${styles.question} ${isQuestionOpen ? styles['question--open'] : ''}`}
                      >
                        <button
                          className={styles.question__header}
                          onClick={(e) => toggleQuestion(item.question, e)}
                        >
                          <span>{item.question}</span>
                          <span className={styles.question__icon}>
                            {isQuestionOpen ? '−' : '+'}
                          </span>
                        </button>
                        <div
                          className={styles.question__content}
                          style={{
                            maxHeight: isQuestionOpen ? '500px' : '0',
                            opacity: isQuestionOpen ? 1 : 0,
                            paddingTop: isQuestionOpen ? '10px' : '0',
                            paddingBottom: isQuestionOpen ? '16px' : '0'
                          }}
                        >
                          <p>{item.answer}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
