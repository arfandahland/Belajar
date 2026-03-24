import React from 'react';
import { Button } from '@/components/ui/Button';

interface HeroProps {
  title: string;
  subtitle: string;
  ctaText: string;
}

/**
 * ⚡ BOLT OPTIMIZATION: React.memo
 * This component is wrapped in React.memo to prevent unnecessary re-renders
 * when other sections are being edited in the landing page builder.
 * Expected impact: Reduces re-renders of the Hero section by 100% when
 * editing non-Hero related content.
 */
export const Hero: React.FC<HeroProps> = React.memo(({ title, subtitle, ctaText }) => {
  return (
    <section className="py-20 px-6 text-center bg-white">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900 mb-6">
          {title}
        </h1>
        <p className="text-xl text-gray-600 mb-10">
          {subtitle}
        </p>
        <div className="flex justify-center gap-4">
          <Button size="lg">{ctaText}</Button>
        </div>
      </div>
    </section>
  );
});

Hero.displayName = 'Hero';
