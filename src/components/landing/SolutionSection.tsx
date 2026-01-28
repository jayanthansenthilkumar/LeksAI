import { Eye, Shield, Cpu, Activity, Radar, Database } from "lucide-react";
import { cn } from "@/lib/utils";

const features = [
  {
    icon: Eye,
    title: "Predictive Threat Detection",
    description: "ML models analyze network, endpoint, and cloud behavior. Catches zero-days before first exploit.",
    color: "text-blue-400",
    bg: "bg-blue-400/10"
  },
  {
    icon: Database,
    title: "Intelligent Alert Reduction",
    description: "Context-aware AI scores threats by business impact. Only critical alerts reach your team.",
    color: "text-purple-400",
    bg: "bg-purple-400/10"
  },
  {
    icon: Cpu,
    title: "Autonomous Incident Response",
    description: "Pre-approved playbooks execute automatically. Isolate threats in milliseconds, not hours.",
    color: "text-emerald-400",
    bg: "bg-emerald-400/10"
  }
];

const SolutionSection = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute right-0 top-0 w-1/2 h-full bg-primary/5 blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left content */}
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
                <Shield className="w-4 h-4" />
                Introducing leks.AI
              </div>
              
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6 leading-tight">
                The World's First:
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500">Fully Autonomous SOC</span>
              </h2>
              
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                AI agents that detect, investigate, and respond to threats without human intervention. 
                Behavioral ML learns your environment. Explainable AI keeps you in control.
              </p>

              <div className="space-y-4">
                {features.map((feature, idx) => (
                  <div 
                    key={idx}
                    className="group flex items-start gap-4 p-4 rounded-xl bg-card/50 hover:bg-card border border-white/5 hover:border-primary/20 transition-all duration-300"
                  >
                    <div className={cn("w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors", feature.bg)}>
                      <feature.icon className={cn("w-5 h-5", feature.color)} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">{feature.title}</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right visual - Holographic Interface */}
            <div className="order-1 lg:order-2 relative perspective-1000">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-purple-500/20 rounded-3xl blur-2xl opacity-40 animate-pulse-gentle" />
              
              <div className="relative bg-[#0A0A0B] border border-white/10 rounded-3xl p-6 shadow-2xl overflow-hidden glass-card">
                {/* Dashboard Header */}
                <div className="flex items-center justify-between mb-8 border-b border-white/5 pb-4">
                  <div className="flex items-center gap-3">
                    <Activity className="w-5 h-5 text-primary animate-pulse" />
                    <span className="font-mono text-sm text-primary">LIVE MONITORING</span>
                  </div>
                  <div className="text-xs text-muted-foreground font-mono">
                    SYS.OP.ACTIVE
                  </div>
                </div>

                {/* Radar/Scanner Visualization */}
                <div className="relative aspect-square max-w-[300px] mx-auto mb-8">
                  {/* Radar Circles */}
                  <div className="absolute inset-0 rounded-full border border-primary/20 animate-[spin_10s_linear_infinite]" />
                  <div className="absolute inset-[15%] rounded-full border border-primary/20 animate-[spin_8s_linear_infinite_reverse]" />
                  <div className="absolute inset-[30%] rounded-full border border-primary/20" />
                  <div className="absolute inset-[45%] rounded-full bg-primary/10 animate-pulse" />
                  
                  {/* Scanning Line */}
                  <div className="absolute inset-0 bg-gradient-to-t from-transparent via-primary/10 to-transparent w-[2px] h-full left-1/2 -translate-x-1/2 animate-[spin_4s_linear_infinite]" />
                  
                  {/* Blips */}
                  <div className="absolute top-[20%] right-[20%] w-2 h-2 bg-destructive rounded-full animate-ping" />
                  <div className="absolute top-[20%] right-[20%] w-2 h-2 bg-destructive rounded-full" />
                  
                  <div className="absolute bottom-[30%] left-[25%] w-1.5 h-1.5 bg-blue-500 rounded-full" />
                  <div className="absolute top-[15%] left-[50%] w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/5 rounded-xl p-3 border border-white/5">
                    <div className="text-xs text-muted-foreground mb-1">Threats Blocked</div>
                    <div className="text-2xl font-mono font-bold text-white">1,204</div>
                  </div>
                  <div className="bg-white/5 rounded-xl p-3 border border-white/5">
                    <div className="text-xs text-muted-foreground mb-1">Response Time</div>
                    <div className="text-2xl font-mono font-bold text-primary">0.02s</div>
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
