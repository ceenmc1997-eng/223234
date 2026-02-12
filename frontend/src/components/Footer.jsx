import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock, ArrowUpRight } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Machinery", path: "/machinery" },
    { name: "Pallets", path: "/pallets" },
    { name: "Contact", path: "/contact" },
  ];

  const services = [
    "Custom Pallets",
    "Pallet Repair",
    "Heat Treatment",
    "Recycling",
    "Logistics Solutions",
  ];

  return (
    <footer data-testid="main-footer" className="bg-zinc-950 border-t border-zinc-800/50">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-6">
              <div className="flex items-center">
                <span className="text-2xl font-bold text-white tracking-tight">G&A</span>
                <span className="text-2xl font-bold text-[#22C55E] tracking-tight ml-1">PALLET</span>
              </div>
            </Link>
            <p className="text-zinc-400 text-sm leading-relaxed mb-6">
              Premium pallet solutions and industrial machinery for the modern supply chain. 
              Serving businesses across the United States since our founding.
            </p>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-[#22C55E] rounded-full animate-pulse" />
              <span className="text-zinc-500 text-sm">Houston, Texas</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-6 text-sm uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-zinc-400 hover:text-[#22C55E] transition-colors text-sm flex items-center gap-2 group"
                    data-testid={`footer-link-${link.name.toLowerCase().replace(' ', '-')}`}
                  >
                    {link.name}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-6 text-sm uppercase tracking-wider">
              Services
            </h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-zinc-400 text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-6 text-sm uppercase tracking-wider">
              Contact
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="https://maps.google.com/?q=8827+Clinton+Dr,+Houston,+TX+77029"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-zinc-400 hover:text-white transition-colors group"
                  data-testid="footer-address"
                >
                  <MapPin className="w-4 h-4 mt-0.5 text-[#22C55E] flex-shrink-0" />
                  <span className="text-sm">
                    8827 Clinton Dr<br />
                    Houston, TX 77029
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+17136708118"
                  className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors"
                  data-testid="footer-phone"
                >
                  <Phone className="w-4 h-4 text-[#22C55E] flex-shrink-0" />
                  <span className="text-sm">(713) 670-8118</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:sales@gapallet.com"
                  className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors"
                  data-testid="footer-email"
                >
                  <Mail className="w-4 h-4 text-[#22C55E] flex-shrink-0" />
                  <span className="text-sm">sales@gapallet.com</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-zinc-400">
                  <Clock className="w-4 h-4 mt-0.5 text-[#22C55E] flex-shrink-0" />
                  <span className="text-sm">
                    Mon - Fri: 9am - 5pm<br />
                    Saturday: 10am - 2pm
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-zinc-800/50 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-zinc-500 text-sm">
            © {new Date().getFullYear()} G&A Pallet. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-zinc-500 text-sm">Houston, Texas, USA</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
