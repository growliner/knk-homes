"use client";

import { motion } from "framer-motion";
import { ClipboardList, Ruler, Hammer, Home, HeartHandshake } from "lucide-react";

const steps = [
  {
    id: 1,
    title: "Consultation & Agreement",
    description:
      "We begin each project with a thorough consultation to understand your vision, requirements, and budget. Our team works closely with you to craft the perfect design strategy.",
    icon: <ClipboardList className="w-6 h-6" />,
  },
  {
    id: 2,
    title: "Design Development",
    description:
      "Using insights from the consultation, we develop a customised design concept. Our experts create meticulous space plans and photorealistic 3D renders so you can visualise your future space.",
    icon: <Ruler className="w-6 h-6" />,
  },
  {
    id: 3,
    title: "Execution & Build",
    description:
      "During execution, our turnkey contractors and skilled artisans bring the design to life with premium materials. We handle everything from civil work to final finishing with precision.",
    icon: <Hammer className="w-6 h-6" />,
  },
  {
    id: 4,
    title: "Final Handover",
    description:
      "After rigorous quality checks, we deliver your dream space on time, ready for you to move in and enjoy. Every detail is inspected to ensure flawless results.",
    icon: <Home className="w-6 h-6" />,
  },
  {
    id: 5,
    title: "After-Sales Support",
    description:
      "Our commitment doesn't end at handover. We provide comprehensive post-completion support, addressing any concerns and ensuring long-term satisfaction with your new space.",
    icon: <HeartHandshake className="w-6 h-6" />,
  },
];

export default function ProcessSection() {
  return (
    <section id="process" className="py-28 bg-[#0C0C0C] relative border-t border-[#222]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-amber-600 tracking-[0.4em] uppercase text-xs font-medium mb-4"
          >
            Our Process
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl lg:text-6xl font-serif font-light text-white mb-6"
          >
            How We <span className="italic text-amber-600">Work</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-stone-400 text-lg font-light"
          >
            A seamless, transparent, and step-by-step approach to transforming your space.
          </motion.p>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-6 lg:left-1/2 top-0 bottom-0 w-px bg-[#333] hidden sm:block" />

          <div className="space-y-16">
            {steps.map((step, index) => {
              const isLeft = index % 2 === 0;
              return (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className={`relative flex flex-col sm:flex-row items-start gap-8 ${
                    isLeft ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Step Number & Icon */}
                  <div className="hidden sm:flex absolute left-6 lg:left-1/2 -translate-x-1/2 w-12 h-12 bg-[#0C0C0C] border border-amber-600 items-center justify-center text-amber-600 z-10">
                    {step.icon}
                  </div>

                  {/* Content Card */}
                  <div
                    className={`sm:ml-20 lg:ml-0 lg:w-[calc(50%-3rem)] ${
                      isLeft ? "lg:pr-12 lg:text-right lg:ml-auto lg:mr-[calc(50%+1.5rem)]" : "lg:pl-12 lg:text-left lg:ml-[calc(50%+1.5rem)]"
                    }`}
                  >
                    <div className="bg-[#1A1A1A] border border-[#2A2A2A] p-6 sm:p-8 hover:border-[#333] transition-colors duration-300">
                      <div className="flex items-center gap-3 mb-4 sm:hidden">
                        <div className="w-10 h-10 border border-amber-600 flex items-center justify-center text-amber-600">
                          {step.icon}
                        </div>
                        <span className="text-4xl font-serif text-[#222] font-light">
                          0{step.id}
                        </span>
                      </div>
                      <span className="hidden sm:inline-block text-5xl font-serif text-[#222] font-light mb-4">
                        0{step.id}
                      </span>
                      <h3 className="text-xl font-semibold text-white mb-3 tracking-wide">
                        {step.title}
                      </h3>
                      <p className="text-stone-400 text-sm leading-relaxed font-light">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
