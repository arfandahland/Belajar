"use client";

import React from 'react';
import { Button } from '@/components/ui/Button';
import { motion } from 'framer-motion';

interface HeroProps {
  title: string;
  subtitle: string;
  primaryCta: string;
  secondaryCta: string;
}

export const Hero: React.FC<HeroProps> = ({ title, subtitle, primaryCta, secondaryCta }) => {
  return (
    <section className="relative py-48 px-6 overflow-hidden bg-mesh min-h-[90vh] flex items-center">
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>

      <div className="max-w-5xl mx-auto relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium tracking-wider text-sky-400 uppercase bg-sky-400/10 border border-sky-400/20 rounded-full">
            Masa Depan Desain Web
          </span>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-8 leading-[1.1]">
            {title.split(' ').map((word, i) => (
              <span key={i} className={i > 2 ? 'text-gradient' : ''}>
                {word}{' '}
              </span>
            ))}
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-xl md:text-2xl text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          {subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row justify-center gap-6"
        >
          <Button variant="futuristic" size="lg" className="px-10 py-7 text-lg shadow-sky-500/20 shadow-xl group">
            {primaryCta}
            <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
          </Button>
          <Button variant="outline" size="lg" className="px-10 py-7 text-lg border-white/10 text-white hover:bg-white/5 hover:border-sky-500/30 transition-all backdrop-blur-sm">
            {secondaryCta}
          </Button>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 -left-20 w-64 h-64 bg-sky-500/20 rounded-full blur-[120px] animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 -right-20 w-64 h-64 bg-purple-500/20 rounded-full blur-[120px] animate-pulse-slow"></div>
    </section>
  );
};
