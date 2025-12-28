import { Linkedin, Twitter, Mail } from 'lucide-react';

import { useLanguage } from '../context/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-graphite text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <a href="#" className="flex items-center gap-3 mb-4 group">
              <img src="/logo.png" alt="LeetSwitch Mark" className="h-10 w-auto object-contain opacity-90 group-hover:opacity-100 transition-all group-hover:scale-110" />
              Leet<span className="text-[#6d9ec9]">Switch</span>

            </a>
            <p className="mt-4 text-white/60 max-w-sm">
              {t.footer.description}
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" className="w-10 h-10 rounded-lg bg-white/10 hover:bg-primary flex items-center justify-center transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-white/10 hover:bg-primary flex items-center justify-center transition-colors">
                <Twitter size={18} />
              </a>
              <a href="mailto:contact@leetswitch.com" className="w-10 h-10 rounded-lg bg-white/10 hover:bg-primary flex items-center justify-center transition-colors">
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4 text-white">{t.footer.company}</h4>
            <ul className="space-y-2">
              <li><a href="#problem" className="text-white/60 hover:text-white transition-colors">{t.nav.whyAutomate}</a></li>
              <li><a href="#solutions" className="text-white/60 hover:text-white transition-colors">{t.nav.systems}</a></li>
              <li><a href="#process" className="text-white/60 hover:text-white transition-colors">{t.nav.process}</a></li>
              <li><a href="#team" className="text-white/60 hover:text-white transition-colors">{t.nav.team}</a></li>
              <li><a href="#contact" className="text-white/60 hover:text-white transition-colors">{t.nav.contact}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-white">{t.footer.legal}</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/60 hover:text-white transition-colors">{t.footer.privacy}</a></li>
              <li><a href="#" className="text-white/60 hover:text-white transition-colors">{t.footer.terms}</a></li>
              <li><a href="#" className="text-white/60 hover:text-white transition-colors">{t.footer.cookies}</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-sm">
            © {currentYear} LeetSwitch. {t.footer.rights}
          </p>
          <p className="text-white/40 text-sm">
            {t.footer.builtWith}
          </p>
        </div>
      </div>
    </footer>
  );
}
