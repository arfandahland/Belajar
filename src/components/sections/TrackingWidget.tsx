"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { GlassCard } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Search, MapPin } from 'lucide-react';

interface TrackingWidgetProps {
  title: string;
  placeholder1: string;
  placeholder2: string;
}

export const TrackingWidget: React.FC<TrackingWidgetProps> = ({ title, placeholder1, placeholder2 }) => {
  return (
    <section id="tracking" className="relative -mt-20 px-6 z-20">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <GlassCard className="p-8 md:p-10 shadow-2xl border-sky-500/20">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">{title}</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <label className="text-sm font-medium text-slate-400 flex items-center gap-2">
                  <Search size={16} /> Lacak Paket
                </label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder={placeholder1}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-sky-500/50 transition-all placeholder:text-slate-600"
                  />
                  <Button variant="futuristic" size="sm" className="absolute right-2 top-2 h-10 px-6">
                    Lacak
                  </Button>
                </div>
              </div>

              <div className="space-y-4">
                <label className="text-sm font-medium text-slate-400 flex items-center gap-2">
                  <MapPin size={16} /> Cek Tarif
                </label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder={placeholder2}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-sky-500/50 transition-all placeholder:text-slate-600"
                  />
                  <Button variant="outline" size="sm" className="absolute right-2 top-2 h-10 px-6 border-white/10 text-white hover:bg-white/5">
                    Cek
                  </Button>
                </div>
              </div>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
};
