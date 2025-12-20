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

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${isScrolled || isMobileMenuOpen ? 'bg-[#0a0a0f]/80 backdrop-blur-md border-b border-white/10 py-3 shadow-lg' : 'bg-transparent py-5'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <a href="#" className="flex items-center gap-3 group cursor-pointer">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
              <img src="/logo.png" alt="LeetSwitch Mark" className="h-10 w-auto object-contain relative z-10 transition-transform duration-300 group-hover:scale-110 drop-shadow-[0_0_8px_rgba(255,255,255,0.1)]" />
            </div>
            <span className="text-xl font-bold text-white tracking-tight relative">
              Leet<span className="text-primary group-hover:text-primary-light transition-colors">Switch</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-light-slate/80 hover:text-white transition-colors tracking-wide"
              >
                {link.name}
              </a>
            ))}

            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/5 text-sm font-bold text-light-slate transition-colors"
            >
              <Globe size={16} />
              <span className={language === 'en' ? 'text-primary' : 'text-light-slate/50'}>EN</span>
              <span className="text-light-slate/30">/</span>
              <span className={language === 'fr' ? 'text-primary' : 'text-light-slate/50'}>FR</span>
            </button>

            <a
              href="#contact"
              className="bg-white text-graphite px-5 py-2.5 rounded-full text-sm font-bold hover:bg-primary hover:text-white transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_20px_rgba(76,110,245,0.4)] hover:-translate-y-0.5 transform duration-200"
            >
              {t.nav.bookCall}
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-4 md:hidden">
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-bold text-light-slate"
            >
              <span className={language === 'en' ? 'text-primary' : 'text-light-slate/50'}>EN</span>
              <span className="text-light-slate/30">/</span>
              <span className={language === 'fr' ? 'text-primary' : 'text-light-slate/50'}>FR</span>
            </button>

            <button
              className="text-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-[#0a0a0f] border-b border-light-slate/10 md:hidden shadow-2xl animate-in slide-in-from-top-5">
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
