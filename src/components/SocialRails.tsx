import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';
import { Mail, Terminal, ShieldCheck } from 'lucide-react';
import { GithubIcon } from './icons/GithubIcon';

export const SocialRails: React.FC = () => {
  const { lang } = useLanguage();

  return (
    <>
      {/* Left Social Rail */}
      <div className="hidden lg:flex fixed bottom-0 left-8 xl:left-12 flex-col items-center gap-5 z-40">
        <a
          href={portfolioData.personal.github}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-full text-neutral-600 hover:text-black hover:bg-neutral-100 transition-all hover:-translate-y-1"
          aria-label="GitHub Profile"
          title={lang === 'zh' ? 'GitHub 个人主页' : 'GitHub Profile'}
        >
          <GithubIcon className="w-5 h-5" />
        </a>
        <a
          href={`mailto:${portfolioData.personal.email}`}
          className="p-2 rounded-full text-neutral-600 hover:text-black hover:bg-neutral-100 transition-all hover:-translate-y-1"
          aria-label="Email"
          title={portfolioData.personal.email}
        >
          <Mail className="w-5 h-5" />
        </a>
        <a
          href="#stack"
          className="p-2 rounded-full text-neutral-600 hover:text-black hover:bg-neutral-100 transition-all hover:-translate-y-1"
          aria-label="Tech Stack"
          title={lang === 'zh' ? '技术雷达' : 'Tech Radar'}
        >
          <Terminal className="w-5 h-5" />
        </a>
        <div className="w-[1px] h-24 bg-[#e6e6e6]" />
      </div>

      {/* Right Identifier Rail */}
      <div className="hidden lg:flex fixed bottom-0 right-8 xl:right-12 flex-col items-center gap-5 z-40">
        <div className="flex items-center gap-2 [writing-mode:vertical-rl] font-mono text-[11px] tracking-widest text-neutral-500 uppercase hover:text-black transition-colors cursor-default">
          <ShieldCheck className="w-3.5 h-3.5 inline -rotate-90 text-neutral-800" />
          <span>{lang === 'zh' ? 'SSH 签名验证 · RAILGUN-WIKI' : 'SSH VERIFIED · RAILGUN-WIKI'}</span>
        </div>
        <div className="w-[1px] h-24 bg-[#e6e6e6]" />
      </div>
    </>
  );
};
