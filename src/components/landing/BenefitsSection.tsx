import { TrendingUp, ShieldCheck, Users, Smile } from "lucide-react";

const benefits = [
  {
    icon: TrendingUp,
    stat: "90%",
    title: "Alert Reduction",
    description: "AI eliminates false positives. Your SOC focuses on real threats, not noise."
  },
  {
    icon: ShieldCheck,
    stat: "<1s",
    title: "Response Time",
    description: "Autonomous containment in milliseconds. Stop breaches before they spread."
  },
  {
    icon: Users,
    stat: "60%",
    title: "Cost Savings",
    description: "Reduce SOC staffing needs. One analyst can do the work of three with AI."
  },
  {
    icon: Smile,
    stat: "24/7",
    title: "Always Learning",
    description: "Models adapt to your environment. Accuracy improves every day."
  }
];

const BenefitsSection = () => {
  return (
    <section id="benefits" className="py-24 bg-card border-y border-border/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-4">
          <span className="text-primary font-mono text-sm">Proven Results</span>
        </div>
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Measurable <span className="text-gradient">Business Impact</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Real numbers from real deployments. AI security delivers ROI from day one.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="group text-center p-8 rounded-2xl bg-background border border-border/50 hover:border-primary/30 transition-all duration-300 gradient-border"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <benefit.icon className="w-8 h-8 text-primary" />
              </div>
              <div className="text-4xl font-bold text-gradient mb-2 font-mono">{benefit.stat}</div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {benefit.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
