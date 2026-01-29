"use client";
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from "react";

const clients = [
  "Vinci Ristorante",
  "Sushi Bo",
  "Safiya Travels",
  "Chef Story",
  "Life Spring Pharmacy",
  "Al Mabrook",
  "Harees",
  "Vinci Ristorante", // Duplicate for seamless loop
  "Sushi Bo",
  "Safiya Travels",
];

export default function OurClients() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isPaused, setIsPaused] = useState(false);

  return (
    <section ref={ref} className="relative bg-white py-16 md:py-24 lg:py-12 overflow-hidden">
      <div className="mx-auto px-5 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#005369]"
          >
            OUR CLIENTS
          </motion.h2>
          {/* Centered underline */}
          <div className="flex justify-center mt-4">
            <div className="w-28 h-1 bg-[#c2b790]"></div>
          </div>
        </div>

        {/* Horizontal Scrolling Container */}
        <div className="relative">
          {/* Gradient overlays for fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
          
          {/* Infinite Horizontal Scroll */}
          <div 
            className="overflow-hidden"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <motion.div
              animate={{
                x: [0, -1000]
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 30,
                  ease: "linear",
                }
              }}
              className="flex gap-8 py-4"
              style={{ animationPlayState: isPaused ? 'paused' : 'running' }}
            >
              {/* First set */}
              {clients.map((client, index) => (
                <div
                  key={`first-${index}`}
                  className="flex-shrink-0 w-[200px] md:w-[250px]"
                >
                  <div className="group bg-gray-50 rounded-xl p-6 md:p-8 text-center border border-gray-200 hover:border-[#c2b790] hover:bg-white hover:shadow-xl transition-all duration-300 h-full flex flex-col items-center justify-center">
                    <div className="text-4xl md:text-5xl font-bold text-[#005369] mb-3 group-hover:text-[#c2b790] transition-colors">
                      {client.charAt(0)}
                    </div>
                    <h3 className="text-lg md:text-xl font-semibold text-gray-700 group-hover:text-[#005369] transition-colors">
                      {client}
                    </h3>
                  </div>
                </div>
              ))}
              
              {/* Duplicate for seamless loop */}
              {clients.map((client, index) => (
                <div
                  key={`second-${index}`}
                  className="flex-shrink-0 w-[200px] md:w-[250px]"
                >
                  <div className="group bg-gray-50 rounded-xl p-6 md:p-8 text-center border border-gray-200 hover:border-[#c2b790] hover:bg-white hover:shadow-xl transition-all duration-300 h-full flex flex-col items-center justify-center">
                    <div className="text-4xl md:text-5xl font-bold text-[#005369] mb-3 group-hover:text-[#c2b790] transition-colors">
                      {client.charAt(0)}
                    </div>
                    <h3 className="text-lg md:text-xl font-semibold text-gray-700 group-hover:text-[#005369] transition-colors">
                      {client}
                    </h3>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

    
      </div>
    </section>
  );
}