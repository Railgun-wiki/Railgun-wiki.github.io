import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';
import { ArrowDown, Terminal, Cpu } from 'lucide-react';
import { GithubIcon } from './icons/GithubIcon';

export const Hero: React.FC = () => {
  const { lang } = useLanguage();

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 px-6 sm:px-8 max-w-5xl mx-auto">
      {/* Eyebrow Status Pill */}
      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f7f7f5] border border-[#e6e6e6] mb-8 animate-in fade-in duration-500">
        <span className="w-2 h-2 rounded-full bg-[#1ea64a] animate-pulse" />
        <span className="font-mono text-xs font-semibold tracking-wider uppercase text-black">
          {portfolioData.ui.hero.tag[lang]}
        </span>
      </div>

      {/* Main Title (bchiang7/v4 structure + Figma typography) */}
      <div className="space-y-3 mb-8">
        <h2 className="font-mono text-sm sm:text-base font-semibold tracking-widest uppercase text-black/70">
          {portfolioData.ui.hero.greeting[lang]}
        </h2>
        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight text-black leading-none">
          {portfolioData.personal.name}.
        </h1>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-neutral-500 leading-tight">
          {portfolioData.ui.hero.focus[lang]}
        </h2>
      </div>

      {/* Intro Description */}
      <p className="text-lg sm:text-xl text-neutral-700 max-w-2xl font-normal leading-relaxed mb-10">
        {portfolioData.personal.roleSummary[lang]}{' '}
        <span className="text-black font-medium">
          {lang === 'zh'
            ? '本站专注索引持续演进中的核心工程项目，杜绝静态博客冗余。'
            : 'This portal indexes actively evolving engineering deliverables rather than static blog entries.'}
        </span>
      </p>

      {/* Pill CTAs (Figma DESIGN.md button style) */}
      <div className="flex flex-wrap items-center gap-4 pt-2">
        <a
          href="#now"
          className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-black text-white text-sm font-mono font-semibold hover:bg-neutral-800 transition-all hover:scale-105 active:scale-95 shadow-xs"
        >
          <Cpu className="w-4 h-4 text-[#dceeb1]" />
          <span>{portfolioData.ui.hero.btnProjects[lang]}</span>
        </a>

        <a
          href="#projects"
          className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white text-black text-sm font-mono font-semibold border border-neutral-300 hover:border-black hover:bg-neutral-50 transition-all hover:scale-105 active:scale-95"
        >
          <Terminal className="w-4 h-4" />
          <span>{portfolioData.ui.hero.btnMatrix[lang]}</span>
        </a>

        <a
          href={portfolioData.personal.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full bg-[#f7f7f5] text-neutral-700 text-sm font-mono font-semibold border border-[#e6e6e6] hover:text-black hover:border-black transition-all"
        >
          <GithubIcon className="w-4 h-4" />
          <span>GitHub</span>
        </a>
      </div>

      {/* Subtle Scroll Hint */}
      <div className="pt-16 flex items-center gap-2 text-neutral-400 font-mono text-xs uppercase tracking-widest">
        <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
        <span>{portfolioData.ui.hero.scrollHint[lang]}</span>
      </div>
    </section>
  );
};
