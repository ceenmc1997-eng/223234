import { useState, useEffect, useRef } from "react";
import { MapPin, Phone, Mail, Clock, ArrowRight, Send, FileText, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import axios from "axios";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const Contact = () => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // G&A Pallet coordinates
  const lng = -95.269826;
  const lat = 29.742314;

  useEffect(() => {
    if (map.current) return;

    map.current = new maplibregl.Map({
      container: mapContainer.current,
      style: {
        version: 8,
        sources: {
          "carto-dark": {
            type: "raster",
            tiles: [
              "https://a.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}@2x.png",
              "https://b.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}@2x.png",
              "https://c.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}@2x.png",
            ],
            tileSize: 256,
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
          },
        },
        layers: [
          {
            id: "carto-dark-layer",
            type: "raster",
            source: "carto-dark",
            minzoom: 0,
            maxzoom: 22,
          },
        ],
      },
      center: [lng, lat],
      zoom: 14,
    });

    // Add navigation controls
    map.current.addControl(new maplibregl.NavigationControl(), "top-left");

    // Create custom marker element
    const markerEl = document.createElement("div");
    markerEl.innerHTML = `
      <div style="
        width: 40px;
        height: 40px;
        background: #22C55E;
        border-radius: 50% 50% 50% 0;
        transform: rotate(-45deg);
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 4px 20px rgba(34, 197, 94, 0.4);
      ">
        <div style="
          width: 16px;
          height: 16px;
          background: white;
          border-radius: 50%;
          transform: rotate(45deg);
        "></div>
      </div>
    `;

    // Add marker
    new maplibregl.Marker({ element: markerEl })
      .setLngLat([lng, lat])
      .setPopup(
        new maplibregl.Popup({ offset: 25, className: "dark-popup" }).setHTML(`
          <div style="padding: 8px; color: #000;">
            <strong>G&A Pallet</strong><br/>
            8827 Clinton Dr<br/>
            Houston, TX 77029
          </div>
        `)
      )
      .addTo(map.current);

    return () => {
      if (map.current) {
        map.current.remove();
        map.current = null;
      }
    };
  }, []);

  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      content: "8827 Clinton Dr",
      subcontent: "Houston, TX 77029, USA",
      link: "https://maps.google.com/?q=8827+Clinton+Dr,+Houston,+TX+77029",
    },
    {
      icon: Phone,
      title: "Phone",
      content: "(713) 670-8118",
      link: "tel:+17136708118",
    },
    {
      icon: Mail,
      title: "Email",
      content: "sales@gapallet.com",
      link: "mailto:sales@gapallet.com",
    },
    {
      icon: Clock,
      title: "Business Hours",
      content: "Mon - Fri: 8am - 5pm",
      subcontent: "Sat - Sun: Closed",
    },
  ];

  // Check if business is currently open (Houston timezone - Central Time)
  const getBusinessStatus = () => {
    const now = new Date();
    const houstonTime = new Date(now.toLocaleString("en-US", { timeZone: "America/Chicago" }));
    const day = houstonTime.getDay(); // 0 = Sunday, 6 = Saturday
    const hour = houstonTime.getHours();
    const minutes = houstonTime.getMinutes();
    
    // Closed on weekends (Saturday = 6, Sunday = 0)
    if (day === 0 || day === 6) {
      return { isOpen: false, message: "Closed", nextOpen: day === 6 ? "Opens Monday 8am" : "Opens Tomorrow 8am" };
    }
    
    // Open Monday-Friday 8am-5pm
    if (hour >= 8 && hour < 17) {
      const closeTime = 17 - hour;
      return { isOpen: true, message: "Open Now", closesIn: `Closes in ${closeTime}h` };
    }
    
    // Before 8am on weekday
    if (hour < 8) {
      return { isOpen: false, message: "Closed", nextOpen: `Opens today at 8am` };
    }
    
    // After 5pm on weekday
    if (day === 5) { // Friday
      return { isOpen: false, message: "Closed", nextOpen: "Opens Monday 8am" };
    }
    
    return { isOpen: false, message: "Closed", nextOpen: "Opens tomorrow 8am" };
  };

  const [businessStatus, setBusinessStatus] = useState(getBusinessStatus());

  useEffect(() => {
    const interval = setInterval(() => {
      setBusinessStatus(getBusinessStatus());
    }, 60000); // Update every minute
    
    return () => clearInterval(interval);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all required fields");
      return;
    }

    setIsSubmitting(true);

    try {
      await axios.post(`${API}/contact`, formData);
      
      toast.success("Message sent successfully! We'll get back to you soon.");
      
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        message: "",
      });
    } catch (error) {
      console.error("Error submitting contact form:", error);
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div data-testid="contact-page" className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="max-w-3xl">
            <span className="text-[#22C55E] text-sm font-medium uppercase tracking-wider mb-4 block">
              Contact Us
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight leading-[1.1]">
              Let's Work
              <br />
              <span className="text-[#22C55E]">Together</span>
            </h1>
            <p className="text-zinc-400 text-base md:text-lg leading-relaxed mb-6">
              Have questions about our products or services? Ready to place an order? 
              Our team is here to help you find the perfect pallet solution for your business.
            </p>
            {/* Business Status Indicator */}
            <div className="inline-flex items-center gap-3 bg-zinc-900/50 border border-zinc-800 rounded-full px-4 py-2">
              <span className={`w-2.5 h-2.5 rounded-full ${businessStatus.isOpen ? 'bg-[#22C55E] animate-pulse' : 'bg-red-500'}`} />
              <span className={`font-medium ${businessStatus.isOpen ? 'text-[#22C55E]' : 'text-red-400'}`}>
                {businessStatus.message}
              </span>
              <span className="text-zinc-500 text-sm">
                • {businessStatus.isOpen ? businessStatus.closesIn : businessStatus.nextOpen}
              </span>
              <span className="text-zinc-600 text-xs">(CST)</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <div
                key={info.title}
                data-testid={`contact-info-${index}`}
                className="bg-zinc-900/50 border border-zinc-800/50 rounded-xl p-6 card-hover"
              >
                <div className="w-12 h-12 bg-zinc-800 rounded-lg flex items-center justify-center mb-4">
                  <info.icon className="w-6 h-6 text-[#22C55E]" />
                </div>
                <h3 className="text-zinc-500 text-sm uppercase tracking-wider mb-2">
                  {info.title}
                </h3>
                {info.link ? (
                  <a
                    href={info.link}
                    target={info.title === "Address" ? "_blank" : undefined}
                    rel={info.title === "Address" ? "noopener noreferrer" : undefined}
                    className="text-white hover:text-[#22C55E] transition-colors"
                  >
                    <p className="font-medium">{info.content}</p>
                    {info.subcontent && (
                      <p className="text-zinc-400 text-sm mt-1">{info.subcontent}</p>
                    )}
                  </a>
                ) : (
                  <>
                    <p className="text-white font-medium">{info.content}</p>
                    {info.subcontent && (
                      <p className="text-zinc-400 text-sm mt-1">{info.subcontent}</p>
                    )}
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map & Form Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Map */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                Our Location
              </h2>
              <div
                ref={mapContainer}
                data-testid="contact-map"
                className="rounded-xl overflow-hidden border border-zinc-800 h-[400px] lg:h-[500px]"
              />
              <div className="mt-6 flex flex-wrap gap-4">
                <a
                  href="https://maps.google.com/?q=8827+Clinton+Dr,+Houston,+TX+77029"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="get-directions-link"
                >
                  <Button
                    variant="outline"
                    className="border-zinc-700 text-white hover:bg-zinc-800 hover:text-white rounded-full"
                  >
                    <MapPin className="w-4 h-4 mr-2" />
                    Get Directions
                  </Button>
                </a>
                <a href="tel:+17136708118">
                  <Button
                    className="bg-[#22C55E] text-black hover:bg-[#22C55E]/90 btn-glow rounded-full"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Call Now
                  </Button>
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                Send Us a Message
              </h2>
              <form
                onSubmit={handleSubmit}
                data-testid="contact-form"
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
                      data-testid="contact-name-input"
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
                      data-testid="contact-email-input"
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
                      data-testid="contact-phone-input"
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
                      data-testid="contact-company-input"
                      className="bg-zinc-950 border-zinc-800 focus:border-[#22C55E] h-12"
                    />
                  </div>
                </div>

                <div className="space-y-2 mb-8">
                  <Label htmlFor="message" className="text-zinc-300">
                    Message <span className="text-red-500">*</span>
                  </Label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="How can we help you?"
                    data-testid="contact-message-input"
                    rows={5}
                    className="w-full bg-zinc-950 border border-zinc-800 focus:border-[#22C55E] rounded-md px-3 py-3 text-white placeholder:text-zinc-500 focus:outline-none focus:ring-1 focus:ring-[#22C55E] resize-none"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  data-testid="contact-submit-btn"
                  disabled={isSubmitting}
                  className="w-full bg-[#22C55E] text-black hover:bg-[#22C55E]/90 btn-glow rounded-full py-6 text-base font-semibold"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                  {!isSubmitting && <Send className="w-5 h-5 ml-2" />}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Brochure Download Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="bg-gradient-to-r from-[#22C55E]/10 via-[#22C55E]/5 to-transparent border border-[#22C55E]/20 rounded-2xl p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-[#22C55E]/10 rounded-xl flex items-center justify-center">
                    <FileText className="w-6 h-6 text-[#22C55E]" />
                  </div>
                  <span className="text-[#22C55E] text-sm font-mono uppercase tracking-wider">
                    Company Brochure
                  </span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Become a G&A Pallet Customer
                </h3>
                <p className="text-zinc-400 leading-relaxed mb-6">
                  Download our company brochure to learn more about our services, 
                  Total Pallet Management (TPM) program, and get the forms needed 
                  to register as a new customer or vendor.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2 text-sm text-zinc-300">
                    <span className="w-1.5 h-1.5 bg-[#22C55E] rounded-full" />
                    Company information & history
                  </li>
                  <li className="flex items-center gap-2 text-sm text-zinc-300">
                    <span className="w-1.5 h-1.5 bg-[#22C55E] rounded-full" />
                    TPM program details
                  </li>
                  <li className="flex items-center gap-2 text-sm text-zinc-300">
                    <span className="w-1.5 h-1.5 bg-[#22C55E] rounded-full" />
                    New account registration forms
                  </li>
                  <li className="flex items-center gap-2 text-sm text-zinc-300">
                    <span className="w-1.5 h-1.5 bg-[#22C55E] rounded-full" />
                    Credit application
                  </li>
                </ul>
                <a 
                  href="/gapallet-brochure.pdf" 
                  download="GA-Pallet-Brochure.pdf"
                  data-testid="download-brochure-btn"
                >
                  <Button
                    size="lg"
                    className="bg-[#22C55E] text-black hover:bg-[#22C55E]/90 btn-glow rounded-full px-8"
                  >
                    <Download className="w-5 h-5 mr-2" />
                    Download Brochure (PDF)
                  </Button>
                </a>
              </div>
              <div className="hidden lg:block">
                <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6">
                  <div className="aspect-[8.5/11] bg-zinc-950 rounded-lg flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#22C55E]/5 to-transparent" />
                    <div className="text-center z-10">
                      <FileText className="w-16 h-16 text-[#22C55E]/50 mx-auto mb-4" />
                      <p className="text-white font-bold text-lg">G&A PALLET</p>
                      <p className="text-zinc-400 text-sm">Company Brochure</p>
                      <p className="text-zinc-500 text-xs mt-2">PDF • 10 Pages</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact CTA */}
      <section className="py-16 md:py-24 bg-zinc-900/30">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Need Immediate Assistance?
          </h3>
          <p className="text-zinc-400 mb-8">
            Call us directly or send an email. Our team responds within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="tel:+17136708118">
              <Button
                data-testid="contact-call-btn"
                size="lg"
                className="bg-[#22C55E] text-black hover:bg-[#22C55E]/90 btn-glow rounded-full px-8 py-6 text-base font-semibold"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call (713) 670-8118
              </Button>
            </a>
            <a href="mailto:sales@gapallet.com">
              <Button
                data-testid="contact-email-btn"
                variant="outline"
                size="lg"
                className="border-zinc-700 text-white hover:bg-zinc-800 hover:text-white rounded-full px-8 py-6 text-base"
              >
                <Mail className="w-5 h-5 mr-2" />
                Email Us
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
