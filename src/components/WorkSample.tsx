"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  { src: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80", title: "Luxury Living Room", location: "DLF Phase 5" },
  { src: "https://images.unsplash.com/photo-1722942433067-89e74112d908?auto=format&fit=crop&w=1200&q=80", title: "Designer Kitchen", location: "Sector 49" },
  { src: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=80", title: "Master Bedroom Suite", location: "Golf Course Road" },
  { src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80", title: "Contemporary Villa Interior", location: "Sohna Road" },
];

export default function GallerySection() {
  return (
    <section id="gallery" className="py-28 bg-[#1A1A1A] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-amber-600 tracking-[0.4em] uppercase text-xs font-medium mb-4"
          >
            Our Portfolio
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl lg:text-6xl font-serif font-light text-white mb-6"
          >
            Build Your <span className="italic text-amber-600">Dream Space</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-stone-400 text-lg font-light"
          >
            Whether you&apos;re looking to revamp your home, office, or commercial space, our
            diverse portfolio showcases a range of styles — from timeless classics to
            contemporary masterpieces.
          </motion.p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="group relative aspect-[4/3] overflow-hidden cursor-pointer"
            >
              <Image
                src={project.src}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-[#0C0C0C]/20 group-hover:bg-[#0C0C0C]/60 transition-colors duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <p className="text-xs tracking-[0.3em] uppercase text-amber-600 font-medium mb-2">
                  {project.location}
                </p>
                <h3 className="text-xl sm:text-2xl font-serif font-light text-white">
                  {project.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 border border-[#333] p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div>
            <h3 className="text-2xl md:text-3xl font-serif font-light text-white mb-2">
              Are you looking to craft your interiors with glamorous designs?
            </h3>
            <p className="text-stone-500 text-sm font-light">
              Let&apos;s transform your vision into a luxurious reality.
            </p>
          </div>
          <a
            href="https://wa.me/919999887631"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-amber-600 hover:bg-amber-700 text-stone-950 font-semibold px-10 py-4 text-sm tracking-wider uppercase transition-all duration-300 hover:-translate-y-0.5 whitespace-nowrap"
          >
            Book Consultation
          </a>
        </motion.div>
      </div>
    </section>
  );
}
