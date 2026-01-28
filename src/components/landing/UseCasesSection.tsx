import { Home, GraduationCap, UserX, Briefcase } from "lucide-react";

const useCases = [
  {
    icon: Home,
    title: "Remote Work Security",
    description: "Protect distributed teams without installing invasive monitoring software. Employees work freely while threats are caught silently.",
    tag: "Teams"
  },
  {
    icon: GraduationCap,
    title: "Secure Online Learning",
    description: "Keep students safe during virtual sessions without recording or watching. Academic integrity preserved with privacy intact.",
    tag: "Education"
  },
  {
    icon: UserX,
    title: "Insider Threat Prevention",
    description: "Detect compromised accounts and unusual behavior patterns before damage occurs—without creating a culture of suspicion.",
    tag: "Enterprise"
  },
  {
    icon: Briefcase,
    title: "Sensitive Role Protection",
    description: "Extra security for executives, finance, and data handlers. Continuous authentication without friction or distrust.",
    tag: "High-Security"
  }
];

const UseCasesSection = () => {
  return (
    <section id="use-cases" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            SentriQ Adapts to Your World
          </h2>
          <p className="text-lg text-muted-foreground">
            From remote teams to high-security environments, SentriQ provides calm protection wherever work happens.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {useCases.map((useCase, index) => (
            <div 
              key={index}
              className="group relative p-8 rounded-2xl bg-background border border-border/50 card-shadow hover:card-shadow-hover transition-all duration-300 overflow-hidden"
            >
              {/* Background gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-14 h-14 rounded-2xl bg-muted flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                    <useCase.icon className="w-7 h-7 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <span className="px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs font-medium">
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;
