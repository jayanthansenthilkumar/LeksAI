import { Shield } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 bg-card border-t border-border/50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Logo and tagline */}
            <div className="flex flex-col items-center md:items-start gap-3">
              <a href="#" className="flex items-center gap-2">
                <div className="w-9 h-9 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                  <Shield className="w-5 h-5 text-primary" />
                </div>
                <span className="text-xl font-bold text-foreground">SentriQ</span>
              </a>
              <p className="text-sm text-muted-foreground text-center md:text-left font-mono">
                Security that respects your privacy.
              </p>
            </div>

            {/* Links */}
            <div className="flex items-center gap-8">
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                About
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Privacy
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Security
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Contact
              </a>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-border/50 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-muted-foreground font-mono">
              © {new Date().getFullYear()} SentriQ. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground">
              Built with privacy at our core. We never compromise.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
