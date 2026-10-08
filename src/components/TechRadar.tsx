import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';
import { Cpu, Terminal, Layers, Radio } from 'lucide-react';

export const TechRadar: React.FC = () => {
  const { lang } = useLanguage();

  const getIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <Cpu className="w-4 h-4" />;
      case 1:
        return <Terminal className="w-4 h-4" />;
      case 2:
        return <Layers className="w-4 h-4" />;
      default:
        return <Radio className="w-4 h-4" />;
    }
  };

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'mint':
        return 'bg-[#c8e6cd] text-black border-black/10';
      case 'lime':
        return 'bg-[#dceeb1] text-black border-black/10';
      case 'lilac':
        return 'bg-[#c5b0f4] text-black border-black/10';
      case 'coral':
        return 'bg-[#f3c9b6] text-black border-black/10';
      default:
        return 'bg-white text-black border-neutral-200';
    }
  };

  return (
    <section id="stack" className="py-20 md:py-28 px-6 sm:px-8 max-w-5xl mx-auto">
      {/* Section Header */}
      <div className="flex items-center gap-4 mb-8">
        <span className="font-mono text-sm sm:text-base font-bold text-black tracking-widest">
          03.
        </span>
        <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-black">
          {portfolioData.ui.sections.radarTitle[lang]}
        </h2>
        <div className="h-[1px] bg-[#e6e6e6] flex-grow ml-2" />
      </div>

      <p className="text-neutral-600 text-base sm:text-lg max-w-2xl mb-12 font-normal">
        {portfolioData.ui.sections.radarSubtitle[lang]}
      </p>

      {/* Grid of categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {portfolioData.techStack.map((group, idx) => (
          <div
            key={idx}
            className="rounded-2xl p-7 bg-[#f7f7f5] border border-[#e6e6e6] hover:border-black transition-colors"
          >
            <div className="flex items-center gap-2.5 mb-5">
              <span className={`p-2 rounded-xl font-mono text-xs font-bold flex items-center gap-1.5 border ${getColorClasses(group.color)}`}>
                {getIcon(idx)}
                <span>{group.category[lang]}</span>
              </span>
            </div>

            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 rounded-full bg-white text-black font-mono text-xs font-medium border border-[#e6e6e6] shadow-2xs"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
