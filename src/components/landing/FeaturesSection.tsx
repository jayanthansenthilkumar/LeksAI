import { Focus, Brain, Fingerprint, ShieldCheck, Lock, AlertTriangle } from "lucide-react";

const features = [
  {
    icon: Focus,
    title: "Live Task Prioritization",
    description: "AI reorders your work dynamically based on behavior patterns and deadlines.",
    category: "productivity"
  },
  {
    icon: Brain,
    title: "Smart Focus Nudges",
    description: "Detects distraction loops and suggests focus windows to maximize deep work.",
    category: "productivity"
  },
  {
    icon: AlertTriangle,
    title: "Burnout & Fatigue Alerts",
    description: "Flags overload and recommends breaks before productivity crashes.",
    category: "productivity"
  },
  {
    icon: Fingerprint,
    title: "Behavioral Anomaly Detection (UEBA)",
    description: "Identifies account takeover, session hijacking, and insider threats instantly.",
    category: "security"
  },
  {
    icon: ShieldCheck,
    title: "Zero-Trust Continuous Auth",
    description: "Silently verifies identity based on behavior—no constant password prompts.",
    category: "security"
  },
  {
    icon: Lock,
    title: "Real-Time Data Leak Prevention",
    description: "Monitors behavioral signals to prevent unauthorized data access and exfiltration.",
    category: "security"
  }
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 bg-card border-y border-border/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-4">
          <span className="text-primary font-mono text-sm">The "What"</span>
        </div>
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Product + Security Combined
          </h2>
          <p className="text-lg text-muted-foreground">
            One system that improves your workflow while protecting your trust.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group p-8 rounded-2xl bg-background border border-border/50 hover:border-primary/30 hover:-translate-y-1 transition-all duration-300 gradient-border"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
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
