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
    <section className="py-24 bg-muted/30 border-y border-border/50">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            The Modern SOC Crisis
          </h2>
          <p className="text-lg text-muted-foreground">
            Too many alerts. Not enough analysts. Threats move faster than humans can respond. 
            Traditional security creates more problems than it solves.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {problems.map((problem, index) => (
            <div 
              key={index}
              className="group p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-300 gradient-border"
            >
              <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
                <problem.icon className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {problem.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {problem.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
