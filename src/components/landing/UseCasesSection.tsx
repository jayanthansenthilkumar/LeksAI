import { Briefcase, GraduationCap, Building2, HeartPulse } from "lucide-react";

const useCases = [
  {
    icon: Briefcase,
    title: "Enterprises & Startups",
    description: "Secure remote workforce, prevent insider threats, improve team output without micromanagement.",
    tag: "Teams"
  },
  {
    icon: GraduationCap,
    title: "Educational Institutions",
    description: "Protect student systems, prevent exam & identity fraud, improve learning discipline.",
    tag: "Education"
  },
  {
    icon: HeartPulse,
    title: "Healthcare",
    description: "Secure sensitive patient data, prevent unauthorized access, maintain HIPAA compliance effortlessly.",
    tag: "Healthcare"
  },
  {
    icon: Building2,
    title: "Finance & Banking",
    description: "Protect financial data, detect insider trading attempts, ensure regulatory compliance.",
    tag: "Finance"
  }
];

const UseCasesSection = () => {
  return (
    <section id="use-cases" className="py-24 bg-card border-y border-border/50">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Who Benefits
          </h2>
          <p className="text-lg text-muted-foreground">
            Horizontal value with vertical depth. From startups to healthcare to finance.
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
