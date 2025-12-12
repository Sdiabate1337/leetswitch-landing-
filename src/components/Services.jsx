import { useState } from 'react';
import { ArrowRight, Check, MessageCircle, Banknote, Headphones, Star, Zap } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Services() {
  const [billingCycle, setBillingCycle] = useState('monthly');
  const { t } = useLanguage();

  const services = [
    {
      icon: MessageCircle,
      title: t.services.packs.sales.title,
      subtitle: t.services.packs.sales.subtitle,
      description: t.services.packs.sales.desc,
      features: t.services.packs.sales.features,
      kpi: t.services.packs.sales.kpi,
      target: t.services.packs.sales.target,
      popular: true,
      accent: 'primary',
      price: '900',
    },
    {
      icon: Banknote,
      title: t.services.packs.finance.title,
      subtitle: t.services.packs.finance.subtitle,
      description: t.services.packs.finance.desc,
      features: t.services.packs.finance.features,
      kpi: t.services.packs.finance.kpi,
      target: t.services.packs.finance.target,
      popular: false,
      accent: 'electric-blue',
      price: '1,500',
    },
    {
      icon: Headphones,
      title: t.services.packs.support.title,
      subtitle: t.services.packs.support.subtitle,
      description: t.services.packs.support.desc,
      features: t.services.packs.support.features,
      kpi: t.services.packs.support.kpi,
      target: t.services.packs.support.target,
      popular: false,
      accent: 'accent-green',
      price: t.services.custom,
    },
    {
      icon: Star,
      title: t.services.packs.reviews.title,
      subtitle: t.services.packs.reviews.subtitle,
      description: t.services.packs.reviews.desc,
      features: t.services.packs.reviews.features,
      kpi: t.services.packs.reviews.kpi,
      target: t.services.packs.reviews.target,
      popular: false,
      accent: 'yellow-500',
      price: '500',
    }
  ];

  return (
    <section id="services" className="py-24 lg:py-32 bg-background relative overflow-hidden">
      {/* Background Gradients & Grid */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-graphite mb-6 tracking-tight">
            {t.services.title} <span className="text-primary">{t.services.titleSpan}</span>
          </h2>
          <p className="text-lg text-soft-indigo max-w-2xl mx-auto mb-10">
            {t.services.subtitle}
          </p>

          {/* Billing Toggle (Visual Only) */}
          <div className="inline-flex items-center p-1 bg-white border border-light-slate rounded-full shadow-sm">
            <button 
              onClick={() => setBillingCycle('monthly')}
              className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${
                billingCycle === 'monthly' ? 'bg-graphite text-white shadow-md' : 'text-soft-indigo hover:text-graphite'
              }`}
            >
              {t.services.toggle.setup}
            </button>
            <button 
              onClick={() => setBillingCycle('yearly')}
              className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${
                billingCycle === 'yearly' ? 'bg-graphite text-white shadow-md' : 'text-soft-indigo hover:text-graphite'
              }`}
            >
              {t.services.toggle.sub}
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => {
            // Dynamic Color Logic
            const isPopular = service.popular;
            const borderColor = isPopular ? 'border-primary' : 'border-light-slate';
            const shadowClass = isPopular ? 'shadow-2xl shadow-primary/10' : 'shadow-lg hover:shadow-xl';
            const iconColor = service.accent === 'primary' ? 'text-primary' : 
                              service.accent === 'electric-blue' ? 'text-electric-blue' :
                              service.accent === 'accent-green' ? 'text-accent-green' : 'text-yellow-600';
            const bgColor = service.accent === 'primary' ? 'bg-primary/10' : 
                            service.accent === 'electric-blue' ? 'bg-electric-blue/10' :
                            service.accent === 'accent-green' ? 'bg-accent-green/10' : 'bg-yellow-500/10';

            return (
              <div 
                key={index}
                className={`relative bg-white rounded-3xl p-8 border ${borderColor} ${shadowClass} transition-all duration-300 hover:-translate-y-1 flex flex-col overflow-hidden group`}
              >
                {/* Popular Badge */}
                {isPopular && (
                  <div className="absolute top-0 right-0">
                    <div className="bg-primary text-white text-xs font-bold px-4 py-1.5 rounded-bl-2xl uppercase tracking-wider">
                      {t.services.mostPopular}
                    </div>
                  </div>
                )}

                <div className="flex items-start justify-between mb-8">
                  <div className={`w-16 h-16 rounded-2xl ${bgColor} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className={iconColor} size={32} strokeWidth={1.5} />
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-semibold text-soft-indigo uppercase tracking-wider mb-1">{t.services.startingAt}</p>
                    <div className="text-3xl font-bold text-graphite tracking-tight">
                      {service.price === t.services.custom ? t.services.custom : `$${service.price}`}
                    </div>
                  </div>
                </div>

                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-graphite mb-2">{service.title}</h3>
                  <p className="text-soft-indigo font-medium text-sm mb-4">{service.subtitle}</p>
                  <p className="text-soft-indigo text-sm leading-relaxed border-l-2 border-light-slate pl-4">
                    {service.description}
                  </p>
                </div>

                {/* KPI Badge */}
                <div className="mb-8">
                  <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg ${bgColor} border border-${service.accent}/20`}>
                    <Zap size={14} className={iconColor} />
                    <span className={`text-xs font-bold ${iconColor} uppercase tracking-wider`}>{t.services.impact}: {service.kpi}</span>
                  </div>
                </div>

                <div className="space-y-4 mb-8 flex-grow">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                        <Check size={12} className="text-green-600" strokeWidth={3} />
                      </div>
                      <span className="text-sm font-medium text-graphite/80">{feature}</span>
                    </div>
                  ))}
                </div>

                <a 
                  href="#cta"
                  className={`w-full py-4 rounded-xl font-bold text-center transition-all ${
                    isPopular 
                      ? 'bg-graphite text-white shadow-lg hover:bg-black hover:shadow-xl' 
                      : 'bg-background border border-light-slate text-graphite hover:border-graphite hover:bg-white'
                  }`}
                >
                  {t.services.bookCall}
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
