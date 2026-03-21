"use client";
import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame
} from "framer-motion";

const wrap = (min: number, max: number, v: number) => {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

const LANGUAGES = [
  { name: "C++", icon: "cplusplus/cplusplus-original.svg" },
  { name: "Python", icon: "python/python-original.svg" },
  { name: "JavaScript", icon: "javascript/javascript-original.svg" },
  { name: "TypeScript", icon: "typescript/typescript-original.svg" },
  { name: "HTML5", icon: "html5/html5-original.svg" },
];

const FRAMEWORKS = [
  { name: "React.js", icon: "react/react-original.svg" },
  { name: "Node.js", icon: "nodejs/nodejs-original.svg" },
  { name: "Express.js", icon: "express/express-original.svg" },
  { name: "Flask", icon: "flask/flask-original.svg" },
  { name: "Tailwind CSS", icon: "tailwindcss/tailwindcss-original.svg" },
];

const TOOLS = [
  { name: "MongoDB", icon: "mongodb/mongodb-original.svg" },
  { name: "MySQL", icon: "mysql/mysql-original.svg" },
  { name: "Git", icon: "git/git-original.svg" },
  { name: "Figma", icon: "figma/figma-original.svg" },
  { name: "Linux Bash", icon: "linux/linux-original.svg" },
];

const SkillItem = ({ name, icon }: { name: string, icon: string }) => (
  <div className="flex items-center gap-5 mx-3 md:mx-4 px-6 py-4 md:px-8 md:py-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 transition-all duration-300 cursor-pointer group shadow-[0_0_20px_rgba(0,0,0,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.05)] hover:-translate-y-1">
     <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center group-hover:scale-110 transition-transform">
       <img src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${icon}`} className="w-8 h-8 md:w-10 md:h-10 object-contain drop-shadow-md" />
     </div>
     <span className="text-xl md:text-2xl font-bold text-zinc-300 group-hover:text-white transition-colors tracking-tight">
       {name}
     </span>
  </div>
);

function ParallaxText({ items, baseVelocity = 100 }: { items: Array<{name: string, icon: string}>, baseVelocity: number }) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400
  });
  
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 1.5], {
    clamp: false
  });

  const x = useTransform(baseX, (v) => `${wrap(-25, 0, v)}%`);

  const directionFactor = useRef<number>(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    if (velocityFactor.get() < -0.1) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0.1) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * Math.abs(velocityFactor.get());
    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className="overflow-hidden m-0 flex flex-nowrap w-full py-3 relative">
      <div className="absolute inset-y-0 left-0 w-20 md:w-40 bg-gradient-to-r from-[#050505] to-transparent z-10 pointer-events-none"></div>
      <div className="absolute inset-y-0 right-0 w-20 md:w-40 bg-gradient-to-l from-[#050505] to-transparent z-10 pointer-events-none"></div>

      <motion.div className="flex whitespace-nowrap flex-nowrap items-center" style={{ x }}>
        {[...Array(4)].map((_, idx) => (
          <div key={idx} className="flex items-center shrink-0">
            {items.map((item, id) => (
              <SkillItem key={id} name={item.name} icon={item.icon} />
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  );
}

function SkillCategoryRow({ title, items, baseVelocity }: { title: string, items: Array<{name: string, icon: string}>, baseVelocity: number }) {
  return (
    <div className="flex flex-col relative group w-full">
       <div className="px-6 md:px-12 mb-2 flex items-center relative z-20">
         <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 shadow-[0_0_20px_rgba(16,185,129,0.15)] backdrop-blur-md">
           <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_10px_rgba(52,211,153,0.8)]"></span>
           <h3 className="text-emerald-300 uppercase tracking-[0.2em] text-sm md:text-base font-black drop-shadow-md">{title}</h3>
         </div>
       </div>
       <ParallaxText items={items} baseVelocity={baseVelocity} />
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="relative pt-16 pb-32 md:pt-20 md:pb-48 overflow-hidden bg-gradient-to-b from-[#050505] via-emerald-950/20 to-[#050505]">
       <div className="absolute inset-0 bg-grid z-0 opacity-10 mix-blend-overlay"></div>
       
       {/* Highly Visble Emerald & Cyan Orbs */}
       <motion.div 
         animate={{ y: [0, 80, 0], x: [0, -60, 0] }}
         transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
         className="absolute top-10 -left-32 w-[500px] h-[500px] md:w-[700px] md:h-[700px] bg-emerald-500/20 rounded-full blur-[120px] pointer-events-none -z-10"
       />
       <motion.div 
         animate={{ y: [0, -80, 0], x: [0, 60, 0] }}
         transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
         className="absolute bottom-10 -right-32 w-[500px] h-[500px] md:w-[700px] md:h-[700px] bg-cyan-500/20 rounded-full blur-[120px] pointer-events-none -z-10"
       />

       <div className="max-w-7xl mx-auto px-6 relative z-10 w-full mb-16">
         <motion.div 
           initial={{ opacity: 0, x: -50 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           className="flex items-center gap-4 mb-4"
         >
           <div className="w-12 h-[2px] bg-gradient-to-r from-emerald-500 to-transparent"></div>
           <h2 className="text-sm md:text-lg font-bold uppercase tracking-[0.4em] text-emerald-500 drop-shadow-md">Technical Arsenal</h2>
         </motion.div>
         <motion.p
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="text-zinc-400 font-medium text-lg max-w-2xl"
         >
           A curated stack of modern technologies, constantly expanding to build exceptionally fast and scalable digital experiences.
         </motion.p>
       </div>

       <div className="relative z-10 flex flex-col gap-8 w-full mt-10">
          <SkillCategoryRow title="Languages & Core" items={LANGUAGES} baseVelocity={-3} />
          <SkillCategoryRow title="Web Frameworks" items={FRAMEWORKS} baseVelocity={3} />
          <SkillCategoryRow title="Databases & Tools" items={TOOLS} baseVelocity={-3} />
       </div>
    </section>
  );
}
