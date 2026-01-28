import { Eye, Brain, Shield, Heart } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Eye,
    title: "Unified Data Collection",
    description: "Ingest logs from network, endpoint, cloud, and APIs. Kafka streams process 1M+ events/sec in real-time."
  },
  {
    number: "02",
    icon: Brain,
    title: "AI Model Inference",
    description: "Behavioral ML detects anomalies. LSTMs analyze sequences. Graph Neural Networks map attack patterns."
  },
  {
    number: "03",
    icon: Shield,
    title: "Intelligent Triage & Context",
    description: "AI scores threats by business impact. Enriches alerts with MITRE ATT&CK mappings and threat intel."
  },
  {
    number: "04",
    icon: Heart,
    title: "Automated Response",
    description: "Execute playbooks via SOAR. Isolate endpoints, block IPs, revoke tokens—all in <1 second."
  }
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            AI-Powered Detection Pipeline
          </h2>
          <p className="text-lg text-muted-foreground">
            From data ingestion to threat neutralization—all automated, all explainable.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {steps.map((step, index) => (
              <div 
                key={index}
                className="relative p-8 rounded-2xl bg-muted/20 border border-border/50 hover:border-primary/30 transition-all duration-300 group gradient-border"
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
