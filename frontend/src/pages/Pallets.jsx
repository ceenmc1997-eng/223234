import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Package, CheckCircle, Info, Phone, Truck, Shield, Clock, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import axios from "axios";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const Pallets = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    pallet_type: "",
    quantity: "",
    dimensions: "",
    additional_info: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const palletTypes = [
    {
      name: "Standard GMA Pallet",
      dimensions: '48" x 40"',
      capacity: "2,500 lbs",
      description: "The most common pallet size in North America, used by grocery, retail, and warehousing industries. Perfect for standard racking systems.",
      features: ["Industry standard size", "Compatible with all forklifts", "High availability", "Cost-effective"],
      popular: true,
    },
    {
      name: "Block Pallet",
      dimensions: '48" x 40"',
      capacity: "5,500 lbs",
      description: "Heavy-duty four-way entry pallet with blocks instead of stringers. Ideal for heavy loads and automated warehouse systems.",
      features: ["4-way forklift entry", "Superior load capacity", "Durable construction", "Reusable design"],
      popular: true,
    },
    {
      name: "Stringer Pallet",
      dimensions: '48" x 40"',
      capacity: "2,200 lbs",
      description: "Traditional pallet design with wooden stringers for support. Cost-effective solution for standard shipping and storage needs.",
      features: ["2-way or partial 4-way entry", "Budget-friendly option", "Easy to repair", "Widely available"],
    },
    {
      name: "Euro Pallet (EUR/EPAL)",
      dimensions: '47.24" x 31.50" (1200x800mm)',
      capacity: "3,300 lbs",
      description: "Standard European pallet certified by EPAL. Essential for international shipping to European markets and global logistics.",
      features: ["EPAL certified", "International standard", "Export ready", "Quality guaranteed"],
    },
    {
      name: "Half Pallet",
      dimensions: '48" x 20"',
      capacity: "1,500 lbs",
      description: "Compact pallet perfect for retail displays, smaller shipments, and point-of-sale applications in stores.",
      features: ["Space efficient", "Retail display ready", "Easy handling", "Store-friendly"],
    },
    {
      name: "Quarter Pallet",
      dimensions: '24" x 20"',
      capacity: "800 lbs",
      description: "Smallest standard pallet size, ideal for retail floor displays, promotional items, and small quantity shipments.",
      features: ["Display optimized", "Promotional use", "Manual handling", "Store aisle compatible"],
    },
    {
      name: "Oversized Pallet",
      dimensions: '60" x 48" / Custom',
      capacity: "Up to 10,000 lbs",
      description: "Large format pallets for oversized cargo, industrial equipment, and specialized heavy machinery transport.",
      features: ["Custom dimensions", "Heavy-duty capacity", "Industrial grade", "Specialized applications"],
    },
    {
      name: "Heat Treated Pallet (ISPM-15)",
      dimensions: "Various sizes",
      capacity: "Varies",
      description: "ISPM-15 certified heat-treated pallets required for international shipping. Guaranteed pest-free for export compliance.",
      features: ["ISPM-15 certified stamp", "Export compliant", "Pest-free guarantee", "Documentation included"],
      popular: true,
    },
    {
      name: "Recycled Pallet",
      dimensions: "Various sizes",
      capacity: "1,500 - 2,500 lbs",
      description: "Eco-friendly reconditioned pallets that meet quality standards. Sustainable choice with significant cost savings.",
      features: ["Environmentally friendly", "Cost savings up to 50%", "Quality inspected", "Sustainable choice"],
    },
    {
      name: "Custom Pallet",
      dimensions: "Your specifications",
      capacity: "Custom",
      description: "Can't find the right size? We manufacture custom pallets to your exact specifications for any unique requirements.",
      features: ["Any dimension available", "Custom load capacity", "Specialized designs", "Fast turnaround"],
    },
  ];

  const benefits = [
    {
      icon: Truck,
      title: "Fast Delivery",
      description: "Same-day delivery available in Houston area",
    },
    {
      icon: Shield,
      title: "Quality Guaranteed",
      description: "All pallets inspected before shipping",
    },
    {
      icon: Clock,
      title: "24hr Quote Response",
      description: "Get your quote within 24 hours",
    },
    {
      icon: Star,
      title: "Volume Discounts",
      description: "Special pricing for bulk orders",
    },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value) => {
    setFormData((prev) => ({ ...prev, pallet_type: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.pallet_type) {
      toast.error("Please fill in all required fields");
      return;
    }

    setIsSubmitting(true);

    try {
      const payload = {
        ...formData,
        quantity: formData.quantity ? parseInt(formData.quantity) : null,
      };

      await axios.post(`${API}/quote`, payload);
      
      toast.success("Quote request submitted successfully! We'll contact you shortly.");
      
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        pallet_type: "",
        quantity: "",
        dimensions: "",
        additional_info: "",
      });
    } catch (error) {
      console.error("Error submitting quote:", error);
      toast.error("Failed to submit quote request. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

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
              Premium Quality
              <br />
              <span className="text-[#22C55E]">Wooden Pallets</span>
            </h1>
            <p className="text-zinc-400 text-base md:text-lg leading-relaxed mb-8">
              From standard GMA pallets to custom configurations, we offer a complete 
              range of high-quality wooden pallets designed to protect your products and 
              optimize your supply chain operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#quote-form">
                <Button
                  data-testid="hero-quote-btn"
                  size="lg"
                  className="bg-[#22C55E] text-black hover:bg-[#22C55E]/90 btn-glow rounded-full px-8 py-6 text-base font-semibold"
                >
                  Get Free Quote
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </a>
              <a href="tel:+17136708118">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-zinc-700 text-white hover:bg-zinc-800 hover:text-white rounded-full px-8 py-6 text-base"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now
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
              Choose from our wide selection of pallet types. All pallets are manufactured 
              with quality lumber and meet industry standards.
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
                <h3 className="text-lg font-semibold text-white mb-2">
                  {pallet.name}
                </h3>
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="text-[#22C55E] font-mono text-xs bg-[#22C55E]/10 px-2 py-1 rounded">
                    {pallet.dimensions}
                  </span>
                  <span className="text-zinc-400 font-mono text-xs bg-zinc-800 px-2 py-1 rounded">
                    {pallet.capacity}
                  </span>
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
                <a href="#quote-form">
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full border-zinc-700 text-white hover:bg-[#22C55E] hover:text-black hover:border-[#22C55E] rounded-full transition-colors"
                  >
                    Request Quote
                  </Button>
                </a>
              </div>
            ))}
          </div>

          {/* Mid-page CTA */}
          <div className="mt-16 bg-gradient-to-r from-[#22C55E]/10 via-[#22C55E]/5 to-transparent border border-[#22C55E]/20 rounded-2xl p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                  Need a Custom Solution?
                </h3>
                <p className="text-zinc-400">
                  We manufacture pallets to your exact specifications. Contact us for custom orders.
                </p>
              </div>
              <div className="flex gap-4">
                <a href="tel:+17136708118">
                  <Button
                    size="lg"
                    className="bg-[#22C55E] text-black hover:bg-[#22C55E]/90 btn-glow rounded-full px-6"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Call Us
                  </Button>
                </a>
                <a href="#quote-form">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-zinc-700 text-white hover:bg-zinc-800 rounded-full px-6"
                  >
                    Get Quote
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Request Form */}
      <section className="py-24 md:py-32 bg-zinc-900/30" id="quote-form">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <span className="text-[#22C55E] text-sm font-medium uppercase tracking-wider mb-4 block">
                Get Started
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight">
                Request a Free Quote
              </h2>
              <p className="text-zinc-400 text-base md:text-lg leading-relaxed mb-8">
                Fill out the form and our team will get back to you with a 
                customized quote within 24 hours. No obligation, no hassle.
              </p>
              
              <div className="bg-zinc-900/50 border border-zinc-800/50 rounded-xl p-6 mb-8">
                <div className="flex items-start gap-3">
                  <Info className="w-5 h-5 text-[#22C55E] flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-white font-semibold mb-2">Volume Discounts Available</h4>
                    <p className="text-zinc-400 text-sm">
                      Orders of 100+ pallets qualify for special pricing. 
                      Contact us for recurring order discounts and long-term partnerships.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#22C55E]" />
                  <span className="text-zinc-300">Free quote within 24 hours</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#22C55E]" />
                  <span className="text-zinc-300">Custom sizes and specifications</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#22C55E]" />
                  <span className="text-zinc-300">Nationwide delivery available</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#22C55E]" />
                  <span className="text-zinc-300">Heat treatment (ISPM-15) certified</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#22C55E]" />
                  <span className="text-zinc-300">Quality guaranteed on all orders</span>
                </div>
              </div>

              {/* Quick Contact */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="tel:+17136708118" className="flex-1">
                  <div className="bg-zinc-800/50 border border-zinc-700 rounded-xl p-4 hover:border-[#22C55E]/50 transition-colors">
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-[#22C55E]" />
                      <div>
                        <p className="text-zinc-500 text-xs">Call us directly</p>
                        <p className="text-white font-semibold">(713) 670-8118</p>
                      </div>
                    </div>
                  </div>
                </a>
                <a href="mailto:sales@gapallet.com" className="flex-1">
                  <div className="bg-zinc-800/50 border border-zinc-700 rounded-xl p-4 hover:border-[#22C55E]/50 transition-colors">
                    <div className="flex items-center gap-3">
                      <ArrowRight className="w-5 h-5 text-[#22C55E]" />
                      <div>
                        <p className="text-zinc-500 text-xs">Email us</p>
                        <p className="text-white font-semibold">sales@gapallet.com</p>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>

            <div>
              <form
                onSubmit={handleSubmit}
                data-testid="quote-form"
                className="bg-zinc-900/50 border border-zinc-800/50 rounded-xl p-6 md:p-8"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-zinc-300">
                      Name <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your name"
                      data-testid="quote-name-input"
                      className="bg-zinc-950 border-zinc-800 focus:border-[#22C55E] h-12"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-zinc-300">
                      Email <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your@email.com"
                      data-testid="quote-email-input"
                      className="bg-zinc-950 border-zinc-800 focus:border-[#22C55E] h-12"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-zinc-300">Phone</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="(xxx) xxx-xxxx"
                      data-testid="quote-phone-input"
                      className="bg-zinc-950 border-zinc-800 focus:border-[#22C55E] h-12"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company" className="text-zinc-300">Company</Label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder="Company name"
                      data-testid="quote-company-input"
                      className="bg-zinc-950 border-zinc-800 focus:border-[#22C55E] h-12"
                    />
                  </div>
                </div>

                <div className="space-y-2 mb-6">
                  <Label className="text-zinc-300">
                    Pallet Type <span className="text-red-500">*</span>
                  </Label>
                  <Select value={formData.pallet_type} onValueChange={handleSelectChange}>
                    <SelectTrigger 
                      data-testid="quote-pallet-type-select" 
                      className="bg-zinc-950 border-zinc-800 focus:border-[#22C55E] h-12"
                    >
                      <SelectValue placeholder="Select pallet type" />
                    </SelectTrigger>
                    <SelectContent className="bg-zinc-900 border-zinc-800">
                      {palletTypes.map((pallet) => (
                        <SelectItem 
                          key={pallet.name} 
                          value={pallet.name}
                          className="text-zinc-300 focus:bg-zinc-800 focus:text-white"
                        >
                          {pallet.name} ({pallet.dimensions})
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="space-y-2">
                    <Label htmlFor="quantity" className="text-zinc-300">Quantity Needed</Label>
                    <Input
                      id="quantity"
                      name="quantity"
                      type="number"
                      value={formData.quantity}
                      onChange={handleInputChange}
                      placeholder="Number of pallets"
                      data-testid="quote-quantity-input"
                      className="bg-zinc-950 border-zinc-800 focus:border-[#22C55E] h-12"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="dimensions" className="text-zinc-300">
                      Custom Dimensions
                    </Label>
                    <Input
                      id="dimensions"
                      name="dimensions"
                      value={formData.dimensions}
                      onChange={handleInputChange}
                      placeholder='e.g., 48" x 40" x 6"'
                      data-testid="quote-dimensions-input"
                      className="bg-zinc-950 border-zinc-800 focus:border-[#22C55E] h-12"
                    />
                  </div>
                </div>

                <div className="space-y-2 mb-8">
                  <Label htmlFor="additional_info" className="text-zinc-300">
                    Additional Requirements
                  </Label>
                  <textarea
                    id="additional_info"
                    name="additional_info"
                    value={formData.additional_info}
                    onChange={handleInputChange}
                    placeholder="Tell us about your specific needs: delivery location, timeline, special requirements..."
                    data-testid="quote-additional-info-input"
                    rows={4}
                    className="w-full bg-zinc-950 border border-zinc-800 focus:border-[#22C55E] rounded-md px-3 py-2 text-white placeholder:text-zinc-500 focus:outline-none focus:ring-1 focus:ring-[#22C55E] resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  data-testid="quote-submit-btn"
                  disabled={isSubmitting}
                  className="w-full bg-[#22C55E] text-black hover:bg-[#22C55E]/90 btn-glow rounded-full py-6 text-base font-semibold"
                >
                  {isSubmitting ? "Submitting..." : "Submit Quote Request"}
                  {!isSubmitting && <ArrowRight className="w-5 h-5 ml-2" />}
                </Button>

                <p className="text-zinc-500 text-xs text-center mt-4">
                  By submitting, you agree to be contacted regarding your quote request.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Prefer to Speak With Someone?
          </h3>
          <p className="text-zinc-400 mb-8">
            Our sales team is ready to help you find the perfect pallet solution. 
            Call us or email directly for immediate assistance.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="tel:+17136708118">
              <Button
                size="lg"
                className="bg-[#22C55E] text-black hover:bg-[#22C55E]/90 btn-glow rounded-full px-8 py-6 text-base font-semibold"
              >
                <Phone className="w-5 h-5 mr-2" />
                (713) 670-8118
              </Button>
            </a>
            <a href="mailto:sales@gapallet.com">
              <Button
                variant="outline"
                size="lg"
                className="border-zinc-700 text-white hover:bg-zinc-800 hover:text-white rounded-full px-8 py-6 text-base"
              >
                sales@gapallet.com
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pallets;
