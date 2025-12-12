import { useState, useEffect } from 'react';
import { MessageCircle, FileText, Headphones, Star, ArrowRight, Bot, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Showcase() {
  const { t } = useLanguage();

  const demos = [
    {
      id: 'sales',
      title: t.showcase.demos.sales.title,
      icon: MessageCircle,
      color: 'text-primary',
      bgColor: 'bg-primary/10',
      description: t.showcase.demos.sales.desc,
      steps: [
        { type: 'trigger', text: t.showcase.demos.sales.step1 },
        { type: 'action', text: t.showcase.demos.sales.step2 },
        { type: 'decision', text: t.showcase.demos.sales.step3 },
        { type: 'action', text: t.showcase.demos.sales.step4 }
      ]
    },
    {
      id: 'finance',
      title: t.showcase.demos.finance.title,
      icon: FileText,
      color: 'text-electric-blue',
      bgColor: 'bg-electric-blue/10',
      description: t.showcase.demos.finance.desc,
      steps: [
        { type: 'trigger', text: t.showcase.demos.finance.step1 },
        { type: 'ai', text: t.showcase.demos.finance.step2 },
        { type: 'decision', text: t.showcase.demos.finance.step3 },
        { type: 'action', text: t.showcase.demos.finance.step4 }
      ]
    },
    {
      id: 'support',
      title: t.showcase.demos.support.title,
      icon: Headphones,
      color: 'text-accent-green',
      bgColor: 'bg-accent-green/10',
      description: t.showcase.demos.support.desc,
      steps: [
        { type: 'trigger', text: t.showcase.demos.support.step1 },
        { type: 'ai', text: t.showcase.demos.support.step2 },
        { type: 'action', text: t.showcase.demos.support.step3 },
        { type: 'decision', text: t.showcase.demos.support.step4 }
      ]
    },
    {
      id: 'reviews',
      title: t.showcase.demos.reviews.title,
      icon: Star,
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-500/10',
      description: t.showcase.demos.reviews.desc,
      steps: [
        { type: 'trigger', text: t.showcase.demos.reviews.step1 },
        { type: 'ai', text: t.showcase.demos.reviews.step2 },
        { type: 'action', text: t.showcase.demos.reviews.step3 },
        { type: 'action', text: t.showcase.demos.reviews.step4 }
      ]
    }
  ];

  const [activeDemo, setActiveDemo] = useState(demos[0]);

  // Update active demo when language changes to reflect new text
  useEffect(() => {
    setActiveDemo(current => demos.find(d => d.id === current.id) || demos[0]);
  }, [t]);

  return (
    <section id="showcase" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-graphite mb-4">
            {t.showcase.title} <span className="text-primary">{t.showcase.titleSpan}</span> {t.showcase.titleSuffix}
          </h2>
          <p className="text-lg text-soft-indigo max-w-2xl mx-auto">
            {t.showcase.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Menu */}
          <div className="lg:col-span-1 space-y-4">
            {demos.map((demo) => (
              <button
                key={demo.id}
                onClick={() => setActiveDemo(demo)}
                className={`w-full text-left p-4 rounded-xl transition-all duration-300 flex items-center gap-4 border ${
                  activeDemo.id === demo.id
                    ? 'bg-white border-primary shadow-lg ring-1 ring-primary/10'
                    : 'bg-background border-transparent hover:bg-white hover:border-light-slate'
                }`}
              >
                <div className={`w-10 h-10 rounded-lg ${demo.bgColor} flex items-center justify-center flex-shrink-0`}>
                  <demo.icon className={demo.color} size={20} />
                </div>
                <div>
                  <h3 className={`font-bold ${activeDemo.id === demo.id ? 'text-graphite' : 'text-soft-indigo'}`}>
                    {demo.title}
                  </h3>
                </div>
                {activeDemo.id === demo.id && (
                  <ArrowRight className="ml-auto text-primary" size={16} />
                )}
              </button>
            ))}
          </div>

          {/* Visualization */}
          <div className="lg:col-span-2">
            <div className="bg-graphite rounded-3xl p-8 lg:p-10 shadow-2xl relative overflow-hidden min-h-[500px] flex flex-col justify-center">
              {/* Background Grid */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
              
              <div className="relative z-10 space-y-8">
                <div className="flex items-center gap-3 mb-8 pb-6 border-b border-white/10">
                  <div className={`w-12 h-12 rounded-xl ${activeDemo.bgColor} flex items-center justify-center`}>
                    <activeDemo.icon className={activeDemo.color} size={24} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{activeDemo.title} Flow</h3>
                    <p className="text-white/60">{activeDemo.description}</p>
                  </div>
                </div>

                <div className="space-y-4">
                  {activeDemo.steps.map((step, index) => (
                    <div key={index} className="flex items-center gap-4 animate-float" style={{ animationDelay: `${index * 0.2}s` }}>
                      {/* Step Number/Icon */}
                      <div className="relative flex flex-col items-center">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center border-2 z-10 ${
                          step.type === 'ai' ? 'bg-purple-500/20 border-purple-500 text-purple-400' :
                          step.type === 'trigger' ? 'bg-blue-500/20 border-blue-500 text-blue-400' :
                          'bg-white/10 border-white/20 text-white'
                        }`}>
                          {step.type === 'ai' ? <Bot size={14} /> : 
                           step.type === 'trigger' ? <CheckCircle2 size={14} /> :
                           <span className="text-xs font-bold">{index + 1}</span>}
                        </div>
                        {index !== activeDemo.steps.length - 1 && (
                          <div className="h-8 w-0.5 bg-white/10 absolute top-8" />
                        )}
                      </div>

                      {/* Step Content */}
                      <div className={`flex-1 p-4 rounded-xl border ${
                        step.type === 'ai' 
                          ? 'bg-purple-500/10 border-purple-500/30 shadow-[0_0_15px_rgba(168,85,247,0.1)]' 
                          : 'bg-white/5 border-white/10'
                      }`}>
                        <div className="flex items-center justify-between">
                          <span className={`text-xs font-bold uppercase tracking-wider ${
                            step.type === 'ai' ? 'text-purple-400' : 
                            step.type === 'trigger' ? 'text-blue-400' : 
                            'text-white/40'
                          }`}>
                            {step.type === 'decision' ? 'Logic' : step.type}
                          </span>
                        </div>
                        <p className="text-white font-medium mt-1">{step.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
