// // "use client";

// // import { useState } from "react";
// // import Image from "next/image";

// // // Sample project data – replace paths with your real images
// // const allProjects = [
// //   // Architecture
// //   { id: 1, category: "architecture", src: "/projects/arch-1.jpg", alt: "Modern tower facade", aspect: "aspect-[4/5]" },
// //   { id: 2, category: "architecture", src: "/projects/arch-2.jpg", alt: "Geometric building", aspect: "aspect-[3/4]" },
// //   { id: 3, category: "architecture", src: "/projects/arch-3.jpg", alt: "White concrete structure", aspect: "aspect-[5/6]" },

// //   // Interior
// //   { id: 4, category: "interior", src: "/projects/int-1.jpg", alt: "Minimal living room", aspect: "aspect-[4/3]" },
// //   { id: 5, category: "interior", src: "/projects/int-2.jpg", alt: "Luxury bedroom", aspect: "aspect-[3/4]" },
// //   { id: 6, category: "interior", src: "/projects/int-3.jpg", alt: "Modern kitchen", aspect: "aspect-[5/4]" },

// //   // Decor
// //   { id: 7, category: "decor", src: "/projects/decor-1.jpg", alt: "Wall art installation", aspect: "aspect-[4/5]" },
// //   { id: 8, category: "decor", src: "/projects/decor-2.jpg", alt: "Sculptural decor piece", aspect: "aspect-[3/5]" },
// //   { id: 9, category: "decor", src: "/projects/decor-3.jpg", alt: "Lighting feature", aspect: "aspect-[5/6]" },
  
// // ];

// // export default function ProjectsPage() {
// //   const [activeCategory, setActiveCategory] = useState("all");
// //   const [selectedImage, setSelectedImage] = useState(null);

// //   const filteredProjects = activeCategory === "all"
// //     ? allProjects
// //     : allProjects.filter((p) => p.category === activeCategory);

// //   return (
// //     <main className=" min-h-screen">
// //       {/* Banner / Hero Section */}
// //       <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center bg-neutral-950 overflow-hidden">
// //         <div className="absolute inset-0 opacity-30 pointer-events-none">
// //           <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/60 to-black" />
// //         </div>

// //         <div className="relative z-10 text-center px-6 max-w-5xl">
// //           <div className="mb-6 text-sm md:text-base uppercase tracking-widest text-emerald-400 font-medium">
// //             HOME / PROJECTS
// //           </div>

// //           <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-none">
// //             PROJECTS
// //           </h1>

// //           <p className="mt-8 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
// //             Our Projects harness design and technology to create places where people live, work, and heal.
// //           </p>
// //         </div>
// //       </section>

// //       {/* Category Tabs */}
// //       <section className="border-b border-neutral-800 bg-neutral-950 sticky top-0 z-40">
// //         <div className="mx-auto max-w-7xl px-6 lg:px-8">
// //           <div className="flex justify-center md:justify-start gap-8 md:gap-16 py-6 md:py-8 overflow-x-auto">
// //             {["all", "architecture", "interior", "decor"].map((cat) => (
// //               <button
// //                 key={cat}
// //                 onClick={() => setActiveCategory(cat)}
// //                 className={`
// //                   text-sm md:text-base font-medium uppercase tracking-widest transition-colors
// //                   ${activeCategory === cat
// //                     ? "text-emerald-400 border-b-2 border-emerald-400 pb-1"
// //                     : "text-gray-400 hover:text-gray-200"}
// //                 `}
// //               >
// //                 {cat.toUpperCase()}
// //               </button>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* Masonry Gallery */}
// //       <section className="py-16 md:py-24">
// //         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
// //           <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 md:gap-6 space-y-4 md:space-y-6">
// //             {filteredProjects.map((project) => (
// //               <div
// //                 key={project.id}
// //                 className={`group relative cursor-pointer break-inside-avoid ${project.aspect}`}
// //                 onClick={() => setSelectedImage(project.src)}
// //               >
// //                 <div className="relative overflow-hidden rounded-xl shadow-lg">
// //                   <Image
// //                     src={project.src}
// //                     alt={project.alt}
// //                     fill
// //                     className="object-cover transition-transform duration-700 group-hover:scale-110"
// //                   />
// //                   <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
// //                   <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
// //                     <span className="text-white text-lg font-medium">View Project</span>
// //                   </div>
// //                 </div>
// //               </div>
// //             ))}
// //           </div>

// //           {filteredProjects.length === 0 && (
// //             <p className="text-center text-gray-400 py-20 text-xl">
// //               No projects found in this category.
// //             </p>
// //           )}
// //         </div>
// //       </section>

// //       {/* Lightbox Popup */}
// //       {selectedImage && (
// //         <div
// //           className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
// //           onClick={() => setSelectedImage(null)}
// //         >
// //           <button
// //             className="absolute top-6 right-6 text-white text-4xl hover:text-emerald-400"
// //             onClick={() => setSelectedImage(null)}
// //           >
// //             ×
// //           </button>

// //           <div className="relative max-w-5xl w-full max-h-[90vh]" onClick={(e) => e.stopPropagation()}>
// //             <Image
// //               src={selectedImage}
// //               alt="Enlarged project image"
// //               fill
// //               className="object-contain animate-fade-in-scale"
// //             />
// //           </div>
// //         </div>
// //       )}
// //     </main>
// //   );
// // }


// import PageBanner from '@/utils/PageBanner';
// import AnimatedSection from '@/utils/Animations';
// import { Home, Building2, Hammer, Zap, Wrench, Paintbrush, Droplets, Wallpaper, Maximize, Cog, Scissors, ShieldCheck, ArrowRight } from 'lucide-react';
// import Link from 'next/link';



// const allServices = [
//   {
//     icon: Home,
//     title: 'Residential Interior Fit-out',
//     description: 'Complete interior solutions for villas, apartments, and homes including design, execution, and finishing with premium materials and expert craftsmanship.',
//     features: ['Custom home interiors', 'Villa fit-outs', 'Apartment renovations', 'Luxury residential projects'],
//   },
//   {
//     icon: Building2,
//     title: 'Commercial Interior Fit-out',
//     description: 'Professional fit-out services for offices, retail spaces, showrooms, and corporate environments with focus on functionality and aesthetics.',
//     features: ['Office interiors', 'Retail spaces', 'Showroom design', 'Corporate fit-outs'],
//   },
//   {
//     icon: Hammer,
//     title: 'Civil Works',
//     description: 'Comprehensive civil construction services including plastering, block work, tile & marble fixing, screeding, and interlock & kerbstone works.',
//     features: ['Plastering & block work', 'Tile & marble fixing', 'Screeding works', 'Interlock & kerbstone'],
//   },
//   {
//     icon: Zap,
//     title: 'MEP Works',
//     description: 'Expert mechanical, electrical, and plumbing installations ensuring safe, efficient, and compliant systems for residential and commercial projects.',
//     features: ['Electrical installations', 'Plumbing systems', 'HVAC solutions', 'MEP consultancy'],
//   },
//   {
//     icon: Wrench,
//     title: 'Joinery Works',
//     description: 'High-quality custom woodwork including kitchen cabinets, wardrobes, cladding, TV units, office & retail counters, and wall paneling.',
//     features: ['Kitchen cabinets', 'Wardrobes', 'TV units & cladding', 'Office counters'],
//   },
//   {
//     icon: Paintbrush,
//     title: 'Painting Works',
//     description: 'Professional internal & external painting, floor epoxy painting, and decorative painting services with premium quality finishes.',
//     features: ['Internal painting', 'External painting', 'Epoxy flooring', 'Decorative finishes'],
//   },
//   {
//     icon: Wallpaper,
//     title: 'Interior Decor',
//     description: 'Ceiling work, partitions, wall cladding, gypsum molding, and corniche work to enhance aesthetics and functionality of your space.',
//     features: ['Ceiling installations', 'Gypsum partitions', 'Wall cladding', 'Decorative molding'],
//   },
//   {
//     icon: Droplets,
//     title: 'Waterproofing',
//     description: 'Professional waterproofing solutions for bathrooms, kitchens, terraces, and basements to prevent water damage and ensure longevity.',
//     features: ['Bathroom waterproofing', 'Terrace sealing', 'Basement protection', 'Leak prevention'],
//   },
//   {
//     icon: Maximize,
//     title: 'Aluminium & Glass Works',
//     description: 'Installation of glass partitions, shower cubicles, windows, and doors with modern designs and durable materials.',
//     features: ['Glass partitions', 'Shower cubicles', 'Aluminium windows', 'Glass doors'],
//   },
//   {
//     icon: Scissors,
//     title: 'Floor Fixing',
//     description: 'Expert installation of carpets, vinyl flooring, and SPC flooring with precision and quality assurance.',
//     features: ['Carpet installation', 'Vinyl flooring', 'SPC flooring', 'Floor finishing'],
//   },
//   {
//     icon: Cog,
//     title: 'Automation Solutions',
//     description: 'Smart home and office automation systems for lighting, climate control, security, and entertainment.',
//     features: ['Smart home systems', 'Lighting automation', 'Climate control', 'Security systems'],
//   },
//   {
//     icon: ShieldCheck,
//     title: 'Annual Maintenance Contract',
//     description: 'Comprehensive maintenance services for villas, apartments, offices, and schools ensuring optimal condition year-round.',
//     features: ['Preventive maintenance', 'Emergency repairs', 'Regular inspections', 'Facility management'],
//   },
// ];

// export default function ServicesPage() {
//   return (
//     <main>
//       <PageBanner
//         title="Our Services"
//         subtitle="Comprehensive interior solutions tailored to your needs"
//         image="https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg"
//       />

     
//      {/* What We Offer + Services Grid - Combined Section */}
// <section className="py-20 bg-gray-50">
//   <div className="container mx-auto px-6">
    
//     {/* Heading + Description */}
//     <AnimatedSection>
//       <div className="text-center mb-16">
//         <h2 className="text-4xl md:text-5xl font-bold text-[#005369]">
//           What We Offer
//         </h2>
//         <div className="w-24 h-1 bg-[#c2b790] mt-4 mx-auto" />
//         <p className="mt-6 text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
//           From concept to completion, we deliver exceptional interior fit-out and maintenance services across UAE.
//         </p>
//       </div>
//     </AnimatedSection>

//     {/* Services Grid */}
//     <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
//       {allServices.map((service, idx) => {
//         const Icon = service.icon;
//         return (
//           <AnimatedSection key={idx} delay={idx * 60}>
//             <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] h-full border border-gray-100">
//               {/* Icon Circle */}
//               <div className="w-16 h-16 rounded-full bg-[#005369] flex items-center justify-center text-[#c2b790] mb-6 mx-auto md:mx-0">
//                 <Icon size={32} strokeWidth={2} />
//               </div>
              
//               {/* Title */}
//               <h3 className="text-2xl font-bold text-[#005369] mb-4 text-center md:text-left">
//                 {service.title}
//               </h3>
              
//               {/* Description */}
//               <p className="text-gray-700 leading-relaxed mb-6 text-center md:text-left">
//                 {service.description}
//               </p>
              
//               {/* Features List */}
//               <ul className="space-y-2.5">
//                 {service.features.map((feature, fIdx) => (
//                   <li key={fIdx} className="flex items-start text-gray-600">
//                     <span className="w-2.5 h-2.5 rounded-full bg-[#c2b790] mt-1.5 mr-3 flex-shrink-0" />
//                     <span>{feature}</span>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </AnimatedSection>
//         );
//       })}
//     </div>
//   </div>
// </section>

//       {/* Have a Project in Mind? CTA Section */}
// <section className="py-20 md:py-28 bg-white">
//   <div className="container mx-auto px-6">
//     <div className="max-w-4xl mx-auto text-center">
//       {/* Main Heading */}
//       <AnimatedSection>
//         <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#005369] mb-6 tracking-tight">
//           Have a Project in Mind?
//         </h2>
//       </AnimatedSection>

//       {/* Subtitle */}
//       <AnimatedSection delay={150}>
//         <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-10 max-w-3xl mx-auto">
//           Let's bring your vision to life with our expert interior solutions.
//         </p>
//       </AnimatedSection>

//       {/* Button */}
//       <AnimatedSection delay={300}>
//         <Link
//           href="/contact"
//           className="inline-flex items-center gap-3 px-10 md:px-12 py-5 md:py-6 bg-[#005369] text-white text-lg md:text-xl font-semibold rounded-xl shadow-lg hover:bg-[#00394d] transition-all duration-300 hover:shadow-2xl hover:scale-[1.03] group"
//         >
//           Start Your Project
//           <ArrowRight 
//             size={24} 
//             className="transition-transform duration-300 group-hover:translate-x-2" 
//           />
//         </Link>
//       </AnimatedSection>
//     </div>
//   </div>
// </section>
//     </main>
//   );
// }



'use client';

import { useState } from 'react';
import PageBanner from '@/utils/PageBanner';
import AnimatedSection from '@/utils/Animations';
import Image from 'next/image';

// Template project data - you can replace with actual projects later
const projectCategories = ['All', 'Residential', 'Commercial', 'Hospitality', 'Retail'];

const projects = [
  {
    id: 1,
    title: 'Luxury Villa Interior - Dubai',
    category: 'Residential',
    image: 'https://images.unsplash.com/photo-1584973547886-92c625508e24',
    description: 'Complete interior fit-out for a luxury villa including living spaces, bedrooms, kitchen, and outdoor areas.',
    year: '2024',
    location: 'Dubai, UAE',
  },
  {
    id: 2,
    title: 'Modern Office Space',
    category: 'Commercial',
    image: 'https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg',
    description: 'Corporate office interior with modern design, meeting rooms, and collaborative workspaces.',
    year: '2024',
    location: 'Dubai, UAE',
  },
  {
    id: 3,
    title: 'Premium Hotel Lobby',
    category: 'Hospitality',
    image: 'https://images.pexels.com/photos/33803739/pexels-photo-33803739.jpeg',
    description: 'Elegant hotel lobby design with custom furniture, lighting, and premium finishes.',
    year: '2023',
    location: 'Abu Dhabi, UAE',
  },
  {
    id: 4,
    title: 'Contemporary Kitchen Design',
    category: 'Residential',
    image: 'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg',
    description: 'Modern kitchen with custom cabinetry, premium appliances, and innovative storage solutions.',
    year: '2024',
    location: 'Sharjah, UAE',
  },
  {
    id: 5,
    title: 'Luxury Residential Interior',
    category: 'Residential',
    image: 'https://images.pexels.com/photos/3754595/pexels-photo-3754595.jpeg',
    description: 'High-end residential project featuring elegant living spaces and sophisticated design elements.',
    year: '2023',
    location: 'Dubai, UAE',
  },
  {
    id: 6,
    title: 'Boutique Retail Space',
    category: 'Retail',
    image: 'https://images.pexels.com/photos/5288134/pexels-photo-5288134.jpeg',
    description: 'Stylish retail interior with custom display units, lighting design, and customer-friendly layout.',
    year: '2024',
    location: 'Dubai Mall, UAE',
  },
];

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Filter projects based on selected category
  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <main>
      <PageBanner
        title="Our Projects"
        subtitle="Showcasing excellence in interior fit-out across UAE"
        image="https://images.pexels.com/photos/18435276/pexels-photo-18435276.jpeg"
      />

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-[#005369] mb-6">
                Portfolio of Excellence
              </h2>
               <div className="w-32 h-1 bg-[#c2b790] mt-3 mx-auto" />
              <p className="text-lg text-gray-700 mt-3 leading-relaxed">
                Explore our diverse portfolio of successfully completed projects. Each project reflects our commitment to quality, innovation, and client satisfaction.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <div className="flex flex-wrap justify-center gap-4">
              {projectCategories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-lg font-semibold text-base transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-[#005369] text-white shadow-lg scale-105'
                      : 'bg-white text-[#005369] hover:bg-[#005369] hover:text-white shadow-md'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12 pb-20 bg-gray-50">
        <div className="container mx-auto px-6">
          {filteredProjects.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-xl text-gray-600">No projects found in this category.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects.map((project, idx) => (
                <AnimatedSection key={project.id} delay={idx * 100}>
                  <div className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                    <div className="relative h-64 overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute top-4 right-4">
                        <span className="bg-[#005369] text-white px-4 py-2 rounded-full text-sm font-medium">
                          {project.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-2xl font-bold text-[#005369] mb-3 group-hover:text-[#c2b790] transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 mb-4 line-clamp-2">{project.description}</p>
                      <div className="flex justify-between items-center text-sm text-gray-500">
                        <span className="flex items-center">
                          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          {project.location}
                        </span>
                        <span>{project.year}</span>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          )}

         
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-[#005369] mb-6">
                Let&apos;s Create Something Amazing Together
              </h2>
              <p className="text-xl text-gray-700 mb-8">
                Ready to start your next project? Contact us for a consultation.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center gap-3 rounded-lg border-2 border-[#005369] px-8 md:px-12 py-4 md:py-5 text-base md:text-lg font-semibold text-[#005369] transition-all hover:bg-[#005369] hover:text-white hover:scale-105"
              >
                Contact Us
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}