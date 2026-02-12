import { useState, useEffect } from "react";
import { MapPin, Phone, Mail, Clock, ArrowRight, CheckCircle, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import axios from "axios";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

// Fix for default marker icon
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

// Custom green marker
const greenIcon = new L.Icon({
  iconUrl: "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png",
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // G&A Pallet coordinates
  const position = [29.742314, -95.269826];

  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      content: "8827 Clinton Dr",
      subcontent: "Houston, TX 77029",
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
      content: "Mon - Fri: 9am - 5pm",
      subcontent: "Saturday: 10am - 2pm",
    },
  ];

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
            <p className="text-zinc-400 text-base md:text-lg leading-relaxed">
              Have questions about our products or services? Ready to place an order? 
              Our team is here to help you find the perfect pallet solution for your business.
            </p>
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
                data-testid="contact-map"
                className="rounded-xl overflow-hidden border border-zinc-800 h-[400px] lg:h-[500px]"
              >
                <MapContainer
                  center={position}
                  zoom={15}
                  scrollWheelZoom={false}
                  style={{ height: "100%", width: "100%" }}
                >
                  <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />
                  <Marker position={position} icon={greenIcon}>
                    <Popup>
                      <div className="text-center">
                        <strong>G&A Pallet</strong>
                        <br />
                        8827 Clinton Dr
                        <br />
                        Houston, TX 77029
                      </div>
                    </Popup>
                  </Marker>
                </MapContainer>
              </div>
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
