import { Brain, ShieldAlert, Clock, AlertTriangle } from "lucide-react";

const problems = [
  {
    icon: Brain,
    title: "Digital Overwhelm",
    description: "Constant notifications and context-switching drain focus and creativity throughout the workday."
  },
  {
    icon: Clock,
    title: "Productivity Burnout",
    description: "The pressure to always be connected leads to exhaustion and decreased performance over time."
  },
  {
    icon: ShieldAlert,
    title: "Hidden Cyber Risks",
    description: "Remote work expands attack surfaces while employees remain unaware of subtle security threats."
  },
  {
    icon: AlertTriangle,
    title: "Intrusive Security Tools",
    description: "Traditional monitoring software creates distrust and anxiety, making employees feel surveilled."
  }
];

const ProblemSection = () => {
  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            The Modern Work Dilemma
          </h2>
          <p className="text-lg text-muted-foreground">
            Today's digital workplace creates an impossible choice: productivity or security. 
            But it doesn't have to be this way.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {problems.map((problem, index) => (
            <div 
              key={index}
              className="group p-6 rounded-2xl bg-background border border-border/50 card-shadow hover:card-shadow-hover transition-all duration-300"
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
