"use client";

import React from 'react';
import { GlassCard, CardContent } from '@/components/ui/Card';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

interface Testimonial {
  name: string;
  role: string;
  content: string;
}

interface TestimonialsProps {
  title: string;
  testimonials: Testimonial[];
}

export const Testimonials: React.FC<TestimonialsProps> = ({ title, testimonials }) => {
  return (
    <section className="py-24 px-6 bg-[#020617] border-y border-white/5">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-3xl md:text-5xl font-bold text-center mb-16 text-white"
        >
          {title}
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <GlassCard className="h-full flex flex-col justify-between">
                <CardContent className="pt-6 relative">
                  <Quote className="absolute -top-2 -left-2 text-sky-500/20 w-12 h-12" />
                  <p className="text-slate-300 italic mb-8 relative z-10 text-lg leading-relaxed">
                    &quot;{t.content}&quot;
                  </p>
                  <div className="flex items-center gap-4 border-t border-white/5 pt-6">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-sky-500 to-indigo-500 flex items-center justify-center text-white font-bold shadow-lg">
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-bold text-white">{t.name}</p>
                      <p className="text-sm text-sky-400 font-medium">{t.role}</p>
                    </div>
                  </div>
                </CardContent>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
