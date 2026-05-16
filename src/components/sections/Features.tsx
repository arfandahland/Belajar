import React, { memo } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Smartphone, Search, Zap, Star } from 'lucide-react';

const IconMap = {
  Smartphone,
  Search,
  Zap,
  Star,
};

interface Feature {
  title: string;
  description: string;
  icon: keyof typeof IconMap;
}

interface FeaturesProps {
  title: string;
  features: Feature[];
}

/**
 * Features section component memoized to prevent unnecessary re-renders
 * during real-time content editing in the Sidebar.
 */
export const Features = memo(({ title, features }: FeaturesProps) => {
  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">{title}</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = IconMap[feature.icon] || Star;
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
