// // components/HeroBanner.tsx
// "use client";

// import { useState, useEffect, useRef } from "react";

// const slides = [
//   {
//     image: "/images/hero-banner-one.png",
//     title: "THE FUTURE",
//     subtitle: "MODERN ARCHITECTURAL DESIGN",
//   },
//   {
//     image: "/images/hero-banner-two.png",
//     title: "YOUR VISION",
//     subtitle: "OUR EXPERTISE",
//   },
//   {
//     image: "/images/hero-banner-three.png",
//     title: "LUXURY INTERIORS",
//     subtitle: "CRAFTED TO PERFECTION",
//   },
// ];

// // Counter data
// const stats = [
//   { id: 1, end: 6, label: "YEARS EXPERIENCE" },
//   { id: 2, end: 200, label: "PROJECTS COMPLETED" },
//   { id: 3, end: 50, label: "HAPPY CLIENTS" },
//   { id: 4, end: 100, label: "QUALITY WORK", suffix: "%" },
// ];

// export default function HeroBanner() {
//   const [current, setCurrent] = useState(0);
//   const [counters, setCounters] = useState([0, 0, 0, 0]);
//   const [hasStarted, setHasStarted] = useState(false);
//   const ref = useRef(null);

//   // Handle slide rotation
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrent((prev) => (prev + 1) % slides.length);
//     }, 7000);
//     return () => clearInterval(interval);
//   }, []);

//   // Start counter animation when component mounts
//   useEffect(() => {
//     setHasStarted(true);
    
//     const duration = 2000;
//     const steps = 60;
//     const stepDuration = duration / steps;
    
//     const intervals = stats.map((stat, index) => {
//       let currentStep = 0;
      
//       const interval = setInterval(() => {
//         currentStep++;
//         const progress = currentStep / steps;
//         const easeOutQuart = 1 - Math.pow(1 - progress, 4);
//         const newValue = Math.floor(stat.end * easeOutQuart);
        
//         setCounters(prev => {
//           const newCounters = [...prev];
//           newCounters[index] = newValue;
//           return newCounters;
//         });
        
//         if (currentStep >= steps) {
//           clearInterval(interval);
//         }
//       }, stepDuration);
      
//       return interval;
//     });
    
//     return () => {
//       intervals.forEach(interval => clearInterval(interval));
//     };
//   }, []);

//   return (
//     <section className="relative min-h-[calc(100vh-80px)] w-full overflow-hidden" ref={ref}>
//       {/* Background Images */}
//       {slides.map((slide, index) => (
//         <div
//           key={index}
//           className={`
//             absolute inset-0 bg-cover bg-center transition-opacity duration-1500 ease-in-out
//             ${index === current ? "opacity-100" : "opacity-0"}
//           `}
//           style={{ backgroundImage: `url(${slide.image})` }}
//         >
//           {/* Semi-transparent blue overlay */}
//           <div className="absolute inset-0 bg-[#005369] opacity-50" />
          
//           {/* Dark gradient overlay */}
//           <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/50" />
//         </div>
//       ))}

//       {/* Content - Centered vertically and horizontally */}
//       <div className="relative z-10 flex min-h-screen items-center justify-center px-5 sm:px-6 lg:px-8 text-center">
//         <div className="max-w-5xl w-full ">
//           {/* Top Title */}
//           <p className="mb-4 text-base md:text-lg font-medium uppercase tracking-[0.3em] text-[#c2b790]">
//             {slides[current].title}
//           </p>

//           {/* Main Heading - Exactly like screenshot (3 lines) */}
//           <h1 className="mb-6 md:mb-8 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black uppercase text-white leading-[0.85] tracking-tight">
//            {slides[current].subtitle}
//           </h1>

//          {/* Description - Exactly from screenshot */}
// <h2 className="mx-auto max-w-4xl text-2xl md:text-3xl text-gray-300 mb-10 md:mb-12 font-light leading-relaxed">
//   Delivering exceptional interior fit-out and maintenance services<br />
//   across UAE since 2019
// </h2>

//           {/* Stats Counter Grid */}
//           <div className="mb-10 md:mb-12">
//             <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-3xl mx-auto">
//               {stats.map((stat, index) => (
//                 <div 
//                   key={stat.id} 
//                   className="text-center"
//                 >
//                   <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-1">
//                     {counters[index]}
//                     {stat.suffix || "+"}
//                   </div>
//                   <div className="text-xs md:text-sm text-gray-300 uppercase tracking-wider font-medium">
//                     {stat.label}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* CTA Button */}
//           <div>
//             <a
//               href="/projects"
//               className="group relative inline-flex items-center gap-3 bg-transparent border-2 border-white px-10 md:px-12 py-4 md:py-5 text-lg md:text-xl font-medium text-white transition-all hover:bg-white/10 hover:scale-105 active:scale-95 overflow-hidden"
//             >
//               <span>VIEW PROJECTS</span>
//               <span className="transition-all duration-300 group-hover:translate-x-2">→</span>
//               <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
//             </a>
//           </div>
//         </div>
//       </div>

//       {/* Slide dots */}
//       <div className="absolute bottom-6 md:bottom-8 left-1/2 z-10 flex -translate-x-1/2 gap-2 md:gap-3">
//         {slides.map((_, i) => (
//           <button
//             key={i}
//             className={`
//               h-2 md:h-2.5 transition-all duration-300 rounded-full
//               ${i === current ? "w-8 md:w-10 bg-[#c2b790]" : "w-2 md:w-2.5 bg-white/50"}
//             `}
//             onClick={() => setCurrent(i)}
//             aria-label={`Go to slide ${i + 1}`}
//           />
//         ))}
//       </div>
//     </section>
//   );
// }


// components/HeroBanner.tsx
"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const slides = [
  {
    image: "/images/hero-banner-one.png",
    title: "THE FUTURE",
    subtitle: "MODERN ARCHITECTURAL DESIGN",
  },
  {
    image: "/images/hero-banner-two.png",
    title: "YOUR VISION",
    subtitle: "OUR EXPERTISE",
  },
  {
    image: "/images/hero-banner-three.png",
    title: "LUXURY INTERIORS",
    subtitle: "CRAFTED TO PERFECTION",
  },
];

// Counter data – updated to match your target values & labels
const stats = [
  { id: 1, end: 6, label: "Years Experience", suffix: "+" },
  { id: 2, end: 200, label: "Projects Done", suffix: "+" },
  { id: 3, end: 100, label: "Client Satisfaction", suffix: "%" },
  { id: 4, end: 50, label: "Team Members", suffix: "+" },
];

export default function HeroBanner() {
  const [current, setCurrent] = useState(0);
  const [counters, setCounters] = useState([0, 0, 0, 0]);
  
  // Slide rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  // Counter animation (runs once on mount)
  useEffect(() => {
    const duration = 2200;
    const steps = 60;
    const stepDuration = duration / steps;

    const intervals = stats.map((stat, index) => {
      let currentStep = 0;

      const interval = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        let newValue = Math.floor(stat.end * easeOutQuart);

        // Ensure we reach exact final value
        if (currentStep >= steps) {
          newValue = stat.end;
        }

        setCounters((prev) => {
          const newCounters = [...prev];
          newCounters[index] = newValue;
          return newCounters;
        });

        if (currentStep >= steps) {
          clearInterval(interval);
        }
      }, stepDuration);

      return interval;
    });

    return () => {
      intervals.forEach((i) => clearInterval(i));
    };
  }, []);

  return (
    <section className="relative min-h-[calc(100vh-80px)] w-full overflow-hidden">
      {/* Background Images */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`
            absolute inset-0 bg-cover bg-center transition-opacity duration-1500 ease-in-out
            ${index === current ? "opacity-100" : "opacity-0"}
          `}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          {/* <div className="absolute inset-0 bg-[#005369] opacity-50" /> */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/50" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-5 sm:px-6 lg:px-8 text-center">
        <div className="max-w-5xl w-full">
          <p className="mb-4 text-base md:text-lg font-medium uppercase tracking-[0.3em] text-[#c2b790]">
            {slides[current].title}
          </p>

          <h1 className="mb-6 md:mb-8 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black uppercase text-white leading-[0.85] tracking-tight">
            {slides[current].subtitle}
          </h1>

          <h2 className="mx-auto max-w-4xl text-2xl md:text-3xl text-gray-300 mb-10 md:mb-12 font-light leading-relaxed">
            Delivering exceptional interior fit-out and maintenance services<br />
            across UAE since 2019
          </h2>

          {/* ── New Counters ── */}
          <div className="mb-10 md:mb-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 text-white">
              {stats.map((stat, index) => (
                <div
                  key={stat.id}
                  className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105"
                >
                  <div className="text-4xl md:text-5xl font-bold text-[#c2b790]">
                    {counters[index]}
                    {stat.suffix}
                  </div>
                  <div className="mt-2 text-sm md:text-base uppercase tracking-wide">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 md:mt-16">
            <Link
              href="/projects"
              className="inline-flex items-center gap-3 rounded-lg border-2 border-[#c2b790] bg-[#c2b790] px-8 md:px-12 py-4 md:py-5 text-base md:text-lg font-semibold text-[#005369] transition-all hover:bg-transparent hover:text-white hover:scale-105 active:scale-95"
            >
              <span>VIEW PROJECTS</span>
              
            </Link>
          </div>
        </div>
      </div>

      {/* Slide dots */}
      <div className="absolute bottom-6 md:bottom-8 left-1/2 z-10 flex -translate-x-1/2 gap-2 md:gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            className={`
              h-2 md:h-2.5 transition-all duration-300 rounded-full
              ${i === current ? "w-8 md:w-10 bg-[#c2b790]" : "w-2 md:w-2.5 bg-white/50"}
            `}
            onClick={() => setCurrent(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}