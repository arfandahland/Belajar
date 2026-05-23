import React from 'react';
import { LandingPageData } from '@/app/page';
import { Input } from '@/components/ui/Input';
import { Textarea } from '@/components/ui/Textarea';

interface SidebarProps {
  data: LandingPageData;
  setData: React.Dispatch<React.SetStateAction<LandingPageData>>;
}

export const Sidebar = React.memo(({ data, setData }: SidebarProps) => {
  const updateHero = (field: keyof LandingPageData['hero'], value: string) => {
    setData((prev) => ({
      ...prev,
      hero: { ...prev.hero, [field]: value },
    }));
  };

  const updateFooter = (value: string) => {
    setData((prev) => ({
      ...prev,
      footer: { ...prev.footer, companyName: value },
    }));
  };

  const updateCTA = (field: keyof LandingPageData['cta'], value: string) => {
    setData((prev) => ({
      ...prev,
      cta: { ...prev.cta, [field]: value },
    }));
  };

  const updateFeatures = (index: number, field: 'title' | 'description', value: string) => {
    setData((prev) => {
      const newItems = [...prev.features.items];
      newItems[index] = { ...newItems[index], [field]: value };
      return { ...prev, features: { ...prev.features, items: newItems } };
    });
  };

  const updatePricing = (index: number, field: 'name' | 'price' | 'cta', value: string) => {
    setData((prev) => {
      const newPlans = [...prev.pricing.plans];
      newPlans[index] = { ...newPlans[index], [field]: value };
      return { ...prev, pricing: { ...prev.pricing, plans: newPlans } };
    });
  };

  return (
    <div className="p-6 space-y-8">
      <div>
        <h2 className="text-xl font-bold mb-4">Landing Page Editor</h2>
        <p className="text-sm text-gray-500 mb-6">Ubah konten di sini dan lihat perubahannya secara real-time di sebelah kanan.</p>
      </div>

      <section className="space-y-4">
        <h3 className="font-bold text-blue-600 border-b-2 border-blue-600 pb-2 uppercase text-xs tracking-wider">Hero Section</h3>
        <div className="space-y-2">
          <label className="text-sm font-medium">Judul (Title)</label>
          <Textarea
            value={data.hero.title}
            onChange={(e) => updateHero('title', e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium">Sub-judul (Subtitle)</label>
          <Textarea
            value={data.hero.subtitle}
            onChange={(e) => updateHero('subtitle', e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium">Teks Tombol (CTA)</label>
          <Input
            value={data.hero.ctaText}
            onChange={(e) => updateHero('ctaText', e.target.value)}
          />
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-bold text-blue-600 border-b-2 border-blue-600 pb-2 uppercase text-xs tracking-wider">Features Section</h3>
        {data.features.items.map((item, i) => (
          <div key={i} className="p-3 bg-gray-50 rounded-md space-y-2">
            <p className="text-xs font-bold text-gray-400">Feature {i + 1}</p>
            <Input
              value={item.title}
              onChange={(e) => updateFeatures(i, 'title', e.target.value)}
              placeholder="Judul Fitur"
            />
            <Textarea
              value={item.description}
              onChange={(e) => updateFeatures(i, 'description', e.target.value)}
              placeholder="Deskripsi Fitur"
            />
          </div>
        ))}
      </section>

      <section className="space-y-4">
        <h3 className="font-bold text-blue-600 border-b-2 border-blue-600 pb-2 uppercase text-xs tracking-wider">Pricing Section</h3>
        {data.pricing.plans.map((plan, i) => (
          <div key={i} className="p-3 bg-gray-50 rounded-md space-y-2">
            <p className="text-xs font-bold text-gray-400">Plan: {plan.name}</p>
            <Input
              value={plan.price}
              onChange={(e) => updatePricing(i, 'price', e.target.value)}
              placeholder="Harga"
            />
            <Input
              value={plan.cta}
              onChange={(e) => updatePricing(i, 'cta', e.target.value)}
              placeholder="Teks Tombol"
            />
          </div>
        ))}
      </section>

      <section className="space-y-4">
        <h3 className="font-bold text-blue-600 border-b-2 border-blue-600 pb-2 uppercase text-xs tracking-wider">CTA Section (Bottom)</h3>
        <div className="space-y-2">
          <label className="text-sm font-medium">Judul CTA</label>
          <Input
            value={data.cta.title}
            onChange={(e) => updateCTA('title', e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium">Teks Tombol</label>
          <Input
            value={data.cta.ctaText}
            onChange={(e) => updateCTA('ctaText', e.target.value)}
          />
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-bold text-blue-600 border-b-2 border-blue-600 pb-2 uppercase text-xs tracking-wider">Footer</h3>
        <div className="space-y-2">
          <label className="text-sm font-medium">Nama Perusahaan</label>
          <Input
            value={data.footer.companyName}
            onChange={(e) => updateFooter(e.target.value)}
          />
        </div>
      </section>

      <div className="pt-8">
        <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
          <p className="text-xs text-blue-700">
            <strong>Tips Marketing:</strong> Gunakan judul yang berfokus pada manfaat (benefit) utama yang didapat pelanggan Anda.
          </p>
        </div>
      </div>
    </div>
  );
});

Sidebar.displayName = 'Sidebar';
