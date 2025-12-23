import { Linkedin, Twitter, Mail, ArrowUp } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-background pt-24 pb-12 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,rgba(59,130,246,0.05))]" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-12 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-5">
            <a href="#" className="flex items-center gap-3 mb-6 group" aria-label="LeetSwitch - Retour à l'accueil">
              <div className="relative">
                <div className="absolute inset-0 bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
                <img src="/logo.png" alt="LeetSwitch Logo" width="40" height="40" className="h-10 w-auto object-contain relative z-10 transition-transform duration-300 group-hover:scale-110" />
              </div>
              <span className="text-2xl font-bold text-white tracking-tight">
                Leet<span className="text-primary">Switch</span>
              </span>
            </a>
            <p className="text-gray-400 leading-relaxed mb-8 max-w-md">
              {t.footer.description}
            </p>
            <div className="flex gap-4" role="list" aria-label="Réseaux sociaux">
              {[
                { Icon: Linkedin, label: "LinkedIn" },
                { Icon: Twitter, label: "Twitter" },
                { Icon: Mail, label: "Email" }
              ].map(({ Icon, label }, index) => (
                <a 
                  key={index}
                  href="#" 
                  className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 hover:bg-primary hover:border-primary flex items-center justify-center transition-all duration-300 hover:-translate-y-1 group" 
                  aria-label={label}
                >
                  <Icon size={18} className="text-gray-400 group-hover:text-white transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="md:col-span-3">
            <h4 className="font-semibold mb-6 text-white tracking-wide">{t.footer.company}</h4>
            <ul className="space-y-4">
              {[
                { name: t.nav.whyAutomate, href: '#problem' },
                { name: t.nav.systems, href: '#solutions' },
                { name: t.nav.process, href: '#process' },
                { name: t.nav.team, href: '#team' },
                { name: t.nav.contact, href: '#contact' }
              ].map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-gray-400 hover:text-primary transition-colors flex items-center gap-2 group">
                    <span className="w-1 h-1 rounded-full bg-primary/0 group-hover:bg-primary transition-colors" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="md:col-span-4">
            <h4 className="font-semibold mb-6 text-white tracking-wide">Stay Updated</h4>
            <p className="text-gray-400 text-sm mb-4">
              Get the latest automation insights delivered to your inbox.
            </p>
            <form className="relative" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
              />
              <button 
                type="submit"
                className="absolute right-1.5 top-1.5 bg-primary hover:bg-primary-dark text-white px-4 py-1.5 rounded-md text-sm font-medium transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {currentYear} LeetSwitch. {t.footer.rights}
          </p>
          
          <button 
            onClick={scrollToTop}
            className="flex items-center gap-2 text-sm text-gray-500 hover:text-primary transition-colors group"
          >
            Back to top
            <ArrowUp size={16} className="group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}
