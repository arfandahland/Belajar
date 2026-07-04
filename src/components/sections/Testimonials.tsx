import React from 'react';
import { Card, CardContent } from '@/components/ui/Card';

interface Testimonial {
  name: string;
  role: string;
  content: string;
}

interface TestimonialsProps {
  title: string;
  testimonials: Testimonial[];
}

// Memoized to prevent redundant re-renders when other sections are edited in the Sidebar.
// Reduces re-renders from O(N) to O(1) during live editing.
export const Testimonials = React.memo(({ title, testimonials }: TestimonialsProps) => {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">{title}</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <Card key={i}>
              <CardContent className="pt-6">
                <p className="text-gray-600 italic mb-4">&quot;{t.content}&quot;</p>
                <div>
                  <p className="font-bold text-gray-900">{t.name}</p>
                  <p className="text-sm text-gray-500">{t.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
});

Testimonials.displayName = 'Testimonials';
