import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle, Target, Eye, Award, Users, Globe, Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | Shrejee Pharmaceuticals",
  description: "Learn about Shrejee Pharmaceuticals — our story, mission, vision, and commitment to quality pharma.",
};

const milestones = [
  { year: "2006", event: "Company Founded", desc: "Started with a vision to make quality medicines accessible across India." },
  { year: "2016", event: "GMP Certification", desc: "Partnered with GMP & ISO 9001:2015 certified manufacturing facilities." },
  { year: "2018", event: "100 Products", desc: "Expanded product range to 100+ formulations across categories." },
  { year: "2020", event: "Pan-India Launch", desc: "Established Pharma Business network across 10+ states." },
  { year: "2022", event: "ISO Certified", desc: "Received ISO 9001:2015 certification for quality management." },
  { year: "2024", event: "300+ Products", desc: "Crossed 300 products with 500+ franchise partners." },
];

const team = [
  { role: "Managing Director", initials: "MD", desc: "Leading strategy & vision" },
  { role: "Head of Operations", initials: "HO", desc: "Manufacturing & supply chain" },
  { role: "Medical Advisor", initials: "MA", desc: "Product formulations & R&D" },
  { role: "Sales Director", initials: "SD", desc: "Business & distribution" },
];

export default function AboutPage() {
  return (
    <>
      {/* === PAGE HEADER === */}
      <div className="bg-[#1a0020] py-20 relative overflow-hidden">
        <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-[#9b2c8c]/10" />
        <div className="absolute right-32 top-10 w-48 h-48 rounded-full border border-[#9b2c8c]/20" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="section-label text-purple-400 mb-4">Who We Are</div>
          <h1 className="text-5xl md:text-6xl font-black text-white mb-5 leading-tight">
            About Shrejee<br /><span className="text-[#9b2c8c]">Pharmaceuticals</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-xl">
            20+ years of commitment to delivering high-quality pharmaceutical products that improve lives across India.
          </p>
          <div className="flex items-center gap-3 mt-6 text-sm text-gray-500">
            <Link href="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <span className="text-[#9b2c8c]">About Us</span>
          </div>
        </div>
      </div>

      {/* === STORY SECTION === */}
      <section className="section-py bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="section-label mb-3">Our Story</div>
            <h2 className="section-heading text-gray-900 mb-5">Building India&apos;s Most Trusted Pharma Brand</h2>
            <div className="w-16 h-1 bg-[#9b2c8c] mb-6" />
            <p className="text-gray-500 leading-relaxed mb-5">
              Shrejee Pharmaceuticals was established in 2006 with a clear mission — to manufacture and deliver high-quality, affordable medicines to every corner of India. What began as a small operation has grown into an ISO 9001:2015 certified company with a product portfolio of 300+ formulations.
            </p>
            <p className="text-gray-500 leading-relaxed mb-8">
              Our partnered manufacturing facilities, equipped with modern machinery and operated by seasoned pharmaceutical professionals, uphold the most stringent quality standards — from raw material sourcing through packaging and delivery.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {[["300+", "Products"], ["15+", "States"], ["500+", "Partners"], ["20+", "Years"]].map(([v, l]) => (
                <div key={l} className="border border-gray-100 rounded-xl p-5 bg-gray-50 text-center">
                  <div className="text-3xl font-black text-[#9b2c8c] mb-1">{v}</div>
                  <div className="text-xs font-bold text-gray-400 uppercase tracking-widest">{l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="w-full h-[500px] bg-gray-100 rounded-2xl flex flex-col items-center justify-center text-gray-300 border border-gray-200 relative overflow-hidden">
              <Image
                src="/images/manufacturing-facility.jpg"
                alt="Manufacturing Facility"
                fill
                className="object-cover"
              />
              <div className="absolute left-0 top-0 bottom-0 w-1.5 z-10 bg-[#9b2c8c]" />
            </div>
            <div className="absolute -bottom-5 -right-5 bg-[#6fa832] text-white p-5 rounded-xl shadow-2xl">
              <div className="font-black text-2xl">ISO 9001</div>
              <div className="text-green-100 text-xs uppercase tracking-widest">Certified</div>
            </div>
          </div>
        </div>
      </section>

      {/* === MISSION & VISION === */}
      <section className="section-py bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-10 border border-gray-100 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-[#9b2c8c]" />
              <div className="w-14 h-14 bg-[#9b2c8c] rounded-xl flex items-center justify-center mb-6 shadow-lg">
                <Target size={26} className="text-white" />
              </div>
              <h3 className="text-2xl font-black text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-500 leading-relaxed">
                To manufacture and deliver high-quality, safe, and effective pharmaceutical products that are accessible to every Indian — maintaining the highest ethical standards while building lasting relationships with our franchise partners and customers.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-10 border border-gray-100 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-[#6fa832]" />
              <div className="w-14 h-14 bg-[#6fa832] rounded-xl flex items-center justify-center mb-6 shadow-lg">
                <Eye size={26} className="text-white" />
              </div>
              <h3 className="text-2xl font-black text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-500 leading-relaxed">
                To become one of the top pharmaceutical companies in India, recognized for product quality, partner satisfaction, and innovation — while continuously expanding our presence to serve more patients and healthcare professionals across the nation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* === MILESTONES === */}
      <section className="section-py bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="section-label mb-3">Our Journey</div>
            <h2 className="section-heading text-gray-900">20+ Years of Milestones</h2>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gray-200 hidden lg:block" />
            <div className="grid lg:grid-cols-2 gap-8">
              {milestones.map((m, i) => (
                <div key={m.year} className={`flex gap-5 ${i % 2 !== 0 ? "lg:flex-row-reverse lg:text-right" : ""}`}>
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-[#9b2c8c] flex items-center justify-center text-white font-black text-xs shrink-0">
                      {m.year.slice(2)}
                    </div>
                    <div className="flex-1 w-px bg-gray-100 mt-3" />
                  </div>
                  <div className="pb-10 flex-1">
                    <div className="text-[#9b2c8c] text-xs font-black uppercase tracking-widest mb-1">{m.year}</div>
                    <h3 className="font-black text-gray-900 text-lg mb-2">{m.event}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{m.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* === CERTIFICATIONS === */}
      <section className="section-py bg-[#1a0020]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="section-label text-purple-400 mb-3">Our Credentials</div>
            <h2 className="section-heading text-white">Certifications & Accreditations</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { cert: "ISO 9001:2015", body: "Bureau Veritas" },
              { cert: "DCGI Approved", body: "Drugs Controller General of India" },
              { cert: "GMP Certified", body: "Good Manufacturing Practice" },
            ].map((c) => (
              <div key={c.cert} className="bg-white/5 border border-white/10 rounded-xl p-8 text-center hover:border-[#9b2c8c]/50 hover:bg-white/10 transition-all">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#9b2c8c] to-[#521448] flex items-center justify-center mx-auto mb-5 shadow-lg">
                  <Award size={28} className="text-white" />
                </div>
                <div className="font-black text-white text-lg mb-1">{c.cert}</div>
                <div className="text-gray-500 text-xs">{c.body}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === CTA === */}
      <section className="py-20 bg-[#9b2c8c] text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-4xl font-black text-white mb-5">Partner with Shrejee Pharma</h2>
          <p className="text-purple-100 mb-10">Join our growing franchise network and build a successful pharma business in your region.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-white text-[#9b2c8c] px-10 py-4 rounded font-black text-sm uppercase tracking-wide hover:bg-gray-100">
            Get In Touch <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}