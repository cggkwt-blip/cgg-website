import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/layout/SEO";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ArrowRight, Droplets, HeartPulse, HardHat } from "lucide-react";
import oilGasImage from "@/assets/hero-oilgas.jpg";
import healthcareImage from "@/assets/healthcare-facility.jpg";
import constructionImage from "@/assets/construction-site.jpg";

const services = [
  {
    icon: Droplets,
    title: "Oil & Gas",
    description:
      "Comprehensive engineering, technical support, field operations, and maintenance services for the petroleum industry. We support Kuwait's energy sector with expertise and reliability.",
    image: oilGasImage,
    link: "/services/oil-gas",
    features: [
      "Engineering & Technical Support",
      "Field Operations & Maintenance",
      "Project-Based Oil & Gas Services",
      "Equipment & Asset Management",
    ],
  },
  {
    icon: HeartPulse,
    title: "Healthcare Services",
    description:
      "Operational support, facility management, and healthcare logistics services ensuring optimal patient care environments across Kuwait's medical institutions.",
    image: healthcareImage,
    link: "/services/healthcare",
    features: [
      "Facility Management",
      "Healthcare Logistics",
      "Operational Support",
      "Medical Equipment Maintenance",
    ],
  },
  {
    icon: HardHat,
    title: "Contracting",
    description:
      "Full-spectrum civil, mechanical, and electrical contracting with end-to-end project management expertise for commercial, industrial, and infrastructure projects.",
    image: constructionImage,
    link: "/services/contracting",
    features: [
      "Civil Construction",
      "MEP Services",
      "Project Management",
      "Infrastructure Development",
    ],
  },
];

const ServicesPage = () => {
  return (
    <Layout>
      <SEO
        title="Our Services"
        description="Explore CGG's comprehensive services in Oil & Gas, Healthcare, and Contracting sectors in Kuwait."
      />
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 bg-cgg-blue overflow-hidden">
        <div className="container-cgg relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block text-sm font-semibold uppercase tracking-wider text-cgg-orange mb-4">
              Our Services
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              Comprehensive Solutions for Your Industry
            </h1>
            <p className="text-xl text-primary-foreground/85">
              From Oil & Gas to Healthcare and Contracting, we deliver excellence
              across all sectors we serve.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container-cgg">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="relative">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="rounded-2xl shadow-xl w-full h-80 object-cover"
                    />
                    <div className="absolute -bottom-4 -right-4 p-4 bg-cgg-orange rounded-xl shadow-lg">
                      <service.icon className="h-10 w-10 text-primary-foreground" />
                    </div>
                  </div>
                </div>
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                    {service.title}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-cgg-orange rounded-full" />
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to={service.link}
                    className="btn-primary inline-flex items-center gap-2"
                  >
                    Learn More
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-muted">
        <div className="container-cgg text-center">
          <SectionHeader
            label="Ready to Start?"
            title="Let's Discuss Your Project"
            description="Contact our team to learn how CGG can support your next project with our comprehensive service offerings."
            centered
          />
          <Link to="/contact" className="btn-primary inline-flex items-center gap-2 text-lg px-10 py-4">
            Request a Proposal
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default ServicesPage;
