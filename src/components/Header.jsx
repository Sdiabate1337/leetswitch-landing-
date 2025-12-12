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
    { name: t.nav.services, href: '#services' },
    { name: t.nav.howItWorks, href: '#how-it-works' },
    { name: t.nav.showcase, href: '#showcase' },
    { name: t.nav.benefits, href: '#benefits' },
    { name: t.nav.faq, href: '#faq' },
  ];

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen ? 'bg-white/80 backdrop-blur-md border-b border-light-slate/50 py-3 shadow-sm' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2 group cursor-pointer">
            <div className="relative">
              <div className="absolute inset-0 bg-primary blur-lg opacity-20 group-hover:opacity-40 transition-opacity" />
              <Zap className="text-primary relative z-10" size={28} strokeWidth={2.5} />
            </div>
            <span className="text-xl font-bold text-graphite tracking-tight">
              Leet<span className="text-primary">Switch</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-semibold text-soft-indigo hover:text-primary transition-colors"
              >
                {link.name}
              </a>
            ))}
            
            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-light-slate/50 hover:bg-light-slate text-sm font-bold text-soft-indigo transition-colors"
            >
              <Globe size={16} />
              <span className={language === 'en' ? 'text-primary' : 'text-soft-indigo/50'}>EN</span>
              <span className="text-soft-indigo/30">/</span>
              <span className={language === 'fr' ? 'text-primary' : 'text-soft-indigo/50'}>FR</span>
            </button>

            <a
              href="#cta"
              className="bg-graphite text-white px-5 py-2.5 rounded-lg text-sm font-bold hover:bg-black transition-colors shadow-lg shadow-graphite/20 hover:shadow-xl hover:-translate-y-0.5 transform duration-200"
            >
              {t.nav.bookCall}
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-4 md:hidden">
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-light-slate/50 text-xs font-bold text-soft-indigo"
            >
              <span className={language === 'en' ? 'text-primary' : 'text-soft-indigo/50'}>EN</span>
              <span className="text-soft-indigo/30">/</span>
              <span className={language === 'fr' ? 'text-primary' : 'text-soft-indigo/50'}>FR</span>
            </button>
            
            <button 
              className="text-graphite"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-b border-light-slate md:hidden shadow-xl animate-in slide-in-from-top-5">
          <div className="px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block text-base font-semibold text-graphite hover:text-primary transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#cta"
              className="block text-center bg-primary text-white px-5 py-3 rounded-xl text-base font-bold hover:bg-primary-light transition-colors shadow-lg"
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
