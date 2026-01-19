import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/layout/SEO";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Target, Eye, Heart, Shield, Users, Leaf } from "lucide-react";
import kuwaitImage from "@/assets/kuwait-skyline.jpg";

const timeline = [
  { year: "2007", title: "Foundation", description: "CGG established in Kuwait with a focus on industrial services" },
  { year: "2010", title: "Oil & Gas Expansion", description: "Secured first major contract with Kuwait Oil Company" },
  { year: "2014", title: "Healthcare Division", description: "Launched healthcare services division" },
  { year: "2018", title: "Regional Growth", description: "Expanded operations across the GCC region" },
  { year: "2023", title: "2000+ Projects", description: "Reached milestone of 2000 successfully completed projects" },
];

const values = [
  { icon: Users, title: "Client Focus", description: "Putting client needs at the center of everything we do" },
  { icon: Target, title: "Quality", description: "Delivering excellence through rigorous quality standards" },
  { icon: Shield, title: "Safety", description: "Zero compromise on safety in all operations" },
  { icon: Leaf, title: "Sustainability", description: "Committed to environmentally responsible practices" },
];

const AboutPage = () => {
  return (
    <Layout>
      <SEO
        title="About Us"
        description="Learn about CGG's 19+ years of experience in Kuwait's industrial sector, our mission, vision, and core values."
      />
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 bg-cgg-blue overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${kuwaitImage})` }}
          />
        </div>
        <div className="container-cgg relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block text-sm font-semibold uppercase tracking-wider text-cgg-orange mb-4">
              About Us
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              Building Kuwait's Future Together
            </h1>
            <p className="text-xl text-primary-foreground/85">
              A trusted and client-focused service provider backed by over 19 years of
              industry experience.
            </p>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="section-padding">
        <div className="container-cgg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeader
                label="Our Story"
                title="Who We Are"
              />
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Comprehensive Gulf Group is a trusted and client-focused service provider
                  in Kuwait, backed by over 19 years of industry experience. We operate
                  across Oil & Gas, Healthcare, and Contracting sectors, delivering
                  high-quality solutions that meet international standards.
                </p>
                <p>
                  Since our founding in 2007, we have grown from a small local enterprise
                  to a multi-sector leader with a proven track record of excellence. Our
                  commitment to safety, quality, and client satisfaction has earned us the
                  trust of leading organizations across Kuwait and the region.
                </p>
                <p>
                  Today, with over 2000 successfully completed projects and zero major
                  safety incidents, CGG stands as a testament to what can be achieved
                  through dedication, expertise, and unwavering commitment to our values.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src={kuwaitImage}
                alt="Kuwait Skyline"
                className="rounded-2xl shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-cgg-orange text-primary-foreground p-6 rounded-xl shadow-lg">
                <div className="text-4xl font-bold">19+</div>
                <div className="text-sm">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-muted">
        <div className="container-cgg">
          <SectionHeader
            label="Our Journey"
            title="Key Milestones"
            centered
          />
          <div className="max-w-4xl mx-auto">
            {timeline.map((item, index) => (
              <div key={index} className="flex gap-6 mb-8 last:mb-0">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-cgg-blue text-primary-foreground rounded-full flex items-center justify-center font-bold shrink-0">
                    {item.year}
                  </div>
                  {index < timeline.length - 1 && (
                    <div className="w-0.5 h-full bg-cgg-blue/20 mt-2" />
                  )}
                </div>
                <div className="pb-8">
                  <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section-padding">
        <div className="container-cgg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card-elevated p-8 border-t-4 border-cgg-orange">
              <div className="p-4 bg-cgg-orange/10 rounded-xl inline-block mb-4">
                <Eye className="h-8 w-8 text-cgg-orange" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To be a leading multi-sector service provider in the region, recognized
                for our excellence, innovation, and commitment to sustainable practices.
              </p>
            </div>
            <div className="card-elevated p-8 border-t-4 border-cgg-red">
              <div className="p-4 bg-cgg-red/10 rounded-xl inline-block mb-4">
                <Target className="h-8 w-8 text-cgg-red" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To deliver safe, reliable, and customized solutions with excellence,
                creating value for our clients while fostering a culture of continuous
                improvement and innovation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding bg-cgg-blue">
        <div className="container-cgg">
          <SectionHeader
            label="What Drives Us"
            title="Our Core Values"
            centered
            light
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="text-center p-6 bg-primary-foreground/5 rounded-2xl border border-primary-foreground/10"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-cgg-orange rounded-full mb-4">
                  <value.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold text-primary-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-primary-foreground/75">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AboutPage;
