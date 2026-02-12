import { Link } from "react-router-dom";
import { ArrowRight, Package, CheckCircle, Phone, Truck, Shield, Clock, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const Pallets = () => {
  // Real pallet specifications from industry standards
  const palletTypes = [
    {
      name: "GMA Stringer Pallet",
      dimensions: '48" × 40" × 6"',
      weight: "37 lbs (17 kg)",
      capacity: "2,500 lbs dynamic",
      description: "The industry standard pallet in North America, used by 30% of all U.S. pallets. Ideal for grocery, retail, and general warehousing. Compatible with standard truck doors and racking systems.",
      features: ["GMA Standard size", "2-way or notched 4-way entry", "Hardwood construction", "Easy to repair"],
      popular: true,
    },
    {
      name: "Block Pallet (4-Way)",
      dimensions: '48" × 40" × 6"',
      weight: "45-55 lbs (20-25 kg)",
      capacity: "4,600 lbs static",
      description: "Heavy-duty pallet using nine 4×4 inch wood blocks. True four-way forklift entry from all sides. Best for automated warehouse systems and heavy loads.",
      features: ["True 4-way forklift entry", "9 block design", "Superior durability", "More trip cycles"],
      popular: true,
    },
    {
      name: "Euro Pallet (EPAL)",
      dimensions: '47.24" × 31.50" × 5.7" (1200×800mm)',
      weight: "55 lbs (25 kg)",
      capacity: "3,300 lbs (1,500 kg) dynamic",
      description: "Official EPAL certified European pallet required for export to EU markets. Features 11 boards, 78 nails, 9 blocks. Heat treated per ISPM-15 standards.",
      features: ["EPAL/EUR certified", "ISPM-15 compliant", "International standard", "4-way entry"],
      popular: true,
    },
    {
      name: "Half Pallet",
      dimensions: '48" × 20" × 6"',
      weight: "22 lbs (10 kg)",
      capacity: "1,200 lbs",
      description: "Half the width of standard GMA pallet. Perfect for retail store displays, point-of-sale applications, and smaller shipments that don't require full pallet space.",
      features: ["Retail display ready", "Space efficient", "Easy manual handling", "Store aisle compatible"],
    },
    {
      name: "Beverage Pallet",
      dimensions: '48" × 36" × 6"',
      weight: "40 lbs (18 kg)",
      capacity: "3,000 lbs",
      description: "Slightly narrower than GMA standard, designed specifically for beverage industry. Fits 20oz bottles and cans efficiently. Common in bottling and distribution.",
      features: ["Beverage industry standard", "Optimized for bottles/cans", "Heavy load capacity", "Efficient stacking"],
    },
    {
      name: "Automotive Pallet",
      dimensions: '48" × 45" × 6"',
      weight: "50 lbs (23 kg)",
      capacity: "3,500 lbs",
      description: "Wider pallet designed for automotive industry parts and components. Provides extra width for larger automotive parts and assemblies.",
      features: ["Automotive industry standard", "Extra width for parts", "Heavy-duty construction", "Stackable design"],
    },
    {
      name: "Drum Pallet",
      dimensions: '48" × 48" × 6"',
      weight: "48 lbs (22 kg)",
      capacity: "4,000 lbs",
      description: "Square pallet designed for 55-gallon drums and barrel storage. Equal dimensions prevent drum overhang and ensure stable stacking.",
      features: ["Fits 4× 55-gallon drums", "Square design", "Chemical industry standard", "Spill containment ready"],
    },
    {
      name: "Recycled/Reconditioned Pallet",
      dimensions: '48" × 40" × 6" (Standard)',
      weight: "35-40 lbs",
      capacity: "1,500 - 2,500 lbs",
      description: "Quality inspected reconditioned pallets. Sustainable option with significant cost savings. All pallets meet our quality standards with replaced damaged components.",
      features: ["Up to 50% cost savings", "Environmentally friendly", "Quality inspected", "Replaced damaged parts"],
    },
    {
      name: "Heat Treated Pallet (ISPM-15)",
      dimensions: "Various sizes available",
      weight: "Varies by size",
      capacity: "Same as base pallet type",
      description: "Any pallet type heat treated to 56°C core temperature for 30 minutes per ISPM-15 requirements. Required for international export. Includes HT stamp certification.",
      features: ["ISPM-15 certified stamp", "56°C/30min treatment", "Export compliant", "Pest-free guarantee"],
      popular: true,
    },
    {
      name: "Custom Pallet",
      dimensions: "Your specifications",
      weight: "Based on design",
      capacity: "Engineered to requirement",
      description: "Can't find the right size? We manufacture custom pallets to your exact specifications. Any dimension, load capacity, or special requirements.",
      features: ["Any dimension", "Custom load capacity", "Special deck patterns", "Fast turnaround"],
    },
  ];

  const benefits = [
    {
      icon: Truck,
      title: "Fast Delivery",
      description: "Same-day available in Houston",
    },
    {
      icon: Shield,
      title: "Quality Inspected",
      description: "Every pallet checked",
    },
    {
      icon: Clock,
      title: "24hr Response",
      description: "Quick quote turnaround",
    },
    {
      icon: Star,
      title: "Volume Pricing",
      description: "Discounts on 100+ units",
    },
  ];

  return (
    <div data-testid="pallets-page" className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-20">
          <img
            src="https://images.unsplash.com/photo-1615063400892-5e2508ec9a12?auto=format&fit=crop&w=1000&q=80"
            alt="Wooden pallets"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#09090B] via-[#09090B]/80 to-transparent" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 md:px-12">
          <div className="max-w-3xl">
            <span className="text-[#22C55E] text-sm font-medium uppercase tracking-wider mb-4 block">
              Our Products
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight leading-[1.1]">
              Quality
              <br />
              <span className="text-[#22C55E]">Wooden Pallets</span>
            </h1>
            <p className="text-zinc-400 text-base md:text-lg leading-relaxed mb-8">
              New and recycled pallets in standard and custom sizes. GMA, Euro, Block, 
              and specialty pallets available. Heat treatment (ISPM-15) for export shipments.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact#contact-form-section">
                <Button
                  data-testid="hero-quote-btn"
                  size="lg"
                  className="bg-[#22C55E] text-black hover:bg-[#22C55E]/90 rounded-full px-8 py-6 text-base font-semibold"
                >
                  Request Quote
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
      <section className="py-8 bg-zinc-900/50 border-y border-zinc-800/50">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={benefit.title} className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#22C55E]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <benefit.icon className="w-5 h-5 text-[#22C55E]" />
                </div>
                <div>
                  <h4 className="text-white font-medium text-sm">{benefit.title}</h4>
                  <p className="text-zinc-500 text-xs">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pallet Types */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <span className="text-[#22C55E] text-sm font-medium uppercase tracking-wider mb-4 block">
              Product Catalog
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4">
              Pallet Types & Sizes
            </h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              Industry standard dimensions and load capacities. All specifications 
              based on typical construction - actual capacity depends on lumber grade and condition.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {palletTypes.map((pallet, index) => (
              <div
                key={pallet.name}
                data-testid={`pallet-type-${index}`}
                className={`bg-zinc-900/50 border rounded-xl p-6 card-hover group relative ${
                  pallet.popular ? "border-[#22C55E]/30" : "border-zinc-800/50"
                }`}
              >
                {pallet.popular && (
                  <div className="absolute -top-3 left-6">
                    <span className="bg-[#22C55E] text-black text-xs font-semibold px-3 py-1 rounded-full">
                      Popular
                    </span>
                  </div>
                )}
                <div className="w-12 h-12 bg-zinc-800 rounded-lg flex items-center justify-center mb-5 group-hover:bg-[#22C55E]/10 transition-colors">
                  <Package className="w-6 h-6 text-[#22C55E]" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">
                  {pallet.name}
                </h3>
                
                {/* Specs Table */}
                <div className="bg-zinc-950/50 rounded-lg p-3 mb-4 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-zinc-500">Dimensions:</span>
                    <span className="text-[#22C55E] font-mono text-xs">{pallet.dimensions}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-zinc-500">Weight:</span>
                    <span className="text-zinc-300 font-mono text-xs">{pallet.weight}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-zinc-500">Capacity:</span>
                    <span className="text-zinc-300 font-mono text-xs">{pallet.capacity}</span>
                  </div>
                </div>

                <p className="text-zinc-400 text-sm leading-relaxed mb-5">
                  {pallet.description}
                </p>
                <ul className="space-y-2 mb-5">
                  {pallet.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-[#22C55E] flex-shrink-0" />
                      <span className="text-zinc-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/contact#contact-form-section">
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full border-zinc-700 text-white hover:bg-[#22C55E] hover:text-black hover:border-[#22C55E] rounded-full transition-colors"
                  >
                    Request Quote
                  </Button>
                </Link>
              </div>
            ))}
          </div>

          {/* Mid-page CTA */}
          <div className="mt-16 bg-gradient-to-r from-[#22C55E]/10 via-[#22C55E]/5 to-transparent border border-[#22C55E]/20 rounded-2xl p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                  Need a Custom Size?
                </h3>
                <p className="text-zinc-400">
                  We manufacture pallets to your exact specifications. Any dimension, any load requirement.
                </p>
              </div>
              <div className="flex gap-4">
                <a href="tel:+17136708118">
                  <Button
                    size="lg"
                    className="bg-[#22C55E] text-black hover:bg-[#22C55E]/90 rounded-full px-6"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Call Us
                  </Button>
                </a>
                <Link to="/contact#contact-form-section">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-zinc-700 text-white hover:bg-zinc-800 rounded-full px-6"
                  >
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-24 md:py-32 bg-zinc-900/30">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Ready to Order?
          </h3>
          <p className="text-zinc-400 mb-8">
            Contact us today for a free quote. Our team responds within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact#contact-form-section">
              <Button
                size="lg"
                className="bg-[#22C55E] text-black hover:bg-[#22C55E]/90 rounded-full px-8 py-6 text-base font-semibold"
              >
                Get Free Quote
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
      </section>
    </div>
  );
};

export default Pallets;
