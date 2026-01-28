import { Eye, Brain, Shield, Heart, ArrowRight } from "lucide-react";

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
    title: "Intelligent Triage",
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
    <section id="how-it-works" className="py-24 bg-background relative overflow-hidden">
      {/* Connecting line for desktop */}
      <div className="hidden lg:block absolute top-[50%] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent -translate-y-1/2" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
            AI-Powered Detection Pipeline
          </h2>
          <p className="text-lg text-muted-foreground">
            From data ingestion to threat neutralization—all automated, all explainable.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="relative group pt-8"
            >
              {/* Connector dot */}
              <div className="absolute top-0 left-8 lg:left-1/2 lg:-translate-x-1/2 w-4 h-4 rounded-full bg-background border-2 border-primary/50 group-hover:bg-primary group-hover:border-primary transition-colors z-10" />
              
              {/* Vertical line for mobile */}
              <div className="lg:hidden absolute top-4 bottom-0 left-[2.4rem] w-[1px] bg-primary/20" />

              <div className="relative p-6 rounded-2xl bg-card border border-white/5 hover:border-primary/20 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 h-full">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 text-primary group-hover:scale-110 transition-transform duration-300">
                  <step.icon className="w-6 h-6" />
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-2 flex items-center gap-2">
                  <span className="text-primary font-mono opacity-50 text-sm">0{index + 1}.</span>
                  {step.title}
                </h3>
                
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>

                {index < steps.length - 1 && (
                  <ArrowRight className="hidden lg:block absolute -right-6 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground/30" />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
