import { useLanguage } from '../context/LanguageContext';
import { Search, Code2, Rocket, LineChart, CheckCircle2, Clock, ArrowRight } from 'lucide-react';
import PremiumCard from './ui/PremiumCard';
import SectionDivider from './ui/SectionDivider';

export default function Process() {
    const { t } = useLanguage();

    const steps = [
        { key: 'audit', color: 'from-blue-400 to-blue-600', icon: Search, badge: 'Week 1' },
        { key: 'build', color: 'from-purple-400 to-purple-600', icon: Code2, badge: 'Weeks 2-3' },
        { key: 'deploy', color: 'from-emerald-400 to-emerald-600', icon: Rocket, badge: 'Week 4' },
        { key: 'optimize', color: 'from-blue-400 to-purple-500', icon: LineChart, badge: 'Ongoing' },
    ];

    return (
        <section className="py-24 sm:py-32 bg-background text-white relative overflow-hidden" id="process">
            {/* Background Aesthetics */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Section Header */}
                <div className="text-center mb-16 sm:mb-24">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-primary uppercase tracking-widest mb-8">
                        <Clock size={12} /> {t.process.ui.roadmap}
                    </div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 tracking-tight">
                        {t.process.title} <br className="hidden md:block" />
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-gray-500">
                            {t.process.titleSpan}
                        </span>
                    </h2>
                    <p className="text-xl text-gray-400 font-light max-w-2xl mx-auto">
                        {t.process.subtitle}
                    </p>
                </div>

                {/* Process Steps */}
                <div className="relative space-y-12 sm:space-y-24 mb-20 sm:mb-32">
                    {/* Connecting Stems */}
                    <div className="absolute left-6 md:left-1/2 top-12 bottom-12 w-px bg-gradient-to-b from-transparent via-primary/30 to-transparent hidden md:block" />

                    {steps.map((step, index) => {
                        const data = t.process.steps[step.key];
                        const isEven = index % 2 === 0;

                        return (
                            <div key={step.key} className={`relative flex flex-col md:flex-row gap-8 md:gap-0 ${isEven ? 'md:flex-row-reverse' : ''} items-center`}>

                                {/* Empty Side for Desktop alignment */}
                                <div className="hidden md:block md:w-1/2" />

                                {/* Center Node */}
                                <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-background border-4 border-background z-20 flex items-center justify-center shadow-[0_0_20px_rgba(59,130,246,0.3)]">
                                    <div className={`w-full h-full rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center text-white shadow-lg`}>
                                        <step.icon size={20} />
                                    </div>
                                </div>

                                {/* Content Card */}
                                <div className={`w-full md:w-1/2 pl-20 md:pl-0 ${isEven ? 'md:pr-16 md:text-right' : 'md:pl-16 md:text-left'}`}>
                                    <div className="relative">
                                        {/* Mobile Line */}
                                        <div className="absolute left-[-42px] top-0 bottom-0 w-px bg-white/10 md:hidden" />

                                        <div className={`inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest mb-4 ${isEven ? 'md:flex-row-reverse' : ''}`}>
                                            <span className={`text-transparent bg-clip-text bg-gradient-to-r ${step.color}`}>{data.duration}</span>
                                            <div className={`w-12 h-px bg-gradient-to-r ${step.color}`} />
                                        </div>

                                        <h3 className="text-3xl font-bold text-white mb-6">{data.title}</h3>

                                        <PremiumCard className="p-8 text-left group hover:border-primary/30">
                                            <div className="grid gap-8">
                                                {/* What Happens */}
                                                <div className="pb-8 border-b border-white/5">
                                                    <h4 className="flex items-center gap-2 text-sm font-bold text-white mb-4">
                                                        <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${step.color}`} />
                                                        {t.process.ui.whatHappens}
                                                    </h4>
                                                    <ul className="space-y-3">
                                                        {data.happens.items.map((item, i) => (
                                                            <li key={i} className="text-sm text-gray-400 leading-relaxed pl-4 border-l border-white/10 group-hover:border-primary/30 transition-colors">
                                                                {item}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>

                                                {/* Provide / Deliver Split */}
                                                <div className="grid sm:grid-cols-2 gap-8">
                                                    <div>
                                                        <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-4">{t.process.ui.youProvide}</h4>
                                                        <ul className="space-y-2">
                                                            {data.provide.items.map((item, i) => (
                                                                <li key={i} className="flex items-start gap-2 text-sm text-gray-400">
                                                                    <span className="text-gray-600 mt-1">→</span>
                                                                    {item}
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                    <div>
                                                        <h4 className="text-xs font-bold text-primary uppercase tracking-wider mb-4">{t.process.ui.weDeliver}</h4>
                                                        <ul className="space-y-2">
                                                            {data.deliver.items.map((item, i) => (
                                                                <li key={i} className="flex items-start gap-2 text-sm text-white font-medium">
                                                                    <CheckCircle2 size={14} className="text-primary mt-0.5 shrink-0" />
                                                                    {item}
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </PremiumCard>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                <div className="text-center">
                    <a href="#contact" className="inline-flex items-center justify-center gap-2 bg-white text-background hover:bg-gray-100 px-8 py-4 rounded-full font-bold text-lg transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] hover:-translate-y-1">
                        {t.nav.bookCall}
                        <ArrowRight size={20} />
                    </a>
                </div>
            </div>
            
            <SectionDivider />
        </section>
    );
}
