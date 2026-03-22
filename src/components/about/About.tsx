"use client";
import { motion } from "framer-motion";
import { Brain, GraduationCap, Award } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="relative min-h-[90vh] pt-32 pb-16 md:pb-24 overflow-hidden bg-[#050505]">
      {/* Shared Background Tint */}
      <div className="absolute inset-0 bg-grid z-0 opacity-40 mix-blend-overlay"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col xl:flex-row items-center justify-between gap-16">
        
        {/* Left Side: Elegant Narrative */}
        <div className="w-full xl:w-1/2 flex flex-col items-start text-left">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex items-center gap-4 mb-8"
          >
            <div className="w-12 md:w-20 h-[3px] bg-gradient-to-r from-orange-500 to-transparent"></div>
            <h2 className="text-xl md:text-3xl font-black uppercase tracking-[0.2em] text-orange-500 drop-shadow-md">About Me</h2>
          </motion.div>

          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-3xl md:text-4xl lg:text-[2.5rem] font-black tracking-tight mb-8 leading-[1.2]"
          >
            Scalable <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-rose-400 drop-shadow-sm">backend</span> <span className="text-zinc-700 font-light px-1 lg:px-2">|</span> Strong <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400 drop-shadow-sm">DSA</span> <span className="text-zinc-700 font-light px-1 lg:px-2">|</span> Gen <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 drop-shadow-sm">AI</span>.
          </motion.h3>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="space-y-6 text-lg text-zinc-400 font-medium leading-relaxed"
          >
            <p>
              I am currently a 6th-semester B.Tech CSE student at Lovely Professional University. I am deeply passionate about discovering how to make systems not only hyper-efficient, but beautiful to interact with.
            </p>
            <p>
              My expertise spans across the MERN stack and Python. I’ve architected scalable e-commerce backends, developed AI-powered assistive tools, and deployed heavy algorithms that execute seamlessly under the hood.
            </p>
          </motion.div>

        </div>

        {/* Right Side: High-Performance CSS Abstract Orbit Ecosystem */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="w-full xl:w-1/2 flex items-center justify-center min-h-[400px] md:min-h-[500px] relative pointer-events-none mt-16 xl:mt-0 overflow-visible"
        >
           {/* Center Glowing Core */}
           <div className="absolute w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br from-orange-500 via-rose-600 to-purple-600 rounded-full shadow-[0_0_80px_rgba(249,115,22,0.6)] z-20 flex items-center justify-center">
             <div className="absolute inset-[3px] bg-zinc-950 rounded-full" />
             <Brain className="w-10 h-10 md:w-12 md:h-12 text-white z-10 animate-pulse" />
           </div>

           {/* Orbit 1: Inner (Fast) */}
           <div className="absolute w-[220px] h-[220px] md:w-[280px] md:h-[280px] border border-white/10 border-dashed rounded-full animate-[spin_10s_linear_infinite]">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-gradient-to-tr from-emerald-400 to-cyan-400 shadow-[0_0_20px_rgba(52,211,153,0.8)]"></div>
           </div>

           {/* Orbit 2: Middle (Medium, Reverse) */}
           <div className="absolute w-[320px] h-[320px] md:w-[420px] md:h-[420px] border border-white/10 rounded-full animate-[spin_18s_linear_infinite_reverse]">
              <div className="absolute top-1/2 -left-4 -translate-y-1/2 w-8 h-8 rounded-full bg-gradient-to-tr from-yellow-400 to-orange-400 shadow-[0_0_20px_rgba(250,204,21,0.8)]"></div>
              <div className="absolute top-1/2 -right-4 -translate-y-1/2 w-8 h-8 rounded-full bg-gradient-to-tr from-purple-400 to-pink-400 shadow-[0_0_20px_rgba(192,132,252,0.8)]"></div>
           </div>

           {/* Orbit 3: Outer (Slow) */}
           <div className="absolute w-[420px] h-[420px] md:w-[560px] md:h-[560px] border border-white/5 border-dashed rounded-full animate-[spin_25s_linear_infinite]">
              <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-gradient-to-tr from-blue-400 to-indigo-400 shadow-[0_0_20px_rgba(96,165,250,0.8)]"></div>
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-gradient-to-tr from-rose-400 to-red-400 shadow-[0_0_20px_rgba(251,113,133,0.8)]"></div>
           </div>

           {/* Giant Background Glow for orbits */}
           <div className="absolute w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-orange-500/10 rounded-full blur-[100px] -z-10" />
        </motion.div>
      </div>
    </section>
  );
}
