"use client";

import Link from "next/link";
import { MapPin, Phone, Mail, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0C0C0C] pt-24 pb-10 border-t border-[#222]" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 mb-20">
          {/* Brand & Contact */}
          <div className="space-y-8">
            <div>
              <Link href="/" className="inline-block mb-6">
                <span className="text-2xl font-bold tracking-tight text-stone-100">
                  KnK
                </span>
                <span className="text-2xl font-light tracking-tight text-stone-400 ml-1">
                  Homes & Studio
                </span>
              </Link>
              <p className="text-stone-500 text-sm leading-relaxed font-light">
                At KnK Homes & Studio, we specialize in crafting bespoke interior
                solutions tailored to meet the unique preferences and lifestyles of
                our clients. Whether it&apos;s residential, commercial, or turnkey
                spaces, our team of skilled designers delivers excellence.
              </p>
            </div>

            <div className="space-y-4">
              <a
                href="tel:09999887631"
                className="flex items-center text-stone-400 hover:text-amber-600 transition-colors group text-sm"
              >
                <Phone className="w-4 h-4 mr-3 text-amber-600 group-hover:text-amber-500" />
                <span>099998 87631</span>
              </a>
              <a
                href="mailto:info@kandkhomes.com"
                className="flex items-center text-stone-400 hover:text-amber-600 transition-colors group text-sm"
              >
                <Mail className="w-4 h-4 mr-3 text-amber-600 group-hover:text-amber-500" />
                <span>info@kandkhomes.com</span>
              </a>
              <div className="flex items-start text-stone-400 text-sm">
                <MapPin className="w-4 h-4 mr-3 mt-1 text-amber-600 shrink-0" />
                <address className="not-italic leading-relaxed">
                  B 103, Rosewood City,<br />
                  Sector 49, Gurugram,<br />
                  Haryana - 122018
                </address>
              </div>
            </div>

            <div className="text-stone-500 text-xs">
              <span className="text-amber-600 font-medium">Timings</span>
              <p className="mt-1">Mon - Sat : 10:00 am - 07:00 pm</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs tracking-[0.3em] uppercase text-amber-600 font-medium mb-8">
              Our Services
            </h4>
            <ul className="space-y-4">
              {[
                { name: "Home Renovation Services", href: "/#services" },
                { name: "Modular Kitchens & Wardrobes", href: "/#services" },
                { name: "Turnkey Civil Contractors", href: "/#services" },
                { name: "Office Interior Design", href: "/#services" },
                { name: "False Ceiling Work", href: "/#services" },
                { name: "Custom Furniture", href: "/#services" },
              ].map((link, i) => (
                <li key={i}>
                  <Link
                    href={link.href}
                    className="text-stone-500 hover:text-amber-600 transition-colors text-sm flex items-center group font-light"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 text-amber-600" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Map & Social */}
          <div className="space-y-8">
            <div>
              <h4 className="text-xs tracking-[0.3em] uppercase text-amber-600 font-medium mb-8">
                Find Us
              </h4>
              <div className="aspect-[4/3] bg-[#1A1A1A] border border-[#2A2A2A] overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3509.2!2d77.04!3d28.41!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDI0JzM2LjAiTiA3N8KwMDInMjQuMCJF!5e0!3m2!1sen!2sin!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="KnK Homes Location"
                />
              </div>
              <Link
                href="https://maps.google.com/?q=B+103,+Rosewood+City,+Sector+49,+Gurugram,+Haryana"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm text-amber-600 hover:text-amber-500 transition-colors mt-4 font-medium tracking-wide"
              >
                View on Google Maps
                <ArrowRight className="w-3 h-3 ml-2" />
              </Link>
            </div>
          </div>
        </div>

        {/* SEO Keywords */}
        <div className="border-t border-[#1A1A1A] pt-8 pb-8">
          <p className="text-[10px] text-stone-700 leading-relaxed text-center max-w-4xl mx-auto">
            <strong className="text-stone-600">Areas we serve:</strong> Sector 49,
            DLF Phase 5, Golf Course Road, Sohna Road, MG Road, and surrounding
            regions in Gurugram.
            <br />
            <strong className="text-stone-600">Top searches:</strong> affordable
            interior designer in gurgaon, luxury interior designers in dlf phase 5,
            modular kitchen manufacturers in gurgaon, civil work contractors in
            gurgaon, false ceiling contractors gurugram, best interior designer in
            gurugram.
          </p>
        </div>

        {/* Copyright */}
        <div className="text-center pt-8 border-t border-[#1A1A1A]">
          <p className="text-stone-700 text-xs tracking-wide">
            &copy; {currentYear}{" "}
            <span className="text-stone-500">KnK Homes & Studio</span>. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
