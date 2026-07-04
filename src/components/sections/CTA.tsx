import React from 'react';
import { Button } from '@/components/ui/Button';

interface CTAProps {
  title: string;
  subtitle: string;
  ctaText: string;
}

// Memoized to prevent redundant re-renders when other sections are edited in the Sidebar.
// Reduces re-renders from O(N) to O(1) during live editing.
export const CTA = React.memo(({ title, subtitle, ctaText }: CTAProps) => {
  return (
    <section className="py-20 px-6 bg-blue-600 text-white text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">{title}</h2>
        <p className="text-xl text-blue-100 mb-10">{subtitle}</p>
        <Button variant="secondary" size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
          {ctaText}
        </Button>
      </div>
    </section>
  );
});

CTA.displayName = 'CTA';
