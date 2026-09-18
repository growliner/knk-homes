"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { PhoneCall, ArrowDown } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-bg.jpg"
          alt="Luxury Interior Design by KnK Homes"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-[#0C0C0C]/70" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0C0C0C]/40 via-transparent to-[#0C0C0C]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center pt-20">
        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-amber-600 tracking-[0.4em] uppercase text-xs sm:text-sm font-medium mb-6"
        >
          KnK Homes & Studio · Gurugram
        </motion.p>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif font-light tracking-tight text-white max-w-5xl leading-[1.05]"
        >
          Premium Interior Designer &{" "}
          <span className="italic text-amber-600">
            Turnkey Contractors
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
          className="mt-8 text-base sm:text-lg text-stone-400 max-w-2xl mx-auto leading-relaxed font-light"
        >
          From bespoke modular kitchens to complete home renovations, we deliver
          luxury, precision, and timely execution across Gurugram.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
          className="mt-12 flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center"
        >
          <Link
            href="https://wa.me/919999887631"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center gap-3 bg-amber-600 hover:bg-amber-700 text-stone-950 font-semibold px-10 py-4 transition-all duration-300 transform hover:-translate-y-1 shadow-2xl shadow-amber-600/20 tracking-wider uppercase text-sm"
          >
            <PhoneCall size={18} className="group-hover:animate-bounce" />
            Book Design Consultation
          </Link>
          <a
            href="#services"
            className="group flex items-center justify-center gap-3 border border-stone-700 hover:border-amber-600 text-stone-300 hover:text-amber-600 font-medium px-10 py-4 transition-all duration-300 tracking-wider uppercase text-sm"
          >
            Explore Services
          </a>
        </motion.div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-20 flex flex-wrap justify-center gap-12 sm:gap-16"
        >
          {[
            { value: "100+", label: "Projects Delivered" },
            { value: "8+", label: "Years Experience" },
            { value: "4.9★", label: "Google Rating" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <p className="text-3xl sm:text-4xl font-serif font-light text-amber-600">
                {stat.value}
              </p>
              <p className="text-xs tracking-[0.2em] uppercase text-stone-500 mt-2 font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
        >
          <span className="text-[10px] text-stone-600 uppercase tracking-[0.3em] font-medium">
            Scroll
          </span>
          <ArrowDown className="w-4 h-4 text-amber-600 animate-bounce" />
        </motion.div>
      </div>
    </section>
  );
}
