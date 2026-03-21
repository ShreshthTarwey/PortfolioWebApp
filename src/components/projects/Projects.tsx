"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, Sparkles } from "lucide-react";
import Link from "next/link";

const PROJECTS = [
  {
    num: "01",
    image: "/teerbrand.png",
    title: "Teer Brand",
    type: "Premium E-Commerce Platform",
    desc: "A highly scalable MERN stack e-commerce application designed for a local spices company. Features secure JWT authentication, Razorpay integration, a dynamic admin dashboard, and fluid Framer Motion animations to deliver a premium shopping experience.",
    tech: ["React.js", "Node.js", "MongoDB", "Razorpay", "Framer Motion"],
    demo: "https://teerbrand.vercel.app/",
    github: "https://github.com/ShreshthTarwey/teer-brand-ecommerce",
    color: "from-orange-500 to-rose-600",
    bgAccent: "bg-orange-500/10",
    textAccent: "text-orange-500"
  },
  {
    num: "02",
    image: "/sarathi.png",
    title: "SARATHI",
    type: "AI-Powered Assistive Education",
    desc: "1st Rank Winner at Paranox 2.0 National Hackathon. Designed to bridge the gap in special needs education, this platform integrates real-time ML speech-to-text models and gamified React components tailored for children with Autism and Down Syndrome, boosting engagement by 50%.",
    tech: ["Next.js", "Python / FastAPI", "Machine Learning", "Tailwind", "Socket.io"],
    demo: "https://sarathi-assist.vercel.app/",
    github: "https://github.com/ShreshthTarwey/SARATHI-S4-100",
    color: "from-blue-500 to-purple-600",
    bgAccent: "bg-blue-500/10",
    textAccent: "text-blue-500"
  },
  {
    num: "03",
    image: "/ecotrust.png",
    title: "EcoTrust",
    type: "NLP Fake News Detection",
    desc: "An AI-driven fake news detection engine achieving 90% accuracy. Extracts critical keywords via KeyBERT/spaCy and operates a robust dual-API search system (Google Search + SerpAPI fallback) to score article credibility seamlessly in real-time.",
    tech: ["Python", "Flask", "Sentence-BERT", "spaCy", "Gemini API"],
    demo: "", // Empty so it intelligently hides the button
    github: "https://github.com/ShreshthTarwey/EcoTrust",
    color: "from-emerald-500 to-cyan-600",
    bgAccent: "bg-emerald-500/10",
    textAccent: "text-emerald-500"
  }
];

export default function Projects() {
  const targetRef = useRef<HTMLDivElement>(null);
  
  // Creates a highly robust mapping from vertical scroll to horizontal scroll.
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0vw", "-200vw"]);

  return (
    <section ref={targetRef} id="projects" className="relative h-[300vh] bg-[#050505]">
      
      <div className="sticky top-0 h-screen w-full flex items-center overflow-hidden">
        
        <motion.div style={{ x }} className="flex h-full w-[300vw]">
          {PROJECTS.map((project) => {
            return (
              <div key={project.num} className="h-full w-screen flex flex-col items-center justify-center relative p-6 md:p-20 overflow-hidden">
                
                {/* Massive Hollow Background Number */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0">
                   <h2 
                     className="text-[20rem] md:text-[30rem] lg:text-[40rem] font-black text-transparent opacity-20 mix-blend-overlay tracking-tighter"
                     style={{ WebkitTextStroke: "2px rgba(255,255,255,0.2)" }}
                   >
                     {project.num}
                   </h2>
                </div>

                {/* Abstract Colored Halo specific to project */}
                <motion.div 
                  animate={{ 
                    rotate: [0, 360],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className={`absolute top-1/4 right-10 md:right-1/4 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-gradient-to-tr ${project.color} rounded-full blur-[120px] md:blur-[180px] opacity-30 pointer-events-none -z-10`}
                />

                <div className="relative z-10 max-w-7xl w-full flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
                  
                  <div className="flex-1 flex flex-col items-start text-left">
                    <div className={`inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white/10 ${project.bgAccent} mb-6 md:mb-8 backdrop-blur-md`}>
                      <Sparkles className={`w-4 h-4 ${project.textAccent}`} />
                      <span className={`text-xs md:text-sm font-bold uppercase tracking-widest ${project.textAccent}`}>{project.type}</span>
                    </div>

                    <h3 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 md:mb-8 text-white tracking-tighter">
                      {project.title}
                    </h3>
                    
                    <p className="text-zinc-400 text-base md:text-xl font-medium leading-relaxed mb-10 max-w-2xl">
                      {project.desc}
                    </p>

                    <div className="flex flex-wrap gap-3 mb-12 max-w-2xl">
                      {project.tech.map((t, i) => (
                        <span key={i} className="px-5 py-2 text-xs md:text-sm font-bold text-zinc-300 rounded-full border border-white/10 bg-white/5 backdrop-blur-md shadow-sm">
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
                      {project.demo && (
                        <Link href={project.demo} target="_blank" className={`h-14 w-full sm:w-auto px-8 rounded-full bg-gradient-to-r ${project.color} text-white font-bold flex items-center justify-center gap-2 hover:scale-105 transition-all shadow-[0_0_30px_rgba(255,255,255,0.1)]`}>
                          View Live <ExternalLink className="w-5 h-5" />
                        </Link>
                      )}
                      
                      {project.github && (
                        <Link href={project.github} target="_blank" className="h-14 w-full sm:w-auto px-8 rounded-full border border-white/20 bg-white/5 backdrop-blur-md text-white font-bold flex items-center justify-center gap-2 hover:bg-white/10 transition-all">
                          GitHub Repo <Github className="w-5 h-5" />
                        </Link>
                      )}
                    </div>
                  </div>

                  {/* Glassmorphic Project Visual Abstraction */}
                  <div className="flex-1 w-full lg:w-auto h-[350px] md:h-[500px] lg:h-[600px] relative mt-12 lg:mt-0 perspective-1000 hidden sm:block">
                     <motion.div 
                       initial={{ rotateY: -15, rotateX: 10 }}
                       whileHover={{ rotateY: 0, rotateX: 0 }}
                       transition={{ type: "spring", stiffness: 100, damping: 15 }}
                       className="w-full h-full rounded-[2rem] border border-white/20 bg-white/5 backdrop-blur-2xl shadow-[0_20px_60px_rgba(0,0,0,0.8)] relative overflow-hidden group flex flex-col cursor-pointer"
                     >
                        <div className="h-12 md:h-14 border-b border-white/10 bg-black/40 flex items-center px-6 gap-2 z-20 relative backdrop-blur-md">
                           <div className="w-3 h-3 rounded-full bg-rose-500"></div>
                           <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                           <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                        </div>
                        <div className="flex-1 relative w-full h-full bg-zinc-900 overflow-hidden">
                           <img 
                             src={project.image} 
                             alt={project.title} 
                             className="absolute inset-0 w-full h-full object-cover object-top opacity-80 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105"
                           />
                           <div className={`absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-80 z-10 pointer-events-none`}></div>
                           <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-40 mix-blend-overlay group-hover:opacity-0 transition-opacity duration-500 z-10 pointer-events-none`}></div>
                        </div>
                     </motion.div>
                  </div>

                </div>
              </div>
            );
          })}
        </motion.div>

        {/* Universal Progress Navigation Bar */}
        <div className="absolute bottom-6 md:bottom-12 left-1/2 -translate-x-1/2 flex flex-col md:flex-row items-center gap-3 md:gap-5 z-50 bg-black/60 px-6 md:px-8 py-3 md:py-4 rounded-full backdrop-blur-xl border border-white/10 shadow-2xl">
          <div className="text-zinc-400 font-bold text-xs md:text-sm tracking-widest uppercase">Scroll Down</div>
          <div className="w-32 md:w-64 h-2 bg-white/10 rounded-full overflow-hidden">
             <motion.div 
               className="h-full bg-gradient-to-r from-orange-400 via-purple-400 to-emerald-400"
               style={{ scaleX: scrollYProgress, transformOrigin: "left" }}
             />
          </div>
        </div>

      </div>
    </section>
  );
}
