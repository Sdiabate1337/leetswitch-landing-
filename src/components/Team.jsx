import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ChevronRight, Quote, ArrowRight } from 'lucide-react';

export default function Team() {
    const { t } = useLanguage();
    const [activeIdx, setActiveIdx] = useState(0);
    const members = t.team.members;
    const activeMember = members[activeIdx];

    const nextMember = () => {
        setActiveIdx((prev) => (prev + 1) % members.length);
    };

    return (
        <section className="py-12 sm:py-20 lg:py-32 bg-white relative overflow-hidden min-h-[80vh] flex flex-col justify-center" id="team">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 w-full">

                {/* --- HEADER (New & Prominent) --- */}
                <div className="mb-12 lg:mb-20">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-graphite/5 border border-graphite/10 mb-6">
                        <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                        <span className="text-[10px] sm:text-xs font-bold text-graphite/70 tracking-widest uppercase">
                            {t.team.credential || 'Engineering Excellence'}
                        </span>
                    </div>
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-graphite tracking-tight leading-tight">
                        {t.team.title} <span className="text-primary">{t.team.titleSpan}</span>
                    </h2>
                </div>

                {/* --- MOBILE VIEW (Horizontal Swipe) --- */}
                <div className="lg:hidden">
                    <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-8 hide-scrollbar -mx-4 px-4">
                        {members.map((member, idx) => (
                            <div key={idx} className="relative min-w-[85vw] snap-center">
                                <div className="relative h-[500px] rounded-[2.5rem] overflow-hidden shadow-[0_20px_40px_-10px_rgba(0,0,0,0.3)]">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

                                    <div className="absolute bottom-0 left-0 p-8 w-full">
                                        <div className="inline-block px-3 py-1 rounded-full bg-[#FFD700] text-graphite text-xs font-bold uppercase tracking-wider mb-4">
                                            {member.role || 'Member'}
                                        </div>
                                        <h3 className="text-3xl font-bold text-white mb-4">{member.name}</h3>
                                        <p className="text-white/90 text-lg italic leading-relaxed line-clamp-4 font-serif">
                                            "{member.bio}"
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    {/* Swipe Indicator */}
                    <div className="flex justify-center gap-2 mt-4">
                        {members.map((_, idx) => (
                            <div key={idx} className={`h-1.5 rounded-full transition-all duration-300 ${idx === activeIdx ? 'w-8 bg-graphite' : 'w-2 bg-light-slate/30'}`} />
                        ))}
                    </div>
                </div>

                {/* --- DESKTOP VIEW (The "Screenshot" Layout + Modern Enhancements) --- */}
                <div className="hidden lg:flex flex-row gap-20 items-center h-full">

                    {/* COL 1: Navigation & Thumbnails */}
                    <div className="w-1/4 flex flex-col justify-between h-[600px] py-4">
                        <div className="flex justify-between items-start">
                            <span className="text-sm font-bold text-graphite/40 font-mono">
                                0{activeIdx + 1} / 0{members.length}
                            </span>
                        </div>

                        <div className="flex-1 flex items-center justify-center -ml-16">
                            <span className="text-graphite font-bold text-xl tracking-[0.2em] uppercase -rotate-90 whitespace-nowrap opacity-20 hover:opacity-100 transition-opacity cursor-default">
                                ENGINEERS
                            </span>
                        </div>

                        <div className="flex gap-4 overflow-x-auto pb-6 hide-scrollbar pl-2">
                            {members.map((member, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setActiveIdx(idx)}
                                    className={`relative w-20 h-24 shrink-0 overflow-hidden rounded-2xl transition-all duration-500 ease-out ${activeIdx === idx
                                        ? 'opacity-100 ring-2 ring-offset-4 ring-graphite grayscale-0 scale-110 shadow-lg'
                                        : 'opacity-40 grayscale hover:opacity-80 hover:scale-105'
                                        }`}
                                >
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-full h-full object-cover"
                                    />
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* COL 2: Main Image (Center) - MODERNIZED */}
                    <div className="w-1/3">
                        <div className="relative w-full h-[700px] rounded-[3rem] overflow-hidden shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] bg-gray-50 group transform transition-transform duration-700 hover:scale-[1.01]">
                            {members.map((member, idx) => (
                                <img
                                    key={idx}
                                    src={member.image}
                                    alt={member.name}
                                    className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] ${activeIdx === idx
                                        ? 'opacity-100 scale-100 blur-0'
                                        : 'opacity-0 scale-110 blur-xl'
                                        }`}
                                />
                            ))}
                            {/* Inner Border/Glow for detail */}
                            <div className="absolute inset-0 border-[1px] border-white/10 rounded-[3rem] pointer-events-none z-10" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                        </div>
                    </div>

                    {/* COL 3: Details (Right) */}
                    <div className="w-1/3 flex flex-col justify-center relative pl-12">
                        <div className="space-y-10">
                            <div>
                                <h3 className="text-4xl font-bold text-graphite mb-3 tracking-tight">
                                    {activeMember.name}
                                </h3>
                                <div className="inline-block px-4 py-1.5 bg-gray-100 rounded-lg border border-gray-200">
                                    <p className="text-xs font-bold text-slate-600 uppercase tracking-widest">
                                        {activeMember.role}
                                    </p>
                                </div>
                            </div>

                            <div className="relative">
                                <Quote className="absolute -top-8 -left-10 text-gray-100 -z-10" size={100} />
                                <p className="text-3xl text-graphite font-medium leading-[1.3] tracking-tight font-serif">
                                    "{activeMember.bio}"
                                </p>
                            </div>

                            <button
                                onClick={nextMember}
                                className="group w-20 h-20 rounded-full bg-[#FFD700] hover:bg-black text-graphite hover:text-white flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-xl hover:shadow-2xl mt-4"
                            >
                                <ChevronRight size={32} strokeWidth={3} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    </div>
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
