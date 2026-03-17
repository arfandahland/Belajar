"use client";

import React from 'react';
import { Button } from '@/components/ui/Button';
import { motion } from 'framer-motion';

interface CTAProps {
  title: string;
  subtitle: string;
  ctaText: string;
}

export const CTA: React.FC<CTAProps> = ({ title, subtitle, ctaText }) => {
  return (
    <section className="py-24 px-6 overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-950 via-sky-950 to-slate-950"></div>

      {/* Animated background shapes */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-0 right-0 w-[500px] h-[500px] bg-sky-500 rounded-full blur-[150px] -mr-64 -mt-64 pointer-events-none"
      />

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-8 text-white tracking-tight">{title}</h2>
          <p className="text-xl md:text-2xl text-slate-300 mb-12 leading-relaxed">{subtitle}</p>
          <Button variant="futuristic" size="lg" className="px-12 py-8 text-xl rounded-full">
            {ctaText}
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
