import { Button } from "@/components/ui/button";
import { Shield, Sparkles } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-xl border-b border-border/50">
      {/* Top banner */}
      <div className="bg-primary/10 border-b border-primary/20 py-2">
        <div className="container mx-auto px-6 flex items-center justify-center gap-2">
          <Sparkles className="w-4 h-4 text-primary flex-shrink-0" />
          <span className="text-xs sm:text-sm text-primary font-medium text-center">
            AI-powered autonomous threat intelligence & response
          </span>
        </div>
      </div>
      
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
            <Shield className="w-5 h-5 text-primary" />
          </div>
          <span className="text-xl font-bold text-foreground">leks.AI</span>
        </a>
        
        {/* <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium">Features</a>
          <a href="#how-it-works" className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium">How It Works</a>
          <a href="#benefits" className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium">Benefits</a>
          <a href="#use-cases" className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium">Use Cases</a>
        </div>

        <div className="flex items-center gap-3">
          <Button variant="ghost" size="sm" className="hidden sm:inline-flex text-muted-foreground">
            Sign In
          </Button>
          <Button variant="hero" size="sm">
            Get Started
          </Button>
        </div> */}
      </div>
    </nav>
  );
};
export default Navbar;