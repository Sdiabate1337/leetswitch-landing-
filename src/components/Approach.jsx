import { useLanguage } from '../context/LanguageContext';
import { Target, Code2, Zap, BarChart3, ArrowRight } from 'lucide-react';

export default function Approach() {
    const { t } = useLanguage();

    return (
        <section className="relative py-16 sm:py-32 bg-graphite overflow-hidden">
            {/* Dynamic Background */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px]" />
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] mix-blend-screen opacity-40 animate-pulse" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-electric-blue/10 rounded-full blur-[100px] mix-blend-screen opacity-30" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-12 sm:mb-20 max-w-3xl mx-auto">
                    <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 tracking-tight">
                        {t.approach.headline} <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-blue to-accent-green">
                            {t.approach.headlineSpan}
                        </span>
                    </h2>
                    <p className="text-xl text-light-slate/80 leading-relaxed font-light">
                        {t.approach.subheadline}
                    </p>
                </div>

                <div className="flex md:grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 overflow-x-auto md:overflow-visible pb-8 md:pb-0 snap-x snap-mandatory px-4 md:px-0 -mx-4 md:mx-0 hide-scrollbar">
                    <ApproachCard
                        icon={<Target size={24} />}
                        iconClass="text-accent-green"
                        bgClass="bg-accent-green/10"
                        title={t.approach.cards.constraint.title}
                        desc={t.approach.cards.constraint.desc}
                        delay={0}
                    />
                    <ApproachCard
                        icon={<Code2 size={24} />}
                        iconClass="text-electric-blue"
                        bgClass="bg-electric-blue/10"
                        title={t.approach.cards.custom.title}
                        desc={t.approach.cards.custom.desc}
                        delay={100}
                    />
                    <ApproachCard
                        icon={<Zap size={24} />}
                        iconClass="text-yellow-400"
                        bgClass="bg-yellow-400/10"
                        title={t.approach.cards.speed.title}
                        desc={t.approach.cards.speed.desc}
                        delay={200}
                    />
                    <ApproachCard
                        icon={<BarChart3 size={24} />}
                        iconClass="text-purple-400"
                        bgClass="bg-purple-400/10"
                        title={t.approach.cards.metrics.title}
                        desc={t.approach.cards.metrics.desc}
                        delay={300}
                    />
                </div>
            </div>

            <div className="mt-16 text-center relative z-10">
                <a href="#contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold text-lg bg-white text-obsidian hover:bg-primary hover:text-white transition-all shadow-[0_0_20px_rgba(47,47,47,0.1)] hover:shadow-[0_0_20px_rgba(76,110,245,0.4)] hover:-translate-y-0.5 duration-200 cursor-pointer">
                    {t.nav.bookCall}
                    <ArrowRight size={20} />
                </a>
            </div>
        </section>
    );
}

function ApproachCard({ icon, iconClass, bgClass, title, desc, delay }) {
    return (
        <div
            className="group relative bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-all duration-300 hover:-translate-y-2 min-w-[85vw] md:min-w-0 snap-center"
            style={{ animationDelay: `${delay}ms` }}
        >
            <div className={`w-12 h-12 rounded-lg ${bgClass} ${iconClass} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {icon}
            </div>

            <h3 className="text-xl font-bold mb-4 text-white group-hover:text-white transition-colors">{title}</h3>
            <p className="text-sm text-light-slate/60 leading-relaxed group-hover:text-light-slate/90 transition-colors">
                {desc}
            </p>

            {/* Hover glow effect */}
            <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/0 group-hover:ring-white/20 transition-all duration-300 pointer-events-none" />
        </div>
    );
}
