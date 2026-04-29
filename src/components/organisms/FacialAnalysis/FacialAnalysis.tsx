"use client";

import React, { useRef, useEffect } from 'react';
import Image from 'next/image';

import styles from '@/src/components/organisms/FacialAnalysis/FacialAnalysis.module.scss';
import { useGsapAnimations } from '@/src/hooks/useGsapAnimations';
import { IMAGES } from '@/src/constants/images';

export const FacialAnalysis: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { gsap, ScrollTrigger } = useGsapAnimations();

  useEffect(() => {
    if (sectionRef.current) {
      const q = gsap.utils.selector(sectionRef.current);

      gsap.fromTo(
        q(`.${styles['analysis__features']}`),
        { scale: 0.9, opacity: 0, y: 30 },
        {
          scale: 1,
          opacity: 1,
          y: 0,
          ease: "power2.out",
          duration: 1.5,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top center",
            toggleActions: "play none none reverse"
          }
        }
      );

      gsap.fromTo(
        q(`.${styles['analysis__portrait']}`),
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          ease: "back.out(1)",
          duration: 1.2,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top center",
            toggleActions: "play none none reverse"
          }
        }
      );
    }
  }, [gsap, ScrollTrigger]);

  return (
    <section className={styles.analysis} ref={sectionRef}>
      <div className={styles.analysis__badge}>PERSONALIZED AESTHETICS</div>

      <h2 className={styles.analysis__title}>
        Your complete <span className={styles.analysis__titleLight}>facial analysis</span>
      </h2>

      <p className={styles.analysis__subtitle}>
        Every face is unique. We assess more than 100 unique facial markers to<br className={styles.analysis__br} />
        give you a precise understanding of your aesthetics.
      </p>

      <div className={styles.analysis__board}>
        <div className={styles.analysis__featuresWrapper}>
          <Image
            width={7000}
            height={7000}
            src={IMAGES.facialAnalysisFeatures}
            alt="Facial Analysis Features Map"
            className={`${styles.analysis__features} ${styles['analysis__features--desktop']}`}
          />
          <Image
            width={7000}
            height={2000}
            src={IMAGES.facialAnalysisFeaturesMobile}
            alt="Facial Analysis Features Map Mobile"
            className={`${styles.analysis__features} ${styles['analysis__features--mobile']}`}
          />
        </div>
        <Image
          width={1000}
          height={1000}
          src={IMAGES.facialAnalysis}
          alt="Facial Analysis Portrait"
          className={styles.analysis__portrait}
        />
      </div>
    </section>
  );
};
