import { ArrowRight, Play, Zap, Bot, Workflow } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="grain relative pt-24 pb-20 lg:pt-32 lg:pb-28 overflow-hidden">
      {/* Background gradients & Grid */}
      <div className="absolute inset-0 bg-background">
        {/* Animated Orbs */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 animate-float" style={{ animationDuration: '15s' }} />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-electric-blue/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/4 animate-float" style={{ animationDuration: '20s', animationDelay: '2s' }} />
        
        {/* Modern Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
        
        <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] bg-soft-indigo/5 rounded-full blur-[80px] -translate-x-1/2 -translate-y-1/2 animate-pulse" style={{ animationDuration: '10s' }} />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <div className="text-center lg:text-left pt-10 lg:pt-0 relative z-10">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-md border border-white/40 shadow-sm px-4 py-2 rounded-full text-sm font-semibold mb-8 hover:scale-105 transition-transform cursor-default ring-1 ring-black/5">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-green opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-green"></span>
              </span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-graphite to-soft-indigo">
                {t.hero.badge}
              </span>
            </div>
            
            <h1 className="text-[3.5rem] sm:text-[4.5rem] lg:text-[5rem] font-extrabold text-graphite tracking-tighter leading-[1.1] mb-8">
              {t.hero.titleLine1} <br />
              {t.hero.titleLine2} <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-electric-blue to-primary bg-[length:200%_auto] animate-shimmer">{t.hero.titleSpan}</span>.
            </h1>
            
            <p className="text-lg sm:text-xl text-soft-indigo mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              {t.hero.subtitle}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a 
                href="#cta"
                className="inline-flex items-center justify-center gap-2 bg-graphite hover:bg-black text-white px-8 py-4.5 rounded-full font-bold text-lg transition-all shadow-lg shadow-graphite/20 hover:shadow-xl hover:-translate-y-1"
              >
                {t.hero.ctaPrimary}
                <ArrowRight size={20} />
              </a>
              <a 
                href="#showcase"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-light-slate/50 text-graphite px-8 py-4.5 rounded-full font-bold text-lg transition-all shadow-lg border border-light-slate hover:border-graphite/20"
              >
                <Play size={20} className="text-graphite fill-graphite" />
                {t.hero.ctaSecondary}
              </a>
            </div>
            
            <div className="mt-10 flex items-center gap-4 justify-center lg:justify-start text-sm font-semibold text-soft-indigo/80">
              <div className="flex -space-x-3">
                {[
                  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=64&h=64",
                  "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=64&h=64",
                  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=64&h=64",
                  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=64&h=64"
                ].map((src, i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-light-slate overflow-hidden shadow-sm hover:scale-110 hover:z-10 transition-transform">
                    <img src={src} alt="Founder" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
              <div className="flex flex-col items-start">
                <div className="flex text-yellow-400 mb-0.5">
                  {[1,2,3,4,5].map(i => (
                    <svg key={i} className="w-3.5 h-3.5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-graphite font-bold">{t.hero.trustedBy}</span>
              </div>
            </div>
          </div>

          {/* Right illustration - AI Workflow mockup (Hidden on Mobile) */}
          <div className="relative lg:h-[600px] hidden lg:flex items-center justify-center">
            {/* Atmospheric Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-gradient-to-br from-primary/20 to-electric-blue/20 blur-[100px] rounded-full pointer-events-none opacity-60" />

            <div className="relative w-full max-w-lg animate-float">
              <div className="relative bg-white/60 backdrop-blur-xl rounded-2xl shadow-2xl p-6 border border-white/50 ring-1 ring-black/5">
                {/* Header */}
                <div className="flex items-center justify-between mb-6 border-b border-black/5 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                    <div className="w-3 h-3 rounded-full bg-green-400" />
                  </div>
                  <div className="text-xs font-mono text-soft-indigo bg-white/50 px-2 py-1 rounded">agent_workflow_v2.n8n</div>
                </div>

                {/* Workflow Nodes */}
                <div className="space-y-4">
                  {/* Trigger */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center shadow-lg shadow-green-500/20">
                      <Zap className="text-white" size={24} />
                    </div>
                    <div className="flex-1 bg-white rounded-lg p-3 shadow-sm border border-black/5">
                      <div className="text-xs font-bold text-soft-indigo uppercase">Trigger</div>
                      <div className="font-semibold text-graphite">New Lead Detected</div>
                    </div>
                  </div>

                  {/* Connecting Line */}
                  <div className="h-6 w-0.5 bg-black/10 ml-6" />

                  {/* Action 1 */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center shadow-lg shadow-blue-500/20">
                      <Bot className="text-white" size={24} />
                    </div>
                    <div className="flex-1 bg-white rounded-lg p-3 shadow-sm border border-black/5">
                      <div className="text-xs font-bold text-soft-indigo uppercase">AI Agent</div>
                      <div className="font-semibold text-graphite">Qualify & Enrich Lead</div>
                    </div>
                  </div>

                  {/* Connecting Line */}
                  <div className="h-6 w-0.5 bg-black/10 ml-6" />

                  {/* Action 2 */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center shadow-lg shadow-purple-500/20">
                      <Workflow className="text-white" size={24} />
                    </div>
                    <div className="flex-1 bg-white rounded-lg p-3 shadow-sm border border-black/5">
                      <div className="text-xs font-bold text-soft-indigo uppercase">CRM Sync</div>
                      <div className="font-semibold text-graphite">Update HubSpot Deal</div>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-accent-green/10 flex items-center justify-center border border-accent-green/20">
                      <div className="w-2 h-2 rounded-full bg-accent-green animate-pulse shadow-[0_0_8px_rgba(46,204,113,0.8)]" />
                    </div>
                  </div>
                </div>
                
                {/* Stats bar */}
                <div className="mt-6 pt-6 border-t border-graphite/5 grid grid-cols-3 gap-4">
                  <div className="text-center p-2 rounded-lg hover:bg-white/40 transition-colors">
                    <div className="text-2xl font-bold text-primary">12</div>
                    <div className="text-[10px] uppercase tracking-wider font-semibold text-soft-indigo">Active Flows</div>
                  </div>
                  <div className="text-center p-2 rounded-lg hover:bg-white/40 transition-colors">
                    <div className="text-2xl font-bold text-accent-green">98%</div>
                    <div className="text-[10px] uppercase tracking-wider font-semibold text-soft-indigo">Success Rate</div>
                  </div>
                  <div className="text-center p-2 rounded-lg hover:bg-white/40 transition-colors">
                    <div className="text-2xl font-bold text-electric-blue">2.4k</div>
                    <div className="text-[10px] uppercase tracking-wider font-semibold text-soft-indigo">Tasks/Day</div>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-6 -right-6 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white/50 animate-float" style={{ animationDelay: '1s' }}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-accent-green/10 flex items-center justify-center">
                    <Zap className="text-accent-green" size={20} />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-graphite">System Online</div>
                    <div className="text-xs text-soft-indigo">All systems operational</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
