import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, ArrowRight, ExternalLink } from "lucide-react";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/products", label: "Our Products" },
  { href: "/contact", label: "Contact Us" },
];

const products = ["Tablets & Capsules", "Syrups & Suspensions", "Injectables", "Ointments & Creams", "Nutraceuticals", "Derma Range"];
const certs = ["ISO 9001:2015", "DCGI Approved", "GMP Certified"];

export default function Footer() {
  return (
    <footer className="bg-[#0f050f] text-white">
      {/* Top CTA strip */}
      <div className="bg-[#9b2c8c] py-8">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <div className="text-white font-black text-xl">Interested in PCD Franchise?</div>
            <div className="text-purple-100 text-sm mt-1">Contact us today and get monopoly rights in your district</div>
          </div>
          <Link href="/contact" className="bg-white text-[#9b2c8c] px-8 py-3 rounded font-black text-sm uppercase tracking-wide flex items-center gap-2 whitespace-nowrap hover:bg-gray-100">
            Apply Now <ArrowRight size={16} />
          </Link>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="mb-5 bg-white p-2 inline-block rounded-lg">
              <Image src="/images/company-logo.png" alt="Shrejee Pharmaceuticals" width={300} height={100} className="h-15 w-auto object-contain" />
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              An ISO 9001:2015 certified pharmaceutical company committed to delivering quality medicines across India. Trusted by 500+ partners nationwide.
            </p>
            <div className="flex flex-wrap gap-2">
              {certs.map((c) => (
                <span key={c} className="text-xs px-2.5 py-1 rounded bg-white/5 text-gray-400 border border-white/10">{c}</span>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-white text-sm uppercase tracking-widest mb-6 pb-3 border-b border-white/10">Quick Links</h3>
            <ul className="space-y-3">
              {links.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="flex items-center gap-2 text-gray-500 hover:text-[#9b2c8c] text-sm font-medium group">
                    <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-bold text-white text-sm uppercase tracking-widest mb-6 pb-3 border-b border-white/10">Our Products</h3>
            <ul className="space-y-3">
              {products.map((p) => (
                <li key={p}>
                  <Link href="/products" className="flex items-center gap-2 text-gray-500 hover:text-[#9b2c8c] text-sm font-medium group">
                    <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                    {p}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-white text-sm uppercase tracking-widest mb-6 pb-3 border-b border-white/10">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={15} className="text-[#9b2c8c] mt-0.5 shrink-0" />
                <span className="text-gray-500 text-sm leading-relaxed">
                  S.No-B/16, Rishabh Tower CHS Ltd,<br />Agashi Road, Padmawati Nagar, Bolinj,<br />Virar (W), Maharashtra – 401303
                </span>
              </li>
              <li>
                <a href="tel:+919478866881" className="flex items-center gap-3 text-gray-500 hover:text-[#9b2c8c] text-sm font-medium">
                  <Phone size={15} className="text-[#9b2c8c]" /> +91 9478866881
                </a>
              </li>
              <li>
                <a href="mailto:mailtoaccord@gmail.com" className="flex items-center gap-3 text-gray-500 hover:text-[#9b2c8c] text-sm font-medium">
                  <Mail size={15} className="text-[#9b2c8c]" /> mailtoaccord@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-gray-600 text-xs">© {new Date().getFullYear()} Shrejee Pharmaceuticals. All rights reserved.</p>
          <div className="flex gap-5 text-gray-600 text-xs">
            <Link href="/privacy" className="hover:text-gray-300">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-gray-300">Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}