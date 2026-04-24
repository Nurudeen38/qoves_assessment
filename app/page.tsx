import React from 'react';
import { Metadata } from 'next';

import { HeroComparison } from '@/src/components/organisms/HeroComparison/HeroComparison';
import { FacialAnalysis } from '@/src/components/organisms/FacialAnalysis/FacialAnalysis';
import { FAQList } from '@/src/components/organisms/FAQList/FAQList';
import { FooterCTA } from '@/src/components/organisms/FooterCTA/FooterCTA';


export const metadata: Metadata = {
  title: "Qoves",
  description:
    "Understand your facial features and start your glow-up today with a proven action plan, no plastic surgery needed.",
};

export default function Home() {
  return (
    <main>
      <HeroComparison />
      <FacialAnalysis />
      <FAQList />
      <FooterCTA />
    </main>
  );
}
