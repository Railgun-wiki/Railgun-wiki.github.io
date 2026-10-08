import React, { useState, useEffect } from 'react';
import { portfolioData } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';
import { Menu, X, ArrowUpRight, Languages } from 'lucide-react';
import { GithubIcon } from './icons/GithubIcon';

export const Navbar: React.FC = () => {
  const { lang, toggleLang } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: portfolioData.ui.nav.now[lang], url: '#now', code: '01' },
    { name: portfolioData.ui.nav.matrix[lang], url: '#projects', code: '02' },
    { name: portfolioData.ui.nav.radar[lang], url: '#stack', code: '03' },
    { name: portfolioData.ui.nav.about[lang], url: '#about', code: '04' },
    { name: portfolioData.ui.nav.contact[lang], url: '#contact', code: '05' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-[#e6e6e6] py-3'
          : 'bg-white py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#"
          className="flex items-center gap-2.5 group"
          aria-label="Home"
        >
          <div className="w-9 h-9 rounded-full bg-black text-[#dceeb1] flex items-center justify-center font-mono font-bold text-base transition-transform group-hover:scale-105">
            R
          </div>
          <span className="font-mono text-sm font-bold tracking-tight text-black group-hover:opacity-80 transition-opacity">
            {portfolioData.personal.handle}
          </span>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-7">
          {navItems.map((link) => (
            <a
              key={link.code}
              href={link.url}
              className="group flex items-baseline gap-1 text-xs font-mono tracking-wider uppercase text-neutral-600 hover:text-black transition-colors"
            >
              <span className="text-black font-semibold">{link.code}.</span>
              <span className="font-medium group-hover:underline underline-offset-4 decoration-1">
                {link.name}
              </span>
            </a>
          ))}

          {/* Language Switcher Pill */}
          <button
            onClick={toggleLang}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-neutral-300 hover:border-black bg-[#f7f7f5] hover:bg-neutral-100 text-xs font-mono font-bold text-black transition-all hover:scale-105 cursor-pointer ml-1"
            title={lang === 'zh' ? 'Switch to English' : '切换为中文'}
          >
            <Languages className="w-3.5 h-3.5 text-neutral-600" />
            <span>{lang === 'zh' ? '中 / EN' : 'EN / 中'}</span>
          </button>

          {/* GitHub CTA Pill */}
          <a
            href={portfolioData.personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black text-white text-xs font-mono font-semibold hover:bg-neutral-800 transition-all hover:scale-105 active:scale-95 ml-1"
          >
            <GithubIcon className="w-3.5 h-3.5" />
            <span>GitHub</span>
            <ArrowUpRight className="w-3 h-3 text-neutral-400" />
          </a>
        </nav>

        {/* Mobile controls */}
        <div className="flex md:hidden items-center gap-2">
          {/* Mobile Language Switcher */}
          <button
            onClick={toggleLang}
            className="px-2.5 py-1 rounded-full border border-neutral-300 bg-[#f7f7f5] text-xs font-mono font-bold text-black"
          >
            {lang === 'zh' ? 'EN' : '中文'}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-full hover:bg-neutral-100 text-black transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-[#e6e6e6] px-6 py-6 shadow-xl animate-in slide-in-from-top-2">
          <nav className="flex flex-col gap-4">
            {navItems.map((link) => (
              <a
                key={link.code}
                href={link.url}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-2 py-2 text-sm font-mono uppercase text-neutral-700 hover:text-black border-b border-neutral-100"
              >
                <span className="text-neutral-400 font-bold">{link.code}.</span>
                <span className="font-semibold">{link.name}</span>
              </a>
            ))}
            <a
              href={portfolioData.personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-3 mt-2 rounded-full bg-black text-white text-xs font-mono font-semibold"
            >
              <GithubIcon className="w-4 h-4" />
              <span>GitHub Profile</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};
