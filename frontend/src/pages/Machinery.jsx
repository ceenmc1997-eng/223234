import { Link } from "react-router-dom";
import { ArrowRight, Gauge, Zap, Shield, Ruler, Settings, CheckCircle, Phone, Cog } from "lucide-react";
import { Button } from "@/components/ui/button";

const Machinery = () => {
  const machines = [
    {
      name: "Champion QC306",
      brand: "Viking Engineering",
      category: "Automatic Pallet Nailer",
      description: "At G&A Pallet, we operate the Champion QC306 Pallet Nailer - a single operator system that produces 500-600 pallets per shift. This machine allows us to use both new and recycled lumber, giving us flexibility to meet any order while maintaining consistent quality.",
      image: "https://www.vikingeng.com/media/contentmanager/content/pallet-machine-champion-qc306.jpg",
      specs: [
        { label: "Output", value: "500-600/shift" },
        { label: "Stringers", value: "4 Standard" },
        { label: "Length", value: '72" Standard' },
        { label: "Operator", value: "Single" },
      ],
      features: [
        "Processes new and reclaimed lumber",
        "40 pallet configuration storage",
        "Automated pallet turnover",
        "Automated stacking system",
        "Programmable controllers",
        "Quick change stringer rails",
        "Hydraulic nailing precision",
      ],
    },
    {
      name: "HR1000 Horizontal Resaw",
      brand: "Wood-Mizer",
      category: "Horizontal Band Resaw",
      description: "Our Wood-Mizer HR1000 horizontal band resaw transforms raw lumber into precisely dimensioned pallet boards. With thin-kerf blades, we maximize yield from every log while ensuring consistent board thickness for quality pallet production.",
      image: "https://woodmizer.com/media/catalog/product/h/r/hr1000.jpg",
      specs: [
        { label: "Capacity", value: '12" x 12"' },
        { label: "Heads", value: "Multi-Head" },
        { label: "Feed", value: "Steel Belt" },
        { label: "Blade", value: "Thin-Kerf" },
      ],
      features: [
        "Steel belt conveyor system",
        "Precision blade guides",
        "Variable feed rate control",
        "Spiked feed rollers",
        "Hold-down rollers for stability",
        "Efficient sawdust collection",
        "High volume board production",
      ],
    },
  ];

  const capabilities = [
    {
      icon: Gauge,
      title: "High Output",
      description: "500-600 pallets per shift capacity",
    },
    {
      icon: Zap,
      title: "Automation",
      description: "Automated stacking and turnover",
    },
    {
      icon: Shield,
      title: "Consistency",
      description: "Programmable precision every time",
    },
    {
      icon: Ruler,
      title: "Flexibility",
      description: "New and recycled lumber processing",
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
                Investing in
                <br />
                <span className="text-[#22C55E]">Automation</span>
              </h1>
              <p className="text-zinc-400 text-base md:text-lg leading-relaxed mb-4">
                At G&A Pallet, we continuously invest in state-of-the-art machinery 
                to automate our processes and deliver consistent, high-quality pallets 
                to our customers.
              </p>
              <p className="text-zinc-400 text-base md:text-lg leading-relaxed mb-8">
                Our equipment allows us to handle high-volume orders while maintaining 
                the quality standards that our clients expect from a 25+ year family business.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                <span className="spec-tag">Champion QC306</span>
                <span className="spec-tag">Wood-Mizer HR1000</span>
                <span className="spec-tag">Automated Production</span>
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
              <div className="relative rounded-xl overflow-hidden border border-zinc-800">
                <div className="relative">
                  <img
                    src="https://www.vikingeng.com/media/contentmanager/content/pallet-machine-champion-qc306-2.jpg"
                    alt="Champion QC306 Pallet Nailer at G&A Pallet"
                    className="w-full aspect-[4/3] object-cover filter brightness-90 contrast-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#09090B] via-transparent to-[#09090B]/30" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="text-[#22C55E] text-xs font-mono uppercase tracking-wider">Our Equipment</span>
                    <p className="text-white font-semibold">Champion QC306 in Operation</p>
                  </div>
                </div>
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

      {/* Our Commitment to Automation */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="bg-gradient-to-r from-[#22C55E]/10 via-[#22C55E]/5 to-transparent border border-[#22C55E]/20 rounded-2xl p-8 md:p-12">
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 bg-[#22C55E]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <Cog className="w-8 h-8 text-[#22C55E]" />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Commitment to Automation
                </h2>
                <p className="text-zinc-400 text-base md:text-lg leading-relaxed">
                  Every day we work to improve and automate our processes. By investing in 
                  modern machinery like the Champion QC306 and Wood-Mizer HR1000, we can 
                  offer our customers faster turnaround times, consistent quality, and 
                  competitive pricing. Our automated systems allow a single operator to 
                  produce hundreds of pallets per shift while maintaining the highest 
                  quality standards.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Machine Details */}
      <section className="py-16 md:py-24 bg-zinc-900/30">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <span className="text-[#22C55E] text-sm font-medium uppercase tracking-wider mb-4 block">
              Our Machinery
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight">
              Equipment We Operate
            </h2>
          </div>

          <div className="space-y-24">
            {machines.map((machine, index) => (
              <div
                key={machine.name}
                data-testid={`machine-${index}`}
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="relative group">
                    <div className="absolute -inset-4 bg-[#22C55E]/10 rounded-2xl blur-2xl opacity-50 group-hover:opacity-75 transition-opacity" />
                    <div className="relative rounded-xl overflow-hidden border border-zinc-800">
                      <div className="relative">
                        <img
                          src={machine.image}
                          alt={`${machine.name} at G&A Pallet`}
                          className="w-full aspect-[4/3] object-cover filter brightness-[0.85] contrast-110 saturate-75"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#09090B] via-[#09090B]/20 to-[#09090B]/40" />
                        <div className="absolute inset-0 bg-[#22C55E]/5" />
                        <div className="absolute bottom-0 left-0 right-0 p-6">
                          <span className="text-[#22C55E] text-xs font-mono uppercase tracking-wider block mb-1">
                            {machine.brand}
                          </span>
                          <h3 className="text-xl font-bold text-white">{machine.name}</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Specs Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6">
                    {machine.specs.map((spec) => (
                      <div
                        key={spec.label}
                        className="bg-zinc-900/80 border border-zinc-800/50 rounded-lg p-3 text-center"
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
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 tracking-tight">
                    {machine.name}
                  </h3>
                  <p className="text-zinc-400 text-base leading-relaxed mb-8">
                    {machine.description}
                  </p>
                  <div className="space-y-3">
                    <h4 className="text-white font-semibold mb-4">Capabilities</h4>
                    <div className="grid grid-cols-1 gap-2">
                      {machine.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-3">
                          <CheckCircle className="w-4 h-4 text-[#22C55E] flex-shrink-0" />
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

      {/* TPM Maintenance */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <span className="text-[#22C55E] text-sm font-medium uppercase tracking-wider mb-4 block">
                Equipment Care
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight">
                Total Productive Maintenance
              </h2>
              <p className="text-zinc-400 text-base md:text-lg leading-relaxed mb-8">
                We follow strict TPM (Total Productive Maintenance) protocols to keep 
                our machinery running at peak performance. Regular maintenance and 
                calibration ensure consistent output quality and minimize downtime.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <Settings className="w-6 h-6 text-[#22C55E] flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Preventive Maintenance</h4>
                    <p className="text-zinc-400 text-sm">Scheduled maintenance keeps equipment running smoothly</p>
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
                    <h4 className="text-white font-semibold mb-1">Quality Assurance</h4>
                    <p className="text-zinc-400 text-sm">Every pallet meets our strict quality standards</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-[#22C55E]/10 rounded-2xl blur-2xl" />
              <div className="relative rounded-xl overflow-hidden border border-zinc-800">
                <div className="relative">
                  <img
                    src="https://www.vikingeng.com/media/contentmanager/content/pallet-machine-champion-qc306-4.jpg"
                    alt="Automated pallet production at G&A Pallet"
                    className="w-full aspect-[4/3] object-cover filter brightness-[0.85] contrast-110 saturate-75"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#09090B] via-[#09090B]/20 to-[#09090B]/40" />
                  <div className="absolute inset-0 bg-[#22C55E]/5" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32 bg-zinc-900/30 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#22C55E]/5 rounded-full blur-[80px]" />
        
        <div className="relative max-w-4xl mx-auto px-6 md:px-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight">
            Experience Our Quality
          </h2>
          <p className="text-zinc-400 text-base md:text-lg mb-10">
            Our investment in automation means better quality and faster delivery for you. 
            Contact us today to discuss your pallet needs.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/pallets">
              <Button
                data-testid="machinery-quote-btn"
                size="lg"
                className="bg-[#22C55E] text-black hover:bg-[#22C55E]/90 btn-glow rounded-full px-8 py-6 text-base font-semibold"
              >
                Request a Quote
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button
                data-testid="machinery-contact-btn"
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

export default Machinery;
