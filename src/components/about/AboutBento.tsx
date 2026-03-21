"use client";
import { motion } from "framer-motion";
import { Brain, Code2, GraduationCap, Trophy } from "lucide-react";
import SpotlightCard from "./SpotlightCard";

export default function AboutBento() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring" as const, bounce: 0.4 } }
  };

  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">The Architect Inside</h2>
          <p className="text-zinc-400 text-lg max-w-2xl">Building intelligent systems with an eye for design.</p>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[280px]"
        >
          {/* Main Intro Card */}
          <motion.div variants={item} className="md:col-span-2 md:row-span-2 flex">
            <SpotlightCard className="w-full h-full flex flex-col justify-between group">
              <div>
                <Brain className="w-12 h-12 text-zinc-500 mb-8 group-hover:text-white transition-colors" />
                <h3 className="text-3xl font-semibold mb-6">Bridging Logic & Interface</h3>
                <p className="text-zinc-400 leading-relaxed text-lg">
                  Currently a 6th-semester B.Tech CSE student at Lovely Professional University. I thrive at the intersection of full-stack engineering and AI, utilizing tools like the MERN stack, Python, and GenAI to build solutions that not only work flawlessly, but feel incredible to use in the real world.
                </p>
              </div>
            </SpotlightCard>
          </motion.div>

          {/* Tech Stack Card */}
          <motion.div variants={item} className="md:col-span-2 flex">
            <SpotlightCard className="w-full h-full space-y-6 group">
              <Code2 className="w-8 h-8 text-zinc-500 group-hover:text-white transition-colors" />
              <h3 className="text-xl font-semibold">Technical Arsenal</h3>
              <div className="flex flex-wrap gap-2">
                {["C/C++", "Python", "JavaScript", "React.js", "Node.js", "Express", "Flask", "MongoDB", "Framer Motion"].map((tech) => (
                  <span key={tech} className="px-3 py-1.5 rounded-full bg-black border border-white/5 text-sm font-medium text-zinc-300">
                    {tech}
                  </span>
                ))}
              </div>
            </SpotlightCard>
          </motion.div>

          {/* Education Card */}
          <motion.div variants={item} className="md:col-span-1 flex">
            <SpotlightCard className="w-full h-full flex flex-col justify-between group">
              <GraduationCap className="w-8 h-8 text-zinc-500 group-hover:text-white transition-colors" />
              <div>
                <p className="text-sm text-zinc-500 mb-2">LPU, Punjab</p>
                <h3 className="text-lg font-medium">B.Tech CSE</h3>
                <p className="text-4xl font-bold mt-3 text-white">9.15<span className="text-lg font-normal text-zinc-500 ml-1">CGPA</span></p>
              </div>
            </SpotlightCard>
          </motion.div>

          {/* Accolades Card */}
          <motion.div variants={item} className="md:col-span-1 flex">
            <SpotlightCard className="w-full h-full flex flex-col justify-between group">
              <Trophy className="w-8 h-8 text-zinc-500 group-hover:text-white transition-colors" />
              <div>
                <p className="text-sm text-zinc-500 mb-2">Hackathons</p>
                <h3 className="text-xl font-semibold mb-2 text-orange-400">Winner</h3>
                <p className="text-sm text-zinc-400">Paranox 2.0 National Hackathon</p>
              </div>
            </SpotlightCard>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
