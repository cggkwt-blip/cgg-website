import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Facebook, Instagram } from "lucide-react";

const footerLinks = {
  services: [
    { name: "Oil & Gas", path: "/services/oil-gas" },
    { name: "Healthcare Services", path: "/services/healthcare" },
    { name: "Contracting", path: "/services/contracting" },
  ],
  company: [
    { name: "About Us", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Clients & Partners", path: "/clients" },
    { name: "Safety & Quality", path: "/safety" },
  ],
  resources: [
    { name: "Contact Us", path: "/contact" },
    { name: "Careers", path: "/careers" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-cgg-blue text-white relative overflow-hidden text-left">
      {/* Top Accent */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-cgg-orange via-cgg-red to-cgg-orange" />

      {/* Main Footer */}
      <div className="container-cgg py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <Link to="/" className="inline-block">
              <img
                src="/cgg-logo.png"
                alt="CGG Logo"
                className="h-24 w-auto mb-4 brightness-0 invert"
              />
            </Link>
            <p className="text-base text-white/90 leading-relaxed font-medium">
              A trusted and client-focused service provider in Kuwait with over 19 years
              of industry experience across Oil & Gas, Healthcare, and Contracting sectors.
            </p>
            <div className="flex gap-3 pt-6">
              <a
                href="https://facebook.com/cggkwt"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/10 rounded-xl hover:bg-cgg-orange transition-all hover:scale-110 border border-white/5"
              >
                <Facebook className="h-5 w-5 text-white" />
              </a>
              <a
                href="https://www.instagram.com/cgg.kwt/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/10 rounded-xl hover:bg-cgg-orange transition-all hover:scale-110 border border-white/5"
              >
                <Instagram className="h-5 w-5 text-white" />
              </a>
              <a
                href="https://linkedin.com/cggkwt"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/10 rounded-xl hover:bg-cgg-orange transition-all hover:scale-110 border border-white/5"
              >
                <Linkedin className="h-5 w-5 text-white" />
              </a>
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="text-xl font-bold mb-8 text-cgg-orange">Our Services</h4>
            <ul className="space-y-4">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-base text-white/90 hover:text-cgg-orange transition-colors inline-flex items-center gap-3 group font-medium"
                  >
                    <span className="w-1.5 h-1.5 bg-cgg-red rounded-full group-hover:bg-cgg-orange transition-colors" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-xl font-bold mb-8 text-cgg-orange">Company</h4>
            <ul className="space-y-4">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-base text-white/90 hover:text-cgg-orange transition-colors inline-flex items-center gap-3 group font-medium"
                  >
                    <span className="w-1.5 h-1.5 bg-cgg-red rounded-full group-hover:bg-cgg-orange transition-colors" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold mb-8 text-cgg-orange">Contact Details</h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-4 group">
                <div className="p-3 bg-cgg-orange/10 rounded-lg group-hover:bg-cgg-orange/20 transition-colors border border-cgg-orange/20">
                  <MapPin className="h-6 w-6 text-cgg-orange" />
                </div>
                <span className="text-base text-white/90 leading-relaxed font-medium">
                  Fahaheel, Complex 6659,<br />
                  Floor 1, Office 3
                </span>
              </li>
              <li className="flex items-center gap-4 group">
                <div className="p-3 bg-cgg-orange/10 rounded-lg group-hover:bg-cgg-orange/20 transition-colors border border-cgg-orange/20">
                  <Phone className="h-6 w-6 text-cgg-orange" />
                </div>
                <a
                  href="tel:66045142"
                  className="text-base text-white/90 hover:text-cgg-orange transition-colors font-medium"
                >
                  66045142
                </a>
              </li>
              <li className="flex items-center gap-4 group">
                <div className="p-3 bg-cgg-orange/10 rounded-lg group-hover:bg-cgg-orange/20 transition-colors border border-cgg-orange/20">
                  <Mail className="h-6 w-6 text-cgg-orange" />
                </div>
                <a
                  href="mailto:info@cggkwt.com"
                  className="text-base text-white/90 hover:text-cgg-orange transition-colors font-medium"
                >
                  info@cggkwt.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 bg-cgg-blue-dark/30">
        <div className="container-cgg py-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-white/60 font-medium text-center md:text-left">
            © {new Date().getFullYear()} Comprehensive Gulf Group. All rights reserved.
          </p>
          <div className="flex gap-8">
            <Link
              to="/privacy"
              className="text-sm text-white/60 hover:text-cgg-orange transition-colors font-medium"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="text-sm text-white/60 hover:text-cgg-orange transition-colors font-medium"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}