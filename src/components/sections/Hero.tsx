import React, { memo } from 'react';
import { Button } from '@/components/ui/Button';

interface HeroProps {
  title: string;
  subtitle: string;
  ctaText: string;
}

/**
 * ⚡ BOLT OPTIMIZATION:
 * We use React.memo to prevent unnecessary re-renders of the Hero section.
 * It will only re-render if its specific props (title, subtitle, ctaText) change,
 * which is critical in a real-time editor where the parent state changes frequently.
 */
export const Hero = memo(({ title, subtitle, ctaText }: HeroProps) => {
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
