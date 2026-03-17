"use client";

import React from 'react';
import { Button } from '@/components/ui/Button';
import { GlassCard, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/Card';
import { Check, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

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

export const Pricing: React.FC<PricingProps> = ({ title, plans }) => {
  return (
    <section className="py-24 px-6 bg-[#020617]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">{title}</h2>
          <p className="text-slate-400">Pilih paket yang sesuai dengan kebutuhan bisnis Anda</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <GlassCard
                className={plan.popular ? 'border-sky-500/50 shadow-[0_0_40px_rgba(14,165,233,0.15)] scale-105 z-10' : ''}
              >
                <CardHeader className="text-center">
                  {plan.popular && (
                    <div className="flex justify-center mb-4">
                      <span className="flex items-center gap-1.5 px-3 py-1 bg-sky-500 text-white text-[10px] font-bold uppercase tracking-widest rounded-full">
                        <Zap size={12} /> Most Popular
                      </span>
                    </div>
                  )}
                  <CardTitle className="text-white text-2xl mb-2">{plan.name}</CardTitle>
                  <div className="mt-4 flex flex-col items-center">
                    <span className="text-5xl font-extrabold text-white tracking-tight">{plan.price}</span>
                    <span className="text-slate-500 mt-2 font-medium">per bulan</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4 mt-6">
                    {plan.features.map((f, fi) => (
                      <li key={fi} className="flex items-center text-slate-300">
                        <div className="mr-3 bg-sky-500/20 p-1 rounded-full">
                          <Check className="h-4 w-4 text-sky-400" />
                        </div>
                        {f}
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="pt-8">
                  <Button
                    variant={plan.popular ? 'futuristic' : 'outline'}
                    className={plan.popular ? 'w-full py-6' : 'w-full py-6 border-white/10 text-white hover:bg-white/5'}
                  >
                    {plan.cta}
                  </Button>
                </CardFooter>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
