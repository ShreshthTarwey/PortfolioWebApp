"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { Trophy, Medal, Star, Sparkles } from "lucide-react";
import { useRef } from "react";

export default function Achievements() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  // Parallax effect for the massive background star
  const y = useTransform(scrollYProgress, [0, 1], [-200, 200]);

  return (
    <section id="achievements" ref={containerRef} className="relative py-24 md:py-48 overflow-hidden bg-[#050505]">
       <div className="absolute inset-0 bg-grid z-0 opacity-10 mix-blend-overlay"></div>
       
       {/* Exploding Supernova Background */}
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[800px] bg-[radial-gradient(ellipse_at_center,rgba(234,179,8,0.15)_0%,transparent_60%)] pointer-events-none -z-10" />
       
       {/* Floating Parallax Star */}
       <motion.div style={{ y }} className="absolute right-[10%] top-1/4 opacity-10 pointer-events-none z-0">
          <Sparkles className="w-64 h-64 text-yellow-500" />
       </motion.div>

       <div className="max-w-7xl mx-auto px-6 relative z-20 w-full mb-16">
         <motion.div 
           initial={{ opacity: 0, x: -50 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           className="flex items-center gap-4 mb-4"
         >
           <div className="w-12 h-[2px] bg-gradient-to-r from-yellow-500 to-transparent"></div>
           <h2 className="text-sm md:text-lg font-bold uppercase tracking-[0.4em] text-yellow-500 drop-shadow-md">Triumphs & Glory</h2>
         </motion.div>
         <motion.h3
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="text-4xl md:text-5xl font-black text-white tracking-tighter"
         >
           Forged in Competition.
         </motion.h3>
       </div>

       <div className="max-w-7xl mx-auto px-6 relative z-20 w-full">
         <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
            
            {/* The Master Piece: Paranox 2.0 Hackathon */}
            <motion.div 
               initial={{ opacity: 0, scale: 0.9, rotateY: 10 }}
               whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
               transition={{ duration: 0.8, type: "spring" }}
               viewport={{ once: true, amount: 0.2 }}
               className="lg:col-span-7 relative p-[1px] md:p-[2px] rounded-[3rem] overflow-hidden group shadow-[0_0_100px_rgba(234,179,8,0.1)] perspective-1000"
            >
               {/* Constant Spinning Aura for the massive achievement */}
               <div className="absolute -inset-[150%] bg-[conic-gradient(from_0deg,transparent_0_50%,rgba(234,179,8,0.9)_100%)] animate-[spin_5s_linear_infinite]" />
               
               <div className="relative h-full bg-[#050505] rounded-[calc(3rem-2px)] z-10 overflow-hidden flex flex-col xl:flex-row">
                 
                 {/* Description Content */}
                 <div className="p-8 md:p-12 relative flex-1 flex flex-col justify-center bg-[#050505] order-2 xl:order-1">
                   <div className="absolute top-0 right-12 w-32 h-32 bg-yellow-500/20 blur-[50px] pointer-events-none" />
                   
                   <div className="inline-flex max-w-fit items-center gap-2 px-4 py-2 rounded-full border border-yellow-500/30 bg-yellow-500/10 mb-6 z-30 shadow-[0_0_30px_rgba(234,179,8,0.3)]">
                     <Trophy className="w-4 h-4 text-yellow-500" />
                     <span className="text-yellow-500 font-bold uppercase tracking-widest text-xs md:text-sm">Grand Winner</span>
                   </div>
                   
                   <h3 className="text-3xl md:text-5xl xl:text-6xl font-black text-white mb-4 tracking-tighter z-30">
                     Paranox 2.0 <br/> 
                     <span className="text-yellow-500 font-black text-xl md:text-3xl tracking-widest uppercase opacity-90 block mt-2">National Hackathon</span>
                   </h3>
                   
                   <p className="text-zinc-400 font-medium md:text-lg leading-relaxed z-30 max-w-2xl">
                     Secured 1st Rank internationally out of thousands of developers by engineering a complete, deeply accessible AI-powered educational ecosystem.
                   </p>
                   
                   <div className="mt-8 xl:mt-auto pt-8 text-xs font-mono text-zinc-600 uppercase tracking-widest z-30">
                     Date: <span className="font-bold text-zinc-300">Nov '25</span>
                   </div>
                 </div>

                 {/* Image Hero Section */}
                 <div className="w-full xl:w-[45%] h-[250px] md:h-[350px] xl:h-[450px] relative bg-black overflow-hidden order-1 xl:order-2 shrink-0 border-b xl:border-b-0 xl:border-l border-white/10">
                   <img 
                     src="/paranox.jpg" 
                     className="absolute inset-0 w-full h-full object-cover object-top z-10 transition-all duration-700 group-hover:scale-105 ease-out" 
                     alt="Paranox 2.0 Win"
                   />
                   {/* Gradient shadow separating image from text visually on mobile */}
                   <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#050505] to-transparent z-20 pointer-events-none xl:hidden" />
                   <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/40 to-transparent z-20 pointer-events-none hidden xl:block w-32" />
                 </div>
               </div>
            </motion.div>

            {/* Sub-cards Stack */}
            <div className="lg:col-span-5 flex flex-col gap-6 lg:gap-8 justify-center">
               
               {/* Card 1: Tech Synergy */}
               <motion.div 
                 initial={{ opacity: 0, x: 50 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.6, delay: 0.2 }}
                 className="relative p-[1px] rounded-3xl overflow-hidden group h-full"
               >
                 <div className={`absolute -inset-[200%] bg-[conic-gradient(from_0deg,transparent_0_70%,rgba(168,162,158,0.8)_100%)] animate-[spin_2s_linear_infinite] opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                 <div className="relative w-full h-full bg-[#050505] rounded-[calc(1.5rem-1px)] p-6 md:p-8 flex flex-col justify-center z-10 transition-all duration-500 overflow-hidden">
                    {/* Uncropped Floating Image */}
                    <div className="absolute inset-y-0 right-0 w-[50%] md:w-[45%] p-4 md:p-6 opacity-40 mix-blend-luminosity group-hover:mix-blend-normal group-hover:opacity-100 transition-all duration-700 z-0 flex justify-end items-center pointer-events-none">
                      <img src="/techsynergy.png" alt="Tech Synergy 1.0" className="w-full h-full object-contain object-right group-hover:scale-110 group-hover:rotate-2 transition-transform duration-700 drop-shadow-[0_0_20px_rgba(0,0,0,1)] rounded-lg" />
                    </div>
                    {/* Seamless Fade Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/90 to-transparent z-10 pointer-events-none w-[70%]" />
                    
                    <div className="relative z-20 w-[100%] md:w-[70%]">
                      <div className="absolute -right-10 -top-10 w-32 h-32 bg-zinc-400/10 blur-[50px] opacity-10 group-hover:opacity-100 transition-opacity duration-700"></div>
                      <h4 className="text-2xl font-black text-white mb-1 tracking-tight group-hover:translate-x-2 transition-transform duration-500">Tech Synergy 1.0</h4>
                      <p className="text-zinc-300 font-medium text-sm md:text-base group-hover:translate-x-2 transition-transform duration-500 delay-75">Coding Competition</p>
                      <div className="mt-6 flex items-center gap-3 group-hover:translate-x-2 transition-transform duration-500 delay-150">
                         <Medal className="w-5 h-5 text-zinc-400" />
                         <span className="text-zinc-200 font-bold tracking-widest uppercase text-xs">2nd Runner Up</span>
                         <span className="ml-auto text-xs text-zinc-400 font-bold tracking-widest uppercase">Oct '24</span>
                      </div>
                    </div>
                 </div>
               </motion.div>

               {/* Card 2: Zinnovatio 3.0 */}
               <motion.div 
                 initial={{ opacity: 0, x: 50 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.6, delay: 0.4 }}
                 className="relative p-[1px] rounded-3xl overflow-hidden group h-full"
               >
                 <div className={`absolute -inset-[200%] bg-[conic-gradient(from_0deg,transparent_0_70%,rgba(147,51,234,0.8)_100%)] animate-[spin_2.5s_linear_infinite] opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                 <div className="relative w-full h-full bg-[#050505] rounded-[calc(1.5rem-1px)] p-6 md:p-8 flex flex-col justify-center z-10 group-hover:bg-purple-950/20 transition-all duration-500 overflow-hidden">
                    {/* Uncropped Floating Image */}
                    <div className="absolute inset-y-0 right-0 w-[50%] md:w-[45%] p-4 md:p-6 opacity-40 mix-blend-luminosity group-hover:mix-blend-normal group-hover:opacity-100 transition-all duration-700 z-0 flex justify-end items-center pointer-events-none">
                      <img src="/zinnovatio.jpg" alt="Zinnovatio 3.0" className="w-full h-full object-contain object-right group-hover:scale-110 group-hover:-rotate-2 transition-transform duration-700 drop-shadow-[0_0_20px_rgba(0,0,0,1)] rounded-lg" />
                    </div>
                    {/* Seamless Fade Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/90 to-transparent z-10 pointer-events-none w-[70%]" />
                    
                    <div className="relative z-20 w-[100%] md:w-[70%]">
                      <div className="absolute -right-10 -top-10 w-32 h-32 bg-purple-500/10 blur-[50px] opacity-10 group-hover:opacity-100 transition-opacity duration-700"></div>
                      <h4 className="text-2xl font-black text-white mb-1 tracking-tight group-hover:translate-x-2 transition-transform duration-500">Zinnovatio 3.0</h4>
                      <p className="text-zinc-300 font-medium text-sm md:text-base group-hover:translate-x-2 transition-transform duration-500 delay-75">Chandigarh University Hackathon</p>
                      <div className="mt-6 flex items-center gap-3 group-hover:translate-x-2 transition-transform duration-500 delay-150">
                         <Star className="w-5 h-5 text-purple-400" />
                         <span className="text-purple-200 font-bold tracking-widest uppercase text-xs">Finalist (Top 30)</span>
                         <span className="ml-auto text-xs text-zinc-400 font-bold tracking-widest uppercase">Oct '25</span>
                      </div>
                    </div>
                 </div>
               </motion.div>

               {/* Card 3: Hackatron */}
               <motion.div 
                 initial={{ opacity: 0, x: 50 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.6, delay: 0.6 }}
                 className="relative p-[1px] rounded-3xl overflow-hidden group h-full"
               >
                 <div className={`absolute -inset-[200%] bg-[conic-gradient(from_0deg,transparent_0_70%,rgba(16,185,129,0.8)_100%)] animate-[spin_3s_linear_infinite] opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                 <div className="relative w-full h-full bg-[#050505] rounded-[calc(1.5rem-1px)] p-6 md:p-8 flex flex-col justify-center z-10 group-hover:bg-emerald-950/20 transition-all duration-500 overflow-hidden">
                    {/* Uncropped Floating Image */}
                    <div className="absolute inset-y-0 right-0 w-[50%] md:w-[45%] p-4 md:p-6 opacity-40 mix-blend-luminosity group-hover:mix-blend-normal group-hover:opacity-100 transition-all duration-700 z-0 flex justify-end items-center pointer-events-none">
                      <img src="/hackatron.jpg" alt="Hackatron IITM Gwalior" className="w-full h-full object-contain object-right group-hover:scale-110 group-hover:rotate-1 transition-transform duration-700 drop-shadow-[0_0_20px_rgba(0,0,0,1)] rounded-lg" />
                    </div>
                    {/* Seamless Fade Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/90 to-transparent z-10 pointer-events-none w-[70%]" />
                    
                    <div className="relative z-20 w-[100%] md:w-[70%]">
                      <div className="absolute -right-10 -top-10 w-32 h-32 bg-emerald-500/10 blur-[50px] opacity-10 group-hover:opacity-100 transition-opacity duration-700"></div>
                      <h4 className="text-2xl font-black text-white mb-1 tracking-tight group-hover:translate-x-2 transition-transform duration-500">Hackatron</h4>
                      <p className="text-zinc-300 font-medium text-sm md:text-base group-hover:translate-x-2 transition-transform duration-500 delay-75">IITM Gwalior</p>
                      <div className="mt-6 flex items-center gap-3 group-hover:translate-x-2 transition-transform duration-500 delay-150">
                         <Trophy className="w-5 h-5 text-emerald-400" />
                         <span className="text-emerald-200 font-bold tracking-widest uppercase text-xs">Finalist</span>
                         <span className="ml-auto text-xs text-zinc-400 font-bold tracking-widest uppercase">Oct '25</span>
                      </div>
                    </div>
                 </div>
               </motion.div>

            </div>

         </div>
       </div>
    </section>
  );
}
