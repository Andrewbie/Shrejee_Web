"use client";
import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, ArrowRight } from "lucide-react";

const contactInfo = [
  { icon: MapPin, title: "Address", lines: ["S.No-B/16, Rishabh Tower CHS Ltd,", "Agashi Road, Padmawati Nagar, Bolinj,", "Virar (W), Maharashtra – 401303"] },
  { icon: Phone, title: "Phone", lines: ["+91 9478866881"] },
  { icon: Mail, title: "Email", lines: ["mailtoaccord@gmail.com"] },
  { icon: Clock, title: "Hours", lines: ["Mon – Sat: 9:00 AM – 6:00 PM", "Sunday: Closed"] },
];

export default function ContactPage() {
  const [result, setResult] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setResult("Sending...");

    const formData = new FormData(e.currentTarget);
    formData.append("access_key", "ac476ab5-821b-4a5d-b8e8-0fd20db26574");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setSubmitted(true);
      setResult("Form Submitted Successfully");
      (e.target as HTMLFormElement).reset();
    } else {
      setResult("Something went wrong. Please try again.");
      setSubmitting(false);
    }

    setSubmitting(false);
  };

  return (
    <>
      {/* Header */}
      <div className="bg-[#1a0020] py-20 relative overflow-hidden">
        <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-[#9b2c8c]/10" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="section-label text-purple-400 mb-4">Get In Touch</div>
          <h1 className="text-5xl md:text-6xl font-black text-white mb-5">Contact <span className="text-[#9b2c8c]">Us</span></h1>
          <p className="text-gray-400 text-lg max-w-md">Whether you need product information, franchise details, or just want to say hello — we are here for you.</p>
          <div className="flex items-center gap-3 mt-6 text-sm text-gray-500">
            <a href="/" className="hover:text-white">Home</a><span>/</span>
            <span className="text-[#9b2c8c]">Contact Us</span>
          </div>
        </div>
      </div>

      {/* Info strip */}
      <div className="bg-[#9b2c8c] py-6">
        <div className="max-w-7xl mx-auto px-6 grid sm:grid-cols-3 gap-6">
          {[
            { icon: Phone, label: "Call Us", val: "+91 9478866881" },
            { icon: Mail, label: "Email Us", val: "mailtoaccord@gmail.com" },
            { icon: Clock, label: "Working Hours", val: "Mon–Sat, 9AM–6PM" },
          ].map((i) => (
            <div key={i.label} className="flex items-center gap-3 text-white">
              <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center shrink-0">
                <i.icon size={18} />
              </div>
              <div>
                <div className="text-purple-200 text-xs font-semibold uppercase tracking-wide">{i.label}</div>
                <div className="font-bold text-sm">{i.val}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Form section */}
      <section className="section-py bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-3 gap-10">

          {/* Contact info cards */}
          <div className="space-y-4">
            <h2 className="text-xl font-black text-gray-900 mb-6">Our Details</h2>
            {contactInfo.map((info) => (
              <div key={info.title} className="bg-white rounded-xl p-5 border border-gray-100 flex gap-4 shadow-sm hover:border-[#9b2c8c]/30 hover:shadow-md transition-all">
                <div className="w-11 h-11 rounded-lg bg-[#9b2c8c] flex items-center justify-center shrink-0">
                  <info.icon size={20} className="text-white" />
                </div>
                <div>
                  <div className="font-black text-gray-900 text-sm mb-1">{info.title}</div>
                  {info.lines.map((l) => <p key={l} className="text-gray-500 text-xs leading-relaxed">{l}</p>)}
                </div>
              </div>
            ))}

            {/* Quick links */}
            <div className="bg-[#1a0020] rounded-xl p-6 mt-4">
              <div className="text-white font-black mb-4 text-sm">Interested In</div>
              {["PCD Franchise", "Product Catalogue", "Third Party Manufacturing", "Export Enquiry"].map((item) => (
                <a key={item} href="#contactForm" className="flex items-center justify-between py-2.5 border-b border-white/10 text-gray-400 hover:text-[#8fc34b] text-xs font-medium group last:border-b-0">
                  {item}
                  <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                </a>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2" id="contactForm">
            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <div className="w-20 h-20 rounded-full bg-[#6fa832]/10 border-4 border-[#6fa832]/30 flex items-center justify-center mb-5">
                    <CheckCircle size={36} className="text-[#6fa832]" />
                  </div>
                  <h3 className="text-2xl font-black text-gray-900 mb-3">Message Received!</h3>
                  <p className="text-gray-500 text-sm max-w-xs">Our team will reach out to you within 24 hours. Thank you for your interest in Shrejee Pharma.</p>
                  <button
                    onClick={() => { setSubmitted(false); setResult(""); }}
                    className="mt-6 text-[#9b2c8c] text-sm font-semibold underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <>
                  <h2 className="text-2xl font-black text-gray-900 mb-2">Send Us a Message</h2>
                  <p className="text-gray-400 text-sm mb-8">Fill in the form below and we will get back to you within 24 hours.</p>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Hidden field — directs replies to your email */}
                    <input type="hidden" name="from_name" value="Shrejee Pharma Website" />

                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-bold text-gray-600 uppercase tracking-widest mb-2">Full Name *</label>
                        <input
                          type="text" name="name" required placeholder="Your full name"
                          className="w-full px-4 py-3.5 rounded-lg border-2 border-gray-100 bg-gray-50 focus:outline-none focus:border-[#9b2c8c] focus:bg-white text-sm font-medium"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-gray-600 uppercase tracking-widests mb-2">Phone Number *</label>
                        <input
                          type="tel" name="phone" required placeholder="+91 XXXXX XXXXX"
                          className="w-full px-4 py-3.5 rounded-lg border-2 border-gray-100 bg-gray-50 focus:outline-none focus:border-[#9b2c8c] focus:bg-white text-sm font-medium"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-600 uppercase tracking-widest mb-2">Email Address</label>
                      <input
                        type="email" name="email" placeholder="your@email.com"
                        className="w-full px-4 py-3.5 rounded-lg border-2 border-gray-100 bg-gray-50 focus:outline-none focus:border-[#9b2c8c] focus:bg-white text-sm font-medium"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-600 uppercase tracking-widest mb-2">Enquiry Type *</label>
                      <select
                        name="interest" required
                        className="w-full px-4 py-3.5 rounded-lg border-2 border-gray-100 bg-gray-50 focus:outline-none focus:border-[#9b2c8c] focus:bg-white text-sm font-medium"
                      >
                        <option value="">Select enquiry type</option>
                        <option value="General Enquiry">General Enquiry</option>
                        <option value="PCD Franchise">PCD Franchise</option>
                        <option value="Product Information">Product Information</option>
                        <option value="Third-Party Manufacturing">Third-Party Manufacturing</option>
                        <option value="Export Enquiry">Export Enquiry</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-600 uppercase tracking-widest mb-2">Message *</label>
                      <textarea
                        name="message" required rows={5} placeholder="Describe your requirement..."
                        className="w-full px-4 py-3.5 rounded-lg border-2 border-gray-100 bg-gray-50 focus:outline-none focus:border-[#9b2c8c] focus:bg-white text-sm font-medium resize-none"
                      />
                    </div>

                    {/* Error / status message */}
                    {result && !submitted && (
                      <p className={`text-sm font-medium ${result.includes("wrong") || result.includes("Error") ? "text-red-500" : "text-gray-500"}`}>
                        {result}
                      </p>
                    )}

                    <button
                      type="submit"
                      disabled={submitting}
                      className={`w-full btn-primary justify-center py-4 text-sm ${submitting ? "opacity-60 cursor-not-allowed" : ""}`}
                    >
                      <Send size={16} /> {submitting ? "Sending..." : "Send Message"}
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="bg-white pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
            <iframe
              src="https://maps.google.com/maps?q=Virar+West,Maharashtra,India&t=&z=14&ie=UTF8&iwloc=&output=embed"
              width="100%" height="350" style={{border: 0}} allowFullScreen={false}
              loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="w-full"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
}