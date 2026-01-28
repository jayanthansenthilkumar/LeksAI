import { VideoOff, KeyboardOff, FileX, Eye, Lock } from "lucide-react";

const privacyFeatures = [
  {
    icon: VideoOff,
    title: "No Screen Recording",
    description: "Your screen is your private workspace. We never capture, store, or transmit visual content."
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
    title: "Transparent Actions",
    description: "Every action leks.AI takes is logged and explainable. You always know what's happening."
  }
];

const PrivacySection = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="relative rounded-[2.5rem] overflow-hidden border border-white/10 bg-card/30 backdrop-blur-md shadow-2xl">
            {/* Background Texture */}
            <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5 mix-blend-overlay" />
            <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />

            <div className="relative p-8 sm:p-12 lg:p-16">
              <div className="text-center mb-16">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 text-sm font-medium mb-6 animate-pulse-gentle">
                  <Lock className="w-4 h-4" />
                  <span>Privacy First Architecture</span>
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                  Built on Trust, Not <span className="text-destructive decoration-destructive/30 underline-offset-4 decoration-2">Surveillance</span>
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                  We believe security and privacy aren't opposites. leks.AI proves you can have 
                  world-class autonomous protection without compromising personal boundaries.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                {privacyFeatures.map((feature, index) => (
                  <div 
                    key={index}
                    className="flex items-start gap-5 p-6 rounded-2xl bg-black/20 border border-white/5 hover:bg-black/40 hover:border-emerald-500/30 transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <feature.icon className="w-6 h-6 text-emerald-500" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-emerald-400 transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed group-hover:text-gray-400 transition-colors">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacySection;
