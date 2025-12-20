import { useLanguage } from '../context/LanguageContext';
import { Search, Code2, Rocket, LineChart, CheckCircle2, Clock, Shield, Lock, Zap, Target, ArrowRight } from 'lucide-react';

export default function Process() {
    const { t } = useLanguage();

    const steps = [
        { key: 'audit', color: 'from-blue-400 to-blue-600', icon: Search, badge: 'Week 1' },
        { key: 'build', color: 'from-purple-400 to-purple-600', icon: Code2, badge: 'Weeks 2-3' },
        { key: 'deploy', color: 'from-emerald-400 to-emerald-600', icon: Rocket, badge: 'Week 4' },
        { key: 'optimize', color: 'from-blue-400 to-purple-500', icon: LineChart, badge: 'Ongoing' },
    ];

    const trustIcons = {
        target: <Target size={20} />,
        zap: <Zap size={20} />,
        shield: <Shield size={20} />,
        lock: <Lock size={20} />,
    };

    return (
        <section className="py-16 sm:py-32 bg-graphite text-white relative overflow-hidden" id="process">
            {/* Background Aesthetics */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Section Header */}
                <div className="text-center mb-12 sm:mb-24">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-electric-blue uppercase tracking-widest mb-6">
                        <Clock size={12} /> {t.process.ui.roadmap}
                    </div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
                        {t.process.title} <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/50">
                            {t.process.titleSpan}
                        </span>
                    </h2>
                    <p className="text-xl text-light-slate/60 font-light max-w-2xl mx-auto">
                        {t.process.subtitle}
                    </p>
                </div>

                {/* Process Steps */}
                <div className="relative space-y-12 sm:space-y-24 mb-20 sm:mb-32">
                    {/* Connecting Stems */}
                    <div className="absolute left-6 md:left-1/2 top-12 bottom-12 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent hidden md:block" />

                    {steps.map((step, index) => {
                        const data = t.process.steps[step.key];
                        const isEven = index % 2 === 0;

                        return (
                            <div key={step.key} className={`relative flex flex-col md:flex-row gap-8 md:gap-0 ${isEven ? 'md:flex-row-reverse' : ''} items-center`}>

                                {/* Empty Side for Desktop alignment */}
                                <div className="hidden md:block md:w-1/2" />

                                {/* Center Node */}
                                <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-graphite border-4 border-graphite z-20 flex items-center justify-center shadow-xl">
                                    <div className={`w-full h-full rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center text-white shadow-lg`}>
                                        <step.icon size={20} />
                                    </div>
                                </div>

                                {/* Content Card */}
                                <div className={`w-full md:w-1/2 pl-20 md:pl-0 ${isEven ? 'md:pr-16 md:text-right' : 'md:pl-16 md:text-left'}`}>
                                    <div className="relative">
                                        {/* Mobile Line */}
                                        <div className="absolute left-[-42px] top-0 bottom-0 w-px bg-white/10 md:hidden" />

                                        <div className={`inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest mb-3 ${isEven ? 'md:flex-row-reverse' : ''}`}>
                                            <span className={`text-transparent bg-clip-text bg-gradient-to-r ${step.color}`}>{data.duration}</span>
                                            <div className={`w-12 h-px bg-gradient-to-r ${step.color}`} />
                                        </div>

                                        <h3 className="text-3xl font-bold text-white mb-6">{data.title}</h3>

                                        <div className={`bg-white/[0.02] border border-white/5 rounded-2xl p-6 hover:bg-white/[0.04] transition-colors text-left group`}>
                                            <div className="grid gap-6">
                                                {/* What Happens */}
                                                <div className="pb-6 border-b border-white/5">
                                                    <h4 className="flex items-center gap-2 text-sm font-bold text-white mb-4">
                                                        <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${step.color}`} />
                                                        {t.process.ui.whatHappens}
                                                    </h4>
                                                    <ul className="space-y-3">
                                                        {data.happens.items.map((item, i) => (
                                                            <li key={i} className="text-sm text-light-slate/80 leading-relaxed pl-4 border-l border-white/10">
                                                                {item}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>

                                                {/* Provide / Deliver Split */}
                                                <div className="grid sm:grid-cols-2 gap-6">
                                                    <div>
                                                        <h4 className="text-xs font-bold text-light-slate/50 uppercase tracking-wider mb-3">{t.process.ui.youProvide}</h4>
                                                        <ul className="space-y-2">
                                                            {data.provide.items.map((item, i) => (
                                                                <li key={i} className="text-xs text-light-slate/60 flex items-start gap-2">
                                                                    <ArrowRight size={12} className="mt-0.5 shrink-0" /> {item}
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                    <div>
                                                        <h4 className="text-xs font-bold text-light-slate/50 uppercase tracking-wider mb-3">{t.process.ui.weDeliver}</h4>
                                                        <ul className="space-y-2">
                                                            {data.deliver.items.map((item, i) => (
                                                                <li key={i} className="text-xs text-white/90 flex items-start gap-2 font-medium">
                                                                    <CheckCircle2 size={12} className="mt-0.5 text-emerald-400 shrink-0" /> {item}
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Footer: Timeline & Trust */}
                <div className="grid lg:grid-cols-2 gap-8 mb-24">
                    <div className="bg-white/[0.02] border border-white/5 rounded-3xl p-8 backdrop-blur-sm">
                        <h3 className="text-lg font-bold text-white mb-6">{t.process.ui.paymentSchedule}</h3>
                        <div className="space-y-4">
                            <div className="flex items-center justify-between p-4 rounded-xl bg-white/[0.02] border border-white/5">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center text-xs font-bold">1</div>
                                    <div>
                                        <div className="text-white font-bold text-sm">{t.process.ui.phases.audit}</div>
                                        <div className="text-xs text-light-slate/60">{t.process.ui.weeks.one}</div>
                                    </div>
                                </div>
                                <div className="text-xs font-bold text-emerald-400 uppercase tracking-wide bg-emerald-400/10 px-3 py-1 rounded-full">{t.process.ui.free}</div>
                            </div>
                            <div className="flex items-center justify-between p-4 rounded-xl bg-white/[0.02] border border-white/5">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-soft-indigo/20 text-soft-indigo flex items-center justify-center text-xs font-bold">2</div>
                                    <div>
                                        <div className="text-white font-bold text-sm">{t.process.ui.phases.build}</div>
                                        <div className="text-xs text-light-slate/60">{t.process.ui.weeks.twoThree}</div>
                                    </div>
                                </div>
                                <div className="text-xs font-bold text-white/60 uppercase tracking-wide">{t.process.ui.deposit}</div>
                            </div>
                            <div className="flex items-center justify-between p-4 rounded-xl bg-white/[0.02] border border-white/5">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-accent-green/20 text-accent-green flex items-center justify-center text-xs font-bold">3</div>
                                    <div>
                                        <div className="text-white font-bold text-sm">{t.process.ui.phases.handover}</div>
                                        <div className="text-xs text-light-slate/60">{t.process.ui.weeks.four}</div>
                                    </div>
                                </div>
                                <div className="text-xs font-bold text-white/60 uppercase tracking-wide">{t.process.ui.balance}</div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white/[0.02] border border-white/5 rounded-3xl p-8 backdrop-blur-sm">
                        <h3 className="text-lg font-bold text-white mb-6">{t.process.ui.ourGuarantees}</h3>
                        <div className="grid sm:grid-cols-2 gap-4">
                            {t.process.trust.map((item, i) => (
                                <div key={i} className="p-4 rounded-xl bg-white/[0.02] hover:bg-white/[0.05] transition-colors border border-white/5">
                                    <div className="mb-3 text-electric-blue">{trustIcons[item.icon]}</div>
                                    <div className="text-sm font-bold text-white mb-1">{item.title}</div>
                                    <div className="text-xs text-light-slate/60">{item.desc}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="text-center mt-20">
                    <a href="#contact" className="inline-flex items-center justify-center gap-2 bg-white text-graphite hover:bg-gray-100 px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg hover:-translate-y-1">
                        {t.nav.bookCall}
                        <ArrowRight size={20} />
                    </a>
                </div>


            </div>
        </section>
    );
}
