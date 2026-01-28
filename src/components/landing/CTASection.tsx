import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Shield, ArrowRight, CheckCircle2 } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="relative rounded-[2.5rem] overflow-hidden border border-primary/20 shadow-2xl shadow-primary/10">
            {/* Dynamic Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-900 to-black" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,theme(colors.primary.900/40%)_0%,transparent_60%)]" />
            
            {/* Grid Pattern */}
            <div className="absolute inset-0 opacity-[0.03]" style={{
              backgroundImage: 'linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)',
              backgroundSize: '60px 60px'
            }} />

            <div className="relative z-10 px-8 py-20 sm:p-20 text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-primary/10 border border-primary/20 mb-10 animate-pulse-gentle shadow-[0_0_40px_-10px_rgba(var(--primary),0.3)]">
                <Shield className="w-10 h-10 text-primary" />
              </div>

              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8 tracking-tight">
                Secure your infrastructure.
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-emerald-400 to-cyan-400">
                  Autonomously.
                </span>
              </h2>

              <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed">
                Join effective security teams using leks.AI to detect threats 90% faster. 
                Deploy autonomous threat detection in under 15 minutes.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-lg mx-auto mb-12">
                <div className="relative w-full">
                  <Input 
                    type="email" 
                    placeholder="Enter your work email"
                    className="h-16 bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-primary/50 text-lg rounded-2xl pl-6 pr-4 shadow-xl"
                  />
                </div>
                <Button size="xl" className="h-16 px-8 text-lg font-semibold rounded-2xl bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_20px_-5px_hsl(var(--primary))] shrink-0 w-full sm:w-auto hover:scale-105 transition-all">
                  Get Started
                </Button>
              </div>

              <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm font-medium text-gray-500">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  <span>No credit card required</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  <span>SOC2 Type II Compliant</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  <span>14-day free trial</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
