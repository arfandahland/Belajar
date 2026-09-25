import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Smartphone, Search, Zap, Star, LucideIcon } from 'lucide-react';

export type FeatureIcon = 'Smartphone' | 'Search' | 'Zap' | 'Star';

const ICON_MAP: Record<FeatureIcon, LucideIcon> = {
  Smartphone,
  Search,
  Zap,
  Star,
};

interface Feature {
  title: string;
  description: string;
  icon: FeatureIcon | string;
}

interface FeaturesProps {
  title: string;
  features: Feature[];
}

/**
 * Memoized Features section to prevent redundant re-renders when other sections
 * are modified in the builder architecture. Also uses a static icon lookup map
 * instead of wildcard namespace imports for optimal tree-shaking and bundle size.
 * Reduces re-renders from O(N) to O(1) during live editing.
 */
export const Features = React.memo(function Features({ title, features }: FeaturesProps) {
  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">{title}</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = ICON_MAP[feature.icon as FeatureIcon] || Star;
            return (
              <Card key={index} className="border-none shadow-md">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-4">
                    <IconComponent size={24} />
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
});

Features.displayName = 'Features';
