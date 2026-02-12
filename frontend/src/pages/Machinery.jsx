import { Link } from "react-router-dom";
import { ArrowRight, Gauge, Zap, Shield, Ruler, Settings, CheckCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Machinery = () => {
  const machines = [
    {
      name: "Champion QC306",
      category: "Viking Engineering - Pallet Nailer",
      description: "With the ability to use recycled and low grade lumber, the Champion QC306 Pallet Nailer is a single operator system that produces upwards of 500-600 pallets per shift. The flexibility of the QC306 Pallet Machine allows for optional mat and block production capabilities, extended pallet sizes, and quick changeovers.",
      image: "https://www.vikingeng.com/media/contentmanager/content/pallet-machine-champion-qc306.jpg",
      specs: [
        { label: "Output", value: "500-600/shift" },
        { label: "Stringer", value: "4 Standard" },
        { label: "Length", value: '72" Standard' },
        { label: "Operation", value: "Single Operator" },
      ],
      features: [
        "New and reclaimed lumber can be used",
        "40 pallet configuration storage",
        "Automated pallet turnover",
        "Automated stacking",
        "Programmable controllers",
        "Quick change stringer rails",
        "Hydraulic nailing",
        "English/Spanish operator screens",
        "Direct network link for remote diagnostics",
      ],
    },
    {
      name: "HR100 Horizontal Band Resaw",
      category: "Wood-Mizer - Horizontal Resaw",
      description: "The Wood-Mizer horizontal band resaw is engineered for precision lumber resawing. It efficiently turns cants into boards and lumber with minimal labor, featuring thin-kerf blades that maximize yield from every log. Perfect for pallet board production with consistent, accurate cuts.",
      image: "https://woodmizer.com/media/catalog/product/h/r/hr300.jpg",
      specs: [
        { label: "Type", value: "Horizontal Band" },
        { label: "Feed", value: "Steel Belt" },
        { label: "Blade", value: "Thin-Kerf" },
        { label: "Control", value: "Variable Speed" },
      ],
      features: [
        "Steel belt conveyor system",
        "Precision blade guides for accurate cuts",
        "Variable feed rate control",
        "Hold-down rollers for stability",
        "Efficient sawdust collection",
        "Easy blade change mechanism",
        "Heavy-duty construction",
        "Minimal lumber waste",
        "High volume board production",
      ],
    },
  ];

  const capabilities = [
    {
      icon: Gauge,
      title: "High Throughput",
      description: "500-600 pallets per shift with our Champion QC306",
    },
    {
      icon: Zap,
      title: "Efficiency",
      description: "Thin-kerf blades minimize waste and maximize yield",
    },
    {
      icon: Shield,
      title: "Consistency",
      description: "Automated systems ensure every pallet meets specs",
    },
    {
      icon: Ruler,
      title: "Precision",
      description: "Programmable controls for accurate dimensions",
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
              <div className="flex flex-wrap gap-3 mb-8">
                <span className="spec-tag">Champion QC306</span>
                <span className="spec-tag">Wood-Mizer Resaw</span>
                <span className="spec-tag">Precision Engineering</span>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link to="/pallets">
                  <Button
                    className="bg-[#22C55E] text-black hover:bg-[#22C55E]/90 btn-glow rounded-full px-6"
                  >
                    Request Quote
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
              <div className="relative rounded-xl overflow-hidden border border-zinc-800 bg-zinc-900">
                <img
                  src="https://www.vikingeng.com/media/contentmanager/content/pallet-machine-champion-qc306-2.jpg"
                  alt="Champion QC306 Pallet Nailer Machine"
                  className="w-full aspect-[4/3] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-12 md:py-16 bg-zinc-900/30">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {capabilities.map((cap, index) => (
              <div
                key={cap.title}
                data-testid={`capability-${index}`}
                className="bg-zinc-900/50 border border-zinc-800/50 rounded-xl p-6 text-center"
              >
                <div className="w-12 h-12 bg-zinc-800 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <cap.icon className="w-6 h-6 text-[#22C55E]" />
                </div>
                <h3 className="text-base font-semibold text-white mb-2">{cap.title}</h3>
                <p className="text-zinc-400 text-sm">{cap.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Machine Details */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="space-y-32">
            {machines.map((machine, index) => (
              <div
                key={machine.name}
                data-testid={`machine-${index}`}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start ${
                  index % 2 === 1 ? "" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="relative">
                    <div className="absolute -inset-4 bg-[#22C55E]/10 rounded-2xl blur-2xl" />
                    <div className="relative rounded-xl overflow-hidden border border-zinc-800 green-glow bg-zinc-900">
                      <img
                        src={machine.image}
                        alt={machine.name}
                        className="w-full aspect-[4/3] object-contain bg-white"
                      />
                    </div>
                  </div>
                  {/* Specs Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8">
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
                  <span className="text-[#22C55E] text-sm font-mono uppercase tracking-wider mb-4 block">
                    {machine.category}
                  </span>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight">
                    {machine.name}
                  </h2>
                  <p className="text-zinc-400 text-base leading-relaxed mb-8">
                    {machine.description}
                  </p>
                  <div className="space-y-3">
                    <h4 className="text-white font-semibold mb-4">Key Features</h4>
                    <div className="grid grid-cols-1 gap-3">
                      {machine.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-[#22C55E] flex-shrink-0" />
                          <span className="text-zinc-300 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
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
              <div className="relative rounded-xl overflow-hidden border border-zinc-800 bg-zinc-900">
                <img
                  src="https://www.vikingeng.com/media/contentmanager/content/pallet-machine-champion-qc306-4.jpg"
                  alt="Champion QC306 in operation"
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
