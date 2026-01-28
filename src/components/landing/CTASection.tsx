import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Shield, ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden gradient-border card-glow">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-card to-primary/10" />
            
            {/* Decorative grid */}
            <div className="absolute inset-0 opacity-20" style={{
              backgroundImage: 'radial-gradient(circle at 1px 1px, hsl(155 75% 45% / 0.3) 1px, transparent 0)',
              backgroundSize: '40px 40px'
            }} />

            <div className="relative z-10 p-8 sm:p-12 lg:p-16 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/20 border border-primary/30 mb-8 animate-glow">
                <Shield className="w-8 h-8 text-primary" />
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Stop Breaches.
                <br />
                <span className="text-gradient">Let AI Take the Wheel.</span>
              </h2>

              <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-10">
                Join 500+ security teams using AI to detect threats 90% faster. 
                Get autonomous threat detection running in 24 hours.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
                <Input 
                  type="email" 
                  placeholder="Enter your work email"
                  className="h-14 bg-background/50 border-border/50 text-foreground placeholder:text-muted-foreground focus:border-primary/50"
                />
                <Button variant="hero" size="xl" className="shrink-0 w-full sm:w-auto">
                  Join Waitlist
                  <ArrowRight className="w-5 h-5 ml-1" />
                </Button>
              </div>

              <p className="mt-8 text-sm text-muted-foreground font-mono">
                No credit card required • Deploy in 24 hours • SOC2 compliant
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
