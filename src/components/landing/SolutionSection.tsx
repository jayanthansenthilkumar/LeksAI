import { Eye, Shield, Heart } from "lucide-react";

const SolutionSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left content */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-6">
                <Shield className="w-4 h-4" />
                Introducing SentriQ
              </div>
              
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6 leading-tight">
                Security That Works
                <br />
                <span className="text-gradient">Quietly in the Background</span>
              </h2>
              
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                SentriQ understands how you work—not what you work on. By analyzing behavioral patterns 
                rather than content, we protect you from threats without ever compromising your privacy.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Eye className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Behavior-Based Detection</h4>
                    <p className="text-muted-foreground text-sm">
                      Learns your natural work patterns to identify anomalies without reading your files or messages.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Shield className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Privacy by Design</h4>
                    <p className="text-muted-foreground text-sm">
                      Zero content access. No screen recording. No keystroke logging. Your work stays yours.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Heart className="w-5 h-5 text-accent-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Calm Protection</h4>
                    <p className="text-muted-foreground text-sm">
                      Gentle alerts and automatic recovery. No panic-inducing warnings or disruptive popups.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right visual */}
            <div className="relative">
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-primary/5 via-background to-secondary/5 border border-border/50 card-shadow p-8 flex items-center justify-center">
                <div className="relative w-full h-full flex items-center justify-center">
                  {/* Central shield */}
                  <div className="w-32 h-32 rounded-3xl bg-card border border-border card-shadow flex items-center justify-center glow-primary animate-pulse-gentle">
                    <Shield className="w-16 h-16 text-primary" />
                  </div>
                  
                  {/* Orbiting elements */}
                  <div className="absolute top-8 left-8 w-16 h-16 rounded-2xl bg-card border border-border/50 card-shadow flex items-center justify-center animate-float">
                    <Eye className="w-8 h-8 text-muted-foreground" />
                  </div>
                  <div className="absolute bottom-12 right-8 w-14 h-14 rounded-xl bg-accent border border-border/50 flex items-center justify-center animate-float-delayed">
                    <Heart className="w-7 h-7 text-accent-foreground" />
                  </div>
                  <div className="absolute top-1/4 right-12 w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center animate-float">
                    <span className="text-secondary text-xl">✓</span>
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

export default SolutionSection;
