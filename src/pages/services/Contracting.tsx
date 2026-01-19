import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/layout/SEO";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ArrowRight, Building, Zap, HardHat, ClipboardList } from "lucide-react";
import constructionImage from "@/assets/construction-site.jpg";

const services = [
  {
    icon: Building,
    title: "Civil Construction",
    description: "Complete civil works including structural construction, foundations, and architectural finishes for commercial and industrial projects.",
  },
  {
    icon: Zap,
    title: "MEP Services",
    description: "Mechanical, electrical, and plumbing installations with comprehensive system integration and commissioning.",
  },
  {
    icon: ClipboardList,
    title: "Project Management",
    description: "End-to-end project management from planning through completion, ensuring timely delivery and quality standards.",
  },
  {
    icon: HardHat,
    title: "Infrastructure Development",
    description: "Roads, utilities, and infrastructure projects with focus on durability and regulatory compliance.",
  },
];

const ContractingPage = () => {
  return (
    <Layout>
      <SEO
        title="Contracting Services"
        description="End-to-end contracting solutions including civil, MEP, and project management for Kuwait's infrastructure."
      />
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${constructionImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-cgg-blue/95 to-cgg-blue/70" />
        <div className="container-cgg relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block text-sm font-semibold uppercase tracking-wider text-cgg-orange mb-4">
              Contracting Services
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              Building Kuwait's Infrastructure
            </h1>
            <p className="text-xl text-primary-foreground/85 mb-8">
              Full-spectrum civil, mechanical, and electrical contracting with
              end-to-end project management expertise.
            </p>
            <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
              Request a Consultation
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding">
        <div className="container-cgg">
          <SectionHeader
            label="What We Offer"
            title="Contracting Services"
            description="From civil construction to MEP systems, we deliver complete construction solutions."
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="card-elevated p-8">
                <div className="p-4 bg-cgg-orange/10 rounded-xl inline-block mb-4">
                  <service.icon className="h-8 w-8 text-cgg-orange" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-muted">
        <div className="container-cgg">
          <SectionHeader
            label="Our Approach"
            title="Project Execution Process"
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {["Planning & Design", "Procurement", "Construction", "Handover"].map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-cgg-blue text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {index + 1}
                </div>
                <h3 className="text-lg font-bold text-foreground">{step}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-cgg-blue">
        <div className="container-cgg text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Ready to Build with CGG?
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Contact our Contracting team to discuss your construction project.
          </p>
          <Link to="/contact" className="btn-primary inline-flex items-center gap-2 text-lg px-10 py-4">
            Get a Quote
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default ContractingPage;
