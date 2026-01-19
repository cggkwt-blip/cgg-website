import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/layout/SEO";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Calendar, ArrowRight } from "lucide-react";
import oilGasImage from "@/assets/hero-oilgas.jpg";
import healthcareImage from "@/assets/healthcare-facility.jpg";
import constructionImage from "@/assets/construction-site.jpg";

const articles = [
  {
    id: 1,
    title: "CGG Secures New Contract with Kuwait Petroleum Corporation",
    excerpt: "Comprehensive Gulf Group has been awarded a significant contract for maintenance services at KPC facilities.",
    date: "January 15, 2026",
    category: "Company News",
    image: oilGasImage,
  },
  {
    id: 2,
    title: "Investing in Healthcare Infrastructure: The Future of Kuwait",
    excerpt: "An analysis of Kuwait's healthcare sector development and CGG's role in supporting medical facility operations.",
    date: "January 10, 2026",
    category: "Industry Insights",
    image: healthcareImage,
  },
  {
    id: 3,
    title: "Sustainable Construction Practices in the GCC",
    excerpt: "How CGG is incorporating sustainable practices into construction projects across Kuwait and the region.",
    date: "January 5, 2026",
    category: "Sustainability",
    image: constructionImage,
  },
  {
    id: 4,
    title: "CGG Celebrates 19 Years of Excellence",
    excerpt: "Looking back at our journey of growth, innovation, and commitment to client success.",
    date: "December 28, 2025",
    category: "Company News",
    image: oilGasImage,
  },
];

const NewsPage = () => {
  return (
    <Layout>
      <SEO
        title="News & Insights"
        description="Latest updates, press releases, and industry insights from Comprehensive Gulf Group."
      />
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 bg-cgg-blue">
        <div className="container-cgg">
          <div className="max-w-3xl">
            <span className="inline-block text-sm font-semibold uppercase tracking-wider text-cgg-orange mb-4">
              Stay Updated
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              News & Insights
            </h1>
            <p className="text-xl text-primary-foreground/85">
              The latest updates from CGG and insights from across the industries we serve.
            </p>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="section-padding">
        <div className="container-cgg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {articles.map((article) => (
              <article key={article.id} className="card-elevated overflow-hidden group">
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 text-xs font-semibold bg-cgg-blue text-primary-foreground rounded-full">
                      {article.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-muted-foreground text-sm mb-3">
                    <Calendar className="h-4 w-4" />
                    {article.date}
                  </div>
                  <h2 className="text-xl font-bold text-foreground mb-3 group-hover:text-cgg-blue transition-colors">
                    {article.title}
                  </h2>
                  <p className="text-muted-foreground mb-4">{article.excerpt}</p>
                  <span className="inline-flex items-center gap-2 text-cgg-orange font-semibold">
                    Read More
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-2 transition-transform" />
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="section-padding bg-muted">
        <div className="container-cgg text-center max-w-2xl mx-auto">
          <SectionHeader
            label="Subscribe"
            title="Stay Informed"
            description="Subscribe to our newsletter for the latest updates and industry insights."
            centered
          />
          <form className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-cgg-orange/50"
            />
            <button type="submit" className="btn-primary">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </Layout>
  );
};

export default NewsPage;
