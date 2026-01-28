import { Button } from "@/components/ui/button";
import { Shield, ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-secondary" />
            
            {/* Decorative elements */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
              <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
            </div>

            <div className="relative z-10 p-8 sm:p-12 lg:p-16 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm mb-8">
                <Shield className="w-8 h-8 text-primary-foreground" />
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
                Protect Productivity
                <br />
                Without Pressure
              </h2>

              <p className="text-lg text-primary-foreground/80 max-w-xl mx-auto mb-10">
                Join organizations that trust SentriQ to keep their teams safe, focused, 
                and respected. Start your journey to calm security today.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button 
                  size="xl" 
                  className="bg-white text-primary hover:bg-white/90 shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all font-semibold"
                >
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-1" />
                </Button>
                <Button 
                  size="xl" 
                  variant="ghost"
                  className="text-primary-foreground hover:bg-white/10 border border-white/20"
                >
                  Schedule a Demo
                </Button>
              </div>

              <p className="mt-8 text-sm text-primary-foreground/60">
                No credit card required • 14-day free trial • Cancel anytime
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
