import { Briefcase, GraduationCap, Building2, HeartPulse, Check } from "lucide-react";

const useCases = [
  {
    icon: Briefcase,
    title: "Enterprises & Startups",
    description: "Secure remote workforce, prevent insider threats, improve team output without micromanagement.",
    tag: "Teams",
    color: "text-blue-400",
    bg: "bg-blue-400/10",
    borderColor: "hover:border-blue-400/30",
    features: ["Remote Work Security", "Insider Threat Detection"]
  },
  {
    icon: GraduationCap,
    title: "Educational Institutions",
    description: "Protect student systems, prevent exam & identity fraud, improve learning discipline.",
    tag: "Education",
    color: "text-amber-400",
    bg: "bg-amber-400/10",
    borderColor: "hover:border-amber-400/30",
    features: ["Exam Integrity", "Identity Protection"]
  },
  {
    icon: HeartPulse,
    title: "Healthcare",
    description: "Secure sensitive patient data, prevent unauthorized access, maintain HIPAA compliance effortlessly.",
    tag: "Healthcare",
    color: "text-rose-400",
    bg: "bg-rose-400/10",
    borderColor: "hover:border-rose-400/30",
    features: ["HIPAA Compliance", "Patient Data Security"]
  },
  {
    icon: Building2,
    title: "Finance & Banking",
    description: "Protect financial data, detect insider trading attempts, ensure regulatory compliance.",
    tag: "Finance",
    color: "text-emerald-400",
    bg: "bg-emerald-400/10",
    borderColor: "hover:border-emerald-400/30",
    features: ["Fraud Prevention", "Regulatory Compliance"]
  }
];

const UseCasesSection = () => {
  return (
    <section id="use-cases" className="py-24 bg-background relative">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
            Built For Modern <span className="text-primary">Security Teams</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            From startups to enterprises. API-heavy SaaS to regulated industries.
            Security that scales with you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {useCases.map((useCase, index) => (
            <div 
              key={index}
              className={`group relative p-8 rounded-3xl bg-card border border-white/5 ${useCase.borderColor} transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 overflow-hidden`}
            >
              <div className={`absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity duration-300 ${useCase.color}`}>
                <useCase.icon className="w-32 h-32 -mr-8 -mt-8 rotate-12" />
              </div>

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <div className={`w-14 h-14 rounded-2xl ${useCase.bg} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <useCase.icon className={`w-7 h-7 ${useCase.color}`} />
                  </div>
                  <span className={`px-3 py-1 rounded-full ${useCase.bg} border border-white/5 ${useCase.color} text-xs font-bold font-mono uppercase tracking-wider`}>
                    {useCase.tag}
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-white transition-colors">
                  {useCase.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6 group-hover:text-white/70 transition-colors">
                  {useCase.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {useCase.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-1.5 text-xs text-muted-foreground bg-white/5 px-2.5 py-1 rounded-md">
                      <Check className={`w-3 h-3 ${useCase.color}`} />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;
