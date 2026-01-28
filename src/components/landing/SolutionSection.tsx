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
                Introducing SentriQ
              </div>
              
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6 leading-tight">
                One System, Dual Intelligence:
                <br />
                <span className="text-gradient">Productivity + Cyber Security</span>
              </h2>
              
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                SentriQ learns how you work—login times, typing rhythm, app switching, task habits—then uses 
                the same behavioral data to boost efficiency AND detect threats. No spying. No content reading.
              </p>

              <div className="space-y-5">
                <div className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border/50 hover:border-primary/30 transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Eye className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Real-Time Behavior Intelligence</h4>
                    <p className="text-muted-foreground text-sm">
                      Learns normal patterns: login times, typing rhythm, app flow, task habits. Only signals, not content.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border/50 hover:border-primary/30 transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Shield className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Instant Threat Detection</h4>
                    <p className="text-muted-foreground text-sm">
                      Spots account takeover, session hijacking, insider threats, and bot activity—before damage occurs.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border/50 hover:border-primary/30 transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Heart className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Smart Response Engine</h4>
                    <p className="text-muted-foreground text-sm">
                      Silent re-auth, session locks, data masking, admin alerts—all automatic. No panic, no disruption.
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
