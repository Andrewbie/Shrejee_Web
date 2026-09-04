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
    "Shrejee Pharma is a trusted pharmaceutical company providing quality medicines across India. PCD Pharma Franchise and more.",
  keywords:
    "Shrejee Pharma, pharma company, PCD franchise, medicines, healthcare India",
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
