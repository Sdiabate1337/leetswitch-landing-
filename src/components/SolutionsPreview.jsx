import { useLanguage } from '../context/LanguageContext';
import { ArrowRight, MessageSquare, Receipt, Headset, Star, CheckCircle2, ArrowRightCircle, Globe, Zap, BarChart3, Target } from 'lucide-react';

export default function SolutionsPreview() {
    const { t } = useLanguage();

    const icons = {
        sales: <MessageSquare size={24} />,
        invoice: <Receipt size={24} />,
        support: <Headset size={24} />,
        reviews: <Star size={24} />
    };

    const colors = {
        sales: 'text-green-600 bg-green-50 border-green-200',
        invoice: 'text-blue-600 bg-blue-50 border-blue-200',
        support: 'text-purple-600 bg-purple-50 border-purple-200',
        reviews: 'text-orange-600 bg-orange-50 border-orange-200',
    };

    return (
        <section className="py-16 sm:py-32 bg-background relative" id="solutions">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-end justify-between mb-12 sm:mb-20 gap-8">
                    <div className="max-w-3xl">
                        <h2 className="text-4xl sm:text-5xl font-bold text-graphite mb-6 tracking-tight">
                            {t.solutions.headline} <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-electric-blue">
                                {t.solutions.headlineSpan}
                            </span>
                        </h2>
                        <p className="text-xl text-soft-indigo/80 font-medium">
                            {t.solutions.subheadline}
                        </p>
                    </div>
                    <div className="hidden lg:block">
                        <div className="flex -space-x-4">
                            {/* Decorative avatars or stack indicator could go here */}
                        </div>
                    </div>
                </div>

                <div className="flex md:grid md:grid-cols-2 gap-4 md:gap-8 overflow-x-auto md:overflow-visible pb-8 md:pb-0 snap-x snap-mandatory px-4 md:px-0 -mx-4 md:mx-0 hide-scrollbar">
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

            <div className="mt-16 text-center">
                <a href="#contact" className="inline-flex items-center justify-center gap-2 bg-primary text-white hover:bg-primary-light px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg hover:-translate-y-1">
                    {t.nav.bookCall}
                    <ArrowRight size={20} />
                </a>
            </div>
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
        <div className="group bg-white rounded-[2rem] p-10 shadow-sm border border-light-slate hover:shadow-2xl hover:border-primary/20 transition-all duration-300 hover:-translate-y-1 min-w-[85vw] md:min-w-0 snap-center">
            <div className="flex items-start justify-between mb-10">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${colorClass} border shadow-inner`}>
                    {icon}
                </div>
                {tag && (
                    <div className="bg-graphite text-white px-3 py-1.5 rounded-full text-[11px] font-bold tracking-wide uppercase border border-white/10 shadow-lg flex items-center">
                        {tagIcons[solutionKey]}
                        {tag}
                    </div>
                )}
            </div>

            <h3 className="text-2xl font-bold text-graphite mb-8">{title}</h3>

            <div className="space-y-6 mb-10 relative">
                {/* Connecting line */}
                <div className="absolute left-[19px] top-8 bottom-8 w-0.5 bg-light-slate/40 border-l border-dashed border-soft-indigo/30" />

                <div className="relative flex gap-6 items-start">
                    <div className="shrink-0 w-10 h-10 rounded-full bg-red-50 border border-red-100 flex items-center justify-center text-red-500 z-10">
                        <span className="text-xs font-bold">{t.solutions.ui.old}</span>
                    </div>
                    <div className="pt-2">
                        <p className="text-xs font-bold text-soft-indigo uppercase tracking-wider mb-1 opacity-60">{t.solutions.ui.before}</p>
                        <p className="text-soft-indigo text-base font-medium line-through decoration-red-300/50">
                            {replace.text}
                        </p>
                    </div>
                </div>

                <div className="relative flex gap-6 items-start">
                    <div className="shrink-0 w-10 h-10 rounded-full bg-green-50 border border-green-100 flex items-center justify-center text-green-600 z-10 shadow-sm">
                        <CheckCircle2 size={18} />
                    </div>
                    <div className="pt-2">
                        <p className="text-xs font-bold text-green-600 uppercase tracking-wider mb-1">{t.solutions.ui.after}</p>
                        <p className="text-graphite text-lg font-bold">
                            {withItem.text}
                        </p>
                    </div>
                </div>
            </div>

            <div className="bg-background rounded-xl p-6 border border-light-slate/60 flex items-center justify-between group-hover:bg-primary/5 group-hover:border-primary/10 transition-colors">
                <div>
                    <p className="text-[10px] font-bold text-soft-indigo uppercase tracking-widest mb-1">{t.solutions.ui.impact}</p>
                    <div className="font-bold text-graphite text-base flex items-center gap-2">
                        {result}
                    </div>
                </div>
                <div className="w-10 h-10 rounded-full bg-white border border-light-slate flex items-center justify-center group-hover:scale-110 transition-transform shadow-sm">
                    <ArrowRight className="text-primary" size={18} />
                </div>
            </div>
        </div>
    );
}
