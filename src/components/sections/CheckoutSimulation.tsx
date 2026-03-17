"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { GlassCard } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Check, CreditCard, Smartphone, Shield } from 'lucide-react';

interface CheckoutSimulationProps {
  title: string;
  subtitle: string;
}

export const CheckoutSimulation: React.FC<CheckoutSimulationProps> = ({ title, subtitle }) => {
  return (
    <section className="py-24 px-6 relative bg-mesh overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">{title}</h2>
          <p className="text-slate-400 text-lg">{subtitle}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <GlassCard className="p-10 border-sky-500/20 shadow-2xl overflow-hidden relative">
            <div className="absolute top-0 right-0 w-32 h-32 bg-sky-500/10 rounded-full blur-3xl -mr-16 -mt-16 animate-pulse-slow"></div>

            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <div className="space-y-4">
                  <label className="text-sm font-medium text-slate-400 block">Informasi Pengirim</label>
                  <input type="text" placeholder="Nama Lengkap..." className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-sky-500/50" />
                  <input type="tel" placeholder="Nomor WhatsApp..." className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-sky-500/50" />
                </div>

                <div className="space-y-4">
                  <label className="text-sm font-medium text-slate-400 block">Metode Pembayaran</label>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 rounded-xl border border-sky-500/50 bg-sky-500/10 flex flex-col items-center gap-2 cursor-pointer transition-all">
                      <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-sky-400">
                        <Smartphone size={20} />
                      </div>
                      <span className="text-xs text-white font-medium uppercase tracking-wider">QRIS</span>
                    </div>
                    <div className="p-4 rounded-xl border border-white/10 bg-white/5 flex flex-col items-center gap-2 cursor-pointer hover:border-sky-500/30 transition-all opacity-60">
                      <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-slate-400">
                        <CreditCard size={20} />
                      </div>
                      <span className="text-xs text-white font-medium uppercase tracking-wider">VA</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <div className="bg-sky-500/5 rounded-2xl p-6 border border-sky-500/10">
                  <h4 className="text-white font-semibold mb-6 flex items-center gap-2 text-lg">
                    <Shield className="text-sky-400" size={20} /> Keamanan Pembayaran
                  </h4>
                  <ul className="space-y-4">
                    {[
                      "Pembayaran Terenkripsi AES-256",
                      "Konfirmasi Otomatis Real-time",
                      "Jaminan 100% Saldo Aman",
                      "Didukung Payment Gateway Resmi"
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-slate-400 text-sm">
                        <div className="w-5 h-5 rounded-full bg-sky-500/20 flex items-center justify-center flex-shrink-0">
                          <Check className="text-sky-400" size={12} />
                        </div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <Button variant="futuristic" className="w-full py-8 text-lg font-bold shadow-sky-500/20 shadow-lg group">
                  Lakukan Pembayaran
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                    className="inline-block ml-2"
                  >
                    →
                  </motion.span>
                </Button>
              </div>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
};
