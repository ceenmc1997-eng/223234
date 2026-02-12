import { Link } from "react-router-dom";
import { ArrowRight, Target, Eye, Heart, Users, Award, TrendingUp, Building, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Family Values",
      description: "As a family-owned business since 1998, we treat every client like family with personalized service and care.",
    },
    {
      icon: Target,
      title: "Quality First",
      description: "We strive in giving our clients the guarantee of providing the highest quality materials in every order.",
    },
    {
      icon: TrendingUp,
      title: "Industry Expertise",
      description: "With more than 25 years in the industry, we bring unmatched experience and knowledge to every project.",
    },
    {
      icon: Users,
      title: "Client Partnership",
      description: "Our goal is to help simplify our client's needs, whether your business needs pallets or a retrieval program.",
    },
  ];

  const milestones = [
    { year: "1998", description: "G&A Pallet founded as a family-owned business in Houston, Texas" },
    { year: "2005", description: "Expanded operations and invested in Champion QC306 pallet nailer" },
    { year: "2015", description: "Added Wood-Mizer HR100 resaw and grew nationwide delivery capabilities" },
    { year: "Today", description: "25+ years serving businesses with premium pallet solutions across the USA" },
  ];

  return (
    <div data-testid="about-page" className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <span className="text-[#22C55E] text-sm font-medium uppercase tracking-wider mb-4 block">
                Our Company
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight leading-[1.1]">
                G&A
                <br />
                <span className="text-[#22C55E]">PALLET</span>
              </h1>
              <p className="text-zinc-400 text-base md:text-lg leading-relaxed mb-6">
                G&A Pallet is a family owned and operating business since 1998. With more 
                than 25 years in the industry, our company is specialized in supplying wooden pallets.
              </p>
              <p className="text-zinc-400 text-base md:text-lg leading-relaxed mb-8">
                We offer and satisfy the demand of the pallet industry, with a wide portfolio 
                of new and used pallet materials, crates and pallet solutions. Our company 
                doesn't only manufacture but we strive in giving our clients the guarantee 
                of providing the highest quality materials.
              </p>
              <div className="flex items-center gap-4 mb-8">
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-[#22C55E]" />
                  <span className="text-white font-semibold">Est. 1998</span>
                </div>
                <div className="w-px h-6 bg-zinc-700" />
                <div className="flex items-center gap-2">
                  <Building className="w-5 h-5 text-[#22C55E]" />
                  <span className="text-white font-semibold">Family Owned</span>
                </div>
              </div>
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
                  src="https://images.unsplash.com/photo-1706027554815-ae587412dbef?auto=format&fit=crop&w=1000&q=80"
                  alt="G&A Pallet warehouse with wooden pallets"
                  className="w-full aspect-[4/3] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Goal Section */}
      <section className="py-16 md:py-24 bg-zinc-900/30">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-[#22C55E] text-sm font-medium uppercase tracking-wider mb-4 block">
              Our Goal
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight">
              Here to Serve You
            </h2>
            <p className="text-zinc-400 text-lg leading-relaxed">
              Our goal here at G&A Pallet is to help simplify our client's needs. Whether 
              your business is in need of pallets or a retrieval pallet program, we are 
              here to serve you. We understand that every business has unique requirements, 
              and we're committed to finding the perfect solution for your company.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 md:py-32">
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
                As a family-owned business, we are committed to exceeding customer 
                expectations through superior products, reliable service, and 
                competitive pricing built on trust and integrity.
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
                To be the trusted partner for businesses across the United States, 
                recognized for our commitment to quality, family values, and customer 
                satisfaction. We envision continued growth while maintaining the 
                personalized service that has defined G&A Pallet for over 25 years.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-24 md:py-32 bg-zinc-900/30">
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
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <span className="text-[#22C55E] text-sm font-medium uppercase tracking-wider mb-4 block">
                Our Journey
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight">
                25+ Years of Excellence
              </h2>
              <p className="text-zinc-400 text-base md:text-lg leading-relaxed mb-8">
                From our humble beginnings as a family business in Houston in 1998, 
                we've grown into a trusted partner for businesses across the nation. 
                Our journey is marked by continuous improvement, investment in quality 
                equipment, and an unwavering commitment to our customers.
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

      {/* Stats Section */}
      <section className="py-24 md:py-32 bg-zinc-900/30">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div
              data-testid="stat-card-0"
              className="bg-zinc-900/50 border border-zinc-800/50 rounded-xl p-8 text-center"
            >
              <Award className="w-10 h-10 text-[#22C55E] mx-auto mb-4" />
              <div className="text-4xl font-bold text-white mb-2">25+</div>
              <p className="text-zinc-400">Years in Business</p>
              <p className="text-zinc-500 text-sm mt-2">Family owned since 1998</p>
            </div>
            <div
              data-testid="stat-card-1"
              className="bg-zinc-900/50 border border-zinc-800/50 rounded-xl p-8 text-center"
            >
              <Users className="w-10 h-10 text-[#22C55E] mx-auto mb-4" />
              <div className="text-4xl font-bold text-white mb-2">500+</div>
              <p className="text-zinc-400">Satisfied Clients</p>
              <p className="text-zinc-500 text-sm mt-2">Across the United States</p>
            </div>
            <div
              data-testid="stat-card-2"
              className="bg-zinc-900/50 border border-zinc-800/50 rounded-xl p-8 text-center"
            >
              <TrendingUp className="w-10 h-10 text-[#22C55E] mx-auto mb-4" />
              <div className="text-4xl font-bold text-white mb-2">10K+</div>
              <p className="text-zinc-400">Pallets Monthly</p>
              <p className="text-zinc-500 text-sm mt-2">New and recycled options</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#22C55E]/5 rounded-full blur-[80px]" />
        
        <div className="relative max-w-4xl mx-auto px-6 md:px-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight">
            Ready to Partner With Us?
          </h2>
          <p className="text-zinc-400 text-base md:text-lg mb-10">
            Join hundreds of businesses that trust G&A Pallet for their logistics needs. 
            Let us help simplify your pallet requirements.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
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

export default About;
