"use client";

import React, { useState } from 'react';
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
    title: "Masa Depan Landing Page Anda Dimulai Di Sini",
    subtitle: "Ciptakan pengalaman digital yang luar biasa dengan desain futuristik yang memukau dan performa yang tak tertandingi.",
    ctaText: "Mulai Eksplorasi",
  },
  features: {
    title: "Teknologi Masa Depan",
    items: [
      { title: "Antarmuka Quantum", description: "Desain yang sangat halus dengan animasi 60fps yang memberikan pengalaman premium.", icon: "Cpu" },
      { title: "Keamanan Enkripsi", description: "Perlindungan data tingkat tinggi untuk memastikan kepercayaan penuh dari pelanggan Anda.", icon: "ShieldCheck" },
      { title: "Analitik AI", description: "Wawasan cerdas yang didukung AI untuk membantu Anda mengoptimalkan konversi secara real-time.", icon: "BarChart3" },
    ],
  },
  testimonials: {
    title: "Dipercaya Oleh Inovator Global",
    items: [
      { name: "Kevin Sanjaya", role: "CTO @ TechVanguard", content: "Platform ini benar-benar mengubah cara kami mempresentasikan produk. Estetikanya berada di level yang berbeda." },
      { name: "Sarah Wijaya", role: "Product Designer", content: "Sangat jarang menemukan builder yang memberikan kebebasan kreatif sekaligus desain yang sangat elegan seperti ini." },
      { name: "Budi Santoso", role: "Founder Nexus AI", content: "Konversi kami meningkat pesat sejak beralih ke desain futuristik ini. Customer jauh lebih percaya!" },
    ],
  },
  pricing: {
    title: "Investasi Untuk Masa Depan",
    plans: [
      { name: "Visionary", price: "Gratis", features: ["3 Landing Page", "Domain .tech Gratis", "Support Standar"], cta: "Mulai Sekarang" },
      { name: "Innovation", price: "Rp 249rb", features: ["Unlimited Project", "Custom Domain", "Prioritas Support", "Advanced Analytics", "AI Assistant"], cta: "Pilih Innovation", popular: true },
      { name: "Galaxy", price: "Kontak", features: ["Enterprise Solution", "Dedicated Server", "Custom Animation", "White-label Service"], cta: "Hubungi Kami" },
    ],
  },
  cta: {
    title: "Siap Untuk Memimpin Industri?",
    subtitle: "Bergabunglah dengan para pemimpin masa depan dan bangun brand Anda sekarang.",
    ctaText: "Luncurkan Sekarang",
  },
  footer: {
    companyName: "Futurix",
  },
};

export default function Home() {
  const [data, setData] = useState<LandingPageData>(initialData);

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-[#020617]">
      {/* Sidebar - Controls */}
      <div className="w-full lg:w-1/4 bg-white border-r border-gray-200 h-auto lg:h-screen overflow-y-auto z-20 shadow-xl">
        <Sidebar data={data} setData={setData} />
      </div>

      {/* Preview Area */}
      <div className="flex-1 h-screen overflow-y-auto scroll-smooth">
        <div className="bg-[#020617] min-h-screen">
          <Hero {...data.hero} />
          <Features title={data.features.title} features={data.features.items} />
          <Testimonials title={data.testimonials.title} testimonials={data.testimonials.items} />
          <Pricing title={data.pricing.title} plans={data.pricing.plans} />
          <CTA {...data.cta} />
          <Footer companyName={data.footer.companyName} />
        </div>
      </div>
    </div>
  );
}
