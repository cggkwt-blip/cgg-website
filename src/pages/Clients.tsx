import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/layout/SEO";
import { SectionHeader } from "@/components/ui/SectionHeader";

const clients = [
  { name: "Kuwait Petroleum Corporation", category: "Government" },
  { name: "Kuwait National Petroleum Company", category: "Government" },
  { name: "Kuwait Oil Company", category: "Government" },
  { name: "Ministry of Health Kuwait", category: "Government" },
  { name: "Public Authority for Housing Welfare", category: "Government" },
  { name: "Kuwait Ministry of Electricity & Water", category: "Government" },
  { name: "EQUATE Petrochemical", category: "Corporate" },
  { name: "Kuwait Integrated Petroleum Industries", category: "Corporate" },
  { name: "Al-Kharafi Group", category: "Corporate" },
  { name: "Al-Ghanim Industries", category: "Corporate" },
  { name: "Schlumberger", category: "International" },
  { name: "Baker Hughes", category: "International" },
];

const ClientsPage = () => {
  return (
    <Layout>
      <SEO
        title="Clients & Partners"
        description="Trusted by leading government and corporate organizations across Kuwait and the region."
      />
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 bg-cgg-blue">
        <div className="container-cgg">
          <div className="max-w-3xl">
            <span className="inline-block text-sm font-semibold uppercase tracking-wider text-cgg-orange mb-4">
              Our Network
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              Clients & Partners
            </h1>
            <p className="text-xl text-primary-foreground/85">
              Trusted by leading government organizations, corporations, and international
              companies across Kuwait and the region.
            </p>
          </div>
        </div>
      </section>

      {/* Clients Grid */}
      <section className="section-padding">
        <div className="container-cgg">
          <SectionHeader
            label="Trusted By"
            title="Our Valued Clients"
            description="We're proud to partner with industry leaders across government, corporate, and international sectors."
            centered
          />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {clients.map((client, index) => (
              <div
                key={index}
                className="card-elevated p-6 text-center group cursor-pointer"
              >
                <div className="w-16 h-16 bg-muted rounded-full mx-auto mb-4 flex items-center justify-center text-2xl font-bold text-cgg-blue group-hover:bg-cgg-orange group-hover:text-primary-foreground transition-all">
                  {client.name.charAt(0)}
                </div>
                <h3 className="font-semibold text-foreground text-sm mb-1 group-hover:text-cgg-blue transition-colors">
                  {client.name}
                </h3>
                <span className="text-xs text-muted-foreground">{client.category}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Categories */}
      <section className="section-padding bg-muted">
        <div className="container-cgg">
          <SectionHeader
            label="Partnership"
            title="Categories of Partners"
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Government", count: "15+", description: "Ministry and public sector partnerships" },
              { title: "Corporate", count: "50+", description: "Private sector and industry leaders" },
              { title: "International", count: "10+", description: "Global companies operating in Kuwait" },
            ].map((category, index) => (
              <div key={index} className="text-center p-8 bg-card rounded-2xl shadow-md">
                <div className="text-4xl font-bold text-cgg-orange mb-2">{category.count}</div>
                <h3 className="text-xl font-bold text-foreground mb-2">{category.title}</h3>
                <p className="text-muted-foreground">{category.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ClientsPage;
