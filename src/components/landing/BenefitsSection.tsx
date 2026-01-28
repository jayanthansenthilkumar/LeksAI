import { TrendingUp, ShieldCheck, Users, Zap } from "lucide-react";

const benefits = [
  {
    icon: TrendingUp,
    stat: "90%",
    label: "Reduction",
    title: "In Alert Noise",
    description: "AI eliminates false positives. Your SOC focuses on real threats, not noise."
  },
  {
    icon: ShieldCheck,
    stat: "<1s",
    label: "Response",
    title: "Mean Time to Contain",
    description: "Autonomous containment in milliseconds. Stop breaches before they spread."
  },
  {
    icon: Users,
    stat: "60%",
    label: "Efficiency",
    title: "Staff Augmentation",
    description: "Reduce SOC staffing needs. One analyst can do the work of three with AI."
  },
  {
    icon: Zap,
    stat: "24/7",
    label: "Coverage",
    title: "Always Learning",
    description: "Models adapt to your environment. Accuracy improves every single day."
  }
];

const BenefitsSection = () => {
  return (
    <section id="benefits" className="py-24 bg-card border-y border-border/50 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,theme(colors.primary.900/10%)_0%,transparent_100%)]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-primary font-mono text-xs uppercase tracking-wider px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
              Proven Results
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
            Measurable <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-400">Business Impact</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real numbers from real deployments. AI security delivers ROI from day one
            by eliminating manual triage and automating protection.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="group text-center p-8 rounded-3xl bg-background border border-border/50 hover:border-primary/40 transition-all duration-300 relative overflow-hidden hover:-translate-y-1 hover:shadow-2xl"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-card border border-white/5 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-inner">
                  <benefit.icon className="w-8 h-8 text-primary/80 group-hover:text-primary transition-colors" />
                </div>
                
                <div className="flex flex-col items-center justify-center mb-4">
                  <div className="text-5xl font-bold text-foreground tracking-tight group-hover:text-primary transition-colors duration-300">
                    {benefit.stat}
                  </div>
                  <div className="text-xs font-mono text-muted-foreground uppercase tracking-widest mt-1">
                    {benefit.label}
                  </div>
                </div>

                <h3 className="text-lg font-bold text-foreground mb-3">
                  {benefit.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
