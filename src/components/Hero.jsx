import { ArrowRight, Play, ChevronRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Hero() {
  const { t, language } = useLanguage();
  const isFrench = language === 'fr';

  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden min-h-screen flex items-center justify-center">
      {/* Premium Background System */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden bg-background">
        
        {/* 1. Gradient Mesh / Aurora Effect */}
        <div className="absolute top-[-20%] left-[-10%] w-[70%] h-[70%] bg-primary/20 rounded-full blur-[120px] animate-float" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[70%] h-[70%] bg-secondary/20 rounded-full blur-[120px] animate-float" style={{ animationDelay: '-3s' }} />
        
        {/* 2. Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

        {/* 3. Noise Texture for "Expensive" Feel */}
        <div className="absolute inset-0 opacity-[0.04] mix-blend-overlay" 
             style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} 
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10 flex flex-col items-center">

        {/* Premium Badge */}
        <div className="inline-flex items-center gap-2 bg-white/[0.03] border border-white/[0.08] backdrop-blur-md px-4 py-2 rounded-full mb-8 transition-all hover:bg-white/[0.05] hover:border-primary/30 group cursor-default">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-emerald opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-emerald"></span>
          </span>
          <span className="text-sm font-medium text-gray-300 tracking-wide group-hover:text-white transition-colors">
            {t.hero.badge}
          </span>
          <ChevronRight className="w-4 h-4 text-gray-500 group-hover:text-primary transition-colors" />
        </div>

        {/* Main Headline */}
        <h1 className={`
          ${isFrench ? 'text-4xl sm:text-6xl lg:text-7xl' : 'text-5xl sm:text-7xl lg:text-8xl'} 
          font-bold tracking-tight leading-[1.1] mb-8
          bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-gray-400
          drop-shadow-sm
        `}>
          {t.hero.titleLine1} <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary-light to-secondary animate-gradient-x">
            {t.hero.titleLine2} {t.hero.titleSpan}
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed font-light">
          {t.hero.subtitle}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center w-full mb-20">
          <a
            href="https://calendly.com/diabatesekou1337/audit-offerte-leetswitch"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center gap-3 bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] hover:-translate-y-1 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
            {t.hero.ctaPrimary}
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          
          <button className="group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-medium text-gray-300 hover:text-white border border-white/10 hover:border-white/20 hover:bg-white/5 transition-all duration-300">
            <Play className="w-5 h-5 fill-current opacity-0 group-hover:opacity-100 transition-opacity -ml-2" />
            <span>View Demo</span>
          </button>
        </div>

        {/* Trust Bar / Social Proof */}
        <div className="pt-12 border-t border-white/5 w-full max-w-4xl mx-auto">
          <p className="text-sm font-medium text-gray-500 mb-6 uppercase tracking-widest">
            {t.hero.trustBar?.line1 || "Trusted by innovative teams"}
          </p>
          <div className="flex flex-wrap justify-center gap-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Placeholder logos - replace with actual SVGs */}
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="h-8 w-32 bg-white/10 rounded animate-pulse" />
            ))}
          </div>
        </div>

      </div>
    </section >
  );
}
