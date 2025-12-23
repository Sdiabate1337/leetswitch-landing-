import { useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Users, Wrench, Clock, AlertOctagon, ArrowDown, ArrowRight } from 'lucide-react';
import PremiumCard from './ui/PremiumCard';
import SectionDivider from './ui/SectionDivider';

export default function Problem() {
    const { t } = useLanguage();

    return (
        <section className="relative py-24 sm:py-32 bg-background overflow-hidden" id="problem">
            {/* Refined Background Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16 sm:mb-24 max-w-4xl mx-auto">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-bold uppercase tracking-wider mb-8">
                        <AlertOctagon size={14} /> The Bottleneck
                    </div>
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8 tracking-tight leading-[1.1]">
                        {t.problem.headline} <br className="hidden sm:block" />
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-orange-400">
                            {t.problem.headlineSpan}
                        </span>
                    </h2>
                    <p className="text-xl text-gray-400 mb-8 leading-relaxed max-w-2xl mx-auto">
                        {t.problem.subheadline}
                    </p>
                </div>

                <div className="flex md:grid md:grid-cols-3 gap-6 md:gap-8 lg:gap-12 overflow-x-auto md:overflow-visible pb-8 md:pb-0 snap-x snap-mandatory px-4 md:px-0 -mx-4 md:mx-0 hide-scrollbar">
                    <ProblemCard
                        icon={<Users size={32} />}
                        iconColor="text-blue-400"
                        bgAccent="bg-blue-500/10"
                        title={t.problem.cards.hiring.title}
                        solution={t.problem.cards.hiring.solution}
                        reality={t.problem.cards.hiring.reality}
                        result={t.problem.cards.hiring.result}
                    />
                    <ProblemCard
                        icon={<Wrench size={32} />}
                        iconColor="text-indigo-400"
                        bgAccent="bg-indigo-500/10"
                        title={t.problem.cards.tools.title}
                        solution={t.problem.cards.tools.solution}
                        reality={t.problem.cards.tools.reality}
                        result={t.problem.cards.tools.result}
                    />
                    <ProblemCard
                        icon={<Clock size={32} />}
                        iconColor="text-amber-400"
                        bgAccent="bg-amber-500/10"
                        title={t.problem.cards.founder.title}
                        solution={t.problem.cards.founder.solution}
                        reality={t.problem.cards.founder.reality}
                        result={t.problem.cards.founder.result}
                    />
                </div>
            </div>
            
            <SectionDivider />
        </section>
    );
}

function ProblemCard({ icon, iconColor, bgAccent, title, solution, reality, result }) {
    return (
        <PremiumCard className="p-8 min-w-[85vw] md:min-w-0 snap-center h-full flex flex-col">
            <div className={`w-14 h-14 rounded-xl ${bgAccent} ${iconColor} flex items-center justify-center mb-8 border border-white/5`}>
                {icon}
            </div>

            <h3 className="text-2xl font-bold text-white mb-8 group-hover:text-primary transition-colors">{title}</h3>

            <div className="space-y-6 flex-grow">
                <div className="relative pl-6 pb-6 border-l border-white/10">
                    <div className="absolute -left-[5px] top-0 w-2.5 h-2.5 rounded-full bg-gray-600 border-2 border-background" />
                    <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Expectation</p>
                    <p className="text-sm text-gray-400 leading-relaxed">
                        {solution.replace('The typical solution: ', '')}
                    </p>
                </div>

                <div className="relative pl-6 border-l border-red-500/30">
                    <div className="absolute -left-[5px] top-0 w-2.5 h-2.5 rounded-full bg-red-500 border-2 border-background" />
                    <p className="text-xs font-bold text-red-400 uppercase tracking-wider mb-2">Reality</p>
                    <p className="text-base font-medium text-gray-200 leading-relaxed">
                        {reality.replace('The reality: ', '')}
                    </p>
                </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 flex items-center gap-3">
                <ArrowDown className="text-red-400 shrink-0" size={20} />
                <p className="font-bold text-sm text-white">
                    {result.replace('Result: ', '')}
                </p>
            </div>
        </PremiumCard>
    );
}
