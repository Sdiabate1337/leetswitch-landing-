import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ChevronRight, Quote, ArrowRight } from 'lucide-react';
import PremiumCard from './ui/PremiumCard';
import SectionDivider from './ui/SectionDivider';

export default function Team() {
    const { t } = useLanguage();
    const [activeIdx, setActiveIdx] = useState(0);
    const members = t.team.members;
    const activeMember = members[activeIdx];

    const nextMember = () => {
        setActiveIdx((prev) => (prev + 1) % members.length);
    };

    return (
        <section className="py-24 sm:py-32 bg-background relative overflow-hidden min-h-[80vh] flex flex-col justify-center" id="team">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
            
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 w-full relative z-10">

                {/* --- HEADER (New & Prominent) --- */}
                <div className="mb-16 lg:mb-24">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-8">
                        <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                        <span className="text-[10px] sm:text-xs font-bold text-gray-400 tracking-widest uppercase">
                            {t.team.credential || 'Engineering Excellence'}
                        </span>
                    </div>
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight">
                        {t.team.title} <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">{t.team.titleSpan}</span>
                    </h2>
                </div>

                {/* --- MOBILE VIEW (Horizontal Swipe) --- */}
                <div className="lg:hidden">
                    <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-8 hide-scrollbar -mx-4 px-4">
                        {members.map((member, idx) => (
                            <div key={idx} className="relative min-w-[85vw] snap-center">
                                <PremiumCard className="relative h-[500px] rounded-[2.5rem] overflow-hidden p-0 border-0">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />

                                    <div className="absolute bottom-0 left-0 p-8 w-full">
                                        <div className="inline-block px-3 py-1 rounded-full bg-primary text-white text-xs font-bold uppercase tracking-wider mb-4 shadow-lg shadow-primary/20">
                                            {member.role || 'Member'}
                                        </div>
                                        <h3 className="text-3xl font-bold text-white mb-4">{member.name}</h3>
                                        <p className="text-gray-300 text-lg italic leading-relaxed line-clamp-4 font-serif">
                                            "{member.bio}"
                                        </p>
                                    </div>
                                </PremiumCard>
                            </div>
                        ))}
                    </div>
                    {/* Swipe Indicator */}
                    <div className="flex justify-center gap-2 mt-4">
                        {members.map((_, idx) => (
                            <div key={idx} className={`h-1.5 rounded-full transition-all duration-300 ${idx === activeIdx ? 'w-8 bg-primary' : 'w-2 bg-white/20'}`} />
                        ))}
                    </div>
                </div>

                {/* --- DESKTOP VIEW (The "Screenshot" Layout + Modern Enhancements) --- */}
                <div className="hidden lg:flex flex-row gap-20 items-center h-full">

                    {/* COL 1: Navigation & Thumbnails */}
                    <div className="w-1/4 flex flex-col justify-between h-[600px] py-4">
                        <div className="flex justify-between items-start">
                            <span className="text-sm font-bold text-gray-600 font-mono">
                                0{activeIdx + 1} / 0{members.length}
                            </span>
                        </div>

                        <div className="flex-1 flex items-center justify-center -ml-16">
                            <span className="text-gray-700 font-bold text-xl tracking-[0.2em] uppercase -rotate-90 whitespace-nowrap opacity-20 hover:opacity-100 transition-opacity cursor-default">
                                ENGINEERS
                            </span>
                        </div>

                        <div className="flex gap-4 overflow-x-auto pb-6 hide-scrollbar pl-2">
                            {members.map((member, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setActiveIdx(idx)}
                                    className={`relative w-20 h-24 shrink-0 overflow-hidden rounded-2xl transition-all duration-500 ease-out ${activeIdx === idx
                                        ? 'opacity-100 ring-2 ring-offset-4 ring-offset-background ring-primary grayscale-0 scale-110 shadow-[0_0_20px_rgba(59,130,246,0.3)]'
                                        : 'opacity-40 grayscale hover:opacity-80 hover:scale-105'
                                        }`}
                                >
                                    <img
                                        src={member.image}
                                        alt={`Miniature de ${member.name}`}
                                        width="80"
                                        height="96"
                                        className="w-full h-full object-cover"
                                        loading="lazy"
                                    />
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* COL 2: Main Image (Premium Treatment) */}
                    <div className="w-1/2 h-[600px] relative group perspective-1000">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-[2rem] blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-700" />
                        <div className="relative h-full w-full rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl transition-transform duration-700 group-hover:rotate-y-2">
                            <img
                                src={activeMember.image}
                                alt={activeMember.name}
                                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
                        </div>
                        
                        {/* Floating Badge */}
                        <div className="absolute -right-8 top-12 bg-white/10 backdrop-blur-xl border border-white/20 p-4 rounded-2xl shadow-xl animate-float">
                            <Quote className="text-primary w-8 h-8" />
                        </div>
                    </div>

                    {/* COL 3: Content */}
                    <div className="w-1/4 flex flex-col justify-center">
                        <div className="mb-8">
                            <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider mb-6">
                                {activeMember.role || 'Member'}
                            </div>
                            <h3 className="text-4xl font-bold text-white mb-6 leading-tight">
                                {activeMember.name}
                            </h3>
                            <div className="w-12 h-1 bg-gradient-to-r from-primary to-transparent mb-8" />
                            <p className="text-gray-400 text-lg leading-relaxed font-light">
                                "{activeMember.bio}"
                            </p>
                        </div>

                        <div className="flex gap-4 mt-8">
                            {/* Social links could go here */}
                        </div>
                    </div>
                </div>
            </div>
            
            <SectionDivider />
        </section>
    );
}
