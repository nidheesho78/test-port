// "use client";
// import { motion } from 'framer-motion';
// import { useInView } from 'framer-motion';
// import { useRef, useState, useEffect } from "react";

// export default function Testimonials() {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, margin: "-100px" });
//   const [current, setCurrent] = useState(0);

//   const testimonials = [
//     {
//       name: "Paul Trueman",
//       role: "Designer",
//       text: (
//         <>
//           Exceptional attention to detail and sustainable thinking. The final result exceeded all<br />
//           expectations - modern yet warm and inviting. The team was professional throughout the<br />
//           entire process, delivering on time and within budget.
//         </>
//       )
//     },
//     {
//       name: "Maria Silva",
//       role: "Architect & Client",
//       text: (
//         <>
//           Working with Evora Future was a seamless experience. Their expertise in interior design<br />
//           transformed our space into something truly special. The attention to detail and<br />
//           innovative solutions were remarkable.
//         </>
//       )
//     },
//     {
//       name: "James Carter",
//       role: "Real Estate Developer",
//       text: (
//         <>
//           Professional, creative, and always on time. Their vision transformed our commercial space<br />
//           into something truly remarkable. Highly recommended for any interior design project.
//         </>
//       )
//     },
//   ];

//   // Auto-scroll effect
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrent((prev) => (prev + 1) % testimonials.length);
//     }, 5000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section ref={ref} className="relative bg-white py-16 md:py-24 lg:py-12">
//       <div className="mx-auto px-5 sm:px-6 lg:px-8">
//         {/* Section Header */}
//         <div className="text-center mb-12 md:mb-16 lg:mb-20">
//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
//             transition={{ duration: 0.6 }}
//             className="text-[#c2b790] uppercase tracking-[0.3em] font-semibold text-sm mb-4"
//           >
//             TESTIMONIALS
//           </motion.p>
          
//           <motion.h2
//             initial={{ opacity: 0, y: 20 }}
//             animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
//             transition={{ duration: 0.6, delay: 0.1 }}
//             className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#005369]"
//           >
//             What They Think of Us
//           </motion.h2>
//           <div className="flex justify-center mt-4">
//             <div className="w-28 h-1 bg-[#c2b790]"></div>
//           </div>
//         </div>

//         {/* Testimonial Content */}
//         <div className="relative max-w-4xl mx-auto">
//           {/* Quote marks - decorative */}
//           <div className="absolute -top-8 -left-4 md:-left-8 text-7xl md:text-8xl text-[#005369]/10 font-serif">
//             "
//           </div>
          
//           {/* Testimonial slider */}
//           <div className="relative h-[300px] md:h-[280px] overflow-hidden">
//             {testimonials.map((testimonial, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 50 }}
//                 animate={{ 
//                   opacity: current === index ? 1 : 0,
//                   y: current === index ? 0 : 30
//                 }}
//                 transition={{ duration: 0.6, ease: "easeOut" }}
//                 className={`absolute inset-0 ${
//                   current === index ? "pointer-events-auto" : "pointer-events-none"
//                 }`}
//               >
//                 <div className="p-6 md:p-10 bg-gray-50 rounded-lg border border-gray-200 h-full flex flex-col justify-center">
//                   {/* Testimonial text with exact line breaks */}
//                   <p className="text-gray-700 text-lg md:text-xl leading-relaxed font-light">
//                     {testimonial.text}
//                   </p>
                  
//                   {/* Client info */}
//                   <div className="mt-8 pt-6 border-t border-gray-300">
//                     <h4 className="text-xl md:text-2xl font-bold text-[#005369]">
//                       {testimonial.name}
//                     </h4>
//                     <p className="text-gray-600 font-medium">
//                       {testimonial.role}
//                     </p>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
          
//           {/* Navigation dots */}
//           <div className="flex justify-center gap-3 mt-8">
//             {testimonials.map((_, index) => (
//               <button
//                 key={index}
//                 onClick={() => setCurrent(index)}
//                 className={`h-2 rounded-full transition-all duration-300 ${
//                   current === index 
//                     ? "w-10 bg-[#c2b790]" 
//                     : "w-2 bg-gray-300 hover:bg-gray-400"
//                 }`}
//                 aria-label={`Go to testimonial ${index + 1}`}
//               />
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Decorative background elements */}
//       <div className="absolute top-1/4 right-0 w-64 h-64 bg-[#005369]/5 rounded-full blur-3xl -z-10"></div>
//       <div className="absolute bottom-1/4 left-0 w-48 h-48 bg-[#c2b790]/10 rounded-full blur-3xl -z-10"></div>
//     </section>
//   );
// }

'use client';

import { useState, useEffect } from 'react';
import { Quote } from 'lucide-react';
import AnimatedSection from '@/utils/Animations';

const testimonials = [
  {
    name: 'Paul Trueman',
    role: 'Designer',
    text: 'In my opinion, it was an unforgettable experience working on my ideas. They understood everything I wanted in my project and idea that was great. I would work with Evora Future again for future projects.',
  },
  {
    name: 'Ahmed Al Mansouri',
    role: 'Property Developer',
    text: 'Exceptional attention to detail and professional execution. The team delivered our luxury villa project on time and exceeded all expectations. Highly recommended!',
  },
  {
    name: 'Sarah Johnson',
    role: 'Business Owner',
    text: 'Professional, creative, and always on time. Their vision transformed our commercial space into something truly remarkable. Outstanding service from start to finish.',
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 6500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative bg-white py-20 md:py-28 overflow-hidden">
      {/* Subtle grid overlay - light version for white bg */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb30_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb30_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <div className="relative mx-auto max-w-5xl px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center">
            <span className="inline-block rounded-full  px-4 py-1.5 text-sm font-medium uppercase tracking-wider text-[#c2b790]">
              Testimonials
            </span>
            <h2 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight text-[#005369]">
              What Our Clients Say
            </h2>
             {/* Centered underline */}
          <div className="flex justify-center mt-4">
            <div className="w-28 h-1 bg-[#c2b790]"></div>
          </div>
          </div>
        </AnimatedSection>

        <div className="relative mt-16 min-h-[320px] md:min-h-[280px]">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                idx === current ? 'opacity-100' : 'opacity-0 pointer-events-none'
              }`}
            >
              {/* Testimonial card with dark background */}
              <div className="bg-[#005369] rounded-2xl p-8 md:p-12 border border-[#c2b790]/20 shadow-2xl">
                <Quote size={48} className="text-[#c2b790] mb-6 opacity-80" />
                <p className="text-xl md:text-2xl text-white leading-relaxed mb-8">
                  &ldquo;{t.text}&ldquo;
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-[#c2b790] flex items-center justify-center text-[#005369] text-2xl font-bold">
                    {t.name[0]}
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white">{t.name}</h4>
                    <p className="text-[#c2b790]">{t.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dots - updated to match dark theme but visible on white bg */}
        <div className="mt-10 flex justify-center gap-3">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-3 rounded-full transition-all ${
                i === current 
                  ? 'w-10 bg-[#005369]' 
                  : 'w-3 bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`View testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}