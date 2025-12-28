import { useLanguage } from '../context/LanguageContext';
import { Bot, Phone, Mail, ArrowRight, MessageSquare, Terminal, Users } from 'lucide-react';

export default function Contact() {
    const { t } = useLanguage();

    return (
        <section className="py-32 bg-graphite text-white relative overflow-hidden" id="contact">
            {/* Background Gradients */}
            <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-electric-blue/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* HEADER */}
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-6xl font-bold mb-6">
                        {t.contact.header.title} <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-blue to-soft-indigo">
                            {t.contact.header.titleSpan}
                        </span>
                    </h2>
                    <p className="text-xl text-light-slate/60">
                        {t.contact.header.subtitle}
                    </p>
                </div>

                {/* 3 COLUMNS */}
                <div className="grid lg:grid-cols-3 gap-8 mb-20">
                    {/* AI Assistant - Primary */}
                    <div className="relative group bg-gradient-to-b from-white/[0.08] to-white/[0.02] border border-electric-blue/30 rounded-3xl p-8 hover:border-electric-blue/50 transition-all shadow-[0_0_40px_rgba(76,110,245,0.1)]">
                        <div className="absolute top-0 right-0 p-6 opacity-20">
                            <Bot size={80} className="text-electric-blue" />
                        </div>
                        <div className="inline-block px-3 py-1 rounded-full bg-electric-blue/20 text-electric-blue text-xs font-bold uppercase tracking-wider mb-6">
                            {t.contact.options.ai.badge}
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                            <Bot size={24} className="text-electric-blue" />
                            {t.contact.options.ai.title}
                        </h3>
                        <ul className="space-y-3 mb-8">
                            {t.contact.options.ai.items.map((item, i) => (
                                <li key={i} className="flex items-start gap-3 text-sm text-light-slate/90">
                                    <ArrowRight size={16} className="text-electric-blue shrink-0 mt-0.5" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                        <div className="bg-black/20 p-4 rounded-xl text-xs text-light-slate/60 mb-8 leading-relaxed">
                            {t.contact.options.ai.desc}
                        </div>
                        <button className="w-full bg-electric-blue text-white font-bold py-4 rounded-xl hover:bg-electric-blue/90 transition-all shadow-lg hover:shadow-electric-blue/25 mb-4">
                            {t.contact.options.ai.button}
                        </button>
                        <div className="text-center text-xs text-green-400 flex items-center justify-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                            {t.contact.options.ai.note}
                        </div>
                    </div>

                    {/* Audit Call */}
                    <div className="bg-white/[0.02] border border-white/5 rounded-3xl p-8 hover:bg-white/[0.04] transition-all">
                        <div className="inline-block px-3 py-1 rounded-full bg-soft-indigo/20 text-soft-indigo text-xs font-bold uppercase tracking-wider mb-6">
                            {t.contact.options.audit.badge}
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                            <Phone size={24} className="text-purple-400" />
                            {t.contact.options.audit.title}
                        </h3>
                        <ul className="space-y-3 mb-8">
                            {t.contact.options.audit.items.map((item, i) => (
                                <li key={i} className="flex items-start gap-3 text-sm text-light-slate/80">
                                    <span className="text-purple-400">•</span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                        <div className="bg-white/5 p-4 rounded-xl text-xs text-light-slate/50 mb-8 leading-relaxed">
                            {t.contact.options.audit.desc}
                        </div>
                        <button className="w-full border border-white/10 hover:bg-white hover:text-graphite text-white font-bold py-4 rounded-xl transition-all mb-4">
                            {t.contact.options.audit.button}
                        </button>
                        <div className="text-center text-xs text-light-slate/40">
                            {t.contact.options.audit.note}
                        </div>
                    </div>

                    {/* Email */}
                    <div className="bg-white/[0.02] border border-white/5 rounded-3xl p-8 hover:bg-white/[0.04] transition-all">
                        <div className="inline-block px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-6">
                            {t.contact.options.email.badge}
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                            <Mail size={24} className="text-emerald-400" />
                            {t.contact.options.email.title}
                        </h3>
                        <ul className="space-y-3 mb-8">
                            {t.contact.options.email.items.map((item, i) => (
                                <li key={i} className="flex items-start gap-3 text-sm text-light-slate/80">
                                    <span className="text-emerald-400">•</span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                        <div className="bg-white/5 p-4 rounded-xl text-xs text-light-slate/50 mb-8 leading-relaxed">
                            {t.contact.options.email.desc}
                        </div>
                        <a href="mailto:contact@leetswitch.com" className="block w-full text-center border border-white/10 hover:bg-white hover:text-graphite text-white font-bold py-4 rounded-xl transition-all mb-4">
                            {t.contact.options.email.button}
                        </a>
                        <div className="text-center text-xs text-light-slate/40">
                            {t.contact.options.email.note}
                        </div>
                    </div>
                </div>

                {/* CHATBOT EXPLANATION BOX */}
                <div className="max-w-4xl mx-auto bg-black/30 border border-white/10 rounded-2xl p-8 md:p-10 mb-20 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-10 opacity-5">
                        <Terminal size={150} />
                    </div>
                    <div className="relative z-10">
                        <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                            {t.contact.chatbotBox.title}
                        </h3>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div>
                                <p className="text-light-slate/80 text-sm leading-relaxed mb-4">
                                    {t.contact.chatbotBox.desc}
                                </p>
                                <p className="text-light-slate/60 text-xs italic">
                                    {t.contact.chatbotBox.sub}
                                </p>
                            </div>
                            <div className="flex flex-col justify-center bg-white/5 rounded-xl p-6 border border-white/5">
                                <div className="text-xs text-light-slate/50 mb-2 uppercase tracking-wide font-bold">Try asking:</div>
                                <div className="font-mono text-electric-blue text-sm mb-4">
                                    "{t.contact.chatbotBox.prompt}"
                                </div>
                                <button className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-medium py-2 rounded-lg transition-colors text-sm">
                                    <MessageSquare size={16} />
                                    {t.contact.chatbotBox.button}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* HUMAN SECTION */}
                <div className="text-center mb-20">
                    <div className="inline-flex items-center gap-2 text-light-slate/40 text-sm font-medium mb-4">
                        <Users size={16} />
                        {t.contact.human.title}
                    </div>
                    <p className="max-w-2xl mx-auto text-light-slate/60 leading-relaxed">
                        {t.contact.human.desc}
                    </p>
                </div>



            </div>
        </section>
    );
}
