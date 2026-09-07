import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle, Shield, Globe, Award, Users, FlaskConical, TrendingUp, Phone } from "lucide-react";
import ScrollingProducts from "@/components/ScrollingProducts";
import ProductCategories from "@/components/ProductCategories";
const stats = [
  { value: "300+", label: "Products", sub: "Across all categories" },
  { value: "20+", label: "Years", sub: "Of pharmaceutical excellence" },
  { value: "15+", label: "States", sub: "Pan-India distribution" },
  { value: "500+", label: "Partners", sub: "Franchise network" },
];

const ticker = [
  "DCGI Approved",
  "ISO 9001:2015",
  "Pan-India Distribution",
  "300+ Products",
  "Trusted Since 2006",
  "Pharma Business opportunity Available",
  "Third Party Manufacturing",
];


const strengths = [
  { icon: Shield, title: "GMP Certified", desc: "Every product manufactured in a GMP-certified plant under strict quality protocols." },
  { icon: FlaskConical, title: "R&D Focused", desc: "Continuous investment in research to develop better, effective formulations." },
  { icon: Globe, title: "Pan-India Reach", desc: "Distribution network covering 15+ states with reliable supply chain management." },
  { icon: TrendingUp, title: "High Margins", desc: "Attractive profit margins for Pharma Business partners with monopoly rights." },
  { icon: Award, title: "DCGI Approved", desc: "All products are approved by the Drugs Controller General of India." },
  { icon: Users, title: "Dedicated Support", desc: "On-ground marketing support, visual aids, and training for all partners." },
];

const testimonials = [
  { name: "Dr. Rajesh Sharma", role: "Medical Practitioner", city: "Jaipur", quote: "Shrejee Pharma products are of consistently high quality. My patients respond very well to their formulations. Highly recommended.", rating: 5 },
  { name: "Rakesh pandey", role: "Business Partner", city: "Mumbai", quote: "The margins are excellent and the support team is very responsive. Running my pharma business has never been this easy.", rating: 5 },
  { name: "Sandeep Mehta", role: "Wholesale Distributor", city: "Ahmedabad", quote: "Reliable, timely delivery and genuine certifications. Shrejee Pharma is one of the best companies I have worked with.", rating: 5 },
];

export default function HomePage() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="relative min-h-screen bg-white overflow-hidden flex items-center">
        {/* Purple side panel */}
        <div className="absolute top-0 right-0 w-1/2 h-full hidden lg:block">
          {/* Hero image */}
          <div className="absolute inset-0 flex items-center justify-center">
            <Image
              src="/images/hero-medicines.jpg"
              alt="Pharmaceutical Medicines"
              fill
              priority
              className="object-cover opacity-90 "
            />
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full py-24">
          <div className="max-w-xl">
            <div className="section-label mb-4">🏆 India&apos;s Trusted Pharma Company</div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 leading-[1.05] mb-6 tracking-tight">
              Better Medicine,<br />
              <span className="text-[#9b2c8c]">Better</span>{" "}
              <span className="text-[#6fa832]">Lives.</span>
            </h1>
            <p className="text-gray-500 text-lg leading-relaxed mb-8 max-w-md">
              Shrejee Pharmaceuticals manufactures and markets a wide range of quality-certified medicines across India — from tablets to injectables, all under one trusted roof.
            </p>
            <div className="flex flex-wrap gap-4 mb-12">
              <Link href="/products" className="btn-primary">
                Explore Products <ArrowRight size={16} />
              </Link>
              <Link href="/contact" className="flex items-center gap-2 px-8 py-3.5 rounded border-2 border-gray-200 text-gray-700 font-semibold text-sm hover:border-[#9b2c8c] hover:text-[#9b2c8c] uppercase tracking-wide">
                <Phone size={16} /> Contact Us
              </Link>
            </div>
            {/* Mini stats */}
            <div className="grid grid-cols-4 gap-4 border-t border-gray-100 pt-8">
              {stats.map((s) => (
                <div key={s.label}>
                  <div className="text-2xl font-black text-[#9b2c8c]">{s.value}</div>
                  <div className="text-xs font-semibold text-gray-400 uppercase tracking-wide">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Diagonal divider for mobile */}
        <div className="lg:hidden absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-gray-50" />
      </section>

      {/* ===== SCROLLING TICKER ===== */}
      <div className="bg-[#9b2c8c] py-4 overflow-hidden">
        <div className="ticker-track">
          {[...ticker, ...ticker].map((item, i) => (
            <span key={i} className="flex items-center gap-3 px-8 text-white font-semibold text-sm whitespace-nowrap">
              <span className="w-1.5 h-1.5 bg-[#8fc34b] rounded-full" />
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* ===== ABOUT SECTION ===== */}
      <section className="section-py bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left — image card stack */}
            <div className="relative">
              {/* Main image */}
              <div className="w-full h-[480px] bg-gray-100 rounded-2xl overflow-hidden relative">
                <Image
                  src="/images/manufacturing-facility.jpg"
                  alt="Manufacturing Facility"
                  fill
                  className="object-cover"
                />
                {/* Purple accent stripe */}
                <div className="absolute left-0 top-0 bottom-0 w-1.5 z-10 bg-[#9b2c8c]" />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-6 -right-6 bg-[#9b2c8c] text-white rounded-xl p-5 shadow-2xl">
                <div className="text-3xl font-black">20+</div>
                <div className="text-xs text-purple-200 font-medium uppercase tracking-wide">Years of Excellence</div>
              </div>
              {/* Green accent */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#6fa832]/10 rounded-2xl border-2 border-[#6fa832]/20" />
            </div>

            {/* Right — content */}
            <div>
              <div className="section-label mb-3">About Shrejee Pharma</div>
              <h2 className="section-heading text-gray-900 mb-6">
                20+ Years of Pharmaceutical Excellence
              </h2>
              <div className="w-16 h-1 bg-[#9b2c8c] mb-6" />
              <p className="text-gray-500 leading-relaxed mb-4">
                Shrejee Pharmaceuticals is an ISO 9001:2015 certified pharmaceutical company headquartered in India. We specialize in manufacturing and marketing a comprehensive range of pharmaceutical formulations including tablets, capsules, syrups, injectables, ointments, and nutraceuticals.
              </p>
              <p className="text-gray-500 leading-relaxed mb-8">
                With over 20 years of experience in the pharma industry, we have established a strong presence across 15+ states through our robust Pharma Business network and direct marketing operations.
              </p>
              <ul className="space-y-3 mb-10">
                {[
                  "ISO 9001:2015 certified partner facilities",
                  "300+ high-quality formulations",
                  "Pan-India Pharma Business network",
                  "Partnered GMP-certified manufacturing facilities",
                  "Dedicated R&D and QC team",
                ].map((pt) => (
                  <li key={pt} className="flex items-start gap-3 text-gray-700 text-sm font-medium">
                    <CheckCircle size={17} className="text-[#6fa832] shrink-0 mt-0.5" />
                    {pt}
                  </li>
                ))}
              </ul>
              <Link href="/about" className="btn-primary">
                Our Story <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SCROLLING PRODUCTS ===== */}
      <ScrollingProducts />

      {/* ===== PRODUCT CATEGORIES ===== */}
      <ProductCategories />

      {/* ===== DARK STATS BAND ===== */}
      <section className="bg-[#1a0020] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/10">
            {stats.map((s) => (
              <div key={s.label} className="text-center py-6 px-4">
                <div className="text-5xl font-black text-[#8fc34b] mb-1">{s.value}</div>
                <div className="text-white font-bold text-lg mb-1">{s.label}</div>
                <div className="text-gray-500 text-xs">{s.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WHY CHOOSE US ===== */}
      <section className="section-py bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="section-label mb-3">Why Shrejee Pharma</div>
            <h2 className="section-heading text-gray-900 mb-4">
              6 Reasons to Partner with Us
            </h2>
            <div className="w-16 h-1 bg-[#9b2c8c] mx-auto" />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {strengths.map((s, i) => (
              <div key={s.title} className="card-hover p-8 group">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-xl bg-[#9b2c8c]/10 flex items-center justify-center shrink-0 group-hover:bg-[#9b2c8c] transition-colors">
                    <s.icon size={24} className="text-[#9b2c8c] group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <div className="text-xs font-black text-gray-200 mb-1">0{i + 1}</div>
                    <h3 className="font-bold text-gray-900 text-lg mb-2">{s.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="section-py bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="section-label mb-3">Testimonials</div>
            <h2 className="section-heading text-gray-900">What Our Partners Say</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="card-hover p-8 relative">
                <div className="text-6xl text-[#9b2c8c]/10 font-serif absolute top-4 right-6 leading-none">&ldquo;&rdquo;</div>
                <div className="flex mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <span key={i} className="text-[#9b2c8c] text-lg">★</span>
                  ))}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-6 italic">&ldquo;{t.quote}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#9b2c8c] flex items-center justify-center text-white font-bold text-sm">
                    {t.name[0]}
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 text-sm">{t.name}</div>
                    <div className="text-gray-400 text-xs">{t.role} · {t.city}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA BANNER ===== */}
      <section className="relative py-24 bg-[#9b2c8c] overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 20% 50%, white 0%, transparent 50%), radial-gradient(circle at 80% 50%, white 0%, transparent 50%)" }} />
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <div className="section-label text-purple-200 mb-4">Start Today</div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
            Ready to Start Your<br />Pharma Business?
          </h2>
          <p className="text-purple-100 text-lg max-w-2xl mx-auto mb-10">
            Join our growing Pharma Business network. Monopoly rights, promotional support, high margins, and a trusted product portfolio — everything you need to succeed.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="bg-white text-[#9b2c8c] px-10 py-4 rounded font-black text-sm uppercase tracking-wide hover:bg-gray-100 flex items-center gap-2">
              Apply for Franchise <ArrowRight size={18} />
            </Link>
            <Link href="/products" className="btn-outline-white">
              View Product Range
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}