import { Eye, Shield, Heart } from "lucide-react";

const SolutionSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left content */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
                <Shield className="w-4 h-4" />
                Introducing LeksAI
              </div>
              
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6 leading-tight">
                The World's First:
                <br />
                <span className="text-gradient">Fully Autonomous SOC Platform</span>
              </h2>
              
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                AI agents that detect, investigate, and respond to threats without human intervention. 
                Behavioral ML learns your environment. Explainable AI keeps you in control.
              </p>

              <div className="space-y-5">
                <div className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border/50 hover:border-primary/30 transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Eye className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Predictive Threat Detection</h4>
                    <p className="text-muted-foreground text-sm">
                      ML models analyze network, endpoint, and cloud behavior. Catches zero-days before first exploit.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border/50 hover:border-primary/30 transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Shield className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Intelligent Alert Reduction</h4>
                    <p className="text-muted-foreground text-sm">
                      Context-aware AI scores threats by business impact. Only critical alerts reach your team.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border/50 hover:border-primary/30 transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Heart className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Autonomous Incident Response</h4>
                    <p className="text-muted-foreground text-sm">
                      Pre-approved playbooks execute automatically. Isolate threats in milliseconds, not hours.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right visual */}
            <div className="relative">
              <div className="aspect-square rounded-3xl bg-card border border-border/50 p-8 flex items-center justify-center card-glow gradient-border">
                <div className="relative w-full h-full flex items-center justify-center">
                  {/* Central shield */}
                  <div className="w-32 h-32 rounded-3xl bg-primary/10 border border-primary/30 flex items-center justify-center animate-glow">
                    <Shield className="w-16 h-16 text-primary" />
                  </div>
                  
                  {/* Orbiting elements */}
                  <div className="absolute top-8 left-8 w-16 h-16 rounded-2xl bg-card border border-border/50 flex items-center justify-center animate-float">
                    <Eye className="w-8 h-8 text-muted-foreground" />
                  </div>
                  <div className="absolute bottom-12 right-8 w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center animate-float-delayed">
                    <Heart className="w-7 h-7 text-primary" />
                  </div>
                  <div className="absolute top-1/4 right-12 w-12 h-12 rounded-lg bg-card border border-border/50 flex items-center justify-center animate-float font-mono">
                    <span className="text-primary text-xl">✓</span>
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
