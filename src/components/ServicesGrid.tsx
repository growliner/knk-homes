"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Home, CookingPot, Hammer, Building2 } from "lucide-react";

const services = [
  {
    icon: <Home className="w-7 h-7" />,
    title: "Home Renovation",
    subtitle: "2BHK & 3BHK Interior Design",
    image: "/living-room.jpg",
    description:
      "Complete flat renovation with transparent pricing. We transform your living space into a modern sanctuary — from demolition to final polish. Space planning, 3D rendering, material selection, and flawless execution.",
    features: ["Space Planning", "3D Design", "Material Curation", "Turnkey Execution"],
  },
  {
    icon: <CookingPot className="w-7 h-7" />,
    title: "Modular Kitchens & Wardrobes",
    subtitle: "Custom Manufacturing",
    image: "/kitchen.jpg",
    description:
      "Expert modular kitchen manufacturers in Gurugram. We design and build bespoke kitchens and wardrobes with premium finishes, soft-close hardware, and smart storage solutions tailored to your lifestyle.",
    features: ["Premium Finishes", "Soft-close Hardware", "Smart Storage", "Ergonomic Layouts"],
  },
  {
    icon: <Hammer className="w-7 h-7" />,
    title: "Turnkey Civil Work",
    subtitle: "End-to-End Contractors",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80",
    description:
      "From demolition to painting — we handle everything. As trusted civil work contractors in Gurugram, our turnkey solutions cover electrical, plumbing, false ceiling installation, and final finishing with expert precision.",
    features: ["Demolition & Civil", "Electrical & Plumbing", "False Ceiling", "Painting & Polish"],
  },
  {
    icon: <Building2 className="w-7 h-7" />,
    title: "Commercial & Office Interiors",
    subtitle: "Workspace Design",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
    description:
      "Inspiring workspaces crafted by top office interior designers in Gurugram. We build ergonomic, aesthetic, and functional commercial environments that boost productivity and reflect your brand identity.",
    features: ["Brand Integration", "Ergonomic Seating", "Acoustic Solutions", "Reception Design"],
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-28 bg-[#0C0C0C] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-amber-600 tracking-[0.4em] uppercase text-xs font-medium mb-4"
          >
            What We Do
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl lg:text-6xl font-serif font-light text-white mb-6"
          >
            Interior Design Solutions for{" "}
            <span className="italic text-amber-600">Every Space</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-stone-400 text-lg font-light"
          >
            At KnK Homes & Studio, we specialize in crafting bespoke interior solutions
            tailored to meet your unique preferences and lifestyle.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="space-y-24">
          {services.map((service, index) => {
            const isReversed = index % 2 !== 0;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
                  isReversed ? "lg:direction-rtl" : ""
                }`}
              >
                {/* Image Side */}
                <div className={`relative ${isReversed ? "lg:order-2" : ""}`}>
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0C0C0C]/40 to-transparent" />
                  </div>
                  {/* Floating Label */}
                  <div className="absolute bottom-4 left-4 bg-[#0C0C0C]/90 backdrop-blur-sm px-4 py-2 border border-[#333]">
                    <p className="text-xs tracking-[0.3em] uppercase text-amber-600 font-medium">
                      {service.subtitle}
                    </p>
                  </div>
                </div>

                {/* Text Side */}
                <div className={`${isReversed ? "lg:order-1" : ""}`}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 border border-[#333] flex items-center justify-center text-amber-600">
                      {service.icon}
                    </div>
                    <h3 className="text-2xl md:text-3xl font-serif font-light text-white">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-stone-400 text-base leading-relaxed mb-8 font-light">
                    {service.description}
                  </p>
                  <div className="grid grid-cols-2 gap-3">
                    {service.features.map((feature, i) => (
                      <div
                        key={i}
                        className="flex items-center text-stone-300 text-sm font-light"
                      >
                        <span className="w-1.5 h-1.5 bg-amber-600 mr-3 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
