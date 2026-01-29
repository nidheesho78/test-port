// "use client";
// import { motion } from 'framer-motion';
// import { useInView } from 'framer-motion';
// import { useRef } from 'react';
// import Link from 'next/link';
// import { Home, ShoppingCart, Recycle } from "lucide-react";
// import Image from "next/image";

// export default function ServicesSection() {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, margin: "-100px" });

//   return (
//     <section ref={ref} className="relative bg-white py-16 md:py-24 lg:py-32">
//       <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
//         {/* Section Header */}
//         <div className="text-center mb-12 md:mb-16 lg:mb-20">
//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
//             transition={{ duration: 0.6 }}
//             className="text-[#c2b790] uppercase tracking-[0.3em] font-semibold text-sm mb-4"
//           >
//             SERVICES
//           </motion.p>
          
//           <motion.h2
//             initial={{ opacity: 0, y: 20 }}
//             animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
//             transition={{ duration: 0.6, delay: 0.1 }}
//             className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#005369]"
//           >
//             Best solutions for your dream.
//           </motion.h2>
//         </div>

//         <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
//           {/* Left: Services Cards */}
//           <div className="space-y-12">
//             {/* Residential Service */}
//             <motion.div
//               initial={{ opacity: 0, x: -50 }}
//               animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
//               transition={{ duration: 0.6, delay: 0.2 }}
//               className="group bg-white p-8 rounded-lg hover:shadow-xl transition-all duration-300 border border-gray-200"
//             >
//               <div className="flex items-start gap-8">
//                 <div className="flex-shrink-0 w-20 h-20 rounded-full bg-[#005369] flex items-center justify-center text-white group-hover:bg-[#c2b790] transition-colors duration-300">
//                   <Home size={32} />
//                 </div>
//                 <div>
//                   <h3 className="text-2xl md:text-3xl font-bold text-[#005369] mb-4">
//                     RESIDENTIAL
//                   </h3>
//                   <p className="text-gray-700 text-lg leading-relaxed">
//                     We provide all materials, labor, equipment and ensure a<br />
//                     safe and secure execution of your dream home interiors.
//                   </p>
//                 </div>
//               </div>
//             </motion.div>

//             {/* Commercial Service */}
//             <motion.div
//               initial={{ opacity: 0, x: -50 }}
//               animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
//               transition={{ duration: 0.6, delay: 0.3 }}
//               className="group bg-white p-8 rounded-lg hover:shadow-xl transition-all duration-300 border border-gray-200"
//             >
//               <div className="flex items-start gap-8">
//                 <div className="flex-shrink-0 w-20 h-20 rounded-full bg-[#005369] flex items-center justify-center text-white group-hover:bg-[#c2b790] transition-colors duration-300">
//                   <ShoppingCart size={32} />
//                 </div>
//                 <div>
//                   <h3 className="text-2xl md:text-3xl font-bold text-[#005369] mb-4">
//                     COMMERCIAL
//                   </h3>
//                   <p className="text-gray-700 text-lg leading-relaxed">
//                     We provide all materials, labor, equipment and ensure a<br />
//                     safe and secure fit-out for offices, shops, and<br />
//                     commercial spaces.
//                   </p>
//                 </div>
//               </div>
//             </motion.div>

//             {/* Sustainable Space Service */}
//             <motion.div
//               initial={{ opacity: 0, x: -50 }}
//               animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
//               transition={{ duration: 0.6, delay: 0.4 }}
//               className="group bg-white p-8 rounded-lg hover:shadow-xl transition-all duration-300 border border-gray-200"
//             >
//               <div className="flex items-start gap-8">
//                 <div className="flex-shrink-0 w-20 h-20 rounded-full bg-[#005369] flex items-center justify-center text-white group-hover:bg-[#c2b790] transition-colors duration-300">
//                   <Recycle size={32} />
//                 </div>
//                 <div>
//                   <h3 className="text-2xl md:text-3xl font-bold text-[#005369] mb-4">
//                     SUSTAINABLE SPACE
//                   </h3>
//                   <p className="text-gray-700 text-lg leading-relaxed">
//                     We provide eco-friendly, energy-efficient designs for a<br />
//                     greener tomorrow with sustainable materials.
//                   </p>
//                 </div>
//               </div>
//             </motion.div>

//             {/* View All Services Button */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
//               transition={{ duration: 0.6, delay: 0.5 }}
//               className="pt-4"
//             >
//               <Link 
//                 href="/services" 
//                 className="group inline-flex items-center gap-3 text-[#005369] font-bold hover:text-[#00394d] transition-colors text-xl"
//               >
//                 <span>View All Services</span>
//                 <span className="transition-transform duration-300 group-hover:translate-x-2 text-2xl">→</span>
//               </Link>
//             </motion.div>
//           </div>

//           {/* Right: Large Image */}
//           <motion.div
//             initial={{ opacity: 0, scale: 0.95 }}
//             animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
//             transition={{ duration: 0.8, delay: 0.3 }}
//             className="relative h-[500px] md:h-[600px] lg:h-[750px] rounded-xl overflow-hidden"
//           >
//             <Image
//               src="/images/service-section.jpg" // Replace with your image
//               alt="Modern interior design"
//               fill
//               className="object-cover"
//               priority
//             />
//             {/* Optional gradient overlay */}
//             <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
//           </motion.div>
//         </div>
//       </div>

//       {/* Decorative background elements */}
//       <div className="absolute top-1/4 right-0 w-64 h-64 bg-[#c2b790]/10 rounded-full blur-3xl -z-10"></div>
//       <div className="absolute bottom-1/4 left-0 w-48 h-48 bg-[#005369]/5 rounded-full blur-3xl -z-10"></div>
//     </section>
//   );
// }

import { Home, Building2, Wrench, Paintbrush, Hammer, Zap } from 'lucide-react';
import AnimatedSection from '@/utils/Animations';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const services = [
  {
    icon: Home,
    title: 'RESIDENTIAL',
    description: 'Complete interior fit-out solutions for villas, apartments, and homes with premium materials and craftsmanship.',
  },
  {
    icon: Building2,
    title: 'COMMERCIAL',
    description: 'Professional fit-out services for offices, retail spaces, and corporate environments.',
  },
  {
    icon: Hammer,
    title: 'CIVIL WORKS',
    description: 'Comprehensive civil construction including plastering, block work, tile & marble fixing, and screeding.',
  },
  {
    icon: Zap,
    title: 'MEP WORKS',
    description: 'Expert electrical and plumbing installations for residential and commercial projects.',
  },
  {
    icon: Wrench,
    title: 'JOINERY WORKS',
    description: 'Custom kitchen cabinets, wardrobes, TV units, and high-quality woodwork solutions.',
  },
  {
    icon: Paintbrush,
    title: 'PAINTING & FINISHING',
    description: 'Professional internal & external painting, epoxy flooring, and decorative finishes.',
  },
];

export default function ServicesSection() {
  return (
    <section className="relative bg-[#005369] py-20 md:py-28 lg:py-36 overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#c2b79050_1px,transparent_1px),linear-gradient(to_bottom,#c2b79050_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-16">
            <span className="inline-block text-[#c2b790] uppercase tracking-widest font-medium text-sm md:text-base">
              WHAT WE OFFER
            </span>
            <h2 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
              Our Services
            </h2>
           <div className="flex justify-center mt-4">
            <div className="w-28 h-1 bg-[#c2b790]"></div>
          </div>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <AnimatedSection key={idx} delay={idx * 100}>
                <div className="group bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:bg-white/10 hover:border-[#c2b790] transition-all duration-300 hover:scale-105">
                  <div className="w-16 h-16 rounded-full bg-[#c2b790]/20 flex items-center justify-center text-[#c2b790] mb-6 group-hover:bg-[#c2b790] group-hover:text-[#005369] transition-all duration-300">
                    <Icon size={32} />
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-4">{service.title}</h3>
                  <p className="text-white/80 leading-relaxed">{service.description}</p>
                </div>
              </AnimatedSection>
            );
          })}
        </div>

        <AnimatedSection delay={600}>
          <div className="mt-16 text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-3 rounded-lg border-2 border-[#c2b790] bg-[#c2b790] px-8 md:px-12 py-4 md:py-5 text-base md:text-lg font-semibold text-[#005369] transition-all hover:bg-transparent hover:text-white hover:scale-105"
            >
              View All Services <ArrowRight size={20} />
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}