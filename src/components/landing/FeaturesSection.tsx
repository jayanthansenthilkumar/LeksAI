import { Focus, Fingerprint, ShieldCheck, Lock, Bell, RefreshCw } from "lucide-react";

const features = [
  {
    icon: Focus,
    title: "Real-Time Focus Assistance",
    description: "AI-powered insights help you maintain deep work while minimizing distractions."
  },
  {
    icon: Fingerprint,
    title: "Behavior-Based Anomaly Detection",
    description: "Identifies unusual patterns without watching what you type or view."
  },
  {
    icon: ShieldCheck,
    title: "Continuous Authentication",
    description: "Silently verifies it's really you based on how you work."
  },
  {
    icon: Lock,
    title: "Data Protection Without Access",
    description: "Protects sensitive information by understanding context, not content."
  },
  {
    icon: Bell,
    title: "Gentle, Non-Intrusive Alerts",
    description: "Calm notifications that inform without alarming or disrupting."
  },
  {
    icon: RefreshCw,
    title: "Automatic Session Recovery",
    description: "If something goes wrong, SentriQ handles it quietly."
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
            Adaptive Intelligence
          </h2>
          <p className="text-lg text-muted-foreground">
            The differentiator that separates signal from noise.
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
