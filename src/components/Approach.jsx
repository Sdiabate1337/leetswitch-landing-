import { useLanguage } from '../context/LanguageContext';
import { Target, Code2, Zap, BarChart3, ArrowRight } from 'lucide-react';
import PremiumCard from './ui/PremiumCard';
import SectionDivider from './ui/SectionDivider';

export default function Approach() {
    const { t } = useLanguage();

    return (
        <section className="relative py-24 sm:py-32 bg-background overflow-hidden">
            {/* Dynamic Background */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] mix-blend-screen opacity-40 animate-pulse" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[100px] mix-blend-screen opacity-30" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16 sm:mb-24 max-w-3xl mx-auto">
                    <h2 className="text-4xl sm:text-5xl font-bold text-white mb-8 tracking-tight">
                        {t.approach.headline} <br />
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                            {t.approach.headlineSpan}
                        </span>
                    </h2>
                    <p className="text-xl text-gray-400 leading-relaxed font-light">
                        {t.approach.subheadline}
                    </p>
                </div>

                <div className="flex md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 overflow-x-auto md:overflow-visible pb-8 md:pb-0 snap-x snap-mandatory px-4 md:px-0 -mx-4 md:mx-0 hide-scrollbar">
                    <ApproachCard
                        icon={<Target size={24} />}
                        iconClass="text-emerald-400"
                        bgClass="bg-emerald-500/10"
                        title={t.approach.cards.constraint.title}
                        desc={t.approach.cards.constraint.desc}
                        delay={0}
                    />
                    <ApproachCard
                        icon={<Code2 size={24} />}
                        iconClass="text-blue-400"
                        bgClass="bg-blue-500/10"
                        title={t.approach.cards.custom.title}
                        desc={t.approach.cards.custom.desc}
                        delay={100}
                    />
                    <ApproachCard
                        icon={<Zap size={24} />}
                        iconClass="text-yellow-400"
                        bgClass="bg-yellow-500/10"
                        title={t.approach.cards.speed.title}
                        desc={t.approach.cards.speed.desc}
                        delay={200}
                    />
                    <ApproachCard
                        icon={<BarChart3 size={24} />}
                        iconClass="text-purple-400"
                        bgClass="bg-purple-500/10"
                        title={t.approach.cards.metrics.title}
                        desc={t.approach.cards.metrics.desc}
                        delay={300}
                    />
                </div>
            </div>

            <div className="mt-20 text-center">
                <a href="#contact" className="inline-flex items-center justify-center gap-2 bg-white text-background hover:bg-gray-100 px-8 py-4 rounded-full font-bold text-lg transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] hover:-translate-y-1">
                    {t.nav.bookCall}
                    <ArrowRight size={20} />
                </a>
            </div>
            
            <SectionDivider />
        </section>
    );
}

function ApproachCard({ icon, iconClass, bgClass, title, desc, delay }) {
    return (
        <PremiumCard 
            className="p-8 min-w-[85vw] md:min-w-0 snap-center h-full"
            style={{ animationDelay: `${delay}ms` }}
        >
            <div className={`w-12 h-12 rounded-lg ${bgClass} ${iconClass} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-white/5`}>
                {icon}
            </div>

            <h3 className="text-xl font-bold mb-4 text-white group-hover:text-primary transition-colors">{title}</h3>
            <p className="text-sm text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                {desc}
            </p>
        </PremiumCard>
    );
}
