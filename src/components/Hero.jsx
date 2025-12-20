import { ArrowRight, Play } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Hero() {
  const { t, language } = useLanguage();
  const isFrench = language === 'fr';

  return (
    <section className="relative pt-24 pb-12 lg:pt-48 lg:pb-32 overflow-hidden bg-background min-h-[80vh] sm:min-h-[90vh] flex items-center">
      {/* Cinematic Background Layer */}
      {/* Professional Background Layer */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden bg-[#0a0a0f]">

        {/* 1. Grain/Noise Texture - The "Expensive" Feel */}
        <div
          className="absolute inset-0 opacity-[0.03] mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
          }}
        />

        {/* 2. The Spotlight "God Ray" - Single Source of Truth */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[radial-gradient(circle_at_center,rgba(76,110,245,0.15)_0%,rgba(76,110,245,0)_70%)] blur-[80px]" />

        {/* 3. The Grid - Structured Engineering */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

        {/* 4. Subtle Accent Glows (Restrained) */}
        <div className="absolute top-[-100px] left-1/4 w-[300px] h-[300px] bg-primary/20 rounded-full blur-[100px] opacity-40" />
        <div className="absolute top-[-100px] right-1/4 w-[300px] h-[300px] bg-electric-blue/10 rounded-full blur-[100px] opacity-40" />

      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">

        {/* Announcement Badge */}
        <div className="inline-flex items-center gap-2 bg-white border border-light-slate shadow-sm px-3 py-1 sm:px-4 sm:py-1.5 rounded-full text-[10px] sm:text-sm font-semibold mb-6 sm:mb-8 transition-transform hover:scale-105 cursor-default mx-auto max-w-[90vw]">
          <span className="relative flex h-2 w-2 shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-green opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-green"></span>
          </span>
          <span className="text-graphite truncate max-w-[280px] sm:max-w-none">
            {t.hero.badge}
          </span>
        </div>

        <h1 className={`${isFrench ? 'text-3xl sm:text-6xl lg:text-[5rem]' : 'text-4xl sm:text-7xl lg:text-[6rem]'} font-bold text-graphite tracking-tight leading-[1.05] sm:leading-[1] mb-6 sm:mb-8 transition-all duration-300`}>
          {t.hero.titleLine1} <br />
          {t.hero.titleLine2} <span className="text-primary">{t.hero.titleSpan}</span>.
        </h1>

        <p className={`${isFrench ? 'text-base sm:text-xl' : 'text-lg sm:text-2xl'} text-soft-indigo/90 mb-10 sm:mb-12 max-w-3xl mx-auto leading-relaxed font-medium px-4 sm:px-0 transition-all duration-300`}>
          {t.hero.subtitle}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full mb-16">
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-light text-white px-10 py-5 rounded-full font-bold text-xl transition-all shadow-xl shadow-primary/20 hover:shadow-2xl hover:-translate-y-1 min-w-[200px]"
          >
            {t.hero.ctaPrimary}
            <ArrowRight size={22} />
          </a>
        </div>

        {/* Trust Bar */}
        <div className="pt-10 border-t border-light-slate/40 max-w-2xl mx-auto">
          <p className="text-sm font-bold text-graphite mb-3">
            {t.hero.trustBar?.line1}
          </p>
          <p className="text-xs font-semibold text-soft-indigo uppercase tracking-wider">
            {t.hero.trustBar?.line2}
          </p>
        </div>

      </div>
    </section >
  );
}
