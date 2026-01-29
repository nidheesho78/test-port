// "use client";
// import { motion } from 'framer-motion';
// import { useInView } from 'framer-motion';
// import { useRef, useState } from 'react';
// import Link from 'next/link';
// import Image from 'next/image';

// const featuredProjects = [
//   {
//     title: "Modern Office Space",
//     category: "COMMERCIAL",
//     image: "/images/projects/prj-one.jpg",
//     hoverCategory: "COMMERCIAL"
//   },
//   {
//     title: "Luxury Villa", 
//     category: "RESIDENTIAL",
//     image: "/images/projects/prj-two.jpg",
//     hoverCategory: "RESIDENTIAL"
//   },
//   {
//     title: "Hotel Complex",
//     category: "HOSPITALITY",
//     image: "/images/projects/prj-three.jpg",
//     hoverCategory: "HOSPITALITY"
//   },
// ];

// export default function ProjectsShowcase() {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, margin: "-100px" });
//   const [hoveredIndex, setHoveredIndex] = useState(null);

//   return (
//     <section ref={ref} className="relative bg-white py-16 md:py-24 lg:py-12">
//       <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

//         {/* Section Header */}
//         <div className="text-center mb-12 md:mb-16 lg:mb-20">
//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
//             transition={{ duration: 0.6 }}
//             className="text-[#c2b790] uppercase tracking-[0.3em] font-semibold text-sm mb-4"
//           >
//             PORTFOLIO
//           </motion.p>
          
//           <motion.h2
//             initial={{ opacity: 0, y: 20 }}
//             animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
//             transition={{ duration: 0.6, delay: 0.1 }}
//             className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#005369]"
//           >
//                 Our Recent Work
       
//           </motion.h2>
//            {/* Centered underline */}
//           <div className="flex justify-center mt-4">
//             <div className="w-28 h-1 bg-[#c2b790]"></div>
//           </div>
          

//           <motion.p
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
//                 transition={{ duration: 0.6, delay: 0.2 }}
//                 className="mt-2 text-gray-600 text-lg"
//               >
//                 Signature projects where creativity meets precision.
//               </motion.p>
//         </div>
       

//         {/* Projects Grid */}
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {featuredProjects.map((project, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 50 }}
//               animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
//               transition={{ duration: 0.6, delay: 0.4 + (index * 0.1) }}
//               className="group relative"
//               onMouseEnter={() => setHoveredIndex(index)}
//               onMouseLeave={() => setHoveredIndex(null)}
//             >
//               {/* Main Project Container */}
//               <div className="relative h-[400px] md:h-[450px] rounded-xl overflow-hidden">
//                 {/* Background Image */}
//                 <Image
//                   src={project.image}
//                   alt={project.title}
//                   fill
//                   className="object-cover transition-transform duration-700 group-hover:scale-110"
//                   sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
//                 />
                
//                 {/* Blue Overlay on Hover */}
//                 <div className={`absolute inset-0 bg-[#005369] transition-all duration-500 ${
//                   hoveredIndex === index ? 'opacity-90' : 'opacity-0'
//                 }`} />
                
//                 {/* Content Layer */}
//                 <div className="relative h-full p-6 md:p-8 flex flex-col justify-between">
//                   {/* Top: Empty space or minimal content when not hovered */}
//                   <div className={`transition-all duration-300 ${
//                     hoveredIndex === index ? 'opacity-100' : 'opacity-0'
//                   }`}>
//                     {/* Optional: You can add something here if needed */}
//                   </div>
                  
//                   {/* Middle: Project Title and Category (appears on hover) */}
//                   <div className="flex-1 flex flex-col justify-center items-center text-center">
//                     <div className={`transition-all duration-500 transform ${
//                       hoveredIndex === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
//                     }`}>
//                       {/* Category appears on hover */}
//                       <div className="mb-4">
//                         <span className="text-sm font-semibold text-[#c2b790] uppercase tracking-[0.3em]">
//                           {project.hoverCategory}
//                         </span>
//                       </div>
                      
//                       {/* Title */}
//                       <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
//                         {project.title}
//                       </h3>
                      
//                       {/* Separator Line */}
//                       <div className="h-[2px] w-16 bg-[#c2b790] mx-auto"></div>
//                     </div>
//                   </div>
                  
                  
//                 </div>
//               </div>   
//             </motion.div>
//           ))}
//         </div>
//         <div className="flex flex-col lg:flex-row lg:items-end py-16 lg:justify-center gap-6">  
//   <motion.div
//     initial={{ opacity: 0, y: 20 }}
//     animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
//     transition={{ duration: 0.6, delay: 0.3 }}
//   >
//     <Link 
//       href="/projects" 
//       className="group inline-flex items-center gap-3 bg-[#005369] text-white font-bold hover:bg-[#c2b790] hover:text-white transition-all duration-300 px-8 py-4 rounded-xl"
//     >
//       <span>View All Projects</span>
//       <span className="transition-transform duration-300 group-hover:translate-x-2">→</span>
//     </Link>
//   </motion.div>
// </div>
//       </div>

//       {/* Decorative background elements */}
//       <div className="absolute top-1/3 right-0 w-48 h-48 bg-[#c2b790]/10 rounded-full blur-3xl -z-10"></div>
//       <div className="absolute bottom-1/3 left-0 w-48 h-48 bg-[#005369]/5 rounded-full blur-3xl -z-10"></div>
//     </section>
//   );
// }
import Link from 'next/link';
import Image from 'next/image';
import AnimatedSection from '@/utils/Animations';
import { ArrowRight } from 'lucide-react';

const featuredProjects = [
  {
    title: 'Luxury Residential Villa',
    category: 'Residential',
    image: 'https://images.pexels.com/photos/31817157/pexels-photo-31817157.jpeg',
  },
  {
    title: 'Modern Office Space',
    category: 'Commercial',
    image: 'https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg', // bright modern open-plan office (very popular & clean)
  },
  {
    title: 'Premium Hotel Lobby',
    category: 'Hospitality',
    image: 'https://images.pexels.com/photos/29649745/pexels-photo-29649745.jpeg',
  },
];

export default function ProjectsShowcase() {
  return (
    <section className="bg-white py-20 md:py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center">
            <span className="inline-block text-[#c2b790] uppercase tracking-widest font-medium text-sm md:text-base">
              PORTFOLIO
            </span>
            <h2 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight text-[#005369]">
              Our Recent Work
            </h2>
            <div className="flex justify-center mt-4">
            <div className="w-28 h-1 bg-[#c2b790]"></div>
          </div>
          </div>
        </AnimatedSection>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project, idx) => (
            <AnimatedSection key={idx} delay={idx * 150}>
              <div className="group relative overflow-hidden rounded-xl bg-gray-100 shadow-lg transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />

                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#005369]/90 via-[#005369]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Title - appears on hover */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                    <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                    <span className="inline-block rounded-full bg-[#c2b790] px-4 py-1.5 text-sm font-medium text-[#005369]">
                      {project.category}
                    </span>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={450}>
          <div className="mt-16 text-center">
            <Link
              href="/projects"
              className="inline-flex items-center gap-3 rounded-lg border-2 border-[#005369] px-8 md:px-12 py-4 md:py-5 text-base md:text-lg font-semibold text-[#005369] transition-all hover:bg-[#005369] hover:text-white hover:scale-105"
            >
              View All Projects <ArrowRight size={20} />
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}