import { Eye, Brain, Shield, Heart } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Eye,
    title: "Real-Time Behavior Observation",
    description: "SentriQ learns normal patterns: login times, device usage, typing rhythm, app switching, task habits. No spying. No content reading."
  },
  {
    number: "02",
    icon: Brain,
    title: "AI Productivity Intelligence",
    description: "Detects distraction loops, reorders tasks dynamically, suggests focus windows, auto-summarizes sessions, and flags overload."
  },
  {
    number: "03",
    icon: Shield,
    title: "Embedded Cyber Security Intelligence",
    description: "The same behavior data detects threats: account takeover, session hijacking, insider misuse, credential sharing, bot activity."
  },
  {
    number: "04",
    icon: Heart,
    title: "Real-Time Response Engine",
    description: "Silent re-authentication, session locks, data masking, admin alerts, safe next-action recommendations. Security feels invisible."
  }
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Simple but Powerful Flow
          </h2>
          <p className="text-lg text-muted-foreground">
            From observation to protection—all in real-time, all invisible.
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
