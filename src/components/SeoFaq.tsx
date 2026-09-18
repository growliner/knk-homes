"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How do I get started with your interior design services?",
    answer:
      "Getting started is easy! Simply contact our team through our website or give us a call at 099998 87631 to schedule an initial consultation. We'll discuss your vision, requirements, budget, and the scope of your project to create a tailored plan.",
  },
  {
    question: "What sets your home and apartment interior design services apart?",
    answer:
      "Our services are distinguished by a personalised, turnkey approach, meticulous attention to detail, and a commitment to creating spaces that are both aesthetically stunning and highly functional. We handle everything from civil work to final polish — you just hand us the keys.",
  },
  {
    question: "Can you work with different design styles?",
    answer:
      "Absolutely! We have extensive experience working with various design styles — modern minimalist, contemporary luxury, traditional Indian, eclectic, industrial, and more. Our team adapts to your preferences, creating a unique blend that reflects your personality.",
  },
  {
    question: "How involved can I be in the design process?",
    answer:
      "We deeply value your input and collaboration. You'll be actively involved from initial concept discussions to the final approval of design elements, materials, and finishes. Every material, finish, and fixture goes through detailed discussions to ensure the result feels truly yours.",
  },
  {
    question: "What is the timeline for a typical home renovation project?",
    answer:
      "The timeline varies based on the scope and complexity of the project. A typical 2BHK renovation takes around 45-60 days, while a 3BHK can take 60-90 days. During the initial consultation, we'll provide you with a precise estimated timeline for your specific project.",
  },
  {
    question: "What is the cost structure for your residential design services?",
    answer:
      "Costs depend on the scope of the project, materials chosen, and level of customisation. We believe in 100% transparent pricing with no hidden charges. We'll provide a detailed proposal outlining all costs and the payment schedule during the consultation — before any work begins.",
  },
  {
    question: "Do you provide services outside Gurugram?",
    answer:
      "While our primary focus is Gurugram (Gurgaon) and surrounding NCR areas including Sector 49, DLF Phase 5, Golf Course Road, and Sohna Road, we do take up select projects in Delhi NCR. Contact us to discuss your project location.",
  },
  {
    question: "Do I need to hire separate contractors for civil work?",
    answer:
      "Not at all! We are comprehensive turnkey interior contractors. You don't need to hire separate labor or contractors. Our team handles everything — demolition, electrical, plumbing, false ceiling, painting, modular furniture, and final handover.",
  },
];

export default function SeoFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-28 bg-[#0C0C0C] border-t border-[#222]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-amber-600 tracking-[0.4em] uppercase text-xs font-medium mb-4"
          >
            FAQ
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-serif font-light text-white mb-6"
          >
            Frequently Asked <span className="italic text-amber-600">Questions</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-stone-400 text-base font-light"
          >
            About our interior design & renovation services in Gurugram.
          </motion.p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="border border-[#2A2A2A] overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className={`w-full px-6 sm:px-8 py-5 sm:py-6 flex items-center justify-between text-left focus:outline-none transition-colors duration-300 ${
                  openIndex === index ? "bg-[#1A1A1A]" : "bg-transparent hover:bg-[#1A1A1A]/50"
                }`}
              >
                <span className={`text-base sm:text-lg font-medium pr-8 transition-colors duration-300 ${
                  openIndex === index ? "text-amber-600" : "text-stone-200"
                }`}>
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-amber-600 transition-transform duration-300 flex-shrink-0 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 sm:px-8 pb-6 sm:pb-8 text-stone-400 leading-relaxed font-light bg-[#1A1A1A] border-t border-[#2A2A2A]">
                      <div className="pt-4">
                        {faq.answer}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
