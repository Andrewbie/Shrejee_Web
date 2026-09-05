import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://shrejeepharma.vercel.app"),
  title: "Shrejee Pharma | Quality Medicines, Trusted Care",
  description:
    "Shrejee Pharma is a trusted pharmaceutical company providing quality medicines across India. We offer PCD Pharma Franchise and a wide range of healthcare products.",
  keywords: [
    "Shrejee Pharma",
    "pharma company India",
    "PCD franchise",
    "quality medicines",
    "healthcare India",
    "pharmaceutical products",
  ],
  authors: [{ name: "Shrejee Pharma" }],
  creator: "Shrejee Pharma",
  publisher: "Shrejee Pharma",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://shrejeepharma.vercel.app",
    title: "Shrejee Pharma | Quality Medicines, Trusted Care",
    description:
      "Trusted pharmaceutical company providing quality medicines across India. Explore our PCD Pharma Franchise and extensive product range.",
    siteName: "Shrejee Pharma",
    images: [
      {
        url: "/globe.svg", // Replace with a proper og-image if available
        width: 1200,
        height: 630,
        alt: "Shrejee Pharma",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shrejee Pharma | Quality Medicines, Trusted Care",
    description:
      "Trusted pharmaceutical company providing quality medicines across India. Explore our PCD Pharma Franchise.",
    creator: "@shrejeepharma",
    images: ["/globe.svg"], // Replace with a proper og-image
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "l4PDaOm4xvOQDM2mlJg3MCdxIGMrxjseoHWBE-FQRoc",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
