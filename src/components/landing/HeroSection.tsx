import { Button } from "@/components/ui/button";
import { Shield, Sparkles, Lock } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center hero-gradient overflow-hidden pt-16">
      {/* Floating background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-[10%] w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-[15%] w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-float-delayed" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-primary/3 to-secondary/3 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border/50 card-shadow mb-8 animate-fade-up">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-muted-foreground">Privacy-First AI Security</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight mb-6 animate-fade-up">
            Work Smarter. Stay Secure.
            <br />
            <span className="text-gradient">Without Feeling Watched.</span>
          </h1>

          {/* Subtext */}
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-up-delayed">
            SentriQ is your real-time AI assistant that boosts productivity while silently protecting you from cyber threats—using behavior-based, privacy-first security that never reads your content.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up-delayed">
            <Button variant="hero" size="xl">
              Get Started Free
            </Button>
            <Button variant="heroOutline" size="xl">
              Request Demo
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="mt-16 flex flex-wrap items-center justify-center gap-8 animate-fade-up-delayed">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Shield className="w-5 h-5 text-secondary" />
              <span className="text-sm">No screen recording</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Lock className="w-5 h-5 text-secondary" />
              <span className="text-sm">No content scanning</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Sparkles className="w-5 h-5 text-secondary" />
              <span className="text-sm">Privacy by design</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
