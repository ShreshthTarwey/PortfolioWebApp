"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, BookOpen, School, Target } from "lucide-react";

const EDUCATION = [
  {
    degree: "B.Tech in Computer Science & Engineering",
    institution: "Lovely Professional University (LPU)",
    period: "2022 - 2026",
    score: "CGPA: XYZ",
    icon: GraduationCap,
    color: "from-orange-500 to-rose-500",
    border: "border-orange-500/30",
    glow: "group-hover:shadow-[0_0_40px_rgba(249,115,22,0.3)]",
    textGlow: "group-hover:text-orange-400",
    description: "Specialized in scalable full-stack architectures, Gen AI, and deep algorithm optimizations. Active competitor in national hackathons and extensive open-source engineering."
  },
  {
    degree: "Higher Secondary (12th Grade)",
    institution: "XYZ Senior Secondary School",
    period: "2020 - 2022",
    score: "Percentage: XYZ%",
    icon: BookOpen,
    color: "from-blue-500 to-cyan-500",
    border: "border-blue-500/30",
    glow: "group-hover:shadow-[0_0_40px_rgba(59,130,246,0.3)]",
    textGlow: "group-hover:text-blue-400",
    description: "Focused exclusively on Physics, Chemistry, and Mathematics (PCM). Built an unbreakable foundation in mathematical logic and low-level computational principles."
  },
  {
    degree: "Secondary Education (10th Grade)",
    institution: "XYZ High School",
    period: "2019 - 2020",
    score: "Percentage: XYZ%",
    icon: School,
    color: "from-emerald-500 to-teal-500",
    border: "border-emerald-500/30",
    glow: "group-hover:shadow-[0_0_40px_rgba(16,185,129,0.3)]",
    textGlow: "group-hover:text-emerald-400",
    description: "Crushed fundamental academics with absolute distinction. Initiated early exposure to programming algorithms and hardware mechanics."
  }
];

export default function Education() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll progress purely over the timeline section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end end"]
  });

  // Animate the height of the glowing line based on scroll
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="education" ref={containerRef} className="relative py-24 md:py-32 bg-[#050505] overflow-hidden">
      
      {/* Abstract Background Elements */}
      <div className="absolute top-1/4 -right-64 w-[500px] h-[500px] bg-orange-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -left-64 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10 w-full mb-16 md:mb-24">
         <motion.div 
           initial={{ opacity: 0, x: -50 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8, ease: "easeOut" }}
           className="flex items-center gap-4 mb-4"
         >
           <div className="w-12 h-[2px] bg-gradient-to-r from-orange-500 to-transparent"></div>
           <h2 className="text-sm md:text-lg font-bold uppercase tracking-[0.4em] text-orange-500 drop-shadow-md">Academic Timeline</h2>
         </motion.div>
         <motion.h3
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
           className="text-4xl md:text-6xl font-black text-white tracking-tighter"
         >
           My <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-rose-400">Education</span>.
         </motion.h3>
      </div>

      <div className="max-w-4xl mx-auto px-6 xl:px-0 relative z-20">
        
        {/* The Continuous Background Track */}
        <div className="absolute left-[39px] md:left-[59px] top-0 bottom-0 w-[2px] bg-white/5 rounded-full"></div>
        
        {/* The Animated Glowing Fill Line */}
        <motion.div 
          className="absolute left-[39px] md:left-[59px] top-0 w-[2px] bg-gradient-to-b from-orange-500 via-blue-500 to-emerald-500 shadow-[0_0_15px_rgba(249,115,22,0.8)] rounded-full origin-top"
          style={{ height: lineHeight }}
        />

        <div className="flex flex-col gap-16 md:gap-24 relative">
          {EDUCATION.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: 50, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
              className="relative flex items-start gap-8 md:gap-12 group"
            >
              
              {/* Timeline Node / Icon */}
              <div className="relative z-10 flex flex-col items-center shrink-0">
                <div className={`w-14 h-14 md:w-20 md:h-20 rounded-2xl bg-[#09090b] border-2 ${item.border} flex items-center justify-center transform rotate-3 group-hover:rotate-0 group-hover:scale-110 transition-all duration-500 z-10 relative shadow-xl overflow-hidden`}>
                   {/* Internal Node Glow */}
                   <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-10 group-hover:opacity-20 transition-opacity`} />
                   <item.icon className="w-6 h-6 md:w-8 md:h-8 text-white relative z-20 drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]" />
                </div>
                
                {/* Horizontal connection wire to the card */}
                <div className={`absolute top-1/2 left-full w-4 md:w-8 h-[2px] -translate-y-1/2 bg-gradient-to-r ${item.color} opacity-50 group-hover:opacity-100 transition-opacity duration-500`}></div>
              </div>

              {/* The Data Card Content */}
              <div className={`flex-1 bg-white/5 border border-white/10 rounded-3xl p-6 md:p-8 lg:p-10 backdrop-blur-md relative overflow-hidden transition-all duration-500 ${item.glow} hover:-translate-y-2`}>
                
                {/* Abstract corner fade for aesthetics */}
                <div className={`absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-br ${item.color} opacity-10 rounded-full blur-[40px] group-hover:opacity-30 transition-opacity duration-700`} />

                <div className="flex flex-col xl:flex-row xl:items-start justify-between gap-4 mb-6 relative z-10">
                  <div>
                    <h4 className={`text-2xl md:text-3xl font-black text-white mb-2 tracking-tight transition-colors duration-300 ${item.textGlow}`}>
                      {item.degree}
                    </h4>
                    <p className="text-zinc-400 font-semibold text-sm md:text-base uppercase tracking-widest">
                      {item.institution}
                    </p>
                  </div>
                  
                  {/* Dynamic Floating Pillar Stats */}
                  <div className="flex flex-row xl:flex-col gap-3 shrink-0 items-start xl:items-end">
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-bold text-white tracking-widest uppercase shadow-sm whitespace-nowrap">
                      {item.period}
                    </span>
                    <span className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r ${item.color} text-xs font-black text-white tracking-widest uppercase shadow-lg whitespace-nowrap`}>
                      <Target className="w-3 h-3" /> {item.score}
                    </span>
                  </div>
                </div>

                <p className="text-zinc-400/90 text-sm md:text-base leading-relaxed max-w-2xl relative z-10 font-medium">
                  {item.description}
                </p>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
