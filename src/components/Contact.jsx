import { useLanguage } from '../context/LanguageContext';
import { Bot, Phone, Mail, ArrowRight, MessageSquare, Terminal, Users } from 'lucide-react';
import PremiumCard from './ui/PremiumCard';

export default function Contact() {
    const { t } = useLanguage();

    return (
        <section className="py-32 bg-background text-white relative overflow-hidden" id="contact">
            {/* Background Gradients */}
            <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* HEADER */}
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-6xl font-bold mb-6">
                        {t.contact.header.title} <br />
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                            {t.contact.header.titleSpan}
                        </span>
                    </h2>
                    <p className="text-xl text-gray-400">
                        {t.contact.header.subtitle}
                    </p>
                </div>

                {/* 3 COLUMNS */}
                <div className="grid lg:grid-cols-3 gap-8 mb-20">
                    {/* AI Assistant - Primary */}
                    <PremiumCard className="relative group border-primary/30 p-8 shadow-[0_0_40px_rgba(59,130,246,0.1)]">
                        <div className="absolute top-0 right-0 p-6 opacity-20">
                            <Bot size={80} className="text-primary" />
                        </div>
                        <div className="inline-block px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-bold uppercase tracking-wider mb-6">
                            {t.contact.options.ai.badge}
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                            <Bot size={24} className="text-primary" />
                            {t.contact.options.ai.title}
                        </h3>
                        <ul className="space-y-3 mb-8">
                            {t.contact.options.ai.items.map((item, i) => (
                                <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
                                    <ArrowRight size={16} className="text-primary shrink-0 mt-0.5" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                        <div className="bg-black/20 p-4 rounded-xl text-xs text-gray-400 mb-8 leading-relaxed">
                            {t.contact.options.ai.desc}
                        </div>
                        <button className="w-full bg-primary text-white font-bold py-4 rounded-xl hover:bg-primary-dark transition-all shadow-lg hover:shadow-primary/25 mb-4">
                            {t.contact.options.ai.button}
                        </button>
                        <div className="text-center text-xs text-emerald-400 flex items-center justify-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                            {t.contact.options.ai.note}
                        </div>
                    </PremiumCard>

                    {/* Audit Call */}
                    <PremiumCard className="p-8">
                        <div className="inline-block px-3 py-1 rounded-full bg-purple-500/20 text-purple-400 text-xs font-bold uppercase tracking-wider mb-6">
                            {t.contact.options.audit.badge}
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                            <Phone size={24} className="text-purple-400" />
                            {t.contact.options.audit.title}
                        </h3>
                        <ul className="space-y-3 mb-8">
                            {t.contact.options.audit.items.map((item, i) => (
                                <li key={i} className="flex items-start gap-3 text-sm text-gray-400">
                                    <span className="text-purple-400">•</span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                        <div className="bg-white/5 p-4 rounded-xl text-xs text-gray-500 mb-8 leading-relaxed">
                            {t.contact.options.audit.desc}
                        </div>
                        <a
                            href="https://calendly.com/diabatesekou1337/audit-offerte-leetswitch"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block w-full text-center border border-white/10 hover:bg-white hover:text-background text-white font-bold py-4 rounded-xl transition-all mb-4"
                        >
                            {t.contact.options.audit.button}
                        </a>
                        <div className="text-center text-xs text-gray-600">
                            {t.contact.options.audit.note}
                        </div>
                    </PremiumCard>

                    {/* Email */}
                    <PremiumCard className="p-8">
                        <div className="inline-block px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-6">
                            {t.contact.options.email.badge}
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                            <Mail size={24} className="text-emerald-400" />
                            {t.contact.options.email.title}
                        </h3>
                        <ul className="space-y-3 mb-8">
                            {t.contact.options.email.items.map((item, i) => (
                                <li key={i} className="flex items-start gap-3 text-sm text-gray-400">
                                    <span className="text-emerald-400">•</span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                        <div className="bg-white/5 p-4 rounded-xl text-xs text-gray-500 mb-8 leading-relaxed">
                            {t.contact.options.email.desc}
                        </div>
                        <a
                            href="mailto:hello@leetswitch.com"
                            className="block w-full text-center border border-white/10 hover:bg-white hover:text-background text-white font-bold py-4 rounded-xl transition-all mb-4"
                        >
                            {t.contact.options.email.button}
                        </a>
                        <div className="text-center text-xs text-gray-600">
                            {t.contact.options.email.note}
                        </div>
                    </PremiumCard>
                </div>
            </div>
        </section>
    );
}
