import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';
import { Sparkles } from 'lucide-react';

export const Marquee: React.FC = () => {
  const { lang } = useLanguage();
  const items = portfolioData.marqueeItems[lang];

  return (
    <div className="w-full bg-[#1f1d3d] text-white py-2.5 overflow-hidden border-y border-black select-none">
      <div className="animate-marquee flex items-center gap-10 whitespace-nowrap text-xs font-mono font-medium tracking-widest uppercase">
        {items.concat(items).map((item, index) => (
          <div key={index} className="flex items-center gap-4">
            <Sparkles className="w-3.5 h-3.5 text-[#dceeb1] shrink-0" />
            <span className="text-white/95">{item}</span>
            <span className="text-white/30">•</span>
          </div>
        ))}
      </div>
    </div>
  );
};
