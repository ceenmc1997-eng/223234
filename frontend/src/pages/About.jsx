import { Link } from "react-router-dom";
import { ArrowRight, Target, Eye, Heart, Users, Award, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Precision",
      description: "Every pallet is manufactured to exact specifications, ensuring consistent quality across all orders.",
    },
    {
      icon: Heart,
      title: "Integrity",
      description: "We build lasting relationships through honest communication and reliable service.",
    },
    {
      icon: TrendingUp,
      title: "Innovation",
      description: "Continuously improving our processes and investing in cutting-edge machinery.",
    },
    {
      icon: Users,
      title: "Partnership",
      description: "We see ourselves as an extension of your team, dedicated to your success.",
    },
  ];

  const milestones = [
    { year: "Founded", description: "G&A Pallet established in Houston, Texas" },
    { year: "Growth", description: "Expanded operations to serve nationwide clients" },
    { year: "Innovation", description: "Invested in Champion QC306 & Wood-Mizer equipment" },
    { year: "Today", description: "Serving 500+ businesses with premium pallet solutions" },
  ];

  return (
    <div data-testid="about-page" className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <span className="text-[#22C55E] text-sm font-medium uppercase tracking-wider mb-4 block">
                About Us
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight leading-[1.1]">
                Built on Quality,
                <br />
                <span className="text-[#22C55E]">Driven by Excellence</span>
              </h1>
              <p className="text-zinc-400 text-base md:text-lg leading-relaxed mb-8">
                G&A Pallet is a Houston-based company specializing in premium pallet 
                solutions for businesses across the United States. We combine traditional 
                craftsmanship with modern technology to deliver products that exceed 
                industry standards.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact">
                  <Button
                    data-testid="about-contact-btn"
                    className="bg-[#22C55E] text-black hover:bg-[#22C55E]/90 btn-glow rounded-full px-6"
                  >
                    Get in Touch
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
                <Link to="/services">
                  <Button
                    variant="outline"
                    className="border-zinc-700 text-white hover:bg-zinc-800 hover:text-white rounded-full px-6"
                    data-testid="about-services-btn"
                  >
                    Our Services
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-[#22C55E]/10 rounded-2xl blur-2xl" />
              <div className="relative img-zoom rounded-xl overflow-hidden border border-zinc-800">
                <img
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1000&q=80"
                  alt="Industrial operations"
                  className="w-full aspect-[4/3] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 md:py-32 bg-zinc-900/30">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div
              data-testid="mission-card"
              className="bg-zinc-900/50 border border-zinc-800/50 rounded-xl p-8 md:p-10"
            >
              <div className="w-14 h-14 bg-zinc-800 rounded-xl flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-[#22C55E]" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
              <p className="text-zinc-400 leading-relaxed">
                To provide the highest quality pallet solutions that help businesses 
                protect their products and optimize their supply chain operations. 
                We are committed to exceeding customer expectations through superior 
                products, reliable service, and competitive pricing.
              </p>
            </div>
            <div
              data-testid="vision-card"
              className="bg-zinc-900/50 border border-zinc-800/50 rounded-xl p-8 md:p-10"
            >
              <div className="w-14 h-14 bg-zinc-800 rounded-xl flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-[#22C55E]" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
              <p className="text-zinc-400 leading-relaxed">
                To be the leading pallet manufacturer in the United States, recognized 
                for our commitment to quality, innovation, and customer satisfaction. 
                We envision a future where every business has access to reliable, 
                sustainable pallet solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <span className="text-[#22C55E] text-sm font-medium uppercase tracking-wider mb-4 block">
              Our Values
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight">
              What Drives Us Forward
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={value.title}
                data-testid={`value-card-${index}`}
                className="bg-zinc-900/50 border border-zinc-800/50 rounded-xl p-6 card-hover text-center"
              >
                <div className="w-14 h-14 bg-zinc-800 rounded-xl flex items-center justify-center mx-auto mb-5">
                  <value.icon className="w-7 h-7 text-[#22C55E]" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">
                  {value.title}
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-24 md:py-32 bg-zinc-900/30">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <span className="text-[#22C55E] text-sm font-medium uppercase tracking-wider mb-4 block">
                Our Journey
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight">
                Growing Together
              </h2>
              <p className="text-zinc-400 text-base md:text-lg leading-relaxed mb-8">
                From our humble beginnings in Houston, we've grown into a trusted 
                partner for businesses across the nation. Our journey is marked by 
                continuous improvement and unwavering commitment to our customers.
              </p>
            </div>
            <div className="space-y-6">
              {milestones.map((milestone, index) => (
                <div
                  key={milestone.year}
                  data-testid={`milestone-${index}`}
                  className="flex items-start gap-4"
                >
                  <div className="flex-shrink-0 w-20 text-right">
                    <span className="text-[#22C55E] font-mono font-semibold">
                      {milestone.year}
                    </span>
                  </div>
                  <div className="flex-shrink-0 w-px h-full bg-zinc-700 relative">
                    <div className="absolute top-2 left-1/2 -translate-x-1/2 w-3 h-3 bg-[#22C55E] rounded-full" />
                  </div>
                  <div className="pb-6">
                    <p className="text-zinc-300">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div
              data-testid="stat-card-0"
              className="bg-zinc-900/50 border border-zinc-800/50 rounded-xl p-8 text-center"
            >
              <Award className="w-10 h-10 text-[#22C55E] mx-auto mb-4" />
              <div className="text-4xl font-bold text-white mb-2">15+</div>
              <p className="text-zinc-400">Years of Experience</p>
            </div>
            <div
              data-testid="stat-card-1"
              className="bg-zinc-900/50 border border-zinc-800/50 rounded-xl p-8 text-center"
            >
              <Users className="w-10 h-10 text-[#22C55E] mx-auto mb-4" />
              <div className="text-4xl font-bold text-white mb-2">500+</div>
              <p className="text-zinc-400">Satisfied Clients</p>
            </div>
            <div
              data-testid="stat-card-2"
              className="bg-zinc-900/50 border border-zinc-800/50 rounded-xl p-8 text-center"
            >
              <TrendingUp className="w-10 h-10 text-[#22C55E] mx-auto mb-4" />
              <div className="text-4xl font-bold text-white mb-2">10K+</div>
              <p className="text-zinc-400">Pallets Monthly</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32 relative overflow-hidden bg-zinc-900/30">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#22C55E]/5 rounded-full blur-[80px]" />
        
        <div className="relative max-w-4xl mx-auto px-6 md:px-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight">
            Ready to Partner With Us?
          </h2>
          <p className="text-zinc-400 text-base md:text-lg mb-10">
            Join hundreds of businesses that trust G&A Pallet for their logistics needs.
          </p>
          <Link to="/contact">
            <Button
              data-testid="about-cta-btn"
              size="lg"
              className="bg-[#22C55E] text-black hover:bg-[#22C55E]/90 btn-glow rounded-full px-8 py-6 text-base font-semibold"
            >
              Contact Our Team
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
