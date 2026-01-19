import { CheckCircle2, Shield, Settings, Leaf } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import kuwaitImage from "@/assets/kuwait-skyline.jpg";

const reasons = [
  {
    icon: CheckCircle2,
    title: "Reliability",
    description:
      "Proven track record of delivering projects on time and within budget with consistent quality.",
  },
  {
    icon: Shield,
    title: "Safety & Compliance",
    description:
      "Rigorous safety protocols and full compliance with international standards and regulations.",
  },
  {
    icon: Settings,
    title: "Tailored Solutions",
    description:
      "Customized services designed to meet the unique requirements of each client and project.",
  },
  {
    icon: Leaf,
    title: "Sustainable Practices",
    description:
      "Committed to environmentally responsible operations and sustainable business practices.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="section-padding bg-cgg-blue-gradient relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-8">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${kuwaitImage})` }}
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-cgg-blue/95" />

      {/* Accent Lines */}
      <div className="absolute bottom-0 left-0 w-full h-1.5 bg-gradient-to-r from-cgg-orange via-cgg-red to-cgg-orange" />

      <div className="container-cgg relative z-10">
        <SectionHeader
          label="Why CGG"
          title="Why Choose Us"
          description="We combine industry expertise with a commitment to excellence, safety, and client satisfaction."
          centered
          light
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="text-center p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-cgg-orange/40 transition-all duration-400 group"
            >
              <div className="icon-box mb-6 mx-auto group-hover:scale-110 group-hover:shadow-lg transition-all">
                <reason.icon className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">
                {reason.title}
              </h3>
              <p className="text-white/70 leading-relaxed text-sm">
                {reason.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <a
            href="/contact"
            className="btn-primary inline-flex items-center gap-3 text-lg px-12 py-5"
          >
            Request a Proposal
          </a>
        </div>
      </div>
    </section>
  );
}