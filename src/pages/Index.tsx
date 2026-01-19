import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/layout/SEO";
import { HeroSection } from "@/components/home/HeroSection";
import { StatsSection } from "@/components/home/StatsSection";
import { ServicesOverview } from "@/components/home/ServicesOverview";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { CTASection } from "@/components/home/CTASection";

const Index = () => {
  return (
    <Layout>
      <SEO
        title="Home"
        description="Comprehensive Gulf Group is a trusted service provider in Kuwait delivering excellence in Oil & Gas, Healthcare, and Contracting."
      />
      <HeroSection />
      <StatsSection />
      <ServicesOverview />
      <WhyChooseUs />
      <FeaturedProjects />
      <CTASection />
    </Layout>
  );
};

export default Index;
