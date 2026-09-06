import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Products | Shrejee Pharmaceuticals",
  description:
    "Explore Shrejee Pharma products: tablets, capsules, syrups, injectables, ointments, nutraceuticals, and derma range. 300+ GMP certified formulations.",
};

const categories = [
  {
    id: "tablets",
    title: "Tablets & Capsules",
    icon: "T",
    count: "150+ Products",
    bgColor: "#9b2c8c",
    lightBg: "#fdf4fd",
    borderColor: "#e9b8e4",
    textColor: "#9b2c8c",
    desc: "A comprehensive range of oral solid dosage forms including tablets, film-coated tablets, capsules, and sustained-release formulations covering multiple therapeutic areas.",
    products: [
      {
        name: "XORACLAV-LB 625 TAB",
        salt: "Amoxicillin 500mG + Clavulenic Acid 125MG + Lactobaccilus TABLET",
        mrp: "₹265",
        pack: "1x10",
        ptr: "₹110",
        color: "red"
      },
      {
        name: " XORANP TAB",
        salt: "Nimesulide 100mg + Paracetamol 325mg Tablet",
        mrp: "₹600", // Example MRP
        pack: "10x10",
        ptr: "₹195",
        color: "red"
      },
      {
        name: " CODFLAM-P TAB",
        salt: "Aceclofenac 100mg + Paracetamol 325mg Tablet",
        mrp: "₹610", // Example MRP
        pack: "10x10",
        ptr: "₹195",
        color: "red"
      },
      {
        name: " CODFLAM-SP TAB",
        salt: "Aceclofenac 100mg + Paracetamol 325mg + Serratiopepetidase 15mg Tablet",
        mrp: "₹920", // Example MRP
        pack: "10x10",
        ptr: "₹350",
        color: "red"
      },
      {
        name: " XORACET TAB",
        salt: "Cetrizine 5mg Tablet",
        mrp: "₹550", // Example MRP
        pack: "10x10",
        ptr: "₹130",
        color: "red"
      },
      {
        name: " PANZIL 40mg TAB",
        salt: "Pantoprazole 40mg Tablet",
        mrp: "₹700", // Example MRP
        pack: "10x10",
        ptr: "₹200",
        color: "red"
      },
      {
        name: " XORACEF DT 100mg TAB",
        salt: "Cefixime 100mg DT Tablet",
        mrp: "₹1020", // Example MRP
        pack: "10x10",
        ptr: "₹510",
        color: "red"
      },
      {
        name: " XORACEF DT 50mg TAB",
        salt: "Cefixime 50mg DT Tablet",
        mrp: "₹600", // Example MRP
        pack: "10x10",
        ptr: "₹300",
        color: "red"
      },
      {
        name: " XORACEF LB 200mg TAB",
        salt: "Cefixime 200mg + Lactobaccilus Tablet",
        mrp: "₹1650", // Example MRP
        pack: "10x10",
        ptr: "₹700",
        color: "red"
      },

      {
        name: "XERORAB 20mg Tablets",
        salt: "Rabeprazole 20mg Tablet",
        mrp: "₹180", // Example MRP
        pack: "10x10",
        ptr: "₹180",
        color: "red"
        // Example Pack
      },
      {
        name: "XERORAB-DSR  Capsules",
        salt: "Rabeprazole 20mg + Dompeidone 30mg  Capsule",
        mrp: "₹800", // Example MRP
        pack: "10x10",
        ptr: "₹280",
        color: "red",
        // Example Pack
      },
      {
        name: "PANZIL-DSR  Capsules",
        salt: "Pantoprazole 40mg + Dompeidone 30mg  Capsule",
        mrp: "₹120", // Example MRP
        pack: "10x10",
        ptr: "₹310",
        color: "red",
        // Example Pack
      },
      {
        name: "XORAREST Tablet",
        salt: "Aceclofenac 100mg + Paracetamol 325mg +cetrizine 10mg + Phenylephrine 5mg + caffeine 25mg",
        mrp: "₹600", // Example MRP
        pack: "10x10",
        ptr: "₹290",
        color: "red",
        // Example Pack
      },
      {
        name: "XORAREST INHALANT Softgel",
        salt: "Camphor 25mg +Chlorothymol 5 mg  + Eucalyptol 125 mg + Menthol 65mg + Terpenineol 120mg",
        mrp: "₹700", // Example MRP
        pack: "10x10",
        ptr: "₹350",
        color: "red",
        // Example Pack
      },
      {
        name: "REAMLO-AT Tablet",
        salt: "Amlodipine 5mg + Atenolol 50mg",
        mrp: "₹340", // Example MRP
        pack: "10x10",
        ptr: "₹150",
        color: "red",
        // Example Pack
      },
      {
        name: "COLZI-LC Tablet",
        salt: "Levocetrizine 5mg + Montelukast 10mg",
        mrp: "₹950", // Example MRP
        pack: "10x10",
        ptr: "₹310",
        color: "red",
        // Example Pack
      },
      {
        name: "XORACAL Softgel capsule",
        salt: "Calcitrol 0.25mcg + Calcium carbonate 500mg + Zinc 7.5 mg",
        mrp: "₹1200", // Example MRP
        pack: "10x10",
        ptr: "₹390",
        color: "red",
        // Example Pack
      },




    ],
  },
  {
    id: "syrups",
    title: "Syrups & Suspensions",
    icon: "S",
    count: "80+ Products",
    bgColor: "#6fa832",
    lightBg: "#f4fde8",
    borderColor: "#c5e89b",
    textColor: "#6fa832",
    desc: "Liquid oral formulations for easy administration — syrups, suspensions, and drops suitable for all age groups including pediatric patients.",
    products: [
      {
        name: "XORAVITAL SYRUP",
        salt: "METHYCOBALAMIN 1500MCG+LYCOPENE 2500MCG+THIAMINE 1MG+ RIBOFLAVIN 1MG+ PYRIDOXIN 1MG+ NIACINAMIDE 15MG+ L-LYSINE 30MG+POTASSIUM 50MCG+COPPER 100MCG+ ZINC 22.5 MG+ DPANTHENOL 2.5MG",
        mrp: "₹140", // Example MRP
        pack: "200ML",
        ptr: "₹70",
        color: "red",
        // Example Pack
      },
      {
        name: "XORAPOD 50mg DRY SYRUP",
        salt: " Cefpodoxime 50mg ",
        mrp: "₹95", // Example MRP
        pack: "1x1",
        ptr: "₹45",
        color: "red",
        // Example Pack
      },
      {
        name: "XORACLAV LB 228.5mg DRY SYRUP",
        salt: " Amoxycillin  200mg + clavulanic acid 28.5mg + lactobaccilus",
        mrp: "₹103", // Example MRP
        pack: "1x1",
        ptr: "₹50",
        color: "red",
        // Example Pack
      },


      "Ibuprofen Suspension",
    ],
  },
  {
    id: "injectables & Eye/Ear Drops",
    title: "Injectables & Eye/Ear Drops",
    icon: "I",
    count: "60+ Products",
    bgColor: "#7a1f6e",
    lightBg: "#fdf0fc",
    borderColor: "#dca8d6",
    textColor: "#7a1f6e",
    desc: "Sterile injectable preparations manufactured under strict aseptic conditions in our GMP-certified facility for reliable clinical outcomes.",
    products: [
      {
        name: " XORACEF 1GM INJECTION",
        salt: "Ceftriaxone 1gm injection",
        mrp: "₹67", // Example MRP
        pack: "1X1",
        ptr: "₹26",
        color: "red"
      },
      {
        name: " XORACEF 500mg INJECTION",
        salt: "Ceftriaxone 500mg injection",
        mrp: "₹50", // Example MRP
        pack: "1X1",
        ptr: "₹23",
        color: "red"
      },
      {
        name: " XORACEF-S 375mg INJECTION",
        salt: "Ceftriaxone 250mg + Sulbactum 125mg injection",
        mrp: "48", // Example MRP
        pack: "1X1",
        ptr: "₹23",
        color: "red"
      },
      {
        name: " XORACEF-S 750mg INJECTION",
        salt: "Ceftriaxone 5000mg + Sulbactum 250mg injection",
        mrp: "70", // Example MRP
        pack: "1X1",
        ptr: "₹32",
        color: "red"
      },
      {
        name: " XORACEF-S 1.5gm INJECTION",
        salt: "Ceftriaxone 1000mg + Sulbactum 500mg injection",
        mrp: "140", // Example MRP
        pack: "1X1",
        ptr: "₹40",
        color: "red"
      },
      {
        name: " XORACEF-TZ 281.5mg INJECTION",
        salt: "Ceftriaxone 250mg + Tazobactum 31.5mg injection",
        mrp: "70", // Example MRP
        pack: "1X1",
        ptr: "₹27",
        color: "red"
      },
      {
        name: " XORANERVE-MAX INJECTION",
        salt: "Vitamin-c 150mg + Vitamin B12 2500mcg + Folic acid 0.7mg + Niacinamid 12mg injection",
        mrp: "95", // Example MRP
        pack: "1X1",
        ptr: "₹35",
        color: "red"
      },
      {
        name: " XORANERVE INJECTION",
        salt: "Methycobalamin 1500mcg + Pyridoxine 100mg + Niacinamide 100mg injection",
        mrp: "95", // Example MRP
        pack: "1X1",
        ptr: "₹35",
        color: "red"
      },
      {
        name: " CODFLAM AQUA 1ML INJECTION",
        salt: " Diclofenac 25mg injection",
        mrp: "29", // Example MRP
        pack: "1X10",
        ptr: "₹6",
        color: "red"
      },
      {
        name: " XORAFER INJECTION",
        salt: " Iron sucrose 100mg injection",
        mrp: "230", // Example MRP
        pack: "1X5ml",
        ptr: "₹48",
        color: "red"
      },
      {
        name: " XORAMIK 500mg INJECTION",
        salt: " Amikacin 500mg injection",
        mrp: "103", // Example MRP
        pack: "1X2ml",
        ptr: "₹30",
        color: "red"
      },
      {
        name: " ACOTEK  EAR DROP ",
        salt: " Clotrimazole + Lignocaine + Gentamicin + Beclomethasone Dipropionate",
        mrp: "92", // Example MRP
        pack: "1x5ml",
        ptr: "₹28",
        color: "red"
      },
      {
        name: " IFLOX EYE DROP",
        salt: " Moxifloxacin Eye Drop",
        mrp: "85", // Example MRP
        pack: "1X5ml",
        ptr: "₹25",
        color: "red"
      },
      {
        name: " IFLOX-D EYE DROP",
        salt: " Ofloxacin + Dexamethasone Eye Drop",
        mrp: "29", // Example MRP
        pack: "1X5ml",
        ptr: "₹16",
        color: "red"
      },




    ],
  },
  {
    id: "ointments",
    title: "Ointments,Creams & Lotion",
    icon: "O",
    count: "50+ Products",
    bgColor: "#558a28",
    lightBg: "#f1fae4",
    borderColor: "#b8e085",
    textColor: "#558a28",
    desc: "Topical formulations including creams, ointments, gels, and lotions for dermatological and musculoskeletal conditions.",
    products: [
      {
        name: "CODFLAM  ORTHO PAIN OIL ",
        salt: "Ayurvedic pain oil",
        mrp: "₹140", // Example MRP
        pack: "60ml",
        ptr: "₹60",
        color: "red",
        // Example Pack
      },


    ],
  },
  {
    id: "nutraceuticals",
    title: "Nutraceuticals",
    icon: "N",
    count: "70+ Products",
    bgColor: "#521448",
    lightBg: "#faeef9",
    borderColor: "#d4a0cc",
    textColor: "#521448",
    desc: "Science-backed nutritional supplements and health products to support overall wellness and preventive healthcare for all age groups.",
    products: [
      {
        name: " XORAVITAL-9G SOFTGEL",
        salt: "Ginseng,Omega-3 fatty acid,Green tea/ Ginkgo/GAarlic Extract, Antioxidants,Vitamins,Minearala & Trace elements ",
        mrp: "195", // Example MRP
        pack: "1X10",
        ptr: "₹95",
        color: "red"
      },
      {
        name: " XORAVITAL SOFTGEL",
        salt: "Multivitamin + Multiminerals + Antioxidants ",
        mrp: "1050", // Example MRP
        pack: "10X10",
        ptr: "₹325",
        color: "red"
      },
      {
        name: "XORACAL Softgel capsule",
        salt: "Calcitrol 0.25mcg + Calcium carbonate 500mg + Zinc 7.5 mg",
        mrp: "₹1200", // Example MRP
        pack: "10x10",
        ptr: "₹390",
        color: "red",
        // Example Pack
      },
      {
        name: "XORAVIT-LB  capsule",
        salt: "DIGESTIVEENZYME+LACTOBACILLUS+PAPAIN+VIT- B1,B2,B6,NIACINAMIDE,FOLICACID,         CALCIUM-D-PANTHOTHENATE",
        mrp: "₹700", // Example MRP
        pack: "10x10",
        ptr: "₹300",
        color: "red",
        // Example Pack
      },



    ],
  },
  {
    id: "derma",
    title: "Derma Range",
    icon: "D",
    count: "40+ Products",
    bgColor: "#3d6e1e",
    lightBg: "#eef8e4",
    borderColor: "#a8d97a",
    textColor: "#3d6e1e",
    desc: "Specialized dermatology products for skin care, anti-aging, pigmentation treatment, and various dermatological conditions.",
    products: [
      "Sunscreen SPF 50+ Lotion",

    ],
  },
];

export default function ProductsPage() {
  return (
    <>
      {/* === HEADER === */}
      <div className="bg-[#1a0020] py-20 relative overflow-hidden">
        <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-[#9b2c8c]/10" />
        <div className="absolute right-32 top-10 w-48 h-48 rounded-full border border-[#9b2c8c]/20" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="section-label text-purple-400 mb-4">Our Portfolio</div>
          <h1 className="text-5xl md:text-6xl font-black text-white mb-5 leading-tight">
            Our <span className="text-[#9b2c8c]">Products</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-xl">
            300+ GMP certified pharmaceutical formulations across 6 therapeutic categories — crafted with precision and care.
          </p>
          <div className="flex items-center gap-3 mt-6 text-sm text-gray-500">
            <Link href="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <span className="text-[#9b2c8c]">Products</span>
          </div>
        </div>
      </div>

      {/* === STICKY CATEGORY NAV === */}
      <div className="bg-white border-b border-gray-200 sticky top-[72px] z-30 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-3 overflow-x-auto">
          <div className="flex gap-2 min-w-max">
            {categories.map((cat) => (
              <a
                key={cat.id}
                href={`#${cat.id}`}
                className="px-4 py-2 rounded text-xs font-bold uppercase tracking-wide border-2 border-gray-200 text-gray-500 bg-white whitespace-nowrap hover:border-[#9b2c8c] hover:text-[#9b2c8c] transition-all"
              >
                {cat.title}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* === PRODUCT SECTIONS === */}
      {categories.map((cat, idx) => (
        <section
          key={cat.id}
          id={cat.id}
          className={`section-py ${idx % 2 === 0 ? "bg-white" : "bg-gray-50"}`}
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-3 gap-12 items-start">

              {/* LEFT — Category panel */}
              <div className="lg:col-span-1">
                {/* Color card */}
                <div
                  className="h-52 rounded-2xl flex items-center justify-center mb-8 relative overflow-hidden shadow-xl"
                  style={{ background: `linear-gradient(135deg, ${cat.bgColor} 0%, #1a0020 100%)` }}
                >
                  <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 80% 20%, white 0%, transparent 60%)" }} />
                  <div className="text-center text-white relative z-10">
                    <div
                      className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-3 text-2xl font-black border-2 border-white/30"
                      style={{ background: "rgba(255,255,255,0.15)" }}
                    >
                      {cat.icon}
                    </div>
                    <div className="font-black text-xl">{cat.title}</div>
                    <div className="text-white/60 text-sm mt-1">{cat.count}</div>
                  </div>
                </div>

                {/* Info */}
                <div
                  className="text-xs font-black uppercase tracking-widest mb-2"
                  style={{ color: cat.textColor }}
                >
                  {cat.count}
                </div>
                <h2 className="text-2xl font-black text-gray-900 mb-4">{cat.title}</h2>
                <div className="w-12 h-1 mb-5 rounded" style={{ background: cat.bgColor }} />
                <p className="text-gray-500 text-sm leading-relaxed mb-8">{cat.desc}</p>

                {/* CTA */}
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-white px-6 py-3 rounded font-bold text-sm uppercase tracking-wide"
                  style={{ background: cat.bgColor }}
                >
                  Enquire Now <ArrowRight size={14} />
                </Link>

                {/* Features */}
                <div className="mt-8 space-y-2">
                  {["GMP certified batch", "COA available", "Fast delivery", "Competitive pricing"].map((f) => (
                    <div key={f} className="flex items-center gap-2 text-sm text-gray-500">
                      <CheckCircle size={14} style={{ color: cat.textColor }} className="shrink-0" />
                      {f}
                    </div>
                  ))}
                </div>
              </div>

              {/* RIGHT — Product grid */}
              <div className="lg:col-span-2">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-black text-gray-900 text-lg">Available Formulations</h3>
                  <span
                    className="text-xs font-bold px-3 py-1.5 rounded"
                    style={{ background: cat.lightBg, color: cat.textColor }}
                  >
                    {cat.count}
                  </span>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  {cat.products.map((product, i) => {
                    const isObj = typeof product === "object" && product !== null;
                    const name = isObj ? (product as any).name : product;
                    const salt = isObj ? (product as any).salt : null;
                    const pack = isObj ? (product as any).pack : null;
                    const mrp = isObj ? (product as any).mrp : null;
                    const ptr = isObj ? (product as any).ptr : null;
                    const color = isObj ? (product as any).color : null;
                    if (!name) return null;

                    return (
                      <div
                        key={i}
                        className="bg-white rounded-xl p-5 border-2 shadow-sm hover:shadow-lg transition-all duration-300 flex items-center gap-4"
                        style={{ borderColor: cat.borderColor }}
                      >
                        <div
                          className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 font-black text-white text-sm"
                          style={{ background: cat.bgColor }}
                        >
                          {String(i + 1).padStart(2, "0")}
                        </div>
                        <div className="flex-1">
                          <p
                            className={`font-bold text-sm leading-snug ${color ? '' : 'text-gray-900'}`}
                            style={color ? { color } : undefined}
                          >
                            {name}
                          </p>
                          {salt && <p className="text-gray-500 text-xs mt-1 leading-tight">{salt}</p>}
                          {(pack || mrp || ptr) ? (
                            <div className="flex flex-wrap items-center gap-3 mt-3 text-xs font-bold">
                              {pack && <span className="bg-gray-100 px-2 py-1 rounded text-gray-600 border border-gray-200">Pack: {pack}</span>}
                              {mrp && <span className="bg-green-50 text-green-700 px-2 py-1 rounded border border-green-200">MRP: {mrp}</span>}
                              {ptr && <span className="bg-blue-50 text-blue-700 px-2 py-1 rounded border border-blue-200">PTR: {ptr}</span>}
                            </div>
                          ) : (
                            <p className="text-gray-400 text-xs mt-0.5">Available on request</p>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div
                  className="mt-6 p-4 rounded-xl text-sm text-center font-medium"
                  style={{ background: cat.lightBg, color: cat.textColor }}
                >
                  + Many more {cat.title.toLowerCase()} available.{" "}
                  <Link href="/contact" className="underline font-bold">
                    Contact us
                  </Link>{" "}
                  for the complete product list & pricing.
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* === CTA === */}
      <section className="py-24 bg-[#9b2c8c] relative overflow-hidden text-center">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 20% 50%, white 0%, transparent 50%), radial-gradient(circle at 80% 50%, white 0%, transparent 50%)" }} />
        <div className="max-w-2xl mx-auto px-6 relative z-10">
          <div className="section-label text-purple-200 mb-4">Get the Full List</div>
          <h2 className="text-4xl font-black text-white mb-5">Need a Custom Product Catalogue?</h2>
          <p className="text-purple-100 text-lg mb-10">
            Contact us for our complete product list with composition, strength, packing, and pricing details.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="bg-white text-[#9b2c8c] px-10 py-4 rounded font-black text-sm uppercase tracking-wide hover:bg-gray-100 flex items-center gap-2">
              Request Catalogue <ArrowRight size={18} />
            </Link>
            <Link href="/contact" className="btn-outline-white">
              Apply for Franchise
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}