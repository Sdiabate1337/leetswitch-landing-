import { useState, useEffect } from 'react';
import { Menu, X, Zap, Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t.nav.whyAutomate, href: '#problem' },
    { name: t.nav.systems, href: '#solutions' },
    { name: t.nav.process, href: '#process' },
    { name: t.nav.team, href: '#team' },
    { name: t.nav.contact, href: '#contact' },
  ];

  const textColorClass = isScrolled ? 'text-white' : 'text-graphite';
  const navLinkClass = isScrolled ? 'text-white/90 hover:text-primary' : 'text-graphite/80 hover:text-primary';

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${isScrolled || isMobileMenuOpen ? 'bg-obsidian/95 backdrop-blur-md border-b border-white/10 py-3 shadow-lg' : 'bg-transparent py-5'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <a href="#" className="flex items-center gap-3 group cursor-pointer">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
              <img src="/logo.png" alt="LeetSwitch Mark" className="h-10 w-auto object-contain relative z-10 transition-transform duration-300 group-hover:scale-110 drop-shadow-[0_0_8px_rgba(255,255,255,0.1)]" />
            </div>
            <span className={`text-xl font-bold tracking-tight relative transition-colors duration-300 ${textColorClass}`}>
              Leet<span className="text-brand-logo group-hover:text-brand-logo/80 transition-colors">Switch</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors tracking-wide ${navLinkClass}`}
              >
                {link.name}
              </a>
            ))}

            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-full border text-sm font-bold transition-colors ${isScrolled
                ? 'bg-white/10 hover:bg-white/20 border-white/10 text-white'
                : 'bg-graphite/5 hover:bg-graphite/10 border-graphite/5 text-graphite'
                }`}
            >
              <Globe size={16} />
              <span className={language === 'en' ? 'text-brand-logo' : (isScrolled ? 'text-white/50' : 'text-graphite/50')}>EN</span>
              <span className={isScrolled ? 'text-white/30' : 'text-graphite/30'}>/</span>
              <span className={language === 'fr' ? 'text-brand-logo' : (isScrolled ? 'text-white/50' : 'text-graphite/50')}>FR</span>
            </button>

            <a
              href="#contact"
              className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all shadow-[0_0_20px_rgba(47,47,47,0.1)] hover:-translate-y-0.5 transform duration-200 cursor-pointer ${isScrolled
                ? 'bg-white text-obsidian hover:bg-primary hover:text-white hover:shadow-[0_0_20px_rgba(76,110,245,0.4)]'
                : 'bg-graphite text-white hover:bg-primary hover:shadow-[0_0_20px_rgba(76,110,245,0.4)]'
                }`}
            >
              {t.nav.bookCall}
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-4 md:hidden">
            <button
              onClick={toggleLanguage}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-xs font-bold ${isScrolled
                ? 'bg-white/10 border-white/10 text-white'
                : 'bg-white/5 border-white/10 text-light-slate'
                }`}
            >
              <span className={language === 'en' ? 'text-brand-logo' : 'opacity-50'}>EN</span>
              <span className="opacity-30">/</span>
              <span className={language === 'fr' ? 'text-brand-logo' : 'opacity-50'}>FR</span>
            </button>

            <button
              className={isScrolled ? 'text-white' : 'text-white'} // Always white on mobile for now as mobile header background logic might be different or simple
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-obsidian border-b border-light-slate/10 md:hidden shadow-2xl animate-in slide-in-from-top-5">
          <div className="px-4 py-8 space-y-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block text-xl font-bold text-white/90 hover:text-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="block text-center bg-primary text-white px-5 py-4 rounded-xl text-lg font-bold hover:bg-primary-light transition-colors shadow-lg shadow-primary/20"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t.nav.bookCall}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
