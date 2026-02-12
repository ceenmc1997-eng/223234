import { Link } from "react-router-dom";
import { ArrowRight, Box, Truck, Settings, Shield, CheckCircle, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Home = () => {
  const services = [
    {
      icon: Box,
      title: "Custom Pallets",
      description: "Tailored pallet solutions designed to meet your specific product requirements and dimensions.",
    },
    {
      icon: Settings,
      title: "TPM Services",
      description: "Total Productive Maintenance ensuring maximum efficiency and longevity for your operations.",
    },
    {
      icon: Truck,
      title: "Logistics Support",
      description: "Comprehensive delivery and logistics solutions across the United States.",
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "Rigorous quality standards ensuring contamination-free, industry-compliant products.",
    },
  ];

  const stats = [
    { value: "15+", label: "Years Experience" },
    { value: "10K+", label: "Pallets Monthly" },
    { value: "500+", label: "Clients Served" },
    { value: "99%", label: "Satisfaction Rate" },
  ];

  const features = [
    "ISPM-15 Certified Heat Treatment",
    "Custom Dimensions Available",
    "Nationwide Delivery",
    "Recycling Programs",
    "Volume Discounts",
    "Quality Guaranteed",
  ];

  return (
    <div data-testid="home-page" className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1764046155497-ad7e50737ffa?auto=format&fit=crop&w=2000&q=80"
            alt="Warehouse with wooden pallets"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 hero-overlay" />
        </div>

        {/* Green Glow Effect */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#22C55E]/10 rounded-full blur-[120px] pointer-events-none" />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pt-32 pb-24 text-center">
          <div className="animate-fade-in-up">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-900/80 backdrop-blur-sm border border-zinc-800 rounded-full text-sm text-zinc-400 mb-8">
              <span className="w-2 h-2 bg-[#22C55E] rounded-full animate-pulse" />
              Trusted by businesses across the USA
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 animate-fade-in-up animation-delay-100 tracking-tight leading-[1.1]">
            Industrial Strength.
            <br />
            <span className="text-[#22C55E]">Precision Engineering.</span>
          </h1>

          <p className="text-base md:text-lg text-zinc-400 max-w-2xl mx-auto mb-10 animate-fade-in-up animation-delay-200 leading-relaxed">
            Premium pallet solutions and heavy-duty machinery for the modern supply chain. 
            Quality you can trust, delivered when you need it.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up animation-delay-300">
            <Link to="/pallets">
              <Button
                data-testid="hero-get-quote-btn"
                size="lg"
                className="bg-[#22C55E] text-black hover:bg-[#22C55E]/90 btn-glow rounded-full px-8 py-6 text-base font-semibold"
              >
                Request a Quote
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link to="/services">
              <Button
                data-testid="hero-services-btn"
                variant="outline"
                size="lg"
                className="border-zinc-700 text-white hover:bg-zinc-800 hover:text-white rounded-full px-8 py-6 text-base"
              >
                Explore Services
              </Button>
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-zinc-600 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-1.5 bg-zinc-400 rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-16 md:py-24 border-b border-zinc-800/50">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                data-testid={`stat-${index}`}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-zinc-500 text-sm md:text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 mb-16">
            <div>
              <span className="text-[#22C55E] text-sm font-medium uppercase tracking-wider mb-4 block">
                What We Offer
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight">
                Complete Pallet Solutions
              </h2>
            </div>
            <Link to="/services">
              <Button
                variant="ghost"
                className="text-zinc-400 hover:text-white group"
                data-testid="view-all-services-btn"
              >
                View All Services
                <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={service.title}
                data-testid={`service-card-${index}`}
                className="bg-zinc-900/50 border border-zinc-800/50 rounded-xl p-6 card-hover group"
              >
                <div className="w-12 h-12 bg-zinc-800 rounded-lg flex items-center justify-center mb-5 group-hover:bg-[#22C55E]/10 transition-colors">
                  <service.icon className="w-6 h-6 text-[#22C55E]" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Machinery Highlight */}
      <section className="py-24 md:py-32 bg-zinc-900/30">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <span className="text-[#22C55E] text-sm font-medium uppercase tracking-wider mb-4 block">
                Our Equipment
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight">
                Industrial-Grade Machinery
              </h2>
              <p className="text-zinc-400 text-base md:text-lg leading-relaxed mb-8">
                We operate state-of-the-art equipment including the Champion QC306 
                and HR100 Horizontal Band Resaw by Wood-Mizer, ensuring precision 
                cuts and consistent quality in every pallet we produce.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                <span className="spec-tag">Champion QC306</span>
                <span className="spec-tag">HR100 Wood-Mizer</span>
                <span className="spec-tag">Precision Engineering</span>
              </div>
              <Link to="/machinery">
                <Button
                  data-testid="view-machinery-btn"
                  className="bg-[#22C55E] text-black hover:bg-[#22C55E]/90 btn-glow rounded-full px-6"
                >
                  View Our Machinery
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-[#22C55E]/10 rounded-2xl blur-2xl" />
              <div className="relative img-zoom rounded-xl overflow-hidden border border-zinc-800">
                <img
                  src="https://images.unsplash.com/photo-1767281075989-7571356d477e?auto=format&fit=crop&w=1000&q=80"
                  alt="Wood processing machinery with stacked lumber"
                  className="w-full aspect-[4/3] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative img-zoom rounded-xl overflow-hidden border border-zinc-800">
                <img
                  src="https://images.unsplash.com/photo-1564691848938-d0fc26235733?auto=format&fit=crop&w=1000&q=80"
                  alt="Stacked wooden pallets"
                  className="w-full aspect-[4/3] object-cover"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <span className="text-[#22C55E] text-sm font-medium uppercase tracking-wider mb-4 block">
                Why G&A Pallet
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight">
                Quality You Can Trust
              </h2>
              <p className="text-zinc-400 text-base md:text-lg leading-relaxed mb-8">
                We don't just manufacture pallets - we ensure every product meets 
                the highest quality standards, free from contamination and built 
                to your exact specifications.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div
                    key={feature}
                    data-testid={`feature-${index}`}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-[#22C55E] flex-shrink-0" />
                    <span className="text-zinc-300 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/50 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#22C55E]/5 rounded-full blur-[100px]" />
        
        <div className="relative max-w-4xl mx-auto px-6 md:px-12 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight">
            Ready to Get Started?
          </h2>
          <p className="text-zinc-400 text-base md:text-lg mb-10 max-w-2xl mx-auto">
            Contact our team today to discuss your pallet needs. We'll help you 
            find the perfect solution for your business.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact">
              <Button
                data-testid="cta-contact-btn"
                size="lg"
                className="bg-[#22C55E] text-black hover:bg-[#22C55E]/90 btn-glow rounded-full px-8 py-6 text-base font-semibold"
              >
                Contact Us
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <a href="tel:+17136708118">
              <Button
                data-testid="cta-call-btn"
                variant="outline"
                size="lg"
                className="border-zinc-700 text-white hover:bg-zinc-800 hover:text-white rounded-full px-8 py-6 text-base"
              >
                Call (713) 670-8118
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
