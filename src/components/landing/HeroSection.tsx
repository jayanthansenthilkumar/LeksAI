import { Button } from "@/components/ui/button";
import { ArrowRight, Check, ShieldCheck, Zap, Lock, Shield } from "lucide-react";
import { Input } from "@/components/ui/input";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-background to-background" />
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      
      {/* Floating orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[100px] animate-pulse-gentle" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[100px] animate-pulse-gentle delay-1000" />

      <div className="container mx-auto px-6 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div className="animate-fade-up max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-8 hover:bg-primary/20 transition-colors cursor-default">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              v2.0 is now live
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.1] mb-8">
              Autopilot for your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-400 to-indigo-500 animate-glow">
                Security Operations
              </span>
            </h1>

            <p className="text-xl text-muted-foreground mb-10 leading-relaxed max-w-lg">
              Stop threats before they happen. Cut alert fatigue by 90%. Let AI handle the noise while your team focuses on what matters.
            </p>

            {/* Email signup */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10 max-w-md">
              <div className="relative flex-1">
                <Input 
                  type="email" 
                  placeholder="Enter your work email"
                  className="h-14 bg-background/50 backdrop-blur-sm border-white/10 text-foreground placeholder:text-muted-foreground focus:border-primary/50 rounded-xl pl-4 pr-4 w-full transition-all"
                />
              </div>
              <Button className="h-14 px-8 rounded-xl bg-primary text-primary-foreground font-semibold hover:bg-primary/90 shadow-[0_0_20px_-5px_hsl(var(--primary))] shrink-0 hover:scale-105 transition-all duration-300">
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>

            {/* Trust badges */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/5">
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2 text-foreground font-semibold">
                  <ShieldCheck className="w-5 h-5 text-primary" />
                  <span>SOC 2 Type II</span>
                </div>
                <span className="text-sm text-muted-foreground">Certified Secure</span>
              </div>
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2 text-foreground font-semibold">
                  <Zap className="w-5 h-5 text-primary" />
                  <span>&lt; 10ms</span>
                </div>
                <span className="text-sm text-muted-foreground">Latency Impact</span>
              </div>
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2 text-foreground font-semibold">
                  <Lock className="w-5 h-5 text-primary" />
                  <span>Zero Trust</span>
                </div>
                <span className="text-sm text-muted-foreground">Architecture</span>
              </div>
            </div>
          </div>

          {/* Right visual - Enhanced Code block */}
          <div className="animate-fade-up-delayed relative perspective-1000">
            {/* Decorative background for card */}
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/30 to-indigo-500/30 rounded-[2rem] blur-2xl opacity-50 animate-pulse-gentle" />
            
            <div className="relative bg-[#0A0A0B]/90 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/5 transform hover:rotate-1 transition-transform duration-500">
              {/* Window header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-white/5 bg-white/5">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
                  <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                  <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
                </div>
                <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-black/40 border border-white/5">
                  <Shield className="w-3 h-3 text-primary" />
                  <span className="font-mono text-xs text-muted-foreground">shield.config.ts</span>
                </div>
                <div className="w-8" /> {/* Spacer for centering */}
              </div>

              {/* Code content */}
              <div className="p-8 font-mono text-[13px] sm:text-sm leading-relaxed overflow-x-auto">
                <div className="flex flex-col gap-1">
                  <div className="text-muted-foreground/50">{'// Initialize Leks AI Sentinel'}</div>
                  <div className="flex">
                    <span className="text-purple-400 mr-2">const</span>
                    <span className="text-blue-400">sentinel</span>
                    <span className="text-white mx-2">=</span>
                    <span className="text-purple-400">new</span>
                    <span className="text-yellow-300 ml-2">SentinelAI</span>
                    <span className="text-white">({'{'}</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-blue-300">mode:</span>
                    <span className="text-green-400 ml-2">'autonomous'</span>
                    <span className="text-white">,</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-blue-300">sensitivity:</span>
                    <span className="text-orange-400 ml-2">0.99</span>
                    <span className="text-white">,</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-blue-300">modules:</span>
                    <span className="text-white ml-2">['threat-intel', 'auto-remediate']</span>
                  </div>
                  <div className="text-white">{'}'});</div>
                  <br />
                  <div className="text-muted-foreground/50">{'// Watch for real-time anomalies'}</div>
                  <div className="flex">
                    <span className="text-blue-400">sentinel</span>
                    <span className="text-white">.</span>
                    <span className="text-yellow-300">watch</span>
                    <span className="text-white">((</span>
                    <span className="text-orange-300">threat</span>
                    <span className="text-white">) ={'>'} {'{'}</span>
                  </div>
                  <div className="pl-4 group cursor-pointer relative">
                    <div className="absolute -left-4 top-0 bottom-0 w-1 bg-primary/50 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span className="text-purple-400">if</span>
                    <span className="text-white ml-2">(</span>
                    <span className="text-orange-300">threat</span>
                    <span className="text-white">.</span>
                    <span className="text-blue-300">severity</span>
                    <span className="text-white mx-2">{'>'}</span>
                    <span className="text-purple-400">HIGH</span>
                    <span className="text-white">) {'{'}</span>
                  </div>
                  <div className="pl-8 bg-primary/10 -mx-8 px-8 py-1 my-1 border-l-2 border-primary animate-pulse-gentle">
                    <span className="text-blue-400">await</span>
                    <span className="text-white mx-2">sentinel.</span>
                    <span className="text-yellow-300">neutralize</span>
                    <span className="text-white">(</span>
                    <span className="text-orange-300">threat</span>
                    <span className="text-white">);</span>
                    <span className="text-primary ml-4 opacity-50 font-sans italic text-xs">// Threat neutralized instantly</span>
                  </div>
                  <div className="pl-4 text-white">{'}'}</div>
                  <div className="text-white">{'}'});</div>
                </div>
              </div>

              {/* Status bar */}
              <div className="bg-black/40 border-t border-white/5 py-3 px-6 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-emerald-500 font-medium">System Active</span>
                </div>
                <div className="text-muted-foreground">Latency: 4ms</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
