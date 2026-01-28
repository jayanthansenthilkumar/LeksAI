import { Eye, Brain, Shield, Heart } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Eye,
    title: "Enter Your Workflow",
    description: "SentriQ seamlessly integrates with your existing tools. No configuration, no disruption."
  },
  {
    number: "02",
    icon: Brain,
    title: "Semantic Analysis",
    description: "Our AI learns your behavioral patterns—not your content. It understands rhythm, not words."
  },
  {
    number: "03",
    icon: Shield,
    title: "Silent Protection",
    description: "When behavior deviates, threats are identified and handled without interrupting your flow."
  },
  {
    number: "04",
    icon: Heart,
    title: "Calm Alerts",
    description: "Only meaningful changes trigger gentle notifications. No noise, no false alarms."
  }
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            How it Works
          </h2>
          <p className="text-lg text-muted-foreground">
            Automated intelligence gathering that runs 24/7.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {steps.map((step, index) => (
              <div 
                key={index}
                className="relative p-8 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-300 group gradient-border"
              >
                <div className="absolute top-6 right-6 font-mono text-4xl font-bold text-muted/20 group-hover:text-primary/20 transition-colors">
                  {step.number}
                </div>
                
                <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-5">
                  <step.icon className="w-7 h-7 text-primary" />
                </div>
                
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
