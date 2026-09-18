"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Rohan Sharma",
    project: "3BHK Renovation, Sector 49",
    review:
      "KnK Homes & Studio transformed our bare apartment in Sector 49 into a luxurious haven. Their turnkey solution was perfect since we couldn't visit the site daily. The modular kitchen is a standout feature — every detail was thoughtfully planned. The team was responsive, professional, and delivered exactly what was promised.",
    rating: 5,
    date: "2 months ago",
  },
  {
    name: "Aarti Mehra",
    project: "2BHK Flat Renovation, DLF Phase 5",
    review:
      "Very professional team. They handled everything from civil work to false ceilings and final polishing. The quality of materials used for wardrobes is top-notch. What truly impressed us was how thoughtfully they approached our old furniture — instead of replacing everything, they restored and remodelled key pieces. Highly recommend for any home renovation in Gurugram.",
    rating: 5,
    date: "4 months ago",
  },
  {
    name: "Vikas Tandon",
    project: "Office Interior, Golf Course Road",
    review:
      "Exceptional interior design services. We hired them for our office space on Golf Course Road and they delivered a vibrant, ergonomic workspace right on schedule. Our clients notice the ambience the moment they enter, and the space has become an important part of their experience. For commercial interior design that balances aesthetics with functionality, KnK is the team.",
    rating: 5,
    date: "1 week ago",
  },
  {
    name: "Prerit Kumar",
    project: "3BHK Full Renovation, Rosewood City",
    review:
      "Great experience working with KnK Homes for the renovation of our 3BHK flat. Smooth communication and impressive attention to detail over the 5-month project. Every material, finish, and fixture went through multiple discussions. The final result feels exactly like us — refined, warm, and personal, without losing the luxury apartment feel we wanted.",
    rating: 5,
    date: "3 months ago",
  },
  {
    name: "Ishan Verma",
    project: "Modular Kitchen & Wardrobe, Sohna Road",
    review:
      "Incredibly pleased with KnK Homes & Studio. High-quality materials and expertly crafted woodwork. The modular kitchen design maximises every inch of space. We trusted them, handed over the keys, and simply saw the result. Every decision felt intentional, helping us save costs while achieving a premium look. Highly recommend this reliable, quality-focused team.",
    rating: 5,
    date: "6 months ago",
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const goNext = () => setActiveIndex((prev) => (prev + 1) % testimonials.length);
  const goPrev = () => setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section id="testimonials" className="py-28 bg-[#1A1A1A] relative border-t border-[#222]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-amber-600 tracking-[0.4em] uppercase text-xs font-medium mb-4"
          >
            Google Reviews
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="flex justify-center items-center gap-1 mb-6"
          >
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-amber-600 text-amber-600" />
            ))}
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl lg:text-6xl font-serif font-light text-white mb-6"
          >
            Client <span className="italic text-amber-600">Stories</span>
          </motion.h2>
        </div>

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto relative">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.5 }}
            className="bg-[#0C0C0C] border border-[#2A2A2A] p-8 sm:p-12 lg:p-16 relative"
          >
            <Quote className="absolute top-6 right-8 w-16 h-16 text-[#1A1A1A]" />

            <div className="flex items-center gap-1 mb-8">
              {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-600 text-amber-600" />
              ))}
              <span className="text-stone-600 text-xs ml-3">{testimonials[activeIndex].date}</span>
            </div>

            <p className="text-stone-300 text-lg sm:text-xl leading-relaxed mb-10 font-light italic">
              &ldquo;{testimonials[activeIndex].review}&rdquo;
            </p>

            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-[#1A1A1A] border border-[#333] flex items-center justify-center">
                <span className="text-amber-600 font-serif text-xl font-light">
                  {testimonials[activeIndex].name.charAt(0)}
                </span>
              </div>
              <div>
                <h4 className="text-white font-semibold tracking-wide">
                  {testimonials[activeIndex].name}
                </h4>
                <p className="text-stone-500 text-sm font-light">
                  {testimonials[activeIndex].project}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-6 mt-10">
            <button
              onClick={goPrev}
              className="w-12 h-12 border border-[#333] hover:border-amber-600 flex items-center justify-center text-stone-400 hover:text-amber-600 transition-colors"
            >
              <ChevronLeft size={20} />
            </button>
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`w-2 h-2 transition-all duration-300 ${
                    i === activeIndex ? "w-8 bg-amber-600" : "bg-[#333] hover:bg-stone-600"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={goNext}
              className="w-12 h-12 border border-[#333] hover:border-amber-600 flex items-center justify-center text-stone-400 hover:text-amber-600 transition-colors"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
