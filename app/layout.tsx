import type { Metadata } from "next";
import Footer from "@/components/Footer";
import { Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "0x73tari.eth",
  description: "Generated by Tedph-cyber",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={outfit.className}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
