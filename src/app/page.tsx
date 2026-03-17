"use client";

import React, { useState } from 'react';
import { Header } from '@/components/sections/Header';
import { Hero } from '@/components/sections/Hero';
import { TrackingWidget } from '@/components/sections/TrackingWidget';
import { Features } from '@/components/sections/Features';
import { Testimonials } from '@/components/sections/Testimonials';
import { Pricing } from '@/components/sections/Pricing';
import { CheckoutSimulation } from '@/components/sections/CheckoutSimulation';
import { CTA } from '@/components/sections/CTA';
import { Footer } from '@/components/sections/Footer';
import { FloatingWhatsApp } from '@/components/sections/FloatingWhatsApp';
import { Sidebar } from '@/components/Sidebar';
import * as Icons from 'lucide-react';

export type LandingPageData = {
  header: {
    logo: string;
    navLinks: { label: string; href: string }[];
    cta: string;
  };
  hero: {
    title: string;
    subtitle: string;
    primaryCta: string;
    secondaryCta: string;
  };
  tracking: {
    title: string;
    placeholder1: string;
    placeholder2: string;
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
  checkout: {
    title: string;
    subtitle: string;
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
  header: {
    logo: "LogiNext",
    navLinks: [
      { label: "Layanan", href: "#features" },
      { label: "Tarif", href: "#pricing" },
      { label: "Lacak", href: "#tracking" },
    ],
    cta: "Member Area",
  },
  hero: {
    title: "Pengiriman Secepat Kilat Keamanan Setinggi Langit",
    subtitle: "Solusi logistik modern dengan teknologi pelacakan real-time dan jangkauan terluas di seluruh Indonesia.",
    primaryCta: "Pesan Sekarang",
    secondaryCta: "Cek Resi/Status",
  },
  tracking: {
    title: "Lacak & Cek Tarif",
    placeholder1: "Masukkan Nomor Resi...",
    placeholder2: "Kota Asal ke Kota Tujuan...",
  },
  features: {
    title: "Kenapa Memilih LogiNext?",
    items: [
      { title: "Kecepatan Kilat", description: "Pengiriman sameday dan instant untuk wilayah kota besar dengan jaminan tepat waktu.", icon: "Zap" },
      { title: "WA Bot 24/7", description: "Asisten AI kami siap membantu tracking dan info tarif kapanpun via WhatsApp.", icon: "MessageSquare" },
      { title: "Keamanan Maksimal", description: "Setiap paket dilindungi asuransi dan segel keamanan digital berstandar global.", icon: "ShieldCheck" },
      { title: "Jangkauan Luas", description: "Menjangkau hingga pelosok terdalam nusantara dengan armada modern.", icon: "Globe" },
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
    title: "Tarif Rute Terpopuler",
    plans: [
      { name: "Jakarta - Surabaya", price: "Rp 15.000", features: ["Estimasi 1-2 Hari", "Asuransi Dasar", "Lacak Real-time"], cta: "Pesan Rute Ini" },
      { name: "Jakarta - Medan", price: "Rp 35.000", features: ["Estimasi 2-3 Hari", "Asuransi Premium", "Lacak Real-time", "Door to Door"], cta: "Pesan Rute Ini", popular: true },
      { name: "Jakarta - Makassar", price: "Rp 45.000", features: ["Estimasi 3-4 Hari", "Asuransi Premium", "Lacak Real-time", "Heavy Cargo"], cta: "Pesan Rute Ini" },
    ],
  },
  checkout: {
    title: "Selesaikan Pemesanan",
    subtitle: "Lengkapi data pengiriman dan pilih metode pembayaran favorit Anda.",
  },
  cta: {
    title: "Mulai Pengiriman Anda Hari Ini",
    subtitle: "Nikmati kemudahan logistik masa depan dalam genggaman Anda.",
    ctaText: "Kirim Paket Sekarang",
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
      <div className="flex-1 h-screen overflow-y-auto scroll-smooth relative">
        <div className="bg-[#020617] min-h-screen">
          <Header {...data.header} />
          <Hero {...data.hero} />
          <TrackingWidget {...data.tracking} />
          <Features title={data.features.title} features={data.features.items} />
          <Testimonials title={data.testimonials.title} testimonials={data.testimonials.items} />
          <Pricing title={data.pricing.title} plans={data.pricing.plans} />
          <CheckoutSimulation {...data.checkout} />
          <CTA {...data.cta} />
          <Footer companyName={data.footer.companyName} />
          <FloatingWhatsApp />
        </div>
      </div>
    </div>
  );
}
