import { Linkedin, Twitter, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-graphite text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <a href="#" className="text-2xl font-bold">
              Leet<span className="text-electric-blue">Switch</span>
            </a>
            <p className="mt-4 text-white/60 max-w-sm">
              AI automation agency helping SMEs and startups scale operations through intelligent automation.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" className="w-10 h-10 rounded-lg bg-white/10 hover:bg-primary flex items-center justify-center transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-white/10 hover:bg-primary flex items-center justify-center transition-colors">
                <Twitter size={18} />
              </a>
              <a href="mailto:hello@leetswitch.com" className="w-10 h-10 rounded-lg bg-white/10 hover:bg-primary flex items-center justify-center transition-colors">
                <Mail size={18} />
              </a>
            </div>
          </div>
          
          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/60 hover:text-white transition-colors">Home</a></li>
              <li><a href="#benefits" className="text-white/60 hover:text-white transition-colors">About</a></li>
              <li><a href="#services" className="text-white/60 hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#cta" className="text-white/60 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/60 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-white/60 hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-white/60 hover:text-white transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-sm">
            © {currentYear} LeetSwitch. All rights reserved.
          </p>
          <p className="text-white/40 text-sm">
            Built with AI, for AI-powered businesses.
          </p>
        </div>
      </div>
    </footer>
  );
}
