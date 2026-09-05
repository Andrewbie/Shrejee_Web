"use client";
import { useState } from "react";
import Link from "next/link";
import { CheckCircle, ArrowRight } from "lucide-react";

const categories = [
  { id: "tablets", label: "Tablets & Capsules", count: "150+", emoji: "💊", color: "#9b2c8c" },
  { id: "syrups", label: "Syrups & Suspensions", count: "80+", emoji: "🧪", color: "#6fa832" },
  { id: "injectables", label: "Injectables", count: "60+", emoji: "💉", color: "#7a1f6e" },
  { id: "ointments", label: "Ointments & Creams", count: "50+", emoji: "🧴", color: "#558a28" },
  { id: "nutra", label: "Nutraceuticals", count: "70+", emoji: "🌿", color: "#521448" },
  { id: "derma", label: "Derma Range", count: "40+", emoji: "✨", color: "#3d6e1e" },
];

export default function ProductCategories() {
  const [activeTab, setActiveTab] = useState("tablets");

  return (
    <section className="section-py bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="section-label mb-3">Our Products</div>
            <h2 className="section-heading text-gray-900">300+ Formulations Across<br />6 Therapeutic Categories</h2>
          </div>
          <Link href="/products" className="flex items-center gap-2 text-sm font-bold text-[#9b2c8c] uppercase tracking-wide whitespace-nowrap hover:gap-3 transition-all">
            View All Products <ArrowRight size={16} />
          </Link>
        </div>

        {/* Tab switcher */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-4 py-2 rounded text-sm font-semibold border-2 transition-all ${activeTab === cat.id ? "bg-[#9b2c8c] border-[#9b2c8c] text-white" : "border-gray-200 text-gray-500 bg-white hover:border-[#9b2c8c] hover:text-[#9b2c8c]"}`}
            >
              {cat.emoji} {cat.label}
            </button>
          ))}
        </div>

        {/* Active category card */}
        {categories.filter((c) => c.id === activeTab).map((cat) => (
          <div key={cat.id} className="grid md:grid-cols-3 gap-6">
            {/* Feature card */}
            <div className="md:col-span-1 rounded-2xl p-8 text-white flex flex-col justify-between min-h-[280px]" style={{ background: `linear-gradient(135deg, ${cat.color} 0%, #1a0020 100%)` }}>
              <div>
                <div className="text-5xl mb-4">{cat.emoji}</div>
                <h3 className="text-2xl font-black mb-2">{cat.label}</h3>
                <p className="text-white/70 text-sm">{cat.count} products available in this category</p>
              </div>
              <Link href="/products" className="btn-outline-white mt-4 self-start text-xs py-2.5 px-5">
                Browse <ArrowRight size={14} />
              </Link>
            </div>
            {/* Info cards */}
            <div className="md:col-span-2 grid sm:grid-cols-2 gap-4">
              {[
                "Available in multiple strengths",
                "GMP-certified manufacturing",
                "Competitive pricing for franchisees",
                "Fast pan-India delivery",
                "Custom branding options",
                "COA provided with every batch",
              ].map((feat) => (
                <div key={feat} className="card-hover p-5 flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0" style={{ background: `${cat.color}15` }}>
                    <CheckCircle size={16} style={{ color: cat.color }} />
                  </div>
                  <p className="text-gray-700 font-medium text-sm leading-snug">{feat}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
