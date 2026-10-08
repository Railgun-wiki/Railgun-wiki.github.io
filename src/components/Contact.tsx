import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';
import { Mail, ArrowUpRight } from 'lucide-react';
import { GithubIcon } from './icons/GithubIcon';

export const Contact: React.FC = () => {
  const { lang } = useLanguage();

  return (
    <section id="contact" className="py-20 md:py-32 px-6 sm:px-8 max-w-3xl mx-auto text-center">
      {/* Eyebrow */}
      <span className="font-mono text-xs sm:text-sm font-bold text-black tracking-widest uppercase mb-4 block">
        05. {lang === 'zh' ? '联络与工程交流' : "What's Next?"}
      </span>

      {/* Headline */}
      <h2 className="text-4xl sm:text-6xl font-bold tracking-tight text-black mb-6">
        {portfolioData.ui.sections.contactTitle[lang]}
      </h2>

      {/* Description */}
      <p className="text-base sm:text-lg text-neutral-600 mb-10 leading-relaxed font-normal">
        {portfolioData.ui.sections.contactSubtitle[lang]}
      </p>

      {/* Actions (Figma pill buttons) */}
      <div className="flex flex-wrap items-center justify-center gap-4">
        <a
          href={`mailto:${portfolioData.personal.email}`}
          className="inline-flex items-center gap-2.5 px-7 py-4 rounded-full bg-black text-white text-sm font-mono font-semibold hover:bg-neutral-800 transition-all hover:scale-105 active:scale-95 shadow-xs"
        >
          <Mail className="w-4 h-4 text-[#dceeb1]" />
          <span>{portfolioData.ui.sections.contactBtnEmail[lang]}</span>
          <ArrowUpRight className="w-4 h-4 text-neutral-400" />
        </a>

        <a
          href={portfolioData.personal.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2.5 px-7 py-4 rounded-full bg-white text-black text-sm font-mono font-semibold border border-neutral-300 hover:border-black hover:bg-neutral-50 transition-all hover:scale-105 active:scale-95"
        >
          <GithubIcon className="w-4 h-4" />
          <span>{portfolioData.ui.sections.contactBtnGithub[lang]}</span>
          <ArrowUpRight className="w-4 h-4 text-neutral-500" />
        </a>
      </div>
    </section>
  );
};
