import { TrendingUp, ShieldCheck, Users, Smile } from "lucide-react";

const benefits = [
  {
    icon: TrendingUp,
    stat: "40%",
    title: "Increased Productivity",
    description: "Teams report significantly improved focus and fewer interruptions."
  },
  {
    icon: ShieldCheck,
    stat: "85%",
    title: "Reduced Incidents",
    description: "Early detection prevents most breaches before damage occurs."
  },
  {
    icon: Users,
    stat: "92%",
    title: "Employee Trust",
    description: "Workers feel respected when security respects privacy."
  },
  {
    icon: Smile,
    stat: "3x",
    title: "Lower Stress",
    description: "Calm security reduces workplace anxiety significantly."
  }
];

const BenefitsSection = () => {
  return (
    <section id="benefits" className="py-24 bg-card border-y border-border/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-4">
          <span className="text-primary font-mono text-sm">Live Monitoring</span>
        </div>
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            High-Frequency <span className="text-gradient">Monitoring</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            We don't just track threats. We detect subtle shifts in behavior before they become problems.
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
