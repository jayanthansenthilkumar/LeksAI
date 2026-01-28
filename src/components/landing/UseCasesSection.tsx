import { Home, GraduationCap, UserX, Briefcase } from "lucide-react";

const useCases = [
  {
    icon: Home,
    title: "Remote Work Security",
    description: "Protect distributed teams without installing invasive monitoring software.",
    tag: "Teams"
  },
  {
    icon: GraduationCap,
    title: "Secure Online Learning",
    description: "Keep students safe during virtual sessions without recording or watching.",
    tag: "Education"
  },
  {
    icon: UserX,
    title: "Insider Threat Prevention",
    description: "Detect compromised accounts before damage occurs—without suspicion.",
    tag: "Enterprise"
  },
  {
    icon: Briefcase,
    title: "Sensitive Role Protection",
    description: "Extra security for executives and data handlers without friction.",
    tag: "High-Security"
  }
];

const UseCasesSection = () => {
  return (
    <section id="use-cases" className="py-24 bg-card border-y border-border/50">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            SentriQ Adapts to Your World
          </h2>
          <p className="text-lg text-muted-foreground">
            From remote teams to high-security environments, calm protection wherever work happens.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {useCases.map((useCase, index) => (
            <div 
              key={index}
              className="group relative p-8 rounded-2xl bg-background border border-border/50 hover:border-primary/30 transition-all duration-300 gradient-border"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-14 h-14 rounded-2xl bg-muted flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                  <useCase.icon className="w-7 h-7 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <span className="px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-medium font-mono">
                  {useCase.tag}
                </span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {useCase.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {useCase.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;
