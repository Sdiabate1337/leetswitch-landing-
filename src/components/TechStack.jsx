import { Cpu, Database, Network, Zap, Code, Workflow, Layers } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function TechStack() {
  const { t } = useLanguage();
  const technologies = [
    { name: 'n8n', icon: Workflow },
    { name: 'Dust AI', icon: Database },
    { name: 'LangGraph', icon: Network },
    { name: 'Next.js', icon: Layers },
    { name: 'FastAPI', icon: Zap },
    { name: 'OpenAI', icon: Cpu },
    { name: 'Anthropic', icon: Code },
  ];

  // 1. Create a "Base Set" large enough to fill any screen (e.g., 4x the original list)
  const baseSet = [...technologies, ...technologies, ...technologies, ...technologies];

  // 2. Create the "Animation Strip" by duplicating the Base Set exactly once (50/50 split)
  const allTech = [...baseSet, ...baseSet];

  return (
    <section className="py-10 bg-white border-y border-light-slate overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <p className="text-center text-soft-indigo text-xs font-bold uppercase tracking-[0.2em] opacity-80">
          {t.techStack.title}
        </p>
      </div>
      
      <div className="relative w-full overflow-hidden">
        {/* Gradient masks */}
        <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-white to-transparent z-10" />
        
        <div className="flex flex-nowrap animate-scroll hover:[animation-play-state:paused] w-max">
          {allTech.map((tech, index) => (
            <div 
              key={index}
              className="flex-shrink-0 flex items-center justify-center mx-6 group"
            >
              <div className="flex items-center gap-3 px-6 py-3 rounded-full bg-background border border-light-slate/50 group-hover:border-primary/20 group-hover:bg-primary/5 transition-all cursor-default">
                <tech.icon size={20} className="text-soft-indigo group-hover:text-primary transition-colors" />
                <span className="text-lg font-bold text-graphite/60 group-hover:text-graphite transition-colors whitespace-nowrap">{tech.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
