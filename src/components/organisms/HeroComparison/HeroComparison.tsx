"use client";

import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import styles from '@/src/components/organisms/HeroComparison/HeroComparison.module.scss';
import { Heading, Text } from '@/src/components/atoms/Typography/Typography';
import { FeatureCard } from '@/src/components/molecules/FeatureCard/FeatureCard';
import { useGsapAnimations } from '@/src/hooks/useGsapAnimations';
import { IMAGES } from '@/src/constants/images';

export const HeroComparison: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { gsap } = useGsapAnimations();

  useEffect(() => {
    if (containerRef.current) {
      gsap.fromTo(
        containerRef.current.children,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.2, ease: "power3.out", duration: 1 }
      );
    }
  }, [gsap]);

  return (
    <section className={styles.hero} ref={containerRef}>
      <p className={styles.hero__brand}>Personalised Analysis</p>
      <Heading level={1} className={styles.hero__title}>
        Get your personalised <span className={styles.hero__titleAccent}>Qoves plan</span>
      </Heading>
      <Text className={styles.hero__subtitle}>
        Understand your facial features and start your glow-up today
        with a proven action plan, no plastic surgery needed.
      </Text>

      <div className={styles.hero__comparison}>
        <div className={styles.hero__comparisonSvgWrapper}>
          <svg aria-hidden="true" className={styles.hero__comparisonSvg} viewBox="-11.5 -11.5 1012 414" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.9998 0.498047C7.88706 0.498047 0.499756 7.88536 0.499756 16.9981V374.838C0.499756 383.951 7.88708 391.338 16.9998 391.338H328C337.113 391.338 344.5 383.951 344.5 374.838V274.859V268.474V226.359C344.5 217.799 351.44 210.859 360 210.859H629C637.56 210.859 644.5 217.799 644.5 226.359L644.5 268.474V374.838C644.5 383.951 651.887 391.338 661 391.338H972C981.113 391.338 988.5 383.951 988.5 374.838V16.9981C988.5 7.88536 981.113 0.498047 972 0.498047H661C651.887 0.498047 644.5 7.88535 644.5 16.998V60.1582H644.257V166.158C644.257 174.719 637.317 181.658 628.757 181.658H360C351.44 181.658 344.5 174.719 344.5 166.158V146.111V111.158V16.998C344.5 7.88535 337.113 0.498047 328 0.498047H16.9998Z" stroke="#D7E5EB" strokeWidth="2" />
            <path className={styles.hero__comparisonSnake} d="M16.9998 0.498047C7.88706 0.498047 0.499756 7.88536 0.499756 16.9981V374.838C0.499756 383.951 7.88708 391.338 16.9998 391.338H328C337.113 391.338 344.5 383.951 344.5 374.838V274.859V268.474V226.359C344.5 217.799 351.44 210.859 360 210.859H629C637.56 210.859 644.5 217.799 644.5 226.359L644.5 268.474V374.838C644.5 383.951 651.887 391.338 661 391.338H972C981.113 391.338 988.5 383.951 988.5 374.838V16.9981C988.5 7.88536 981.113 0.498047 972 0.498047H661C651.887 0.498047 644.5 7.88535 644.5 16.998V60.1582H644.257V166.158C644.257 174.719 637.317 181.658 628.757 181.658H360C351.44 181.658 344.5 174.719 344.5 166.158V146.111V111.158V16.998C344.5 7.88535 337.113 0.498047 328 0.498047H16.9998Z" stroke="#869aa1" strokeWidth="6" />
          </svg>
        </div>

        <div className={styles.hero__imageBox}>
          <Image width={430} height={580} src={IMAGES.patientBefore} alt="Before" className={styles.hero__image} />
        </div>

        <div className={styles.hero__imageBox}>
          <Image width={430} height={580} src={IMAGES.patientAfter} alt="After" style={{ filter: "brightness(1.1) contrast(1.1)" }} className={styles.hero__image} />
        </div>
      </div>

      <div className={styles.hero__features}>
        <FeatureCard text="Get your expert facial analysis" number="1" />
        <FeatureCard text="Visualise your best looking self" number="2" isActive={true} />
        <FeatureCard text="Get your personalized glow-up protocol" number="3" />
        <FeatureCard text="Track your progress and see dramatic results" number="4" />
      </div>
    </section>
  );
};
