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
  CheckCircle,
  Users,
  Phone,
  Headphones
} from "lucide-react";
import { Button } from "@/components/ui/button";

const Services = () => {
  const mainServices = [
    {
      icon: Settings,
      title: "Total Pallet Management (TPM)",
      subtitle: "Complete Pallet Program",
      description: "Our company has a design program plan known as a Total Pallet Management Plan (TPM) that allows us to adapt to both your corporate culture and pallet shipping requirements. Based on your supply and demand, we can find the perfect plan to suit you and your company.",
      features: [
        "Customized to your corporate culture",
        "Adapted to your shipping requirements",
        "Supply and demand optimization",
        "Complete pallet program management",
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
      subtitle: "Retrieval Program",
      description: "Our retrieval pallet program helps reduce waste and provides cost-effective alternatives. We buy, sell, and recycle pallets.",
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
      description: "Every customer speaks with one of our representatives who take the time to understand your business and your demand.",
    },
    {
      step: "02",
      title: "Custom Plan",
      description: "Based on your supply and demand, we create a TPM plan perfectly suited for your company.",
    },
    {
      step: "03",
      title: "Production",
      description: "Your pallets are manufactured using our state-of-the-art equipment by highly trained personnel.",
    },
    {
      step: "04",
      title: "Delivery",
      description: "On-time delivery to your location anywhere in the United States with dedicated service.",
    },
  ];

  return (
    <div data-testid="services-page" className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <span className="text-[#22C55E] text-sm font-medium uppercase tracking-wider mb-4 block">
                Our Services
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight leading-[1.1]">
                Comprehensive
                <br />
                <span className="text-[#22C55E]">Pallet Solutions</span>
              </h1>
              <p className="text-zinc-400 text-base md:text-lg leading-relaxed mb-6">
                Here at G&A we invest in your daily operations by fully servicing your 
                business with highly trained personnel. Our staff is well qualified and 
                ready to meet your shipping and logistics demands.
              </p>
              <p className="text-zinc-400 text-base md:text-lg leading-relaxed mb-8">
                G&A's personnel is dedicated exclusively to servicing your company and 
                adheres to all customer and G&A safety guidelines.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact#contact-form-section">
                  <Button
                    data-testid="services-quote-btn"
                    className="bg-[#22C55E] text-black hover:bg-[#22C55E]/90 btn-glow rounded-full px-6"
                  >
                    Get a Quote
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
                <a href="tel:+17136708118">
                  <Button
                    variant="outline"
                    className="border-zinc-700 text-white hover:bg-zinc-800 hover:text-white rounded-full px-6"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Call Us
                  </Button>
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-[#22C55E]/10 rounded-2xl blur-2xl" />
              <div className="relative img-zoom rounded-xl overflow-hidden border border-zinc-800">
                <img
                  src="https://images.unsplash.com/photo-1764046155497-ad7e50737ffa?auto=format&fit=crop&w=1000&q=80"
                  alt="Warehouse with pallets"
                  className="w-full aspect-[4/3] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Personalized Service Banner */}
      <section className="py-8 bg-[#22C55E]/5 border-y border-[#22C55E]/20">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-center md:text-left">
            <div className="flex items-center gap-3">
              <Headphones className="w-8 h-8 text-[#22C55E]" />
              <div>
                <p className="text-white font-semibold">Personalized Attention</p>
                <p className="text-zinc-400 text-sm">Every customer speaks with a dedicated representative</p>
              </div>
            </div>
            <div className="hidden md:block w-px h-12 bg-zinc-700" />
            <div className="flex items-center gap-3">
              <Users className="w-8 h-8 text-[#22C55E]" />
              <div>
                <p className="text-white font-semibold">Trained Personnel</p>
                <p className="text-zinc-400 text-sm">Highly qualified staff dedicated to your company</p>
              </div>
            </div>
            <div className="hidden md:block w-px h-12 bg-zinc-700" />
            <div className="flex items-center gap-3">
              <Shield className="w-8 h-8 text-[#22C55E]" />
              <div>
                <p className="text-white font-semibold">Safety First</p>
                <p className="text-zinc-400 text-sm">Adherence to all safety guidelines</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TPM Highlight Section */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="bg-gradient-to-r from-[#22C55E]/10 via-[#22C55E]/5 to-transparent border border-[#22C55E]/20 rounded-2xl p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-[#22C55E] text-sm font-mono uppercase tracking-wider mb-4 block">
                  Featured Program
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight">
                  Total Pallet Management (TPM)
                </h2>
                <p className="text-zinc-400 text-base md:text-lg leading-relaxed mb-6">
                  Our company has a design program plan known as a Total Pallet Management 
                  Plan (TPM) that allows us to adapt to both your corporate culture and 
                  pallet shipping requirements.
                </p>
                <p className="text-zinc-400 text-base leading-relaxed mb-8">
                  Based on your supply and demand, we can find the perfect plan to suit 
                  you and your company. Let us handle your pallet management so you can 
                  focus on your core business.
                </p>
                <div className="space-y-3 mb-8">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-[#22C55E] flex-shrink-0" />
                    <span className="text-zinc-300">Customized to your corporate culture</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-[#22C55E] flex-shrink-0" />
                    <span className="text-zinc-300">Adapted to your shipping requirements</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-[#22C55E] flex-shrink-0" />
                    <span className="text-zinc-300">Supply and demand optimization</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-[#22C55E] flex-shrink-0" />
                    <span className="text-zinc-300">Complete pallet program management</span>
                  </div>
                </div>
                <Link to="/contact">
                  <Button
                    className="bg-[#22C55E] text-black hover:bg-[#22C55E]/90 btn-glow rounded-full px-6"
                  >
                    Learn More About TPM
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
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
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24 bg-zinc-900/30">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <span className="text-[#22C55E] text-sm font-medium uppercase tracking-wider mb-4 block">
              What We Offer
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight">
              Our Complete Services
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mainServices.slice(1).map((service, index) => (
              <div
                key={service.title}
                data-testid={`service-${index}`}
                className="bg-zinc-900/50 border border-zinc-800/50 rounded-xl p-6 card-hover group"
              >
                <div className="w-12 h-12 bg-zinc-800 rounded-lg flex items-center justify-center mb-5 group-hover:bg-[#22C55E]/10 transition-colors">
                  <service.icon className="w-6 h-6 text-[#22C55E]" />
                </div>
                <span className="text-[#22C55E] text-xs font-mono uppercase tracking-wider mb-2 block">
                  {service.subtitle}
                </span>
                <h3 className="text-xl font-bold text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-5">
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
                You get a dedicated team committed to your success, backed by over 
                25 years of family business values.
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
                <div className="flex items-start gap-4">
                  <Users className="w-6 h-6 text-[#22C55E] flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Dedicated Representatives</h4>
                    <p className="text-zinc-400 text-sm">Personal attention to understand your needs</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-[#22C55E]/10 rounded-2xl blur-2xl" />
              <div className="relative img-zoom rounded-xl overflow-hidden border border-zinc-800">
                <img
                  src="https://images.unsplash.com/photo-1720036236694-d0a231c52563?auto=format&fit=crop&w=1000&q=80"
                  alt="Industrial pallet operations"
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
            Ready to Simplify Your Pallet Needs?
          </h2>
          <p className="text-zinc-400 text-base md:text-lg mb-10">
            Let our team create a custom TPM plan for your business. We're here to serve you.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact#contact-form-section">
              <Button
                data-testid="services-cta-quote-btn"
                size="lg"
                className="bg-[#22C55E] text-black hover:bg-[#22C55E]/90 btn-glow rounded-full px-8 py-6 text-base font-semibold"
              >
                Request a Quote
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button
                data-testid="services-cta-contact-btn"
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
