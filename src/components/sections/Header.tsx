"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';

interface HeaderProps {
  logo: string;
  navLinks: { label: string; href: string }[];
  cta: string;
}

export const Header: React.FC<HeaderProps> = ({ logo, navLinks, cta }) => {
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/5 px-6 py-4"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="text-2xl font-bold tracking-tighter text-white flex items-center gap-2">
          <div className="w-8 h-8 bg-sky-500 rounded-lg flex items-center justify-center">
            <span className="text-white text-lg">L</span>
          </div>
          {logo}
        </div>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link, i) => (
            <a
              key={i}
              href={link.href}
              className="text-slate-400 hover:text-sky-400 text-sm font-medium transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <Button variant="outline" className="border-sky-500/30 text-sky-400 hover:bg-sky-500/10 rounded-full px-6">
          {cta}
        </Button>
      </div>
    </motion.header>
  );
};
