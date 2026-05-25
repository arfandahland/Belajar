import React from 'react';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/Card';
import { Check } from 'lucide-react';

interface Plan {
  name: string;
  price: string;
  features: string[];
  cta: string;
  popular?: boolean;
}

interface PricingProps {
  title: string;
  plans: Plan[];
}

/**
 * Pricing component optimized with React.memo.
 * Ensures the pricing table doesn't re-render unless its own data changes.
 */
export const Pricing = React.memo<PricingProps>(({ title, plans }) => {
  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">{title}</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <Card key={i} className={plan.popular ? 'border-blue-500 ring-2 ring-blue-500/20' : ''}>
              <CardHeader>
                {plan.popular && <span className="text-blue-600 text-xs font-bold uppercase mb-2 block">Most Popular</span>}
                <CardTitle className="text-xl">{plan.name}</CardTitle>
                <div className="mt-4 flex items-baseline">
                  <span className="text-4xl font-extrabold tracking-tight">{plan.price}</span>
                  <span className="ml-1 text-xl font-medium text-gray-500">/mo</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {plan.features.map((f, fi) => (
                    <li key={fi} className="flex items-center text-gray-600">
                      <Check className="h-5 w-5 text-green-500 mr-2" />
                      {f}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant={plan.popular ? 'primary' : 'outline'} className="w-full">
                  {plan.cta}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
});

Pricing.displayName = 'Pricing';
