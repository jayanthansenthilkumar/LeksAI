import { VideoOff, KeyboardOff, FileX, Eye } from "lucide-react";

const privacyFeatures = [
  {
    icon: VideoOff,
    title: "No Screen Recording",
    description: "Your screen is your private workspace. SentriQ never captures, stores, or transmits visual content."
  },
  {
    icon: KeyboardOff,
    title: "No Keystroke Logging",
    description: "What you type stays with you. We analyze rhythm and patterns, never the actual keystrokes."
  },
  {
    icon: FileX,
    title: "No Content Scanning",
    description: "Your documents, emails, and messages are completely off-limits. We protect without reading."
  },
  {
    icon: Eye,
    title: "Transparent & Explainable",
    description: "Every action SentriQ takes is logged and explainable. You always know what's happening and why."
  }
];

const PrivacySection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="rounded-3xl bg-gradient-to-br from-primary/5 via-card to-secondary/5 border border-border/50 p-8 sm:p-12 lg:p-16">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-6">
                <Eye className="w-4 h-4" />
                Our Privacy Promise
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Built on Trust, Not Surveillance
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We believe security and privacy aren't opposites. SentriQ proves you can have 
                world-class protection without compromising personal boundaries.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {privacyFeatures.map((feature, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-4 p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/30"
                >
                  <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacySection;
