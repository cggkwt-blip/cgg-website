import { Link } from "react-router-dom";
import { ArrowRight, Droplets, HeartPulse, HardHat } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import oilGasImage from "@/assets/hero-oilgas.jpg";
import healthcareImage from "@/assets/healthcare-facility.jpg";
import constructionImage from "@/assets/construction-site.jpg";

const services = [
  {
    icon: Droplets,
    title: "Oil & Gas",
    description:
      "Comprehensive engineering, technical support, field operations, and maintenance services for the petroleum industry.",
    image: oilGasImage,
    link: "/services/oil-gas",
    features: ["Engineering Support", "Field Operations", "Maintenance"],
  },
  {
    icon: HeartPulse,
    title: "Healthcare Services",
    description:
      "Operational support, facility management, and healthcare logistics services ensuring optimal patient care environments.",
    image: healthcareImage,
    link: "/services/healthcare",
    features: ["Facility Management", "Healthcare Logistics", "Operational Support"],
  },
  {
    icon: HardHat,
    title: "Contracting",
    description:
      "Full-spectrum civil, mechanical, and electrical contracting with end-to-end project management expertise.",
    image: constructionImage,
    link: "/services/contracting",
    features: ["Civil Works", "MEP Services", "Project Management"],
  },
];

export function ServicesOverview() {
  return (
    <section className="section-padding bg-muted/50">
      <div className="container-cgg">
        <SectionHeader
          label="What We Do"
          title="Our Core Services"
          description="Delivering comprehensive solutions across three key sectors with expertise, safety, and reliability at the forefront of everything we do."
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Link
              key={index}
              to={service.link}
              className="group card-premium"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cgg-blue via-cgg-blue/50 to-transparent opacity-90 transition-opacity group-hover:opacity-100" />

                {/* Icon Badge */}
                <div className="absolute bottom-5 left-5 z-10 p-3 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="h-8 w-8 text-cgg-orange" />
                </div>

                {/* Decorative top-right arrow */}
                <div className="absolute top-5 right-5 z-10 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                  <ArrowRight className="h-5 w-5 text-white -rotate-45" />
                </div>
              </div>

              {/* Content */}
              <div className="p-7">
                <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-cgg-blue transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-5 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {service.features.map((feature, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 text-xs font-semibold bg-cgg-blue/5 text-cgg-blue rounded-full border border-cgg-blue/10"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-2 text-cgg-orange font-bold group-hover:gap-4 transition-all">
                  <span>Learn More</span>
                  <ArrowRight className="h-5 w-5" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}