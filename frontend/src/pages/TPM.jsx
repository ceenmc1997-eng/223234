import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  Package, 
  Recycle, 
  ClipboardCheck, 
  Truck, 
  BarChart3, 
  Settings, 
  Leaf,
  Box,
  FileText,
  Phone,
  CheckCircle,
  Users,
  Shield,
  Boxes
} from "lucide-react";
import { Button } from "@/components/ui/button";

const TPM = () => {
  const tpmServices = [
    {
      icon: Package,
      title: "Pallet Responsibility",
      description: "We take full responsibility for managing your pallet inventory, ensuring you always have the right pallets when you need them.",
    },
    {
      icon: Recycle,
      title: "Recovery & Supply",
      description: "Complete recovery and supply of pallets to maintain your operations running smoothly without interruption.",
    },
    {
      icon: ClipboardCheck,
      title: "On-Site Sorting & Repair",
      description: "Accurate sorting and professional repair services performed directly at your facility for maximum efficiency.",
    },
    {
      icon: Leaf,
      title: "Eco-Friendly Disposal",
      description: "Environmentally responsible disposal of wood waste, helping you meet sustainability goals and reduce your carbon footprint.",
    },
    {
      icon: BarChart3,
      title: "Volume & Size Review",
      description: "Current review of volume and size requirements to optimize your pallet usage and reduce costs.",
    },
    {
      icon: Settings,
      title: "Design Specification",
      description: "Custom design specifications tailored to your specific product and shipping requirements.",
    },
    {
      icon: FileText,
      title: "Online Tracking & Reporting",
      description: "Real-time online tracking and comprehensive transaction reporting for complete visibility of your pallet operations.",
    },
  ];

  const additionalServices = [
    {
      icon: Boxes,
      title: "Recyclable Processing",
      description: "Processing of recyclable items including corrugated paper and plastics to support your sustainability initiatives.",
    },
    {
      icon: Box,
      title: "Box & Container Services",
      description: "Professional cleaning and sorting of boxes and containers to extend their useful life and maintain quality standards.",
    },
  ];

  const benefits = [
    {
      title: "Reduce Costs",
      description: "Lower your pallet expenses by up to 30% with our managed program",
    },
    {
      title: "Increase Efficiency",
      description: "Streamline operations with on-site services and real-time tracking",
    },
    {
      title: "Sustainability",
      description: "Meet environmental goals with responsible recycling and disposal",
    },
    {
      title: "Peace of Mind",
      description: "Focus on your core business while we handle pallet management",
    },
  ];

  return (
    <div data-testid="tpm-page" className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
          <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#09090B]" />
          <img
            src="https://images.unsplash.com/photo-1615063400892-5e2508ec9a12?auto=format&fit=crop&w=1000&q=80"
            alt="Pallet management"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 md:px-12">
          <div className="max-w-3xl">
            <span className="text-[#22C55E] text-sm font-medium uppercase tracking-wider mb-4 block">
              Total Pallet Management
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight leading-[1.1]">
              The Services of
              <br />
              <span className="text-[#22C55E]">TPM</span>
            </h1>
            <p className="text-zinc-400 text-base md:text-lg leading-relaxed mb-8">
              Our Total Pallet Management program is designed to adapt to your corporate 
              culture and pallet shipping requirements. We handle everything from supply 
              and recovery to on-site repair and environmentally responsible disposal.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact">
                <Button
                  data-testid="tpm-contact-btn"
                  size="lg"
                  className="bg-[#22C55E] text-black hover:bg-[#22C55E]/90 rounded-full px-8 py-6 text-base font-semibold"
                >
                  Get TPM Quote
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <a href="tel:+17136708118">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-zinc-700 text-white hover:bg-zinc-800 hover:text-white rounded-full px-8 py-6 text-base"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  (713) 670-8118
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Bar */}
      <section className="py-8 bg-[#22C55E]/5 border-y border-[#22C55E]/20">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={benefit.title} className="text-center">
                <h4 className="text-white font-semibold mb-1">{benefit.title}</h4>
                <p className="text-zinc-400 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TPM Services */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <span className="text-[#22C55E] text-sm font-medium uppercase tracking-wider mb-4 block">
              What's Included
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4">
              TPM Services Include
            </h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              Comprehensive pallet management services designed to optimize your 
              operations and reduce costs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tpmServices.map((service, index) => (
              <div
                key={service.title}
                data-testid={`tpm-service-${index}`}
                className="bg-zinc-900/50 border border-zinc-800/50 rounded-xl p-6 card-hover group"
              >
                <div className="w-12 h-12 bg-[#22C55E]/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-[#22C55E]/20 transition-colors">
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

      {/* How TPM Works */}
      <section className="py-24 md:py-32 bg-zinc-900/30">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <span className="text-[#22C55E] text-sm font-medium uppercase tracking-wider mb-4 block">
                How It Works
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight">
                Your Custom TPM Plan
              </h2>
              <p className="text-zinc-400 text-base md:text-lg leading-relaxed mb-8">
                Based on your supply and demand, we create a customized Total Pallet 
                Management plan that fits perfectly with your operations. Our dedicated 
                staff works exclusively with your company, adhering to all customer 
                and G&A safety guidelines.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-[#22C55E] rounded-full flex items-center justify-center flex-shrink-0 text-black font-bold text-sm">
                    1
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Assessment</h4>
                    <p className="text-zinc-400 text-sm">We analyze your current pallet usage and requirements</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-[#22C55E] rounded-full flex items-center justify-center flex-shrink-0 text-black font-bold text-sm">
                    2
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Custom Plan</h4>
                    <p className="text-zinc-400 text-sm">We design a TPM program tailored to your needs</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-[#22C55E] rounded-full flex items-center justify-center flex-shrink-0 text-black font-bold text-sm">
                    3
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Implementation</h4>
                    <p className="text-zinc-400 text-sm">Our dedicated team integrates seamlessly with your operations</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-[#22C55E] rounded-full flex items-center justify-center flex-shrink-0 text-black font-bold text-sm">
                    4
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Ongoing Management</h4>
                    <p className="text-zinc-400 text-sm">Continuous optimization with real-time tracking and reporting</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-[#22C55E]/10 rounded-2xl blur-2xl opacity-50" />
              <div className="relative rounded-xl overflow-hidden border border-zinc-800">
                <img
                  src="https://images.unsplash.com/photo-1764046155497-ad7e50737ffa?auto=format&fit=crop&w=1000&q=80"
                  alt="TPM services in action"
                  className="w-full aspect-[4/3] object-cover filter brightness-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#09090B] via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <span className="text-[#22C55E] text-sm font-medium uppercase tracking-wider mb-4 block">
              Beyond Pallets
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4">
              Additional Services
            </h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              Our staff can also provide a full suite of non-pallet activities 
              to support your facility operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {additionalServices.map((service, index) => (
              <div
                key={service.title}
                data-testid={`additional-service-${index}`}
                className="bg-zinc-900/50 border border-zinc-800/50 rounded-xl p-8 card-hover group"
              >
                <div className="w-14 h-14 bg-[#22C55E]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#22C55E]/20 transition-colors">
                  <service.icon className="w-7 h-7 text-[#22C55E]" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-zinc-400 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why TPM Section */}
      <section className="py-24 md:py-32 bg-zinc-900/30">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-zinc-900/50 border border-zinc-800/50 rounded-xl p-6 text-center">
                  <Users className="w-8 h-8 text-[#22C55E] mx-auto mb-3" />
                  <div className="text-2xl font-bold text-white mb-1">Dedicated</div>
                  <p className="text-zinc-400 text-sm">Staff for your company</p>
                </div>
                <div className="bg-zinc-900/50 border border-zinc-800/50 rounded-xl p-6 text-center">
                  <Shield className="w-8 h-8 text-[#22C55E] mx-auto mb-3" />
                  <div className="text-2xl font-bold text-white mb-1">Safe</div>
                  <p className="text-zinc-400 text-sm">Full safety compliance</p>
                </div>
                <div className="bg-zinc-900/50 border border-zinc-800/50 rounded-xl p-6 text-center">
                  <BarChart3 className="w-8 h-8 text-[#22C55E] mx-auto mb-3" />
                  <div className="text-2xl font-bold text-white mb-1">Tracked</div>
                  <p className="text-zinc-400 text-sm">Real-time reporting</p>
                </div>
                <div className="bg-zinc-900/50 border border-zinc-800/50 rounded-xl p-6 text-center">
                  <Leaf className="w-8 h-8 text-[#22C55E] mx-auto mb-3" />
                  <div className="text-2xl font-bold text-white mb-1">Green</div>
                  <p className="text-zinc-400 text-sm">Eco-friendly disposal</p>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <span className="text-[#22C55E] text-sm font-medium uppercase tracking-wider mb-4 block">
                Why Choose TPM
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight">
                Let Us Handle Your Pallets
              </h2>
              <p className="text-zinc-400 text-base md:text-lg leading-relaxed mb-6">
                With our TPM program, you get a partner who understands your business. 
                Every customer speaks with one of our dedicated representatives who take 
                the time to understand your specific needs and demands.
              </p>
              <p className="text-zinc-400 text-base leading-relaxed mb-8">
                G&A's personnel is dedicated exclusively to servicing your company and 
                adheres to all customer and G&A safety guidelines, giving you peace of 
                mind and allowing you to focus on your core business.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#22C55E]" />
                  <span className="text-zinc-300">Customized to your corporate culture</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#22C55E]" />
                  <span className="text-zinc-300">Adapted to your shipping requirements</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#22C55E]" />
                  <span className="text-zinc-300">Based on your supply and demand</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#22C55E]/5 rounded-full blur-[100px]" />
        
        <div className="relative max-w-4xl mx-auto px-6 md:px-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight">
            Ready to Optimize Your Pallet Operations?
          </h2>
          <p className="text-zinc-400 text-base md:text-lg mb-10 max-w-2xl mx-auto">
            Let us create a custom TPM plan for your business. Contact our team 
            today to discuss how we can help simplify your pallet management.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact">
              <Button
                data-testid="tpm-cta-contact-btn"
                size="lg"
                className="bg-[#22C55E] text-black hover:bg-[#22C55E]/90 rounded-full px-8 py-6 text-base font-semibold"
              >
                Get Started with TPM
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <a href="tel:+17136708118">
              <Button
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

export default TPM;
