import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';
import { Mail, ArrowUp } from 'lucide-react';
import { GithubIcon } from './icons/GithubIcon';

export const Footer: React.FC = () => {
  const { lang } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-[#e6e6e6] bg-white py-12 px-6 sm:px-8 text-center text-xs font-mono text-neutral-500">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Left: Attribution & Structure */}
        <div className="text-left space-y-1">
          <p className="font-semibold text-black">
            {portfolioData.personal.handle} — {lang === 'zh' ? '个人工程项目主页' : 'Engineering Hub'}
          </p>
          <p className="text-neutral-500 text-[11px]">
            {lang === 'zh' ? '架构参考 ' : 'Architecture based on '}
            <a
              href="https://github.com/bchiang7/v4"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black underline underline-offset-2 hover:opacity-80"
            >
              bchiang7/v4
            </a>{' '}
            · {lang === 'zh' ? '视觉规范基于 ' : 'Visual system from '}
            <a
              href="https://github.com/VoltAgent/awesome-design-md/tree/main/design-md/figma"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black underline underline-offset-2 hover:opacity-80"
            >
              Figma Design Tokens
            </a>
          </p>
        </div>

        {/* Center: Mobile social links */}
        <div className="flex lg:hidden items-center gap-4">
          <a
            href={portfolioData.personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full hover:bg-neutral-100 text-black transition-colors"
            aria-label="GitHub"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
          <a
            href={`mailto:${portfolioData.personal.email}`}
            className="p-2 rounded-full hover:bg-neutral-100 text-black transition-colors"
            aria-label="Email"
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>

        {/* Right: Back to top button */}
        <button
          onClick={scrollToTop}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[#e6e6e6] hover:border-black text-black transition-all hover:-translate-y-0.5 cursor-pointer"
        >
          <span>{lang === 'zh' ? '回到顶部' : 'TOP'}</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </button>
      </div>
    </footer>
  );
};
