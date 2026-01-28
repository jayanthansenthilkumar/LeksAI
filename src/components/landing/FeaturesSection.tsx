import { Focus, Fingerprint, ShieldCheck, Lock, Bell, RefreshCw } from "lucide-react";

const features = [
  {
    icon: Focus,
    title: "Real-Time Focus Assistance",
    description: "AI-powered insights help you maintain deep work while minimizing distractions throughout your day."
  },
  {
    icon: Fingerprint,
    title: "Behavior-Based Anomaly Detection",
    description: "Identifies unusual patterns that may indicate compromised accounts or insider threats—without watching what you type."
  },
  {
    icon: ShieldCheck,
    title: "Continuous Authentication",
    description: "Silently verifies it's really you based on how you work, adding an invisible layer of security."
  },
  {
    icon: Lock,
    title: "Data Protection Without Access",
    description: "Protects sensitive information by understanding context and risk—never by reading your content."
  },
  {
    icon: Bell,
    title: "Gentle, Non-Intrusive Alerts",
    description: "Calm notifications that inform without alarming. No red warnings or panic-inducing popups."
  },
  {
    icon: RefreshCw,
    title: "Automatic Session Recovery",
    description: "If something goes wrong, SentriQ quietly handles it. Your workflow continues uninterrupted."
  }
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Features Built for Trust
          </h2>
          <p className="text-lg text-muted-foreground">
            Every feature is designed with one principle: protect you without invading your privacy.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group p-8 rounded-2xl bg-background border border-border/50 card-shadow hover:card-shadow-hover hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center mb-5 group-hover:from-primary/20 group-hover:to-secondary/20 transition-colors">
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
