"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Award, Sparkles } from "lucide-react";
import Link from "next/link";

const CERTS = [
  {
    title: "OCI Generative AI Professional",
    issuer: "Oracle",
    date: "Sept '25",
    image: "/cert-oracle.png",
    link: "https://drive.google.com/file/d/17ozalwoEafga7qayd4VEaP1nLOO2Qs-Y/view",
    color: "bg-rose-500",
    tapeColor: "bg-rose-300/50",
    tilt: "rotate-2",
  },
  {
    title: "The Bits and Bytes of Computer Networking",
    issuer: "Google",
    date: "Sept '24",
    image: "/cert-google.png",
    link: "https://www.coursera.org/account/accomplishments/verify/EFW2TEZV99H5",
    color: "bg-blue-500",
    tapeColor: "bg-blue-300/50",
    tilt: "-rotate-2",
  },
  {
    title: "Data Structures & Algorithms",
    issuer: "NEO COLAB",
    date: "Dec '24",
    image: "/cert-lpu.png",
    link: "https://drive.google.com/file/d/1_T2x18un2WswI-zoj_Lnfli8MbmI8BSC/view",
    color: "bg-emerald-500",
    tapeColor: "bg-emerald-300/50",
    tilt: "rotate-3",
  },
  {
    title: "Introduction to Programming in C",
    issuer: "NPTEL",
    date: "Apr '24",
    image: "/cert-nptel.png",
    link: "https://drive.google.com/file/d/1fnu-U4QDG7oEazwihg3CU-OcpR_YE6YI/view?usp=sharing",
    color: "bg-orange-500",
    tapeColor: "bg-orange-300/50",
    tilt: "-rotate-3",
  }
];

export default function Certifications() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const parallaxY = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section id="certifications" ref={containerRef} className="relative py-24 md:py-32 overflow-hidden bg-zinc-950">
      
      {/* Unique Graph-Paper Style Background */}
      <div className="absolute inset-0 z-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
        backgroundSize: `40px 40px`
      }}></div>
      
      {/* Background Orbs */}
      <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[120px] mix-blend-screen pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[150px] mix-blend-screen pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full mb-12 md:mb-20">
         <motion.div 
           initial={{ opacity: 0, x: -50 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8, ease: "easeOut" }}
           className="flex items-center gap-4 mb-4"
         >
           <div className="w-12 h-[2px] bg-gradient-to-r from-purple-500 to-transparent"></div>
           <h2 className="text-sm md:text-lg font-bold uppercase tracking-[0.4em] text-purple-400 drop-shadow-md">Accreditations</h2>
         </motion.div>
         <motion.h3
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
           className="text-4xl md:text-6xl font-black text-white tracking-tighter"
         >
           Official <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Verifications</span>.
         </motion.h3>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-20 w-full pb-10">
        
        {/* Sticky Notes Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8 md:gap-12 lg:gap-16 pt-8">
          {CERTS.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8, y: 50, rotateZ: (index % 2 === 0 ? 1 : -1) * (10 + (index % 3) * 2) }}
              whileInView={{ opacity: 1, scale: 1, y: 0, rotateZ: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: index * 0.15, type: "spring", bounce: 0.5 }}
              className="relative group h-full flex flex-col perspective-1000"
            >
               {/* Translucent Neon Sticky Note Body */}
               <motion.div 
                 whileHover={{ scale: 1.05, rotate: 0, y: -10 }}
                 transition={{ type: "spring", stiffness: 300, damping: 20 }}
                 className={`flex-1 relative w-full rounded-2xl ${cert.tilt} bg-white/5 border border-white/10 backdrop-blur-xl shadow-[20px_20px_40px_rgba(0,0,0,0.5)] group-hover:shadow-[0_0_50px_rgba(255,255,255,0.1)] p-4 flex flex-col z-10 transition-all duration-300 cursor-pointer`}
               >
                  {/* The 'Tape' rendering at the top of the sticky note */}
                  <div className={`absolute -top-3 left-1/2 -translate-x-1/2 w-28 h-6 ${cert.tapeColor} opacity-70 rotate-[-2deg] rounded-sm backdrop-blur-md shadow-sm z-30 transition-all group-hover:opacity-30 group-hover:w-0 overflow-hidden`}></div>

                  {/* Header / Pin Identifier */}
                  <div className="flex items-center justify-between mb-4 mt-2">
                     <div className={`w-8 h-8 rounded-full ${cert.color} flex items-center justify-center shadow-lg shadow-black/50`}>
                        <Award className="w-4 h-4 text-white" />
                     </div>
                     <span className="text-[10px] md:text-xs font-mono text-zinc-400 font-bold uppercase tracking-widest bg-black/40 px-3 py-1 rounded-full">{cert.date}</span>
                  </div>

                  {/* Certificate Image Frame */}
                  <div className="w-full aspect-[4/3] rounded-xl overflow-hidden bg-black/80 mb-4 border border-white/5 relative group-hover:border-white/20 transition-all">
                     <img 
                       src={cert.image} 
                       alt={cert.title} 
                       className="w-full h-full object-contain scale-95 group-hover:scale-105 transition-transform duration-500 ease-out"
                     />
                     {/* Gloss overlay */}
                     <div className="absolute inset-0 bg-gradient-to-tr from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10 pointer-events-none" />
                  </div>

                  {/* Text Details Area */}
                  <div className="flex flex-col flex-1 pb-16">
                     <h4 className="text-xl font-bold text-white leading-tight mb-2 tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-zinc-400 transition-all">
                       {cert.title}
                     </h4>
                     <p className="text-sm font-medium text-zinc-400 mt-auto uppercase tracking-wider">{cert.issuer}</p>
                  </div>

                  {/* Hover Reveal Button explicitly anchored to bottom of note */}
                  <div className="absolute bottom-4 left-4 right-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 z-20">
                     <Link href={cert.link} target="_blank" className={`w-full py-3 rounded-xl ${cert.color} text-white font-bold flex items-center justify-center gap-2 shadow-lg`}>
                        Verify Credential <ExternalLink className="w-4 h-4" />
                     </Link>
                  </div>

               </motion.div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
