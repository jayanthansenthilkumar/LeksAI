import { Brain, ShieldAlert, Clock, AlertTriangle } from "lucide-react";

const problems = [
  {
    icon: AlertTriangle,
    title: "Alert Fatigue Overload",
    description: "SOC teams drown in 10,000+ daily alerts. 95% are false positives. Critical threats get buried."
  },
  {
    icon: Clock,
    title: "200-Day Detection Gap",
    description: "Average breach takes 200+ days to detect. Attackers move freely while you're blind."
  },
  {
    icon: Brain,
    title: "Critical Skills Shortage",
    description: "Can't hire enough cybersecurity talent. Junior analysts can't handle sophisticated threats."
  },
  {
    icon: ShieldAlert,
    title: "Zero-Day Blindness",
    description: "Signature-based tools fail against novel attacks. APIs and cloud environments create blind spots."
  }
];

const ProblemSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
            The Modern <span className="text-destructive">SOC Crisis</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
            Too many alerts. Not enough analysts. Threats move faster than humans can respond. 
            Traditional security creates more problems than it solves.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {problems.map((problem, index) => (
            <div 
              key={index}
              className="group relative p-6 rounded-2xl bg-card/40 backdrop-filter backdrop-blur-sm border border-white/5 hover:border-primary/20 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
              
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-background/50 border border-white/10 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-primary/10 transition-all duration-300 shadow-inner">
                  <problem.icon className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {problem.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors">
                  {problem.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
