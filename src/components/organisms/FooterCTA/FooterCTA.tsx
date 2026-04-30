"use client";

import React, { useRef, useEffect } from 'react';
import Image from 'next/image';

import styles from '@/src/components/organisms/FooterCTA/FooterCTA.module.scss';
import { useGsapAnimations } from '@/src/hooks/useGsapAnimations';
import { IMAGES } from '@/src/constants/images';

export const FooterCTA: React.FC = () => {
  const ctaRef = useRef<HTMLDivElement>(null);
  const { gsap, ScrollTrigger } = useGsapAnimations();

  useEffect(() => {
    if (ctaRef.current) {
      gsap.fromTo(
        ctaRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ctaRef.current,
            start: "top 85%",
          }
        }
      );
    }
  }, [gsap, ScrollTrigger]);

  return (
    <section className={styles.footerCta} ref={ctaRef}>
      <video
        autoPlay
        loop
        muted
        playsInline
        className={styles.footerCta__bgVideo}
      >
        <source src="/assets/video/landing-video.mp4" type="video/mp4" />
      </video>

      {/* Top Half */}
      <div className={styles.footerCta__topHalf}>
        <div className={styles.footerCta__topOverlay}></div>

        <div className={styles.footerCta__contentTop}>
          <div className={styles.topSection}>
            <div className={styles.introBlock}>
              <span className={styles.badge}>BACKED BY 2000+ RESEARCH PAPERS</span>
              <h2 className={styles.title}>
                Will analyzing my face <br />
                make me insecure?
              </h2>
              <p className={styles.description}>
                Get your personalized facial analysis and transformation plan based on 2000+ academic studies.
              </p>
              <button className={styles.glowUpButton}>
                Start your glow-up
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>
            </div>

            <div className={styles.featuresGrid}>
              <div className={styles.featureCard}>
                <div className={styles.featureCard__imgWrapper}>
                  {/* Fallback to patientBefore if lifestyleMale is missing locally */}
                  <Image width={200} height={200} src={IMAGES.lifestyleFactor} alt="Lifestyle factors" />
                </div>
                <h3 className={styles.featureCard__title}>Lifestyle factors</h3>
                <p className={styles.featureCard__desc}>Considers diet, climate, stress, sleep, and habits.</p>
              </div>

              <div className={styles.featureCard}>
                <div className={styles.featureCard__imgWrapper}>
                  <Image width={200} height={200} src={IMAGES.beautyStandard} alt="Cultural beauty standards" />
                </div>
                <h3 className={styles.featureCard__title}>Cultural beauty standards</h3>
                <p className={styles.featureCard__desc}>Adapts to regional and societal ideals.</p>
              </div>

              <div className={styles.featureCard}>
                <div className={styles.featureCard__imgWrapper}>
                  <Image width={200} height={200} src={IMAGES.beautyFactor} alt="Genetic factors" />
                </div>
                <h3 className={styles.featureCard__title}>Genetic factors</h3>
                <p className={styles.featureCard__desc}>Takes into account genetic factors and how they might impact your facial aesthetics.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Bottom Half */}
      <div className={styles.footerCta__bottomHalf}>
        <div className={styles.footerCta__contentBottom}>
          <div className={styles.bottomSection}>

            <div className={styles.centerBlock}>
              <h2 className={styles.titleBottom}>
                Is it vain to care <br />
                <span className={styles.titleAccentBottom}>about your appearance?</span>
              </h2>
              <p className={styles.descriptionBottom}>
                Many feel guilty about wanting to improve their looks, fearing it means they're vain or insecure. But here's what research tells us : caring about appearance is natural. Like wealth, health, finances, and education, it's just another form of self-improvement.
              </p>
            </div>

            <div className={styles.bottomCardsWrapper}>
              <div className={styles.sideCardLeft}>
                <div className={styles.glassPanel}>
                  <h3 className={styles.glassPanel__title}>Consider this...</h3>
                  <div className={styles.glassPanel__list}>
                    <div className={styles.glassPanel__item}>First impressions matter</div>
                    <div className={styles.glassPanel__item}>It has a considerable impact on interpersonal interactions</div>
                    <div className={styles.glassPanel__item}>Small improvements can drastically impact quality of life</div>
                  </div>
                </div>
              </div>

              <div className={styles.sideCardRight}>
                <div className={styles.glassPanel}>
                  <h3 className={styles.glassPanel__title}>The key is approaching<br />it intelligently</h3>
                  <div className={styles.glassPanel__list}>
                    <div className={styles.glassPanel__item}>Not chasing unrealistic standards</div>
                    <div className={styles.glassPanel__item}>Not trying to look like someone else</div>
                    <div className={styles.glassPanel__item}>Not seeking perfection</div>
                    <div className={styles.glassPanel__item}>Aiming only for a better version of yourself</div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
