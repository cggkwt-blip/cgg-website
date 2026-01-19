import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/layout/SEO";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Shield, Award, CheckCircle, AlertTriangle } from "lucide-react";

const safetyStats = [
  { number: "0", label: "Major Incidents", description: "Zero major safety incidents since inception" },
  { number: "100%", label: "Compliance Rate", description: "Full regulatory compliance across all projects" },
  { number: "500+", label: "Safety Trainings", description: "Employees trained in safety protocols annually" },
];

const certifications = [
  "ISO 9001:2015 Quality Management",
  "ISO 14001:2015 Environmental Management",
  "ISO 45001:2018 Occupational Health & Safety",
  "OHSAS 18001 Safety Management",
];

const SafetyPage = () => {
  return (
    <Layout>
      <SEO
        title="Safety & Quality"
        description="Our commitment to zero-harm safety culture and international quality standards."
      />
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 bg-cgg-blue">
        <div className="container-cgg">
          <div className="max-w-3xl">
            <span className="inline-block text-sm font-semibold uppercase tracking-wider text-cgg-orange mb-4">
              Our Commitment
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              Safety & Quality First
            </h1>
            <p className="text-xl text-primary-foreground/85">
              At CGG, safety isn't just a priority—it's a core value embedded in everything
              we do.
            </p>
          </div>
        </div>
      </section>

      {/* Safety Philosophy */}
      <section className="section-padding">
        <div className="container-cgg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeader
                label="Philosophy"
                title="Zero Compromise on Safety"
              />
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Safety is the foundation of our operations. We believe that every employee
                  has the right to return home safely at the end of each workday, and we are
                  committed to making that a reality.
                </p>
                <p>
                  Our comprehensive safety management system ensures that all operations are
                  conducted in accordance with international best practices and local
                  regulations. We continuously monitor, assess, and improve our safety
                  performance.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-6">
              {safetyStats.map((stat, index) => (
                <div key={index} className="card-elevated p-6 flex items-center gap-6">
                  <div className="w-20 h-20 bg-cgg-orange/10 rounded-2xl flex items-center justify-center shrink-0">
                    <span className="text-2xl font-bold text-cgg-orange">{stat.number}</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground">{stat.label}</h3>
                    <p className="text-sm text-muted-foreground">{stat.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="section-padding bg-muted">
        <div className="container-cgg">
          <SectionHeader
            label="Standards"
            title="Certifications & Compliance"
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-card p-6 rounded-xl text-center shadow-md">
                <div className="w-12 h-12 bg-cgg-blue rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Award className="h-6 w-6 text-primary-foreground" />
                </div>
                <p className="font-medium text-foreground text-sm">{cert}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Assurance */}
      <section className="section-padding bg-cgg-blue">
        <div className="container-cgg">
          <SectionHeader
            label="Quality"
            title="Quality Assurance Standards"
            description="Our commitment to quality ensures consistent delivery of excellence across all projects."
            centered
            light
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { icon: CheckCircle, title: "Rigorous QC", description: "Multi-stage quality control processes" },
              { icon: Shield, title: "Compliance", description: "Full adherence to international standards" },
              { icon: AlertTriangle, title: "Risk Management", description: "Proactive risk identification and mitigation" },
            ].map((item, index) => (
              <div key={index} className="text-center p-6 bg-primary-foreground/5 rounded-2xl">
                <div className="w-16 h-16 bg-cgg-orange rounded-full mx-auto mb-4 flex items-center justify-center">
                  <item.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-bold text-primary-foreground mb-2">{item.title}</h3>
                <p className="text-primary-foreground/75 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default SafetyPage;
