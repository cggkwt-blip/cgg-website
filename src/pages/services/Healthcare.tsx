import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/layout/SEO";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ArrowRight, Building2, Truck, Settings, Users, CheckCircle } from "lucide-react";
import healthcareImage from "@/assets/healthcare-facility.jpg";

const services = [
  {
    icon: Building2,
    title: "Facility Management",
    description: "Complete facility management services for healthcare institutions including building maintenance, utilities, and environmental services.",
  },
  {
    icon: Truck,
    title: "Healthcare Logistics",
    description: "Efficient logistics solutions for medical supplies, equipment transportation, and inventory management.",
  },
  {
    icon: Settings,
    title: "Operational Support",
    description: "Day-to-day operational support ensuring smooth functioning of healthcare facilities and optimal patient care.",
  },
  {
    icon: Users,
    title: "Staffing Solutions",
    description: "Qualified support staff placement and workforce management for healthcare organizations.",
  },
];

const benefits = [
  "24/7 emergency response capability",
  "Compliance with healthcare regulations",
  "Experienced healthcare support professionals",
  "Cost-effective operational solutions",
];

const HealthcarePage = () => {
  return (
    <Layout>
      <SEO
        title="Healthcare Services"
        description="Specialized facility management and operational support for hospitals and medical institutions in Kuwait."
      />
      {/* Hero Section */}
      <section className="relative py-28 md:py-36 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{ backgroundImage: `url(${healthcareImage})` }}
        />
        <div className="absolute inset-0 hero-gradient" />

        {/* Accent Lines */}
        <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-cgg-orange via-cgg-red to-cgg-orange" />
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-background to-transparent" />

        <div className="container-cgg relative z-10">
          <div className="max-w-3xl">
            <span className="badge-accent mb-6">Healthcare Services</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
              Supporting Kuwait's Healthcare Excellence
            </h1>
            <p className="text-xl text-white/85 mb-10 leading-relaxed">
              Comprehensive facility management and operational support for healthcare
              institutions ensuring optimal patient care environments.
            </p>
            <Link to="/contact" className="btn-primary inline-flex items-center gap-3">
              Request a Consultation
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding">
        <div className="container-cgg">
          <SectionHeader
            label="What We Offer"
            title="Healthcare Support Services"
            description="From facility management to logistics, we ensure healthcare institutions operate at peak efficiency."
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="feature-card group">
                <div className="icon-box mb-6 group-hover:scale-110 transition-transform">
                  <service.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-muted/50">
        <div className="container-cgg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeader
                label="Why Choose Us"
                title="Healthcare Excellence Delivered"
                description="Our healthcare support services are designed to meet the unique demands of medical facilities."
              />
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center gap-4">
                    <div className="p-1.5 bg-cgg-orange/10 rounded-full">
                      <CheckCircle className="h-5 w-5 text-cgg-orange" />
                    </div>
                    <span className="text-foreground font-medium">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <img
                src={healthcareImage}
                alt="Healthcare facility"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 p-6 bg-white rounded-xl shadow-xl border border-border">
                <div className="stat-number text-4xl">100%</div>
                <p className="text-sm text-muted-foreground mt-1">Client Satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-cgg-blue-gradient relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-cgg-orange via-cgg-red to-cgg-orange" />
        <div className="container-cgg text-center relative z-10">
          <span className="badge-primary mb-6">Get Started</span>
          <h2 className="section-title-light mb-6">
            Partner with CGG for Healthcare Excellence
          </h2>
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            Contact our Healthcare team to discuss your facility's needs.
          </p>
          <Link to="/contact" className="btn-primary inline-flex items-center gap-3 text-lg px-12 py-5">
            Get a Quote
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default HealthcarePage;