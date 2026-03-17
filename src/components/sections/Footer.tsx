import React from 'react';

interface FooterProps {
  companyName: string;
}

export const Footer: React.FC<FooterProps> = ({ companyName }) => {
  return (
    <footer className="py-12 px-6 bg-[#020617] border-t border-white/5 text-slate-400">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div>
          <span className="text-2xl font-bold text-white tracking-tighter italic flex items-center gap-2">
            <div className="w-8 h-8 bg-sky-500 rounded-lg"></div>
            {companyName}
          </span>
          <p className="mt-4 max-w-xs">
            Membangun masa depan digital dengan desain yang elegan dan teknologi mutakhir.
          </p>
        </div>

        <div className="flex gap-12">
          <div className="flex flex-col gap-3">
            <h4 className="text-white font-semibold">Produk</h4>
            <a href="#" className="hover:text-sky-400 transition-colors">Fitur</a>
            <a href="#" className="hover:text-sky-400 transition-colors">Harga</a>
          </div>
          <div className="flex flex-col gap-3">
            <h4 className="text-white font-semibold">Perusahaan</h4>
            <a href="#" className="hover:text-sky-400 transition-colors">Tentang</a>
            <a href="#" className="hover:text-sky-400 transition-colors">Kontak</a>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-12 pt-8 border-t border-white/5 text-center text-sm">
        <p>&copy; {new Date().getFullYear()} {companyName}. All rights reserved.</p>
      </div>
    </footer>
  );
};
