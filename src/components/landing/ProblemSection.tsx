import { Brain, ShieldAlert, Clock, AlertTriangle } from "lucide-react";

const problems = [
  {
    icon: Brain,
    title: "10+ Apps, Constant Juggling",
    description: "Users lose focus switching between tools, logins, and devices—productivity suffers silently."
  },
  {
    icon: Clock,
    title: "Security Tools Are Reactive",
    description: "Traditional systems detect threats after damage is done. Logs → analysis → alerts = too late."
  },
  {
    icon: ShieldAlert,
    title: "Productivity vs. Security",
    description: "Productivity tools ignore cyber risks. Cyber tools ignore human behavior. The gap is costly."
  },
  {
    icon: AlertTriangle,
    title: "Silent Breaches + Burnout",
    description: "Account takeovers and insider threats go unnoticed while employees experience constant pressure."
  }
];

const ProblemSection = () => {
  return (
    <section className="py-24 bg-card border-y border-border/50">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            The Productivity-Security Gap
          </h2>
          <p className="text-lg text-muted-foreground">
            Productivity loss + silent breaches + burnout + delayed detection. 
            SentriQ merges productivity intelligence and cyber intelligence into one real-time system.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {problems.map((problem, index) => (
            <div 
              key={index}
              className="group p-6 rounded-2xl bg-background border border-border/50 hover:border-primary/30 transition-all duration-300 gradient-border"
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
