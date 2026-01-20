import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  {
    name: "Services",
    path: "/services",
    children: [
      { name: "Oil & Gas", path: "/services/oil-gas" },
      { name: "Healthcare Services", path: "/services/healthcare" },
      { name: "Contracting", path: "/services/contracting" },
    ],
  },
  { name: "Projects", path: "/projects" },
  { name: "Clients & Partners", path: "/clients" },
  { name: "Safety & Quality", path: "/safety" },
  { name: "Contact Us", path: "/contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [expandedMobileItem, setExpandedMobileItem] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      // Always white, but maybe add distinct shadow on scroll
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  return (
    <header
      className={cn(
        "sticky top-0 left-0 right-0 z-50 transition-all duration-300 bg-white",
        isScrolled
          ? "shadow-md py-1.5 bg-white/95 backdrop-blur-md"
          : "shadow-sm py-2"
      )}
    >
      <div className="container-cgg">
        <nav className="flex items-center justify-between gap-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group py-1 relative z-50 shrink-0">
            <img
              src="/cgg-logo.png"
              alt="CGG Logo"
              className="h-24 md:h-28 w-auto object-contain transition-transform hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-2 xl:gap-4">
            {navItems.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.children && setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  to={item.path}
                  className={cn(
                    "px-3 py-2 text-[17px] font-bold transition-all flex items-center gap-1 rounded-lg relative overflow-hidden group hover:bg-slate-50 whitespace-nowrap",
                    isActive(item.path)
                      ? "text-cgg-orange"
                      : "text-cgg-blue hover:text-cgg-orange"
                  )}
                >
                  <span className="relative z-10">{item.name}</span>
                  {/* Active Indicator */}
                  <span className={cn(
                    "absolute bottom-0 left-0 w-full h-0.5 bg-cgg-orange transition-all duration-300",
                    isActive(item.path) ? "opacity-100" : "opacity-0 group-hover:opacity-50"
                  )} />
                  {item.children && (
                    <ChevronDown className="h-4 w-4 relative z-10 transition-transform group-hover:rotate-180 stroke-[3]" />
                  )}
                </Link>

                {/* Dropdown */}
                {item.children && activeDropdown === item.name && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.15)] border border-gray-100 overflow-hidden animate-fade-in z-50 ring-1 ring-black/5">
                    {/* Red accent line */}
                    <div className="h-1 bg-gradient-to-r from-cgg-orange via-cgg-red to-cgg-orange" />
                    {item.children.map((child) => (
                      <Link
                        key={child.name}
                        to={child.path}
                        className={cn(
                          "block px-6 py-4 text-[15px] font-bold transition-all border-b border-gray-50 last:border-b-0 focus:outline-none",
                          isActive(child.path)
                            ? "bg-cgg-blue text-white"
                            : "text-cgg-blue hover:bg-cgg-blue hover:text-white focus:bg-cgg-blue focus:text-white"
                        )}
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4 shrink-0">
            <Link
              to="/contact"
              className="btn-primary text-base px-8 py-3.5 shadow-xl shadow-cgg-orange/20 hover:shadow-cgg-orange/30 hover:-translate-y-1 transition-all duration-300 text-white whitespace-nowrap font-bold"
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2.5 text-cgg-blue hover:bg-cgg-blue/5 transition-colors rounded-lg border border-cgg-blue/10"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-2xl border-t border-gray-100 min-h-[calc(100vh-80px)] overflow-y-auto animate-slide-up pb-20">
            <div className="p-6 space-y-2">
              {navItems.map((item) => (
                <div key={item.name}>
                  {item.children ? (
                    // Accordion Item
                    <div className="space-y-1">
                      <button
                        onClick={() => setExpandedMobileItem(expandedMobileItem === item.name ? null : item.name)}
                        className={cn(
                          "w-full flex items-center justify-between px-4 py-4 text-base font-bold transition-all rounded-xl",
                          expandedMobileItem === item.name || isActive(item.path)
                            ? "bg-cgg-blue/5 text-cgg-orange"
                            : "text-cgg-blue hover:bg-gray-50"
                        )}
                      >
                        {item.name}
                        <ChevronDown
                          className={cn(
                            "h-5 w-5 transition-transform duration-300",
                            expandedMobileItem === item.name ? "rotate-180" : ""
                          )}
                        />
                      </button>

                      {/* Sub-items Accordion */}
                      <div
                        className={cn(
                          "overflow-hidden transition-all duration-300 ease-in-out",
                          expandedMobileItem === item.name ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                        )}
                      >
                        <div className="pl-4 pr-0 py-2 space-y-2">
                          {item.children.map((child) => (
                            <Link
                              key={child.name}
                              to={child.path}
                              onClick={() => setIsMobileMenuOpen(false)}
                              className={cn(
                                "block px-4 py-3 text-sm font-semibold rounded-lg transition-all",
                                isActive(child.path)
                                  ? "bg-cgg-blue text-white shadow-md"
                                  : "text-cgg-blue/80 hover:bg-cgg-blue hover:text-white"
                              )}
                            >
                              {child.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : (
                    // Standard Link
                    <Link
                      to={item.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={cn(
                        "block px-4 py-4 text-base font-bold rounded-xl transition-all",
                        isActive(item.path)
                          ? "bg-cgg-blue/5 text-cgg-orange border-l-4 border-cgg-orange shadow-sm"
                          : "text-cgg-blue hover:bg-gray-50"
                      )}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}

              {/* Mobile CTA */}
              <div className="pt-8">
                <Link
                  to="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="btn-primary w-full flex items-center justify-center py-4 text-base font-bold text-white shadow-lg shadow-cgg-orange/20 rounded-xl active:scale-[0.98] transition-transform"
                >
                  Get a Quote
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}