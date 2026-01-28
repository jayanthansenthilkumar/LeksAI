import { Eye, Brain, Shield, Heart } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Eye,
    title: "Observe Behavior",
    description: "SentriQ watches how you interact—mouse movements, typing rhythm, work patterns—never what you type or view.",
    color: "primary"
  },
  {
    number: "02",
    icon: Brain,
    title: "Learn Your Patterns",
    description: "Our AI builds a private behavioral profile unique to you, understanding your normal work rhythms over time.",
    color: "secondary"
  },
  {
    number: "03",
    icon: Shield,
    title: "Detect Risks Silently",
    description: "When behavior deviates from your baseline, SentriQ identifies potential threats without disrupting your flow.",
    color: "primary"
  },
  {
    number: "04",
    icon: Heart,
    title: "Protect Calmly",
    description: "Threats are handled quietly—gentle alerts, automatic recovery, and continuous protection with zero stress.",
    color: "secondary"
  }
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            How SentriQ Works
          </h2>
          <p className="text-lg text-muted-foreground">
            Four simple steps to invisible protection. No learning curve, no configuration, no stress.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Connection line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/20 via-secondary/20 to-primary/20 -translate-x-1/2" />

            <div className="space-y-12">
              {steps.map((step, index) => (
                <div 
                  key={index}
                  className={`flex flex-col md:flex-row items-center gap-8 ${
                    index % 2 === 1 ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Content */}
                  <div className={`flex-1 ${index % 2 === 1 ? 'md:text-right' : ''}`}>
                    <div className={`inline-block ${index % 2 === 1 ? 'md:float-right md:ml-4' : 'md:mr-4'}`}>
                      <span className="text-5xl font-bold text-muted/30">{step.number}</span>
                    </div>
                    <h3 className="text-2xl font-semibold text-foreground mb-2">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed max-w-md">
                      {step.description}
                    </p>
                  </div>

                  {/* Icon circle */}
                  <div className="relative z-10">
                    <div className={`w-20 h-20 rounded-full bg-card border-2 ${
                      step.color === 'primary' ? 'border-primary/30 glow-primary' : 'border-secondary/30 glow-secondary'
                    } flex items-center justify-center card-shadow`}>
                      <step.icon className={`w-9 h-9 ${
                        step.color === 'primary' ? 'text-primary' : 'text-secondary'
                      }`} />
                    </div>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="flex-1 hidden md:block" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
