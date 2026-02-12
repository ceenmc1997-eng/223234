import { Link } from "react-router-dom";
import { ArrowRight, Gauge, Zap, Shield, Ruler, Settings, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Machinery = () => {
  const machines = [
    {
      name: "Champion QC306",
      category: "Pallet Nailer",
      description: "The Champion QC306 by Viking Engineering is a high-performance automatic pallet nailing system capable of producing 500-600 pallets per shift. It delivers consistent, precise nailing for both standard and custom pallet configurations using new or recycled lumber.",
      image: "https://images.unsplash.com/photo-1767281075989-7571356d477e?auto=format&fit=crop&w=1000&q=80",
      specs: [
        { label: "Speed", value: "High Output" },
        { label: "Precision", value: "± 0.5mm" },
        { label: "Operation", value: "Automatic" },
        { label: "Capacity", value: "Industrial" },
      ],
      features: [
        "Automatic nail feeding system",
        "Adjustable for multiple pallet sizes",
        "Pneumatic operation for reliability",
        "Quick changeover between configurations",
        "Built-in safety features",
        "Low maintenance requirements",
      ],
    },
    {
      name: "HR100 Horizontal Band Resaw",
      category: "Wood-Mizer",
      description: "The Wood-Mizer HR100 Horizontal Band Resaw is engineered for precision lumber resawing. It features thin-kerf blades that transform rough lumber into perfectly dimensioned boards with minimal waste and maximum efficiency for pallet production.",
      image: "https://images.unsplash.com/photo-1720036236694-d0a231c52563?auto=format&fit=crop&w=1000&q=80",
      specs: [
        { label: "Cut Capacity", value: "Up to 12\"" },
        { label: "Blade Speed", value: "Variable" },
        { label: "Feed System", value: "Hydraulic" },
        { label: "Motor", value: "Industrial" },
      ],
      features: [
        "Precision blade guides for accurate cuts",
        "Hydraulic feed for consistent speed",
        "Variable blade speed control",
        "Efficient sawdust collection system",
        "Easy blade change mechanism",
        "Heavy-duty construction",
      ],
    },
  ];

  const capabilities = [
    {
      icon: Gauge,
      title: "High Throughput",
      description: "Our machinery enables us to produce thousands of pallets monthly without compromising quality.",
    },
    {
      icon: Zap,
      title: "Efficiency",
      description: "State-of-the-art equipment minimizes waste and maximizes material utilization.",
    },
    {
      icon: Shield,
      title: "Consistency",
      description: "Automated systems ensure every pallet meets exact specifications.",
    },
    {
      icon: Ruler,
      title: "Precision",
      description: "Advanced machinery delivers accuracy within tight tolerances.",
    },
  ];

  return (
    <div data-testid="machinery-page" className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <span className="text-[#22C55E] text-sm font-medium uppercase tracking-wider mb-4 block">
                Our Equipment
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight leading-[1.1]">
                Industrial-Grade
                <br />
                <span className="text-[#22C55E]">Machinery</span>
              </h1>
              <p className="text-zinc-400 text-base md:text-lg leading-relaxed mb-8">
                We invest in the best equipment to deliver superior results. Our 
                machinery combines precision engineering with industrial durability 
                to ensure consistent quality in every pallet we produce.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="spec-tag">Champion QC306</span>
                <span className="spec-tag">HR100 Wood-Mizer</span>
                <span className="spec-tag">Precision Cutting</span>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-[#22C55E]/10 rounded-2xl blur-2xl" />
              <div className="relative img-zoom rounded-xl overflow-hidden border border-zinc-800">
                <img
                  src="https://images.unsplash.com/photo-1759159091728-e2c87b9d9315?auto=format&fit=crop&w=1000&q=80"
                  alt="Industrial machinery for pallet production"
                  className="w-full aspect-[4/3] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-16 md:py-24 bg-zinc-900/30">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {capabilities.map((cap, index) => (
              <div
                key={cap.title}
                data-testid={`capability-${index}`}
                className="bg-zinc-900/50 border border-zinc-800/50 rounded-xl p-6 text-center"
              >
                <div className="w-12 h-12 bg-zinc-800 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <cap.icon className="w-6 h-6 text-[#22C55E]" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{cap.title}</h3>
                <p className="text-zinc-400 text-sm">{cap.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Machine Details */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="space-y-24">
            {machines.map((machine, index) => (
              <div
                key={machine.name}
                data-testid={`machine-${index}`}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="relative">
                    <div className="absolute -inset-4 bg-[#22C55E]/10 rounded-2xl blur-2xl" />
                    <div className="relative rounded-xl overflow-hidden border border-zinc-800 green-glow">
                      <img
                        src={machine.image}
                        alt={machine.name}
                        className="w-full aspect-[4/3] object-cover"
                      />
                    </div>
                  </div>
                  {/* Specs Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6">
                    {machine.specs.map((spec) => (
                      <div
                        key={spec.label}
                        className="bg-zinc-900/50 border border-zinc-800/50 rounded-lg p-4 text-center"
                      >
                        <span className="text-zinc-500 text-xs uppercase tracking-wider block mb-1">
                          {spec.label}
                        </span>
                        <span className="text-white font-mono font-semibold text-sm">
                          {spec.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <span className="text-[#22C55E] text-sm font-mono uppercase tracking-wider mb-3 block">
                    {machine.category}
                  </span>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
                    {machine.name}
                  </h2>
                  <p className="text-zinc-400 text-base leading-relaxed mb-8">
                    {machine.description}
                  </p>
                  <div className="space-y-3">
                    <h4 className="text-white font-semibold mb-4">Key Features</h4>
                    {machine.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-[#22C55E] flex-shrink-0" />
                        <span className="text-zinc-300 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Maintenance Section */}
      <section className="py-24 md:py-32 bg-zinc-900/30">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <span className="text-[#22C55E] text-sm font-medium uppercase tracking-wider mb-4 block">
                Equipment Care
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight">
                Maintained for Excellence
              </h2>
              <p className="text-zinc-400 text-base md:text-lg leading-relaxed mb-8">
                Our machinery undergoes regular maintenance and calibration to ensure 
                optimal performance. We follow strict TPM (Total Productive Maintenance) 
                protocols to minimize downtime and maintain consistency.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <Settings className="w-6 h-6 text-[#22C55E] flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Regular Maintenance</h4>
                    <p className="text-zinc-400 text-sm">Scheduled preventive maintenance keeps equipment running smoothly</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Gauge className="w-6 h-6 text-[#22C55E] flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Precision Calibration</h4>
                    <p className="text-zinc-400 text-sm">Regular calibration ensures consistent accuracy</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Shield className="w-6 h-6 text-[#22C55E] flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Safety Inspections</h4>
                    <p className="text-zinc-400 text-sm">Comprehensive safety checks protect our team and products</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-[#22C55E]/10 rounded-2xl blur-2xl" />
              <div className="relative img-zoom rounded-xl overflow-hidden border border-zinc-800">
                <img
                  src="https://images.unsplash.com/photo-1634672652995-ee7525bce595?auto=format&fit=crop&w=1000&q=80"
                  alt="Lumber and wood processing"
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
            See Quality in Action
          </h2>
          <p className="text-zinc-400 text-base md:text-lg mb-10">
            Contact us to learn more about our manufacturing capabilities or to schedule a facility tour.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact">
              <Button
                data-testid="machinery-contact-btn"
                size="lg"
                className="bg-[#22C55E] text-black hover:bg-[#22C55E]/90 btn-glow rounded-full px-8 py-6 text-base font-semibold"
              >
                Contact Us
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link to="/pallets">
              <Button
                data-testid="machinery-quote-btn"
                variant="outline"
                size="lg"
                className="border-zinc-700 text-white hover:bg-zinc-800 hover:text-white rounded-full px-8 py-6 text-base"
              >
                Request a Quote
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Machinery;
