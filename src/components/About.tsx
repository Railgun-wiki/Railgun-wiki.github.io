import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';
import { ShieldCheck, Terminal, GitCommit } from 'lucide-react';

export const About: React.FC = () => {
  const { lang } = useLanguage();

  return (
    <section id="about" className="py-20 md:py-28 px-6 sm:px-8 max-w-5xl mx-auto">
      {/* Section Header */}
      <div className="flex items-center gap-4 mb-8">
        <span className="font-mono text-sm sm:text-base font-bold text-black tracking-widest">
          04.
        </span>
        <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-black">
          {portfolioData.ui.sections.aboutTitle[lang]}
        </h2>
        <div className="h-[1px] bg-[#e6e6e6] flex-grow ml-2" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        {/* Left Column: Manifesto Text */}
        <div className="lg:col-span-2 space-y-6 text-base sm:text-lg text-neutral-700 leading-relaxed font-normal">
          {portfolioData.personal.bio[lang].map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}

          <div className="rounded-2xl p-6 bg-[#f4ecd6] border border-black/10 text-black">
            <h4 className="font-mono text-xs font-bold uppercase tracking-wider mb-2 flex items-center gap-2">
              <Terminal className="w-4 h-4 text-black" />
              <span>{portfolioData.ui.sections.manifestoTitle[lang]}</span>
            </h4>
            <p className="text-sm text-black/80 leading-relaxed">
              {portfolioData.ui.sections.manifestoBody[lang]}
            </p>
          </div>
        </div>

        {/* Right Column: Verified Identity Card */}
        <div className="rounded-2xl p-6 sm:p-7 bg-[#f7f7f5] border border-[#e6e6e6] space-y-5">
          <div className="flex items-center gap-2 text-black font-mono text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4 text-[#1ea64a]" />
            <span>{portfolioData.ui.sections.trustTitle[lang]}</span>
          </div>

          <div className="space-y-3 text-xs font-mono">
            <div>
              <span className="text-neutral-500 block mb-0.5">
                {lang === 'zh' ? 'GitHub 开发者身份' : 'GitHub Identity'}
              </span>
              <span className="font-bold text-black">{portfolioData.personal.handle}</span>
            </div>
            <div>
              <span className="text-neutral-500 block mb-0.5">
                {lang === 'zh' ? 'GPG / SSH 密钥验证' : 'GPG / SSH Verification'}
              </span>
              <span className="font-semibold text-neutral-800 break-all bg-white px-2 py-1 rounded border border-[#e6e6e6] block mt-1">
                {portfolioData.personal.sshSigningKey}
              </span>
            </div>
            <div>
              <span className="text-neutral-500 block mb-0.5">
                {lang === 'zh' ? '主要系统开发环境' : 'Primary Dev Workspace'}
              </span>
              <span className="font-bold text-black">Ubuntu ARM64 · Arch · Debian</span>
            </div>
          </div>

          <div className="pt-3 border-t border-[#e6e6e6] flex items-center gap-2 text-neutral-600 text-xs font-mono">
            <GitCommit className="w-3.5 h-3.5 text-black" />
            <span>
              {lang === 'zh' ? '所有 master 提交均经 SSH 签名' : 'All master commits SSH-signed'}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
