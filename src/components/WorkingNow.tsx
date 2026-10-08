import React from 'react';
import { portfolioData, ProjectItem } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';
import { Globe, ArrowUpRight, CheckCircle2, Wrench, Lock, ShieldCheck } from 'lucide-react';
import { GithubIcon } from './icons/GithubIcon';

export const WorkingNow: React.FC = () => {
  const { lang } = useLanguage();

  const getThemeClasses = (theme: ProjectItem['colorTheme']) => {
    switch (theme) {
      case 'lime':
        return {
          bg: 'bg-[#dceeb1]',
          tagBg: 'bg-black text-[#dceeb1]',
          border: 'border-black/15'
        };
      case 'mint':
        return {
          bg: 'bg-[#c8e6cd]',
          tagBg: 'bg-black text-[#c8e6cd]',
          border: 'border-black/15'
        };
      case 'lilac':
        return {
          bg: 'bg-[#c5b0f4]',
          tagBg: 'bg-black text-[#c5b0f4]',
          border: 'border-black/15'
        };
      case 'coral':
        return {
          bg: 'bg-[#f3c9b6]',
          tagBg: 'bg-black text-[#f3c9b6]',
          border: 'border-black/15'
        };
      case 'cream':
        return {
          bg: 'bg-[#f4ecd6]',
          tagBg: 'bg-black text-[#f4ecd6]',
          border: 'border-black/15'
        };
      default:
        return {
          bg: 'bg-[#f7f7f5]',
          tagBg: 'bg-black text-white',
          border: 'border-neutral-200'
        };
    }
  };

  return (
    <section id="now" className="py-20 md:py-28 px-6 sm:px-8 max-w-5xl mx-auto">
      {/* Section Header */}
      <div className="flex items-center gap-4 mb-8">
        <span className="font-mono text-sm sm:text-base font-bold text-black tracking-widest">
          01.
        </span>
        <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-black">
          {portfolioData.ui.sections.nowTitle[lang]}
        </h2>
        <div className="h-[1px] bg-[#e6e6e6] flex-grow ml-2" />
      </div>

      <p className="text-neutral-600 text-base sm:text-lg max-w-3xl mb-12 font-normal">
        {portfolioData.ui.sections.nowSubtitle[lang]}
      </p>

      {/* Featured T1 Color-Block Cards */}
      <div className="space-y-12">
        {portfolioData.t1Projects.map((project, idx) => {
          const theme = getThemeClasses(project.colorTheme);

          return (
            <div
              key={project.id}
              className={`rounded-3xl p-8 sm:p-12 ${theme.bg} border ${theme.border} text-black transition-all hover:scale-[1.008]`}
            >
              {/* Card Header */}
              <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className={`px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wider uppercase ${theme.tagBg}`}>
                    {project.category}
                  </span>
                  <span className="text-xs font-mono font-semibold px-3 py-1 rounded-full bg-white/80 border border-black/10">
                    {project.statusBadge[lang]}
                  </span>
                  {project.isPrivate && (
                    <span className="inline-flex items-center gap-1.5 text-xs font-mono font-bold px-3 py-1 rounded-full bg-black text-white">
                      <Lock className="w-3 h-3 text-[#dceeb1]" />
                      <span>{portfolioData.ui.common.privateBadge[lang]}</span>
                    </span>
                  )}
                </div>
                <span className="font-mono text-xs font-bold text-black/60 tracking-widest">
                  T1 · 0{idx + 1} // {project.year}
                </span>
              </div>

              {/* Title & Subtitle */}
              <div className="space-y-2 mb-6">
                <h3 className="text-3xl sm:text-5xl font-bold tracking-tight text-black">
                  {project.name}
                </h3>
                <p className="text-base sm:text-lg font-medium text-black/80">
                  {project.subtitle[lang]}
                </p>
              </div>

              {/* Private Project Note Banner */}
              {project.isPrivate && project.privateNote && (
                <div className="mb-6 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-black/5 border border-black/10 text-xs font-mono text-black/80">
                  <ShieldCheck className="w-4 h-4 text-black shrink-0" />
                  <span>{project.privateNote[lang]}</span>
                </div>
              )}

              {/* Description */}
              <p className="text-base sm:text-lg text-black/90 leading-relaxed mb-8 max-w-3xl">
                {project.description[lang]}
              </p>

              {/* Highlights List */}
              {project.highlights && (
                <div className="mb-8 space-y-2.5 bg-white/45 backdrop-blur-xs rounded-2xl p-5 border border-black/10">
                  <div className="font-mono text-xs font-bold uppercase tracking-wider text-black/75 mb-2 flex items-center gap-1.5">
                    <Wrench className="w-3.5 h-3.5" />
                    <span>{portfolioData.ui.common.highlightsHeader[lang]}</span>
                  </div>
                  {project.highlights[lang].map((item, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-sm sm:text-base text-black/90 font-normal">
                      <CheckCircle2 className="w-4 h-4 text-black shrink-0 mt-1" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 rounded-full bg-white text-black font-mono text-xs font-semibold border border-black/15 shadow-2xs"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Action Buttons: Only show for public projects, protect private projects */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                {!project.isPrivate && project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-black text-white text-xs font-mono font-semibold hover:bg-neutral-800 transition-all hover:scale-105 active:scale-95"
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>{portfolioData.ui.common.viewRepo[lang]}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400" />
                  </a>
                )}

                {!project.isPrivate && project.website && (
                  <a
                    href={project.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-black text-xs font-mono font-semibold border border-black/20 hover:border-black transition-all hover:scale-105 active:scale-95 shadow-2xs"
                  >
                    <Globe className="w-4 h-4" />
                    <span>{portfolioData.ui.common.viewWebsite[lang]}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                )}

                {project.isPrivate && (
                  <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-black/10 text-neutral-900 border border-black/15 text-xs font-mono font-semibold">
                    <Lock className="w-3.5 h-3.5 text-black" />
                    <span>{lang === 'zh' ? '代码与数据不公开 · 架构已验证' : 'Proprietary Code · Architecture Verified'}</span>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
