"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, ChevronDown, ChevronRight } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  {
    label: "Products",
    href: "/products",
    children: [
      { href: "/products#tablets", label: "Tablets & Capsules" },
      { href: "/products#syrups", label: "Syrups & Suspensions" },
      { href: "/products#injectables", label: "Injectables" },
      { href: "/products#ointments", label: "Ointments & Creams" },
      { href: "/products#nutraceuticals", label: "Nutraceuticals" },
      { href: "/products#derma", label: "Derma Range" },
    ],
  },
  { href: "/contact", label: "Contact Us" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Top strip */}
      <div className="bg-[#521448] text-white hidden md:block">
        <div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-between text-xs font-medium tracking-wide">
          <span className="flex items-center gap-2 text-purple-200">
            <span className="w-1.5 h-1.5 bg-[#8fc34b] rounded-full animate-pulse" />
            DCGI Approved | Pan-India Distribution
          </span>
          <a href="tel:+919478866881" className="flex items-center gap-1.5 text-purple-100 hover:text-white">
            <Phone size={12} /> +91 9478866881
          </a>
        </div>
      </div>

      {/* Main nav */}
      <nav className={`sticky top-0 z-50 bg-white border-b transition-all duration-300 ${scrolled ? "border-gray-200 shadow-md" : "border-transparent"}`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-[72px]">

            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <Image src="/images/company-logo.png" alt="Shrejee Pharmaceuticals" width={240} height={60} className="h-12 w-auto object-contain" priority />
            </Link>

            {/* Desktop links */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) =>
                link.children ? (
                  <div key={link.label} className="relative" onMouseEnter={() => setDropdown(true)} onMouseLeave={() => setDropdown(false)}>
                    <button className={`nav-item flex items-center gap-1 py-1 ${pathname === link.href ? "active text-[#9b2c8c]" : ""}`}>
                      {link.label}
                      <ChevronDown size={14} className={`transition-transform ${dropdown ? "rotate-180" : ""}`} />
                    </button>
                    {dropdown && (
                      <div className="absolute top-full left-0 pt-3 w-56 z-50">
                        <div className="bg-white rounded-lg shadow-2xl border border-gray-100 py-2 overflow-hidden">
                          <div className="h-1 bg-gradient-to-r from-[#9b2c8c] to-[#8fc34b]" />
                          {link.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className="flex items-center gap-2 px-4 py-2.5 text-sm text-gray-600 hover:bg-purple-50 hover:text-[#9b2c8c] font-medium group/item"
                            >
                              <ChevronRight size={12} className="text-gray-300 group-hover/item:text-[#9b2c8c] group-hover/item:translate-x-1 transition-all" />
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`nav-item py-1 ${pathname === link.href ? "active text-[#9b2c8c]" : ""}`}
                  >
                    {link.label}
                  </Link>
                )
              )}
            </div>

            {/* CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <Link href="/contact" className="btn-primary text-xs py-3 px-6">
                Get a Quote
              </Link>
            </div>

            {/* Mobile burger */}
            <button className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-purple-50 hover:text-[#9b2c8c]" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
            <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <div key={link.label}>
                  <Link href={link.href || "#"} className="flex items-center py-3 px-2 font-semibold text-gray-800 border-b border-gray-50 hover:text-[#9b2c8c]" onClick={() => setIsOpen(false)}>
                    {link.label}
                  </Link>
                  {link.children && (
                    <div className="pl-4 bg-gray-50 rounded mb-1">
                      {link.children.map((child) => (
                        <Link key={child.href} href={child.href} className="block py-2 text-sm text-gray-500 hover:text-[#9b2c8c]" onClick={() => setIsOpen(false)}>
                          › {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Link href="/contact" className="mt-3 btn-primary text-center justify-center" onClick={() => setIsOpen(false)}>
                Get a Quote
              </Link>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}