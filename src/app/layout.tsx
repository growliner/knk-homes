import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
});

export const metadata: Metadata = {
  title: "KnK Homes & Studio | Premium Interior Designer & Turnkey Contractors in Gurugram",
  description: "KnK Homes & Studio — Gurugram's award-winning interior design firm. Luxury home renovation, modular kitchens, turnkey civil work, and commercial interiors. Book a free consultation today.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className="scroll-smooth">
      <body className={`${inter.variable} ${cormorant.variable} font-sans bg-[#0C0C0C] text-[#E8E0D8] antialiased`}>
        {children}
      </body>
    </html>
  );
}
