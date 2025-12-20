import { useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Users, Wrench, Clock, AlertOctagon, ArrowDown, ArrowRight } from 'lucide-react';

export default function Problem() {
    const { t } = useLanguage();

    return (
        <section className="relative py-12 sm:py-32 bg-white overflow-hidden" id="problem">
            {/* Refined Background Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]" />
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-background/50 via-transparent to-background/50 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-12 sm:mb-20 max-w-4xl mx-auto">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-100 text-red-600 text-xs font-bold uppercase tracking-wider mb-6">
                        <AlertOctagon size={14} /> The Bottleneck
                    </div>
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-graphite mb-8 tracking-tight leading-[1.1]">
                        {t.problem.headline} <br className="hidden sm:block" />
                        <span className="relative inline-block">
                            <span className="relative z-10 text-graphite">{t.problem.headlineSpan}</span>
                            <span className="absolute bottom-2 left-0 w-full h-3 bg-red-100/50 -rotate-1 -z-0"></span>
                        </span>
                    </h2>
                    <p className="text-xl text-soft-indigo mb-8 leading-relaxed max-w-2xl mx-auto">
                        {t.problem.subheadline}
                    </p>
                </div>

                <div className="flex md:grid md:grid-cols-3 gap-4 md:gap-8 lg:gap-12 overflow-x-auto md:overflow-visible pb-8 md:pb-0 snap-x snap-mandatory px-4 md:px-0 -mx-4 md:mx-0 hide-scrollbar">
                    <ProblemCard
                        icon={<Users size={32} />}
                        iconColor="text-blue-600"
                        bgAccent="bg-blue-50"
                        title={t.problem.cards.hiring.title}
                        solution={t.problem.cards.hiring.solution}
                        reality={t.problem.cards.hiring.reality}
                        result={t.problem.cards.hiring.result}
                    />
                    <ProblemCard
                        icon={<Wrench size={32} />}
                        iconColor="text-indigo-600"
                        bgAccent="bg-indigo-50"
                        title={t.problem.cards.tools.title}
                        solution={t.problem.cards.tools.solution}
                        reality={t.problem.cards.tools.reality}
                        result={t.problem.cards.tools.result}
                    />
                    <ProblemCard
                        icon={<Clock size={32} />}
                        iconColor="text-amber-600"
                        bgAccent="bg-amber-50"
                        title={t.problem.cards.founder.title}
                        solution={t.problem.cards.founder.solution}
                        reality={t.problem.cards.founder.reality}
                        result={t.problem.cards.founder.result}
                    />
                </div>
            </div>

            <div className="mt-16 text-center">
                <a href="#contact" className="inline-flex items-center justify-center gap-2 bg-primary text-white hover:bg-primary-light px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg hover:-translate-y-1">
                    {t.nav.bookCall}
                    <ArrowRight size={20} />
                </a>
            </div>
        </section>
    );
}

function ProblemCard({ icon, iconColor, bgAccent, title, solution, reality, result }) {
    return (
        <div className="group relative bg-white rounded-2xl p-8 shadow-sm border border-light-slate hover:shadow-xl hover:border-light-slate/80 transition-all duration-300 hover:-translate-y-1 min-w-[85vw] md:min-w-0 snap-center">
            <div className={`w-14 h-14 rounded-xl ${bgAccent} ${iconColor} flex items-center justify-center mb-8`}>
                {icon}
            </div>

            <h3 className="text-2xl font-bold text-graphite mb-8 group-hover:text-primary transition-colors">{title}</h3>

            <div className="space-y-6">
                <div className="relative pl-6 pb-6 border-l border-light-slate">
                    <div className="absolute -left-[5px] top-0 w-2.5 h-2.5 rounded-full bg-light-slate border-2 border-white" />
                    <p className="text-xs font-bold text-soft-indigo uppercase tracking-wider mb-2 opacity-70">Expectation</p>
                    <p className="text-sm text-soft-indigo leading-relaxed">
                        {solution.replace('The typical solution: ', '')}
                    </p>
                </div>

                <div className="relative pl-6 border-l border-red-200">
                    <div className="absolute -left-[5px] top-0 w-2.5 h-2.5 rounded-full bg-red-400 border-2 border-white" />
                    <p className="text-xs font-bold text-red-500 uppercase tracking-wider mb-2">Reality</p>
                    <p className="text-base font-medium text-graphite leading-relaxed">
                        {reality.replace('The reality: ', '')}
                    </p>
                </div>
            </div>

            <div className="mt-8 pt-6 border-t border-light-slate/40 flex items-center gap-3">
                <ArrowDown className="text-red-500 shrink-0" size={20} />
                <p className="font-bold text-sm text-graphite">
                    {result.replace('Result: ', '')}
                </p>
            </div>
        </div>
    );
}
