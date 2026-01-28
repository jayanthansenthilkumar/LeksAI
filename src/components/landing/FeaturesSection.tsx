import { Focus, Brain, Fingerprint, ShieldCheck, Lock, AlertTriangle } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI Threat Hunter",
    description: "Behavioral anomaly detection using ML. Predicts attacks before they happen with explainable AI.",
    category: "detection"
  },
  {
    icon: AlertTriangle,
    title: "Smart Alert Triage",
    description: "Reduces alerts by 90%. AI-powered prioritization with business context. Eliminates false positives.",
    category: "detection"
  },
  {
    icon: ShieldCheck,
    title: "Autonomous Response",
    description: "Automatic containment in <1 second. Self-healing for common attacks. Human-in-loop for critical decisions.",
    category: "response"
  },
  {
    icon: Focus,
    title: "Conversational Security",
    description: "Chat-based interface powered by LLMs. Query all security data in natural language.",
    category: "interface"
  },
  {
    icon: Lock,
    title: "API Security Shield",
    description: "Real-time API traffic analysis. Detects credential stuffing, injection attacks, shadow APIs.",
    category: "protection"
  },
  {
    icon: Fingerprint,
    title: "Vulnerability Intelligence",
    description: "Predicts which CVEs will be exploited next. Auto-prioritizes based on exploitability.",
    category: "intelligence"
  }
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 bg-card border-y border-primary/20 relative overflow-hidden">
      <div className="absolute inset-0 cyber-grid opacity-20" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-4">
          <span className="text-primary font-cyber text-sm tracking-wider">THE "WHAT"</span>
        </div>
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-cyber font-bold text-gradient mb-4">
            AI-Native Security Features
          </h2>
          <p className="text-lg text-muted-foreground">
            From detection to response—all powered by machine learning and automation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index}
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
