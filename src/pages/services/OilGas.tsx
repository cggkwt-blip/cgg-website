import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/layout/SEO";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ArrowRight, Wrench, Gauge, Settings, Shield } from "lucide-react";
import oilGasImage from "@/assets/hero-oilgas.jpg";

const services = [
  {
    icon: Wrench,
    title: "Engineering & Technical Support",
    description: "Expert engineering services including design review, technical consultancy, and specialized support for oil & gas operations.",
  },
  {
    icon: Gauge,
    title: "Field Operations & Maintenance",
    description: "Comprehensive field operations support including routine maintenance, emergency response, and operational optimization.",
  },
  {
    icon: Settings,
    title: "Project-Based Services",
    description: "Turnkey project solutions from planning through execution, including equipment installation and system upgrades.",
  },
  {
    icon: Shield,
    title: "Safety & Compliance",
    description: "Rigorous safety management systems ensuring full compliance with international oil & gas industry standards.",
  },
];

const OilGasPage = () => {
  return (
    <Layout>
      <SEO
        title="Oil & Gas Services"
        description="CGG provides expert engineering, maintenance, and operations support for the Oil & Gas industry in Kuwait."
      />
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${oilGasImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-cgg-blue/95 to-cgg-blue/70" />
        <div className="container-cgg relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block text-sm font-semibold uppercase tracking-wider text-cgg-orange mb-4">
              Oil & Gas Services
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              Powering Kuwait's Energy Sector
            </h1>
            <p className="text-xl text-primary-foreground/85 mb-8">
              Comprehensive engineering, operations, and maintenance solutions for the
              petroleum industry with over 19 years of proven expertise.
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
            title="Our Oil & Gas Services"
            description="From engineering support to field operations, we deliver comprehensive solutions for the petroleum industry."
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

      {/* Case Study Preview */}
      <section className="section-padding bg-muted">
        <div className="container-cgg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block text-sm font-semibold uppercase tracking-wider text-cgg-orange mb-4">
                Case Study
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Mina Al-Ahmadi Refinery Support
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                CGG provided comprehensive maintenance and operational support for one of
                Kuwait's largest refineries, improving uptime by 15% while maintaining
                perfect safety compliance.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-cgg-orange rounded-full" />
                  <span className="text-foreground">15% improvement in equipment uptime</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-cgg-orange rounded-full" />
                  <span className="text-foreground">Zero safety incidents during project</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-cgg-orange rounded-full" />
                  <span className="text-foreground">On-time delivery within budget</span>
                </li>
              </ul>
            </div>
            <div>
              <img
                src={oilGasImage}
                alt="Oil & Gas Project"
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-cgg-blue">
        <div className="container-cgg text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Ready to Partner with CGG?
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Contact our Oil & Gas team to discuss your project requirements.
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

export default OilGasPage;
