import { X, Check, Users, Zap } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Benefits() {
  const { t } = useLanguage();
  
  return (
    <section id="benefits" className="py-24 lg:py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-graphite mb-6 tracking-tight">
            {t.benefits.titleLine1} <span className="text-red-500 line-through decoration-4 decoration-red-500/30">{t.benefits.titleLine1Span}</span>.<br />
            {t.benefits.titleLine2} <span className="text-primary">{t.benefits.titleLine2Span}</span>.
          </h2>
          <p className="text-xl text-soft-indigo max-w-3xl mx-auto leading-relaxed">
            {t.benefits.subtitle}
          </p>
        </div>

        {/* Comparison Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          
          {/* The Manual Trap (Left) */}
          <div className="relative group p-8 lg:p-10 rounded-3xl bg-red-50/50 border border-red-100 transition-all hover:bg-red-50 hover:shadow-xl hover:shadow-red-500/5">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-2xl bg-red-100 flex items-center justify-center text-red-500">
                <Users size={24} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-graphite">{t.benefits.manualTrap.title}</h3>
                <p className="text-red-500 font-medium text-sm uppercase tracking-wider">{t.benefits.manualTrap.subtitle}</p>
              </div>
            </div>

            <ul className="space-y-6">
              <li className="flex items-start gap-4 opacity-70 group-hover:opacity-100 transition-opacity">
                <X className="text-red-500 mt-1 flex-shrink-0" size={20} strokeWidth={3} />
                <div>
                  <strong className="block text-graphite text-lg">{t.benefits.manualTrap.cost.title}</strong>
                  <span className="text-soft-indigo">{t.benefits.manualTrap.cost.desc}</span>
                </div>
              </li>
              <li className="flex items-start gap-4 opacity-70 group-hover:opacity-100 transition-opacity">
                <X className="text-red-500 mt-1 flex-shrink-0" size={20} strokeWidth={3} />
                <div>
                  <strong className="block text-graphite text-lg">{t.benefits.manualTrap.onboarding.title}</strong>
                  <span className="text-soft-indigo">{t.benefits.manualTrap.onboarding.desc}</span>
                </div>
              </li>
              <li className="flex items-start gap-4 opacity-70 group-hover:opacity-100 transition-opacity">
                <X className="text-red-500 mt-1 flex-shrink-0" size={20} strokeWidth={3} />
                <div>
                  <strong className="block text-graphite text-lg">{t.benefits.manualTrap.availability.title}</strong>
                  <span className="text-soft-indigo">{t.benefits.manualTrap.availability.desc}</span>
                </div>
              </li>
              <li className="flex items-start gap-4 opacity-70 group-hover:opacity-100 transition-opacity">
                <X className="text-red-500 mt-1 flex-shrink-0" size={20} strokeWidth={3} />
                <div>
                  <strong className="block text-graphite text-lg">{t.benefits.manualTrap.quality.title}</strong>
                  <span className="text-soft-indigo">{t.benefits.manualTrap.quality.desc}</span>
                </div>
              </li>
            </ul>
          </div>

          {/* The AI Advantage (Right) */}
          <div className="relative group p-8 lg:p-10 rounded-3xl bg-white border border-primary/20 shadow-2xl shadow-primary/10 ring-1 ring-primary/5 hover:scale-[1.02] transition-transform duration-300">
            {/* Glowing effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-3xl pointer-events-none" />
            
            <div className="relative flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-2xl bg-primary flex items-center justify-center text-white shadow-lg shadow-primary/30">
                <Zap size={24} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-graphite">{t.benefits.aiAdvantage.title}</h3>
                <p className="text-primary font-bold text-sm uppercase tracking-wider">{t.benefits.aiAdvantage.subtitle}</p>
              </div>
            </div>

            <ul className="space-y-6 relative">
              <li className="flex items-start gap-4">
                <div className="mt-1 w-5 h-5 rounded-full bg-accent-green flex items-center justify-center flex-shrink-0 shadow-lg shadow-accent-green/30">
                  <Check className="text-white" size={12} strokeWidth={4} />
                </div>
                <div>
                  <strong className="block text-graphite text-lg">{t.benefits.aiAdvantage.cost.title}</strong>
                  <span className="text-soft-indigo">{t.benefits.aiAdvantage.cost.desc}</span>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="mt-1 w-5 h-5 rounded-full bg-accent-green flex items-center justify-center flex-shrink-0 shadow-lg shadow-accent-green/30">
                  <Check className="text-white" size={12} strokeWidth={4} />
                </div>
                <div>
                  <strong className="block text-graphite text-lg">{t.benefits.aiAdvantage.knowledge.title}</strong>
                  <span className="text-soft-indigo">{t.benefits.aiAdvantage.knowledge.desc}</span>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="mt-1 w-5 h-5 rounded-full bg-accent-green flex items-center justify-center flex-shrink-0 shadow-lg shadow-accent-green/30">
                  <Check className="text-white" size={12} strokeWidth={4} />
                </div>
                <div>
                  <strong className="block text-graphite text-lg">{t.benefits.aiAdvantage.availability.title}</strong>
                  <span className="text-soft-indigo">{t.benefits.aiAdvantage.availability.desc}</span>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="mt-1 w-5 h-5 rounded-full bg-accent-green flex items-center justify-center flex-shrink-0 shadow-lg shadow-accent-green/30">
                  <Check className="text-white" size={12} strokeWidth={4} />
                </div>
                <div>
                  <strong className="block text-graphite text-lg">{t.benefits.aiAdvantage.quality.title}</strong>
                  <span className="text-soft-indigo">{t.benefits.aiAdvantage.quality.desc}</span>
                </div>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
