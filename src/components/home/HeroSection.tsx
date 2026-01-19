import { Link } from "react-router-dom";
import { ArrowRight, Shield } from "lucide-react";
import heroImage from "@/assets/hero-oilgas.jpg";

export function HeroSection() {
  return (
    <section className="relative min-h-[95vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
        style={{ backgroundImage: `url(${heroImage})` }}
      />

      {/* Strong Blue Gradient Overlay */}
      <div className="absolute inset-0 bg-cgg-blue/85" />

      {/* Accent Lines */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cgg-orange via-cgg-red to-transparent" />

      {/* Decorative Elements */}
      <div className="absolute top-40 right-20 w-[500px] h-[500px] bg-cgg-orange/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-20 left-10 w-[300px] h-[300px] bg-cgg-red/5 rounded-full blur-[80px]" />

      {/* Content */}
      <div className="container-cgg relative z-10 py-24 h-full grid lg:grid-cols-12 gap-8 items-center">
        <div className="w-full max-w-2xl lg:max-w-none text-left lg:col-span-7">
          {/* Trust Badge */}
          <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-white/10 backdrop-blur-sm rounded-full mb-8 animate-fade-in border border-white/20 hover:bg-white/15 transition-colors cursor-default">
            <Shield className="w-5 h-5 text-cgg-orange" />
            <span className="text-sm font-semibold text-white tracking-wide">
              Trusted Partner Since 2007 • 2000+ Projects Delivered
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-white leading-[1.1] mb-6 animate-slide-up tracking-tight drop-shadow-xl text-left">
            <span className="lg:whitespace-nowrap">Delivering Excellence</span><br className="hidden lg:block" />
            Across <span className="text-gradient-orange">Oil & Gas</span>,<br className="hidden lg:block" />
            <span className="text-gradient-orange">Healthcare</span>, and<br className="hidden lg:block" />
            <span className="text-gradient-orange">Contracting</span>
          </h1>

          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl leading-relaxed animate-slide-up font-medium drop-shadow-md" style={{ animationDelay: "0.1s" }}>
            Comprehensive Gulf Group delivers world-class engineering, operational, and construction solutions backed by over 19 years of industry leadership in Kuwait.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <Link
              to="/contact"
              className="btn-primary inline-flex items-center justify-center gap-3 text-lg px-10 py-5 group shadow-lg shadow-cgg-orange/20"
            >
              Get a Quote
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/services"
              className="btn-outline-light inline-flex items-center justify-center gap-3 text-lg px-10 py-5"
            >
              Learn About Our Services
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 pt-10 border-t border-white/15 animate-slide-up" style={{ animationDelay: "0.3s" }}>
            <p className="text-sm text-white/50 mb-5 uppercase tracking-wider font-semibold">Trusted by Leading Organizations</p>
            <div className="flex flex-wrap items-center gap-10">
              {["KPC", "KNPC", "KOC", "MOH Kuwait"].map((org) => (
                <div key={org} className="text-white/70 font-bold text-lg tracking-wide hover:text-cgg-orange transition-colors cursor-default">
                  {org}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Empty Right Column for Balance/Image Visibility */}
        <div className="hidden lg:block"></div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-7 h-12 border-2 border-white/40 rounded-full flex justify-center">
          <div className="w-1.5 h-4 bg-cgg-orange rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
}