import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Package, CheckCircle, Info } from "lucide-react";
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
      dimensions: "48\" x 40\"",
      description: "The most common pallet size in North America. Ideal for grocery, retail, and general freight.",
      features: ["Industry standard", "Compatible with most racking", "High availability"],
    },
    {
      name: "Block Pallet",
      dimensions: "48\" x 40\"",
      description: "Four-way entry pallet with blocks instead of stringers. Offers superior strength and durability.",
      features: ["4-way entry", "Heavy-duty capacity", "Reusable design"],
    },
    {
      name: "Stringer Pallet",
      dimensions: "48\" x 40\"",
      description: "Traditional pallet design with stringers for support. Cost-effective and widely used.",
      features: ["2-way or partial 4-way", "Cost-effective", "Easy to repair"],
    },
    {
      name: "Euro Pallet",
      dimensions: "47.24\" x 31.50\"",
      description: "Standard European pallet size. Perfect for international shipping to European markets.",
      features: ["EPAL certified", "International standard", "Export ready"],
    },
    {
      name: "Custom Pallet",
      dimensions: "Custom",
      description: "Can't find the right size? We manufacture custom pallets to your exact specifications.",
      features: ["Any dimension", "Custom load capacity", "Specialized designs"],
    },
    {
      name: "Heat Treated Pallet",
      dimensions: "Various",
      description: "ISPM-15 certified heat-treated pallets for international shipping compliance.",
      features: ["ISPM-15 certified", "Export compliant", "Pest-free guarantee"],
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
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="max-w-3xl">
            <span className="text-[#22C55E] text-sm font-medium uppercase tracking-wider mb-4 block">
              Our Products
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight leading-[1.1]">
              Premium
              <br />
              <span className="text-[#22C55E]">Pallet Solutions</span>
            </h1>
            <p className="text-zinc-400 text-base md:text-lg leading-relaxed">
              From standard GMA pallets to custom configurations, we offer a complete 
              range of high-quality pallets designed to protect your products and 
              optimize your supply chain.
            </p>
          </div>
        </div>
      </section>

      {/* Pallet Types */}
      <section className="py-16 md:py-24 bg-zinc-900/30">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <span className="text-[#22C55E] text-sm font-medium uppercase tracking-wider mb-4 block">
              Product Catalog
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight">
              Pallet Types
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {palletTypes.map((pallet, index) => (
              <div
                key={pallet.name}
                data-testid={`pallet-type-${index}`}
                className="bg-zinc-900/50 border border-zinc-800/50 rounded-xl p-6 card-hover group"
              >
                <div className="w-12 h-12 bg-zinc-800 rounded-lg flex items-center justify-center mb-5 group-hover:bg-[#22C55E]/10 transition-colors">
                  <Package className="w-6 h-6 text-[#22C55E]" />
                </div>
                <div className="flex items-center gap-3 mb-3">
                  <h3 className="text-lg font-semibold text-white">
                    {pallet.name}
                  </h3>
                </div>
                <span className="text-[#22C55E] font-mono text-sm mb-3 block">
                  {pallet.dimensions}
                </span>
                <p className="text-zinc-400 text-sm leading-relaxed mb-5">
                  {pallet.description}
                </p>
                <ul className="space-y-2">
                  {pallet.features.map((feature) => (
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

      {/* Quote Request Form */}
      <section className="py-24 md:py-32" id="quote-form">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <span className="text-[#22C55E] text-sm font-medium uppercase tracking-wider mb-4 block">
                Get Started
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight">
                Request a Quote
              </h2>
              <p className="text-zinc-400 text-base md:text-lg leading-relaxed mb-8">
                Fill out the form below and our team will get back to you with a 
                customized quote within 24 hours. We're here to help you find the 
                perfect pallet solution for your needs.
              </p>
              
              <div className="bg-zinc-900/50 border border-zinc-800/50 rounded-xl p-6 mb-8">
                <div className="flex items-start gap-3">
                  <Info className="w-5 h-5 text-[#22C55E] flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-white font-semibold mb-2">Volume Discounts Available</h4>
                    <p className="text-zinc-400 text-sm">
                      Contact us for special pricing on large orders. We offer competitive 
                      rates for recurring orders and long-term partnerships.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#22C55E]" />
                  <span className="text-zinc-300">Free quote within 24 hours</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#22C55E]" />
                  <span className="text-zinc-300">Custom sizes available</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#22C55E]" />
                  <span className="text-zinc-300">Nationwide delivery</span>
                </div>
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
                          {pallet.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="space-y-2">
                    <Label htmlFor="quantity" className="text-zinc-300">Quantity</Label>
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
                      placeholder="e.g., 48 x 40 x 6"
                      data-testid="quote-dimensions-input"
                      className="bg-zinc-950 border-zinc-800 focus:border-[#22C55E] h-12"
                    />
                  </div>
                </div>

                <div className="space-y-2 mb-8">
                  <Label htmlFor="additional_info" className="text-zinc-300">
                    Additional Information
                  </Label>
                  <textarea
                    id="additional_info"
                    name="additional_info"
                    value={formData.additional_info}
                    onChange={handleInputChange}
                    placeholder="Tell us more about your requirements..."
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
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Email CTA */}
      <section className="py-16 md:py-24 bg-zinc-900/30">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Prefer to Email Directly?
          </h3>
          <p className="text-zinc-400 mb-6">
            Send your quote request to our sales team and we'll respond within 24 hours.
          </p>
          <a
            href="mailto:sales@gapallet.com?subject=Quote Request"
            data-testid="email-sales-link"
            className="inline-flex items-center gap-2 text-[#22C55E] hover:text-[#22C55E]/80 transition-colors font-semibold text-lg"
          >
            sales@gapallet.com
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default Pallets;
