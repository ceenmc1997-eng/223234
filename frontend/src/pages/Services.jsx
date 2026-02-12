import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  Box, 
  Wrench, 
  Flame, 
  Recycle, 
  Truck, 
  ClipboardCheck,
  Settings,
  Shield,
  Clock,
  CheckCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";

const Services = () => {
  const mainServices = [
    {
      icon: Settings,
      title: "TPM Services",
      subtitle: "Total Productive Maintenance",
      description: "Our TPM (Total Productive Maintenance) program ensures maximum operational efficiency. We provide comprehensive maintenance solutions that minimize downtime and extend equipment life.",
      features: [
        "Preventive maintenance scheduling",
        "Equipment optimization",
        "Performance monitoring",
        "Rapid response repairs",
      ],
      large: true,
    },
    {
      icon: Box,
      title: "Custom Pallets",
      subtitle: "Tailored Solutions",
      description: "Can't find the perfect pallet? We manufacture custom pallets to your exact specifications, ensuring perfect fit for your products.",
      features: [
        "Custom dimensions",
        "Various wood types",
        "Load capacity options",
      ],
    },
    {
      icon: Wrench,
      title: "Pallet Repair",
      subtitle: "Restoration Services",
      description: "Extend the life of your pallets with our professional repair services. We restore damaged pallets to like-new condition.",
      features: [
        "Board replacement",
        "Structural repairs",
        "Quality inspection",
      ],
    },
    {
      icon: Flame,
      title: "Heat Treatment",
      subtitle: "ISPM-15 Certified",
      description: "Our ISPM-15 certified heat treatment ensures your pallets meet international shipping standards for pest-free wood products.",
      features: [
        "International compliance",
        "Certified stamping",
        "Documentation provided",
      ],
    },
    {
      icon: Recycle,
      title: "Pallet Recycling",
      subtitle: "Sustainable Solutions",
      description: "Our recycling program helps reduce waste and provides cost-effective alternatives. We buy, sell, and recycle pallets.",
      features: [
        "Environmental compliance",
        "Pickup services",
        "Fair market pricing",
      ],
    },
    {
      icon: Truck,
      title: "Logistics Support",
      subtitle: "Nationwide Delivery",
      description: "We deliver pallets across the United States, ensuring your orders arrive on time, every time.",
      features: [
        "Flexible scheduling",
        "Bulk delivery",
        "Tracking available",
      ],
    },
    {
      icon: ClipboardCheck,
      title: "Quality Assurance",
      subtitle: "Guaranteed Standards",
      description: "Every pallet undergoes rigorous quality checks to ensure it meets our high standards and your requirements.",
      features: [
        "Multi-point inspection",
        "Load testing",
        "Contamination-free",
      ],
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Consultation",
      description: "We discuss your specific requirements and recommend the best solutions.",
    },
    {
      step: "02",
      title: "Quote",
      description: "Receive a detailed quote with transparent pricing and delivery timeline.",
    },
    {
      step: "03",
      title: "Production",
      description: "Your pallets are manufactured using our state-of-the-art equipment.",
    },
    {
      step: "04",
      title: "Delivery",
      description: "On-time delivery to your location anywhere in the United States.",
    },
  ];

  return (
    <div data-testid="services-page" className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="max-w-3xl">
            <span className="text-[#22C55E] text-sm font-medium uppercase tracking-wider mb-4 block">
              Our Services
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight leading-[1.1]">
              Comprehensive
              <br />
              <span className="text-[#22C55E]">Pallet Solutions</span>
            </h1>
            <p className="text-zinc-400 text-base md:text-lg leading-relaxed">
              From custom manufacturing to logistics support, we offer a complete 
              range of services to meet all your pallet needs. Our team is dedicated 
              to providing solutions that optimize your supply chain operations.
            </p>
          </div>
        </div>
      </section>

      {/* Services Bento Grid */}
      <section className="py-16 md:py-24 bg-zinc-900/30">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="bento-grid">
            {mainServices.map((service, index) => (
              <div
                key={service.title}
                data-testid={`service-${index}`}
                className={`bg-zinc-900/50 border border-zinc-800/50 rounded-xl p-6 md:p-8 card-hover group ${
                  service.large ? "bento-item-1" : index === 1 || index === 2 ? "bento-item-2" : index === 3 || index === 6 ? "bento-item-3" : "bento-item-4"
                }`}
              >
                <div className="flex flex-col h-full">
                  <div className="w-12 h-12 bg-zinc-800 rounded-lg flex items-center justify-center mb-5 group-hover:bg-[#22C55E]/10 transition-colors">
                    <service.icon className="w-6 h-6 text-[#22C55E]" />
                  </div>
                  <div className="mb-4">
                    <span className="text-[#22C55E] text-xs font-mono uppercase tracking-wider">
                      {service.subtitle}
                    </span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-zinc-400 text-sm leading-relaxed mb-6 flex-grow">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-[#22C55E] flex-shrink-0" />
                        <span className="text-zinc-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <span className="text-[#22C55E] text-sm font-medium uppercase tracking-wider mb-4 block">
              How It Works
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight">
              Our Process
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((item, index) => (
              <div
                key={item.step}
                data-testid={`process-step-${index}`}
                className="relative"
              >
                <div className="bg-zinc-900/50 border border-zinc-800/50 rounded-xl p-6 h-full">
                  <span className="text-5xl font-bold text-zinc-800 mb-4 block">
                    {item.step}
                  </span>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                    <ArrowRight className="w-6 h-6 text-zinc-700" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 md:py-32 bg-zinc-900/30">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <span className="text-[#22C55E] text-sm font-medium uppercase tracking-wider mb-4 block">
                Why Choose Us
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight">
                The G&A Advantage
              </h2>
              <p className="text-zinc-400 text-base md:text-lg leading-relaxed mb-8">
                When you partner with G&A Pallet, you get more than just pallets. 
                You get a dedicated team committed to your success.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <Shield className="w-6 h-6 text-[#22C55E] flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Quality Guarantee</h4>
                    <p className="text-zinc-400 text-sm">Every product meets strict quality standards</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-[#22C55E] flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Fast Turnaround</h4>
                    <p className="text-zinc-400 text-sm">Quick production and delivery times</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Truck className="w-6 h-6 text-[#22C55E] flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Nationwide Service</h4>
                    <p className="text-zinc-400 text-sm">Delivery anywhere in the United States</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-[#22C55E]/10 rounded-2xl blur-2xl" />
              <div className="relative img-zoom rounded-xl overflow-hidden border border-zinc-800">
                <img
                  src="https://images.unsplash.com/photo-1615063400892-5e2508ec9a12?auto=format&fit=crop&w=1000&q=80"
                  alt="Stacked wooden pallets"
                  className="w-full aspect-[4/3] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#22C55E]/5 rounded-full blur-[80px]" />
        
        <div className="relative max-w-4xl mx-auto px-6 md:px-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight">
            Need a Custom Solution?
          </h2>
          <p className="text-zinc-400 text-base md:text-lg mb-10">
            Our team is ready to help you find the perfect pallet solution for your business.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/pallets">
              <Button
                data-testid="services-quote-btn"
                size="lg"
                className="bg-[#22C55E] text-black hover:bg-[#22C55E]/90 btn-glow rounded-full px-8 py-6 text-base font-semibold"
              >
                Request a Quote
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button
                data-testid="services-contact-btn"
                variant="outline"
                size="lg"
                className="border-zinc-700 text-white hover:bg-zinc-800 hover:text-white rounded-full px-8 py-6 text-base"
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
