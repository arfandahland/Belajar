"use client";

import React from 'react';
import { GlassCard, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import * as Icons from 'lucide-react';
import { motion } from 'framer-motion';

interface Feature {
  title: string;
  description: string;
  icon: keyof typeof Icons;
}

interface FeaturesProps {
  title: string;
  features: Feature[];
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 }
};

export const Features: React.FC<FeaturesProps> = ({ title, features }) => {
  return (
    <section className="py-24 px-6 bg-[#020617] relative">
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">{title}</h2>
          <div className="h-1.5 w-24 bg-sky-500 mx-auto rounded-full"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => {
            const IconComponent = (Icons[feature.icon] as React.ElementType) || Icons.Star;
            return (
              <motion.div key={index} variants={itemVariants}>
                <GlassCard className="h-full group">
                  <CardHeader>
                    <div className="w-14 h-14 bg-sky-500/10 text-sky-400 rounded-xl flex items-center justify-center mb-6 border border-sky-500/20 group-hover:scale-110 transition-transform">
                      <IconComponent size={28} />
                    </div>
                    <CardTitle className="text-white text-xl mb-2">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-400 leading-relaxed">{feature.description}</p>
                  </CardContent>
                </GlassCard>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
