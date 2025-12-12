import { Calendar, ArrowRight } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section id="cta" className="py-20 lg:py-28 bg-gradient-to-br from-primary via-primary-light to-electric-blue grain grain-dark relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-electric-blue/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 bg-white/10 text-white px-4 py-2 rounded-full text-sm font-medium mb-6 backdrop-blur-sm">
          <Calendar size={16} />
          Free 20-Minute Consultation
        </div>
        
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-tight">
          Ready to Automate<br />Your Business?
        </h2>
        
        <p className="text-lg sm:text-xl text-white/80 mb-10 max-w-2xl mx-auto">
          Book a free automation audit and discover how AI can transform your operations. No commitment, just insights.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="#"
            className="inline-flex items-center justify-center gap-2 bg-white hover:bg-light-slate text-primary px-8 py-4 rounded-xl font-semibold text-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            Book a 20-Minute Audit
            <ArrowRight size={20} />
          </a>
          <a 
            href="mailto:hello@leetswitch.com"
            className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all backdrop-blur-sm border border-white/20"
          >
            Contact Us
          </a>
        </div>
        
        <p className="mt-8 text-white/60 text-sm">
          No spam. No obligations. Just a conversation about your automation potential.
        </p>
      </div>
    </section>
  );
}
