import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";
import { Input } from "@/components/ui/input";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 hero-gradient" />
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-primary/3 rounded-full blur-3xl animate-float-delayed" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div className="animate-fade-up">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-foreground leading-[1.1] mb-6">
              Your Digital Conscience:{" "}
              <span className="text-gradient">Boost Productivity</span>
              {" "}& Protect Trust
            </h1>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-lg">
              Real-time AI that improves focus and efficiency while silently guarding against cyber threats. 
              Watches how you work—not what you work on.
            </p>

            {/* Email signup */}
            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <Input 
                type="email" 
                placeholder="Enter your work email"
                className="h-12 bg-card border-border/50 text-foreground placeholder:text-muted-foreground focus:border-primary/50"
              />
              <Button variant="hero" size="lg" className="shrink-0">
                Join Waitlist
                <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-primary" />
                <span>Behavior-only monitoring</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-primary" />
                <span>Real-time protection</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-primary" />
                <span>Acts instantly</span>
              </div>
            </div>
          </div>

          {/* Right visual - Code block style */}
          <div className="animate-fade-up-delayed">
            <div className="code-block rounded-2xl overflow-hidden card-glow">
              {/* Window header */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-border/50">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-destructive/60" />
                  <div className="w-3 h-3 rounded-full code-warning-dot" />
                  <div className="w-3 h-3 rounded-full bg-primary/60" />
                </div>
                <span className="ml-4 font-mono text-xs text-muted-foreground">security.monitor</span>
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
                    <span className="text-muted-foreground/60">04</span>  <span className="text-primary">+</span> <span className="text-primary">// SentriQ: analyzes patterns</span>
                  </div>
                  <div><span className="text-muted-foreground/60">05</span></div>
                  <div><span className="text-muted-foreground/60">06</span>  <span className="code-keyword">if</span> (behavior.<span className="text-primary">isAnomalous</span>()) {"{"}</div>
                  <div><span className="text-muted-foreground/60">07</span>    <span className="text-primary">protectSession</span>();</div>
                  <div><span className="text-muted-foreground/60">08</span>  {"}"}</div>
                </div>

                {/* Insight box */}
                <div className="mt-6 p-4 rounded-xl bg-primary/10 border border-primary/20">
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <div className="text-sm"><span className="text-primary font-medium">Insight:</span> <span className="text-foreground">Unusual login pattern detected.</span></div>
                      <div className="text-sm"><span className="text-primary font-medium">Action:</span> <span className="text-muted-foreground">Session secured silently.</span></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
