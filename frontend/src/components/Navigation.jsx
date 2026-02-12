import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "TPM", path: "/tpm" },
    { name: "Machinery", path: "/machinery" },
    { name: "Pallets", path: "/pallets" },
    { name: "Contact", path: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <>
      <nav
        data-testid="main-navigation"
        className={`fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-6xl z-50 transition-all duration-300 ${
          scrolled
            ? "bg-zinc-950/90 backdrop-blur-xl border-zinc-800/80"
            : "bg-zinc-950/70 backdrop-blur-md border-zinc-800/50"
        } border rounded-full px-4 md:px-6 py-3`}
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3" data-testid="logo-link">
            <div className="flex items-center">
              <span className="text-xl md:text-2xl font-bold text-white tracking-tight">
                G&A
              </span>
              <span className="text-xl md:text-2xl font-bold text-[#22C55E] tracking-tight ml-1">
                PALLET
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                data-testid={`nav-link-${link.name.toLowerCase()}`}
                className={`nav-link px-4 py-2 text-sm font-medium transition-colors ${
                  location.pathname === link.path
                    ? "text-[#22C55E]"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:+17136708118"
              className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors text-sm"
              data-testid="phone-link"
            >
              <Phone className="w-4 h-4" />
              <span className="hidden xl:inline">(713) 670-8118</span>
            </a>
            <Link to="/pallets">
              <Button
                data-testid="get-quote-btn"
                className="bg-[#22C55E] text-black hover:bg-[#22C55E]/90 btn-glow rounded-full px-6 font-semibold"
              >
                Get Quote
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-zinc-400 hover:text-white transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            data-testid="mobile-menu-toggle"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 lg:hidden"
          data-testid="mobile-menu"
        >
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute top-20 left-4 right-4 bg-zinc-900/95 backdrop-blur-xl border border-zinc-800 rounded-2xl p-6 mobile-menu">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  data-testid={`mobile-nav-link-${link.name.toLowerCase()}`}
                  className={`px-4 py-3 text-base font-medium rounded-lg transition-colors ${
                    location.pathname === link.path
                      ? "text-[#22C55E] bg-zinc-800/50"
                      : "text-zinc-300 hover:text-white hover:bg-zinc-800/30"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="border-t border-zinc-800 my-4" />
              <a
                href="tel:+17136708118"
                className="flex items-center gap-3 px-4 py-3 text-zinc-300 hover:text-white transition-colors"
                data-testid="mobile-phone-link"
              >
                <Phone className="w-5 h-5" />
                (713) 670-8118
              </a>
              <Link to="/pallets" className="mt-2">
                <Button
                  data-testid="mobile-get-quote-btn"
                  className="w-full bg-[#22C55E] text-black hover:bg-[#22C55E]/90 btn-glow rounded-full py-6 font-semibold text-base"
                >
                  Get Quote
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;
