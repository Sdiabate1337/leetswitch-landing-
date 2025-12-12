import { Search, Hammer, Rocket, RefreshCw, ArrowDown } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function HowItWorks() {
  const { t } = useLanguage();

  const steps = [
    {
      icon: Search,
      title: t.howItWorks.steps[0].title,
      description: t.howItWorks.steps[0].desc,
      color: 'text-primary',
      bgColor: 'bg-primary/10',
      borderColor: 'border-primary/20'
    },
    {
      icon: Hammer,
      title: t.howItWorks.steps[1].title,
      description: t.howItWorks.steps[1].desc,
      color: 'text-electric-blue',
      bgColor: 'bg-electric-blue/10',
      borderColor: 'border-electric-blue/20'
    },
    {
      icon: Rocket,
      title: t.howItWorks.steps[2].title,
      description: t.howItWorks.steps[2].desc,
      color: 'text-accent-green',
      bgColor: 'bg-accent-green/10',
      borderColor: 'border-accent-green/20'
    },
    {
      icon: RefreshCw,
      title: t.howItWorks.steps[3].title,
      description: t.howItWorks.steps[3].desc,
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-500/10',
      borderColor: 'border-yellow-500/20'
    },
  ];

  return (
    <section id="how-it-works" className="py-24 lg:py-32 bg-background relative overflow-hidden">
      {/* Background Gradients & Grid */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-3xl sm:text-4xl font-bold text-graphite mb-6 tracking-tight">
            {t.howItWorks.title} <span className="text-primary">{t.howItWorks.titleSpan}</span>
          </h2>
          <p className="text-lg text-soft-indigo max-w-2xl mx-auto">
            {t.howItWorks.subtitle}
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/0 via-primary/30 to-primary/0 md:-translate-x-1/2" />

          <div className="space-y-12 md:space-y-24">
            {steps.map((step, index) => (
              <div key={index} className={`relative flex flex-col md:flex-row gap-8 md:gap-0 items-start md:items-center ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}>
                
                {/* Content Card */}
                <div className="flex-1 w-full md:w-auto pl-16 md:pl-0">
                  <div className={`group relative p-8 rounded-3xl bg-white border border-light-slate transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:border-primary/30 z-10 ${
                    index % 2 === 0 ? 'md:mr-16 text-left' : 'md:ml-16 text-left'
                  }`}>
                    {/* Watermark Number */}
                    <div className="absolute -top-6 -right-4 text-[80px] font-black text-slate-100 opacity-50 pointer-events-none leading-none select-none group-hover:text-primary/5 transition-colors">
                      0{index + 1}
                    </div>

                    <h3 className="text-2xl font-bold text-graphite mb-3 relative z-10">{step.title}</h3>
                    <p className="text-soft-indigo leading-relaxed relative z-10">{step.description}</p>
                  </div>
                </div>

                {/* Center Icon */}
                <div className="absolute left-0 md:left-1/2 w-14 h-14 rounded-2xl bg-white border-4 border-background shadow-lg flex items-center justify-center z-20 md:-translate-x-1/2">
                  <div className={`w-full h-full rounded-xl ${step.bgColor} flex items-center justify-center transform transition-transform duration-500 hover:rotate-12`}>
                    <step.icon className={step.color} size={24} strokeWidth={2.5} />
                  </div>
                </div>

                {/* Empty spacer for alignment */}
                <div className="flex-1 hidden md:block" />
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
