"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowRight, Download, Sparkles } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const ROLES = ["Full Stack Developer", "C++ Enthusiast", "AI Implementer", "Problem Solver"];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20" style={{ perspective: "1000px" }}>
      {/* Vibrant Background Effects */}
      <div className="absolute inset-0 bg-grid z-0 opacity-40"></div>
      <div className="absolute inset-0 spotlight z-0 opacity-50 pointer-events-none"></div>
      
      {/* Massive Glowing Orbs */}
      <motion.div 
        animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 -left-32 w-96 h-96 bg-purple-600/30 rounded-full blur-[100px] pointer-events-none"
      />
      <motion.div 
        animate={{ scale: [1, 1.3, 1], rotate: [0, -90, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/4 -right-32 w-80 h-80 bg-orange-500/30 rounded-full blur-[100px] pointer-events-none"
      />

      <div className="container relative z-10 px-6 mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 mt-[-5vh]">
        {/* Text Content */}
        <div className="flex-1 flex flex-col items-start text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 3.0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-orange-500/30 bg-orange-500/10 shadow-[0_0_20px_rgba(249,115,22,0.2)] mb-5"
          >
            <Sparkles className="w-4 h-4 text-orange-400 animate-pulse" />
            <span className="text-sm font-bold text-orange-200 uppercase tracking-widest">Available for Work</span>
          </motion.div>

          <motion.h1
            className="text-[3rem] md:text-6xl lg:text-[5.5rem] font-black tracking-tighter mb-3 leading-[1.05]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 3.1 }}
          >
            Hi, I&apos;m <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-rose-500 to-purple-500 drop-shadow-lg">Shreshth.</span>
          </motion.h1>

          <motion.div
            className="mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 3.2 }}
          >
            <div className="text-xl md:text-3xl text-zinc-300 font-semibold flex items-center gap-2">
              <span className="leading-none pt-1">I am a</span>
              <div className="relative flex items-center overflow-hidden h-[1.3em] w-[280px] md:w-[400px]">
                <AnimatePresence mode="popLayout">
                  <motion.span
                    key={roleIndex}
                    initial={{ opacity: 0, y: "150%" }}
                    animate={{ opacity: 1, y: "0%" }}
                    exit={{ opacity: 0, y: "-150%" }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 whitespace-nowrap drop-shadow-md leading-none absolute left-0 pt-1"
                  >
                    {ROLES[roleIndex]}
                  </motion.span>
                </AnimatePresence>
              </div>
            </div>
          </motion.div>

          <motion.p
            className="max-w-lg text-base md:text-lg text-zinc-400 mb-8 leading-relaxed font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 3.3 }}
          >
            B.Tech CSE student at LPU. Passionate about architecting scalable full-stack applications and exploring AI integrations to solve real-world problems.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 3.4 }}
          >
            <Link href="#projects" className="h-12 md:h-14 w-full sm:w-auto px-8 rounded-full bg-gradient-to-r from-orange-500 to-rose-600 text-white font-bold flex items-center justify-center gap-2 hover:scale-105 hover:shadow-[0_0_30px_rgba(249,115,22,0.5)] transition-all">
              View Projects <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="/resume.pdf"
              download="Shreshth_Tarwey_Resume.pdf"
              className="h-12 md:h-14 w-full sm:w-auto px-8 rounded-full border border-white/20 bg-white/5 backdrop-blur-md font-bold flex items-center justify-center gap-2 hover:bg-white/10 hover:border-white/40 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-all text-white group"
            >
              Download Resume
              <Download className="w-5 h-5 group-hover:translate-y-0.5 transition-transform" />
            </a>
          </motion.div>
        </div>

        {/* Super Fast 3D Flip Reveal & Spinning Border */}
        <motion.div
          initial={{ opacity: 0, rotateY: 90, scale: 0.7 }}
          animate={{ opacity: 1, rotateY: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 3.2, type: "spring", bounce: 0.4 }}
          className="relative lg:w-1/2 flex justify-center lg:justify-end mt-8 lg:mt-0"
        >
          {/* Outer container for spinning gradient border */}
          <div className="relative w-[280px] h-[280px] md:w-[400px] md:h-[400px] rounded-full p-[5px] shadow-[0_0_50px_rgba(249,115,22,0.3)] group overflow-hidden bg-zinc-900 z-20">
            
            {/* Continuously Spinning Conic Gradient Background */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
              className="absolute inset-[-50%]"
              style={{ backgroundImage: "conic-gradient(from 0deg, #f97316, #e11d48, #a855f7, #f97316)" }}
            />
            
            {/* Background block to act as the border edge */}
            <div className="absolute inset-[4px] bg-[#09090b] rounded-full z-10 pointer-events-none"></div>

              {/* Circular Image Container purely using HTML/CSS */}
              <div className="absolute inset-[4px] rounded-full overflow-hidden z-20">
                <Image 
                  src="/profile.jpg"
                  alt="Shreshth Tarwey"
                  fill
                  className="object-cover object-[center_10%] transition-transform duration-700 group-hover:scale-110"
                  priority
                />
                {/* Inner dark shadow overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none"></div>
              </div>
          </div>
          
          {/* Floating elements behind */}
          <motion.div 
            animate={{ y: [0, -20, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="absolute -top-10 -left-10 w-48 h-48 bg-emerald-500/20 rounded-full blur-[60px] z-10 pointer-events-none"
          />
          <motion.div 
            animate={{ y: [0, 30, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
            className="absolute -bottom-10 -right-10 w-64 h-64 bg-zinc-500/20 rounded-full blur-[60px] z-10 pointer-events-none"
          />
        </motion.div>
      </div>
    </section>
  );
}
