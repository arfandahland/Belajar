"use client";

import React, { useState, useDeferredValue } from 'react';
import { Hero } from '@/components/sections/Hero';
import { Features } from '@/components/sections/Features';
import { Testimonials } from '@/components/sections/Testimonials';
import { Pricing } from '@/components/sections/Pricing';
import { CTA } from '@/components/sections/CTA';
import { Footer } from '@/components/sections/Footer';
import { Sidebar } from '@/components/Sidebar';
import * as Icons from 'lucide-react';

export type LandingPageData = {
  hero: {
    title: string;
    subtitle: string;
    ctaText: string;
  };
  features: {
    title: string;
    items: { title: string; description: string; icon: keyof typeof Icons }[];
  };
  testimonials: {
    title: string;
    items: { name: string; role: string; content: string }[];
  };
  pricing: {
    title: string;
    plans: { name: string; price: string; features: string[]; cta: string; popular?: boolean }[];
  };
  cta: {
    title: string;
    subtitle: string;
    ctaText: string;
  };
  footer: {
    companyName: string;
  };
};

const initialData: LandingPageData = {
  hero: {
    title: "Bangun Landing Page Impian Anda Dalam Hitungan Menit",
    subtitle: "Solusi terbaik untuk semua marketing. Konversi lebih tinggi, desain profesional, dan sangat mudah digunakan.",
    ctaText: "Mulai Sekarang",
  },
  features: {
    title: "Fitur Unggulan Kami",
    items: [
      { title: "Desain Responsif", description: "Tampilan sempurna di semua perangkat, baik mobile maupun desktop.", icon: "Smartphone" },
      { title: "Optimasi SEO", description: "Terintegrasi dengan praktik SEO terbaik untuk peringkat lebih tinggi.", icon: "Search" },
      { title: "Kecepatan Tinggi", description: "Waktu loading yang sangat cepat untuk pengalaman pengguna terbaik.", icon: "Zap" },
    ],
  },
  testimonials: {
    title: "Apa Kata Mereka?",
    items: [
      { name: "Andi Pratama", role: "Digital Marketer", content: "Sangat membantu kampanye iklan saya. Konversi naik hingga 40%!" },
      { name: "Siti Aminah", role: "Owner Online Shop", content: "Mudah banget dipake bahkan buat saya yang gak ngerti coding." },
    ],
  },
  pricing: {
    title: "Pilih Paket Terbaik",
    plans: [
      { name: "Starter", price: "Rp 0", features: ["1 Landing Page", "Domain Gratis", "Support Dasar"], cta: "Pilih Starter" },
      { name: "Pro", price: "Rp 199rb", features: ["Unlimited Landing Page", "Custom Domain", "Prioritas Support", "Analytics"], cta: "Pilih Pro", popular: true },
      { name: "Enterprise", price: "Hubungi Kami", features: ["Semua Fitur Pro", "Dedicated Account Manager", "SLA 99.9%"], cta: "Kontak Kami" },
    ],
  },
  cta: {
    title: "Siap Untuk Meningkatkan Penjualan Anda?",
    subtitle: "Gabung dengan ribuan marketer sukses lainnya hari ini.",
    ctaText: "Daftar Sekarang Gratis",
  },
  footer: {
    companyName: "LandingMaker",
  },
};

export default function Home() {
  const [data, setData] = useState<LandingPageData>(initialData);

  /**
   * ⚡ BOLT OPTIMIZATION: useDeferredValue
   * We defer the update of the preview data to keep the sidebar inputs responsive.
   * This allows the user to type quickly without being blocked by the heavy
   * re-rendering of the entire landing page preview.
   */
  const deferredData = useDeferredValue(data);

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-gray-100">
      {/* Sidebar - Controls */}
      <div className="w-full lg:w-1/4 bg-white border-r border-gray-200 h-auto lg:h-screen overflow-y-auto">
        <Sidebar data={data} setData={setData} />
      </div>

      {/* Preview Area */}
      <div className="flex-1 h-screen overflow-y-auto">
        <div className="bg-white shadow-2xl min-h-screen">
          <Hero {...deferredData.hero} />
          <Features title={deferredData.features.title} features={deferredData.features.items} />
          <Testimonials title={deferredData.testimonials.title} testimonials={deferredData.testimonials.items} />
          <Pricing title={deferredData.pricing.title} plans={deferredData.pricing.plans} />
          <CTA {...deferredData.cta} />
          <Footer companyName={deferredData.footer.companyName} />
        </div>
      </div>
    </div>
  );
}
