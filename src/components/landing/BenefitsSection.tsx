import { TrendingUp, ShieldCheck, Users, Smile } from "lucide-react";

const benefits = [
  {
    icon: TrendingUp,
    stat: "40%",
    title: "Increased Productivity",
    description: "Teams using SentriQ report significantly improved focus and fewer interruptions."
  },
  {
    icon: ShieldCheck,
    stat: "85%",
    title: "Reduced Cyber Incidents",
    description: "Early threat detection prevents most security breaches before they cause damage."
  },
  {
    icon: Users,
    stat: "92%",
    title: "Higher Employee Trust",
    description: "Workers feel respected and valued when security respects their privacy."
  },
  {
    icon: Smile,
    stat: "3x",
    title: "Lower Burnout & Stress",
    description: "Calm security and focus assistance reduce workplace anxiety significantly."
  }
];

const BenefitsSection = () => {
  return (
    <section id="benefits" className="py-24 bg-gradient-to-b from-card to-background">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Results You Can Measure
          </h2>
          <p className="text-lg text-muted-foreground">
            SentriQ delivers tangible benefits for organizations and individuals alike.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="group text-center p-8 rounded-2xl bg-card border border-border/50 card-shadow hover:card-shadow-hover transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <benefit.icon className="w-8 h-8 text-primary" />
              </div>
              <div className="text-4xl font-bold text-gradient mb-2">{benefit.stat}</div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {benefit.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
