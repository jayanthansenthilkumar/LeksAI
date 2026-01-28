import { Button } from "@/components/ui/button";
import { ArrowRight, Check, ShieldCheck, Zap, Lock, Shield } from "lucide-react";
import { Input } from "@/components/ui/input";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden">
      {/* Background effects */}
<<<<<<< HEAD
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-background to-background" />
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      
      {/* Floating orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[100px] animate-pulse-gentle" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[100px] animate-pulse-gentle delay-1000" />
=======
      <div className="absolute inset-0 hero-gradient" />
      <div className="absolute inset-0 cyber-grid opacity-30" />
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-3xl animate-float-delayed" />
        <div className="absolute top-1/2 left-1/2 w-[300px] h-[300px] bg-accent/5 rounded-full blur-3xl animate-pulse-glow" />
      </div>
>>>>>>> parent of 8a5049e (Finalized Landing Page)

      <div className="container mx-auto px-6 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
<<<<<<< HEAD
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
=======
          <div className="animate-fade-up">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-cyber font-extrabold text-foreground leading-[1.1] mb-6">
              AI-Powered{" "}
              <span className="text-gradient animate-pulse-glow">Threat Intelligence</span>
              {" "}& Autonomous Response
>>>>>>> parent of 8a5049e (Finalized Landing Page)
            </h1>

            <p className="text-xl text-muted-foreground mb-10 leading-relaxed max-w-lg">
              Stop threats before they happen. Cut alert fatigue by 90%. Let AI handle the noise while your team focuses on what matters.
            </p>

            {/* Email signup */}
<<<<<<< HEAD
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
=======
            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <Input 
                type="email" 
                placeholder="Enter your work email"
                className="h-12 bg-card border-primary/30 text-foreground placeholder:text-muted-foreground focus:border-primary focus:shadow-neon transition-all"
              />
              <Button variant="hero" size="lg" className="shrink-0">
                Join Waitlist
                <ArrowRight className="w-4 h-4 ml-1" />
>>>>>>> parent of 8a5049e (Finalized Landing Page)
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

<<<<<<< HEAD
          {/* Right visual - Enhanced Code block */}
{/* Right visual - Simple Abstract Shield */}
          <div className="relative flex items-center justify-center py-10 lg:py-0">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
            
            <div className="relative z-10 animate-float">
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-gradient-to-br from-white/5 to-transparent border border-white/10 backdrop-blur-md flex items-center justify-center ring-1 ring-white/5 shadow-2xl">
                {/* Inner pulsing circle */}
                <div className="absolute inset-4 rounded-full border border-primary/20 animate-pulse-gentle" />
                <div className="absolute inset-8 rounded-full border border-primary/10 border-dashed animate-[spin_10s_linear_infinite]" />
                
                {/* Central Shield */}
                <div className="relative flex flex-col items-center gap-4">
                  <div className="p-6 rounded-3xl bg-primary/10 border border-primary/20 shadow-[0_0_30px_-5px_hsl(var(--primary)/0.3)]">
                    <Shield className="w-16 h-16 sm:w-20 sm:h-20 text-primary fill-primary/10" />
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-black/40 border border-white/5 backdrop-blur-sm">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-xs font-medium text-emerald-500 tracking-wide uppercase">Protected</span>
                  </div>
                </div>
              </div>

              {/* Orbiting elements */}
              <div className="absolute top-0 right-10 p-3 rounded-xl bg-card/80 border border-white/10 backdrop-blur-md shadow-lg animate-bounce-slow">
                <ShieldCheck className="w-6 h-6 text-emerald-400" />
              </div>
              <div className="absolute bottom-10 left-0 p-3 rounded-xl bg-card/80 border border-white/10 backdrop-blur-md shadow-lg animate-bounce-slow delay-700">
                <Lock className="w-6 h-6 text-blue-400" />
=======
          {/* Right visual - Code block style */}
          <div className="animate-fade-up-delayed">
            <div className="code-block rounded-2xl overflow-hidden card-glow cyber-border scan-line">
              {/* Window header */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-primary/30 bg-card/50">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-destructive/60 animate-pulse" />
                  <div className="w-3 h-3 rounded-full code-warning-dot animate-pulse" style={{animationDelay: '0.3s'}} />
                  <div className="w-3 h-3 rounded-full bg-primary/60 animate-pulse" style={{animationDelay: '0.6s'}} />
                </div>
                <span className="ml-4 font-mono text-xs text-primary">security.monitor</span>
              </div>

              {/* Code content */}
              <div className="p-6 font-mono text-sm">
                <div className="space-y-1 text-muted-foreground">
                  <div><span className="text-muted-foreground/60">01</span>  <span className="code-keyword">const</span> <span className="text-foreground">behavior</span> = <span className="text-primary">analyze</span>();</div>
                  <div><span className="text-muted-foreground/60">02</span></div>
                  <div className="code-line-removed px-2 -mx-2 rounded">
                    <span className="text-muted-foreground/60">03</span>  <span className="text-destructive">-</span> <span className="text-muted-foreground/60">// Traditional: logs keystrokes</span>
                  </div>
                  <div className="code-line-added px-2 -mx-2 rounded">
                    <span className="text-muted-foreground/60">04</span>  <span className="text-primary">+</span> <span className="text-primary">// leks.AI: analyzes patterns</span>
                  </div>
                  <div><span className="text-muted-foreground/60">05</span></div>
                  <div><span className="text-muted-foreground/60">06</span>  <span className="code-keyword">if</span> (behavior.<span className="text-primary">isAnomalous</span>()) {"{"}</div>
                  <div><span className="text-muted-foreground/60">07</span>    <span className="text-primary">protectSession</span>();</div>
                  <div><span className="text-muted-foreground/60">08</span>  {"}"}</div>
                </div>

                {/* Insight box */}
                <div className="mt-6 p-4 rounded-xl bg-primary/10 border border-primary/30 shadow-cyber">
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary shrink-0 mt-0.5 animate-pulse" />
                    <div>
                      <div className="text-sm"><span className="text-primary font-medium">Insight:</span> <span className="text-foreground">Unusual login pattern detected.</span></div>
                      <div className="text-sm"><span className="text-secondary font-medium">Action:</span> <span className="text-muted-foreground">Session secured silently.</span></div>
                    </div>
                  </div>
                </div>
>>>>>>> parent of 8a5049e (Finalized Landing Page)
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
