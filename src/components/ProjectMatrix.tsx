import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';
import { FolderGit2, Globe, Filter, Lock } from 'lucide-react';
import { GithubIcon } from './icons/GithubIcon';

export const ProjectMatrix: React.FC = () => {
  const { lang } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Systems', 'Embedded', 'Hardware', 'Network'];

  const filteredProjects =
    selectedCategory === 'All'
      ? portfolioData.t2Projects
      : portfolioData.t2Projects.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-20 md:py-28 px-6 sm:px-8 max-w-5xl mx-auto">
      {/* Section Header */}
      <div className="flex items-center gap-4 mb-8">
        <span className="font-mono text-sm sm:text-base font-bold text-black tracking-widest">
          02.
        </span>
        <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-black">
          {portfolioData.ui.sections.matrixTitle[lang]}
        </h2>
        <div className="h-[1px] bg-[#e6e6e6] flex-grow ml-2" />
      </div>

      <p className="text-neutral-600 text-base sm:text-lg max-w-2xl mb-8 font-normal">
        {portfolioData.ui.sections.matrixSubtitle[lang]}
      </p>

      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center gap-2 mb-10">
        <div className="flex items-center gap-1.5 text-xs font-mono font-bold uppercase text-neutral-500 mr-2">
          <Filter className="w-3.5 h-3.5" />
          <span>{portfolioData.ui.common.filterLabel[lang]}</span>
        </div>
        {categories.map((cat) => {
          const isActive = selectedCategory === cat;
          const label = cat === 'All' ? portfolioData.ui.common.filterAll[lang] : cat;
          return (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-mono font-semibold transition-all cursor-pointer ${
                isActive
                  ? 'bg-black text-white shadow-xs'
                  : 'bg-[#f7f7f5] text-neutral-700 border border-[#e6e6e6] hover:border-black hover:text-black'
              }`}
            >
              {label}
            </button>
          );
        })}
      </div>

      {/* Grid of Projects (T2) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="group rounded-2xl p-6 sm:p-7 bg-[#f7f7f5] border border-[#e6e6e6] hover:border-black hover:bg-white transition-all flex flex-col justify-between"
          >
            <div>
              {/* Top Row: Folder Icon & Links */}
              <div className="flex items-center justify-between mb-5">
                <div className="p-2.5 rounded-xl bg-white border border-[#e6e6e6] text-black group-hover:bg-[#dceeb1] transition-colors">
                  <FolderGit2 className="w-5 h-5" />
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-white border border-[#e6e6e6] text-neutral-600">
                    {project.category}
                  </span>
                  {!project.isPrivate && project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 text-neutral-500 hover:text-black transition-colors"
                      aria-label="GitHub Repository"
                      title="GitHub"
                    >
                      <GithubIcon className="w-4 h-4" />
                    </a>
                  )}
                  {!project.isPrivate && project.website && (
                    <a
                      href={project.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 text-neutral-500 hover:text-black transition-colors"
                      aria-label="External Link"
                      title="Website"
                    >
                      <Globe className="w-4 h-4" />
                    </a>
                  )}
                  {project.isPrivate && (
                    <span title={portfolioData.ui.common.privateBadge[lang]}>
                      <Lock className="w-3.5 h-3.5 text-neutral-400" />
                    </span>
                  )}
                </div>
              </div>

              {/* Title & Subtitle */}
              <h3 className="text-xl font-bold tracking-tight text-black mb-1 group-hover:text-black transition-colors">
                {project.name}
              </h3>
              <p className="text-xs font-mono font-medium text-neutral-500 mb-3">
                {project.subtitle[lang]}
              </p>

              {/* Description */}
              <p className="text-sm text-neutral-600 leading-relaxed mb-6">
                {project.description[lang]}
              </p>
            </div>

            {/* Bottom Tech Tags */}
            <div className="pt-4 border-t border-[#e6e6e6]/60">
              <div className="flex flex-wrap gap-1.5">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-[11px] font-mono font-medium text-neutral-600 bg-white/80 px-2 py-0.5 rounded-sm border border-neutral-200"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
