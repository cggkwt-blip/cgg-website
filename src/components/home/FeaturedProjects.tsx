import { Link } from "react-router-dom";
import { ArrowRight, MapPin } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { cn } from "@/lib/utils";
import oilGasImage from "@/assets/hero-oilgas.jpg";
import healthcareImage from "@/assets/healthcare-facility.jpg";
import constructionImage from "@/assets/construction-site.jpg";

const projects = [
  {
    title: "Mina Al-Ahmadi Refinery Support",
    sector: "Oil & Gas",
    location: "Al-Ahmadi, Kuwait",
    image: oilGasImage,
    description:
      "Comprehensive engineering and maintenance support services for refinery operations.",
  },
  {
    title: "Al-Sabah Hospital Facility Management",
    sector: "Healthcare",
    location: "Kuwait City",
    image: healthcareImage,
    description:
      "Full facility management and operational support for major healthcare institution.",
  },
  {
    title: "Commercial Complex Development",
    sector: "Contracting",
    location: "Salmiya, Kuwait",
    image: constructionImage,
    description:
      "End-to-end construction management for large-scale commercial development project.",
  },
];

const sectorColors: Record<string, string> = {
  "Oil & Gas": "badge-primary",
  "Healthcare": "badge-accent",
  "Contracting": "badge-blue",
};

export function FeaturedProjects() {
  return (
    <section className="section-padding bg-background">
      <div className="container-cgg">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-14">
          <SectionHeader
            label="Our Work"
            title="Featured Projects"
            description="Showcasing our expertise through successful project delivery across all sectors."
          />
          <Link
            to="/projects"
            className="btn-outline mt-8 md:mt-0 inline-flex items-center gap-2"
          >
            View All Projects
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Link
              key={index}
              to="/projects"
              className="group card-premium relative overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-cgg-blue/10"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cgg-blue/90 via-cgg-blue/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                {/* Sector Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className={cn(
                    "px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-white shadow-lg backdrop-blur-md",
                    project.sector === "Oil & Gas" ? "bg-cgg-orange" :
                      project.sector === "Healthcare" ? "bg-emerald-500" : "bg-cgg-blue"
                  )}>
                    {project.sector}
                  </span>
                </div>

                {/* Location */}
                <div className="absolute bottom-4 left-4 right-4 z-10">
                  <div className="flex items-center gap-2 text-white/90 text-sm font-medium backdrop-blur-sm bg-black/10 w-fit px-2 py-1 rounded-md">
                    <MapPin className="h-3.5 w-3.5 text-cgg-orange" />
                    {project.location}
                  </div>
                </div>
              </div>

              <div className="p-7">
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-cgg-blue transition-colors line-clamp-2 min-h-[3.5rem]">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6 line-clamp-3">
                  {project.description}
                </p>

                {/* Read More */}
                <div className="flex items-center gap-2 text-cgg-orange font-bold text-sm uppercase tracking-wide group-hover:gap-3 transition-all">
                  <span>View Project Details</span>
                  <ArrowRight className="h-4 w-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}