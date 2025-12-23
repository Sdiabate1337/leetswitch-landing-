import { useLanguage } from '../context/LanguageContext';
import { ArrowRight, MessageSquare, Receipt, Headset, Star, CheckCircle2, ArrowRightCircle, Globe, Zap, BarChart3, Target } from 'lucide-react';
import PremiumCard from './ui/PremiumCard';
import SectionDivider from './ui/SectionDivider';

export default function SolutionsPreview() {
    const { t } = useLanguage();

    const icons = {
        sales: <MessageSquare size={24} />,
        invoice: <Receipt size={24} />,
        support: <Headset size={24} />,
        reviews: <Star size={24} />
    };

    const colors = {
        sales: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
        invoice: 'text-blue-400 bg-blue-500/10 border-blue-500/20',
        support: 'text-purple-400 bg-purple-500/10 border-purple-500/20',
        reviews: 'text-orange-400 bg-orange-500/10 border-orange-500/20',
    };

    return (
        <section className="py-24 sm:py-32 bg-background relative overflow-hidden" id="solutions">
            {/* Background Elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col lg:flex-row items-end justify-between mb-16 sm:mb-24 gap-8">
                    <div className="max-w-3xl">
                        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-8 tracking-tight">
                            {t.solutions.headline} <br />
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                                {t.solutions.headlineSpan}
                            </span>
                        </h2>
                        <p className="text-xl text-gray-400 font-medium">
                            {t.solutions.subheadline}
                        </p>
                    </div>
                </div>

                <div className="flex md:grid md:grid-cols-2 gap-6 md:gap-8 overflow-x-auto md:overflow-visible pb-8 md:pb-0 snap-x snap-mandatory px-4 md:px-0 -mx-4 md:mx-0 hide-scrollbar">
                    {Object.entries(t.solutions.cards).map(([key, card]) => (
                        <SolutionCard
                            key={key}
                            solutionKey={key}
                            icon={icons[key]}
                            colorClass={colors[key]}
                            title={card.title}
                            replace={card.replace}
                            withItem={card.with}
                            result={card.result}
                            cta={t.solutions.cta}
                            tag={card.tag}
                        />
                    ))}
                </div>
            </div>

            <div className="mt-20 text-center">
                <a href="#contact" className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] hover:-translate-y-1">
                    {t.nav.bookCall}
                    <ArrowRight size={20} />
                </a>
            </div>
            
            <SectionDivider />
        </section>
    );
}

function SolutionCard({ icon, colorClass, title, replace, withItem, result, cta, tag, solutionKey }) {
    const { t } = useLanguage();

    const tagIcons = {
        sales: <Globe size={12} className="mr-1.5" />,
        reviews: <Zap size={12} className="mr-1.5" />,
        invoice: <BarChart3 size={12} className="mr-1.5" />,
        support: <Target size={12} className="mr-1.5" />
    };

    return (
        <PremiumCard className="p-10 min-w-[85vw] md:min-w-0 snap-center">
            <div className="flex items-start justify-between mb-10">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${colorClass} border shadow-inner`}>
                    {icon}
                </div>
                {tag && (
                    <div className="bg-white/5 text-gray-300 px-3 py-1.5 rounded-full text-[11px] font-bold tracking-wide uppercase border border-white/10 shadow-lg flex items-center backdrop-blur-md">
                        {tagIcons[solutionKey]}
                        {tag}
                    </div>
                )}
            </div>

            <h3 className="text-2xl font-bold text-white mb-8">{title}</h3>

            <div className="space-y-6 mb-10 relative">
                {/* Connecting line */}
                <div className="absolute left-[19px] top-8 bottom-8 w-0.5 bg-white/10 border-l border-dashed border-white/20" />

                <div className="relative flex gap-6 items-start">
                    <div className="shrink-0 w-10 h-10 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-500 z-10">
                        <span className="text-xs font-bold">{t.solutions.ui.old}</span>
                    </div>
                    <div className="pt-2">
                        <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1 opacity-60">{t.solutions.ui.before}</p>
                        <p className="text-gray-400 text-base font-medium line-through decoration-red-400/30">
                            {replace.text}
                        </p>
                    </div>
                </div>

                <div className="relative flex gap-6 items-start">
                    <div className="shrink-0 w-10 h-10 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 z-10 shadow-sm">
                        <CheckCircle2 size={18} />
                    </div>
                    <div className="pt-2">
                        <p className="text-xs font-bold text-emerald-400 uppercase tracking-wider mb-1">{t.solutions.ui.after}</p>
                        <p className="text-white text-lg font-bold">
                            {withItem.text}
                        </p>
                    </div>
                </div>
            </div>

            <div className="bg-white/5 rounded-xl p-6 border border-white/5 flex items-center justify-between group-hover:bg-white/10 transition-colors">
                <div>
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">{t.solutions.ui.impact}</p>
                    <div className="font-bold text-white text-base flex items-center gap-2">
                        {result}
                    </div>
                </div>
                <div className="w-10 h-10 rounded-full bg-white/10 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform shadow-sm">
                    <ArrowRight className="text-primary" size={18} />
                </div>
            </div>
        </PremiumCard>
    );
}
