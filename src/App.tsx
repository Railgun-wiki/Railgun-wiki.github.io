import React from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { Navbar } from './components/Navbar';
import { SocialRails } from './components/SocialRails';
import { Hero } from './components/Hero';
import { Marquee } from './components/Marquee';
import { WorkingNow } from './components/WorkingNow';
import { ProjectMatrix } from './components/ProjectMatrix';
import { TechRadar } from './components/TechRadar';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export const AppContent: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-[#dceeb1] selection:text-black">
      {/* Top Navbar */}
      <Navbar />

      {/* Floating Side Rails (bchiang7/v4 signature layout) */}
      <SocialRails />

      {/* Main Content Sections */}
      <main className="w-full overflow-x-hidden">
        <Hero />
        <Marquee />
        <WorkingNow />
        <ProjectMatrix />
        <TechRadar />
        <About />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
};

export default App;
