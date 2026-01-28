import { Focus, Brain, Fingerprint, ShieldCheck, Lock, AlertTriangle, ArrowUpRight } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI Threat Hunter",
    description: "Behavioral anomaly detection using ML. Predicts attacks before they happen with explainable AI.",
    gradient: "from-blue-500/20 to-purple-500/20"
  },
  {
    icon: AlertTriangle,
    title: "Smart Alert Triage",
    description: "Reduces alerts by 90%. AI-powered prioritization with business context. Eliminates false positives.",
    gradient: "from-amber-500/20 to-orange-500/20"
  },
  {
    icon: ShieldCheck,
    title: "Autonomous Response",
    description: "Automatic containment in <1 second. Self-healing for common attacks. Human-in-loop for critical decisions.",
    gradient: "from-emerald-500/20 to-green-500/20"
  },
  {
    icon: Focus,
    title: "Conversational Security",
    description: "Chat-based interface powered by LLMs. Query all security data in natural language.",
    gradient: "from-pink-500/20 to-rose-500/20"
  },
  {
    icon: Lock,
    title: "API Security Shield",
    description: "Real-time API traffic analysis. Detects credential stuffing, injection attacks, shadow APIs.",
    gradient: "from-cyan-500/20 to-blue-500/20"
  },
  {
    icon: Fingerprint,
    title: "Vulnerability Intelligence",
    description: "Predicts which CVEs will be exploited next. Auto-prioritizes based on exploitability.",
    gradient: "from-violet-500/20 to-purple-500/20"
  }
];

const FeaturesSection = () => {
  return (
<<<<<<< HEAD
    <section id="features" className="py-24 bg-background relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-muted-foreground text-xs font-mono mb-6">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            CAPABILITIES
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6 max-w-2xl">
            AI-Native Security <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/60">Built for Speed</span>
=======
    <section id="features" className="py-24 bg-card border-y border-primary/20 relative overflow-hidden">
      <div className="absolute inset-0 cyber-grid opacity-20" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-4">
          <span className="text-primary font-cyber text-sm tracking-wider">THE "WHAT"</span>
        </div>
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-cyber font-bold text-gradient mb-4">
            AI-Native Security Features
>>>>>>> parent of 8a5049e (Finalized Landing Page)
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl">
            From detection to response all powered by machine learning and automation.
            Replacing legacy tools with a single unified brain.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index}
<<<<<<< HEAD
              className="group relative p-8 rounded-3xl bg-card border border-white/5 hover:border-white/10 overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-6 h-6 text-foreground group-hover:text-white transition-colors" />
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-white transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed group-hover:text-white/70 transition-colors">
                  {feature.description}
                </p>
              </div>
=======
              className="group p-8 rounded-2xl bg-background border border-primary/30 hover:border-primary hover:shadow-cyber-lg hover:-translate-y-1 transition-all duration-300 cyber-border"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/30 flex items-center justify-center mb-5 group-hover:bg-primary/20 group-hover:shadow-neon transition-all">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-cyber font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
>>>>>>> parent of 8a5049e (Finalized Landing Page)
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
