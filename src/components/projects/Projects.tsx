"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, Sparkles, ChevronDown, CheckCircle2 } from "lucide-react";
import Link from "next/link";

const PROJECTS = [
  {
    num: "01",
    image: "/teerbrand.png",
    title: "Teer Brand",
    type: "Premium E-Commerce Platform",
    desc: [
      "Engineered a scalable, full-stack MERN platform for an artisanal spices company.",
      "Implemented secure JWT authentication, a hybrid shopping cart, and seamless Razorpay payment integration.",
      "Developed a robust admin dashboard using Recharts for real-time sales analytics and complete inventory tracking."
    ],
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
    desc: [
      "Developed an award-winning assistive education web platform for differently-abled children (1st Rank, Paranox 2.0).",
      "Architected the Next.js frontend and engineered customized Python/FastAPI ML speech-to-text accessibility models.",
      "Designed specialized gamified UI components, tangibly increasing engagement for children with Autism and Down Syndrome by 50%."
    ],
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
    desc: [
      "Built an advanced fake news verification engine leveraging NLP and AI to independently achieve 90% detection accuracy.",
      "Utilized KeyBERT and spaCy to dynamically extract critical keywords efficiently from requested article text.",
      "Cross-referenced data using a robust, fault-tolerant dual-API search architecture (SerpAPI + Google Search fallback)."
    ],
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
    offset: ["start start", "end end"]
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0vw", "-200vw"]);
  const progressPercentage = useTransform(scrollYProgress, v => v * 100);

  const handleScrub = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (targetRef.current) {
      const percentage = Number(e.target.value) / 100;
      const rect = targetRef.current.getBoundingClientRect();
      const absoluteTop = window.scrollY + rect.top;
      const scrollDistance = targetRef.current.offsetHeight - window.innerHeight;
      
      window.scrollTo({
        top: absoluteTop + (percentage * scrollDistance),
        behavior: "auto" // Immediate follow for native mouse scrubbing feel
      });
    }
  };

  const handleSkip = () => {
    if (targetRef.current) {
      const rect = targetRef.current.getBoundingClientRect();
      const absoluteTop = window.scrollY + rect.top;
      const end = absoluteTop + targetRef.current.offsetHeight;
      window.scrollTo({
        top: end,
        behavior: "smooth" // Elegant glide out of the section
      });
    }
  };

  return (
    <section ref={targetRef} id="projects" className="relative h-[300vh] bg-[#050505]">
      {/* Sticky container that holds the horizontal scrolling row */}
      <div className="sticky top-0 h-[100dvh] overflow-hidden flex items-center">
        
        <motion.div style={{ x }} className="flex w-[300vw] h-full">
          {PROJECTS.map((project, index) => {
            return (
              <div key={index} className="w-screen h-[100dvh] flex flex-col lg:flex-row items-center justify-center px-6 md:px-12 lg:px-24 relative pt-20 pb-32 lg:py-24">
              
              {/* Massive Background Number */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 opacity-20">
                <span className="text-[20rem] md:text-[30rem] lg:text-[40rem] font-black text-transparent" style={{ WebkitTextStroke: "2px rgba(255,255,255,0.1)" }}>
                   {project.num}
                </span>
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

              {/* Foreground Content */}
              <div className="max-w-7xl w-full mx-auto flex flex-col lg:flex-row items-center justify-between z-10 gap-8 lg:gap-0 h-full lg:h-auto">
                  
                  {/* Left Column (Details) - Featuring internal overflow guard for exceptionally short screens */}
                  <div className="w-full lg:w-1/2 flex flex-col pr-0 lg:pr-12 relative z-20 max-h-full overflow-y-auto pb-12 lg:pb-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                     <div className="text-5xl md:text-8xl lg:text-[10rem] font-black text-white/5 absolute -top-6 lg:-top-20 -left-2 lg:-left-10 select-none">
                        {project.num}
                     </div>
                     
                     <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-4 lg:mb-6 w-max">
                        <Sparkles className={`w-3 h-3 md:w-4 md:h-4 ${project.textAccent}`} />
                        <span className={`text-[10px] md:text-xs font-bold tracking-widest uppercase ${project.textAccent}`}>{project.type}</span>
                     </div>

                     <h3 className="text-3xl md:text-6xl lg:text-7xl font-black text-white mb-6 tracking-tighter shrink-0">
                        {project.title}
                     </h3>
                     
                     {/* High-visibility Action Buttons placed immediately under the title */}
                     <div className="flex flex-wrap items-center gap-3 md:gap-4 w-full mb-8 lg:mb-10">
                       {project.demo && (
                         <Link href={project.demo} target="_blank" className={`h-12 md:h-14 px-6 md:px-8 rounded-full bg-gradient-to-r ${project.color} text-white font-bold flex items-center justify-center gap-2 hover:scale-105 transition-all shadow-[0_0_30px_rgba(255,255,255,0.1)] text-sm md:text-base`}>
                           View Live <ExternalLink className="w-4 h-4 md:w-5 md:h-5" />
                         </Link>
                       )}
                       
                       {project.github && (
                         <Link href={project.github} target="_blank" className="h-12 md:h-14 px-6 md:px-8 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-white font-bold flex items-center justify-center gap-2 hover:bg-white/10 transition-all text-sm md:text-base">
                           GitHub <Github className="w-4 h-4 md:w-5 md:h-5" />
                         </Link>
                       )}
                     </div>

                     <ul className="flex flex-col gap-3 md:gap-4 mb-8 max-w-2xl">
                      {project.desc.map((point, i) => (
                        <li key={i} className="flex items-start gap-3 md:gap-4">
                          <CheckCircle2 className={`w-4 h-4 md:w-5 md:h-5 flex-shrink-0 mt-1 flex-none ${project.textAccent}`} />
                          <span className="text-zinc-400 text-sm md:text-base lg:text-lg font-medium leading-relaxed">
                            {point}
                          </span>
                        </li>
                      ))}
                    </ul>

                     <div className="flex flex-wrap gap-2 lg:gap-3 max-w-2xl shrink-0 mt-auto">
                      {project.tech.map((t, i) => (
                        <span key={i} className="px-4 py-2 text-[10px] md:text-xs font-bold text-zinc-300 rounded-full border border-white/5 bg-white/5 backdrop-blur-md shadow-sm">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Glassmorphic Project Visual Abstraction */}
                  <div className="flex-1 w-full lg:w-auto h-[250px] md:h-[400px] lg:h-[550px] relative mt-8 lg:mt-0 perspective-1000 hidden md:block shrink-0">
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
        <div className="absolute bottom-6 md:bottom-12 left-1/2 -translate-x-1/2 flex flex-col md:flex-row items-center gap-3 md:gap-5 z-50 bg-black/60 px-6 md:px-8 py-3 md:py-4 rounded-full backdrop-blur-xl border border-white/10 shadow-2xl transition-all hover:bg-black/80 hover:border-white/20 hover:scale-105">
          <div className="text-zinc-400 font-bold text-xs md:text-sm tracking-widest uppercase">Scroll or Drag</div>
          <div className="relative w-32 md:w-64 h-3 bg-white/10 rounded-full overflow-hidden flex items-center">
             <motion.div 
               className="absolute left-0 top-0 bottom-0 bg-gradient-to-r from-orange-400 via-purple-400 to-emerald-400 w-full"
               style={{ scaleX: scrollYProgress, transformOrigin: "left" }}
             />
             <motion.input 
               type="range"
               min="0"
               max="100"
               step="0.01"
               onChange={handleScrub}
               value={progressPercentage as any}
               className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-10"
               aria-label="Scrub through projects"
             />
          </div>
        </div>

        {/* Skip Section Floating Button */}
        <button 
          onClick={handleSkip}
          className="absolute bottom-8 md:bottom-12 right-6 md:right-12 z-50 w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/5 border border-white/10 backdrop-blur-md flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/10 transition-all group shadow-xl hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]"
          aria-label="Skip to next section"
        >
          <ChevronDown className="w-6 h-6 md:w-8 md:h-8 group-hover:translate-y-1 transition-transform" />
        </button>

      </div>
    </section>
  );
}