import { useState } from "react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/layout/SEO";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { MapPin } from "lucide-react";
import oilGasImage from "@/assets/hero-oilgas.jpg";
import healthcareImage from "@/assets/healthcare-facility.jpg";
import constructionImage from "@/assets/construction-site.jpg";

const projects = [
  {
    id: 1,
    title: "Mina Al-Ahmadi Refinery Support",
    sector: "Oil & Gas",
    location: "Al-Ahmadi, Kuwait",
    image: oilGasImage,
    description: "Comprehensive maintenance and operational support for major refinery operations.",
  },
  {
    id: 2,
    title: "Al-Sabah Hospital Facility Management",
    sector: "Healthcare",
    location: "Kuwait City",
    image: healthcareImage,
    description: "Full facility management and operational support for healthcare institution.",
  },
  {
    id: 3,
    title: "Commercial Complex Development",
    sector: "Contracting",
    location: "Salmiya, Kuwait",
    image: constructionImage,
    description: "End-to-end construction management for large-scale commercial development.",
  },
  {
    id: 4,
    title: "KOC Pipeline Maintenance",
    sector: "Oil & Gas",
    location: "Burgan Field",
    image: oilGasImage,
    description: "Ongoing pipeline inspection and maintenance services for Kuwait Oil Company.",
  },
  {
    id: 5,
    title: "MOH Clinic Network Support",
    sector: "Healthcare",
    location: "Multiple Locations",
    image: healthcareImage,
    description: "Operational support for Ministry of Health primary care clinic network.",
  },
  {
    id: 6,
    title: "Industrial Warehouse Complex",
    sector: "Contracting",
    location: "Shuwaikh Industrial",
    image: constructionImage,
    description: "Design-build project for modern industrial warehousing facility.",
  },
];

const filters = ["All", "Oil & Gas", "Healthcare", "Contracting"];

const ProjectsPage = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = activeFilter === "All"
    ? projects
    : projects.filter(p => p.sector === activeFilter);

  return (
    <Layout>
      <SEO
        title="Our Projects"
        description="Browse our portfolio of completed projects in Oil & Gas, Healthcare, and Contracting."
      />
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 bg-cgg-blue">
        <div className="container-cgg">
          <div className="max-w-3xl">
            <span className="inline-block text-sm font-semibold uppercase tracking-wider text-cgg-orange mb-4">
              Our Work
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              Projects Portfolio
            </h1>
            <p className="text-xl text-primary-foreground/85">
              Explore our diverse portfolio of successfully completed projects across
              Oil & Gas, Healthcare, and Contracting sectors.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-padding">
        <div className="container-cgg">
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${activeFilter === filter
                  ? "bg-cgg-blue text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:bg-cgg-blue/10"
                  }`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div key={project.id} className="card-elevated overflow-hidden group">
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 text-xs font-semibold bg-cgg-orange text-primary-foreground rounded-full">
                      {project.sector}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-1 text-muted-foreground text-sm mb-2">
                    <MapPin className="h-4 w-4" />
                    {project.location}
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-cgg-blue transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-muted">
        <div className="container-cgg text-center">
          <SectionHeader
            label="Start Your Project"
            title="Ready to Work Together?"
            description="Contact us to discuss how CGG can deliver excellence for your next project."
            centered
          />
          <Link to="/contact" className="btn-primary inline-flex items-center gap-2 text-lg px-10 py-4">
            Get a Quote
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default ProjectsPage;
