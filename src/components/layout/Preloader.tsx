"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function Preloader() {
  const [stage, setStage] = useState(0);

  useEffect(() => {
    const t1 = setTimeout(() => setStage(1), 1500);
    const t2 = setTimeout(() => setStage(2), 2800);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  return (
    <AnimatePresence>
      {stage < 2 && (
        <motion.div
          className="fixed inset-0 z-[99999] bg-[#09090b] flex flex-col items-center justify-center text-white overflow-hidden"
          exit={{ opacity: 0, filter: "blur(20px)", transition: { duration: 0.8, ease: "easeInOut" } }}
        >
          <div className="flex flex-col items-start gap-2 text-6xl md:text-8xl lg:text-[10rem] font-black uppercase tracking-tighter leading-none">
            
            {/* First Line: S -> hreshth */}
            <div className="flex items-center">
              <motion.span 
                className={`relative inline-block ${stage === 0 ? "text-transparent drop-shadow-[0_0_15px_rgba(249,115,22,1)]" : "text-white"}`}
                style={stage === 0 ? { WebkitTextStroke: '4px #f97316' } : {}}
                animate={stage === 0 ? { filter: ["brightness(1)", "brightness(1.5)", "brightness(1)"] } : {}}
                transition={{ repeat: Infinity, duration: 1 }}
              >
                S
              </motion.span>
              <AnimatePresence>
                {stage === 1 && (
                  <motion.span
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ width: "auto", opacity: 1 }}
                    transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
                    className="overflow-hidden whitespace-nowrap text-white"
                  >
                    hreshth
                  </motion.span>
                )}
              </AnimatePresence>
            </div>

            {/* Second Line: T -> arwey */}
            <div className="flex items-center ml-12 md:ml-32">
              <motion.span 
                className={`relative inline-block ${stage === 0 ? "text-transparent drop-shadow-[0_0_15px_rgba(59,130,246,1)]" : "text-zinc-500"}`}
                style={stage === 0 ? { WebkitTextStroke: '4px #3b82f6' } : {}}
                animate={stage === 0 ? { filter: ["brightness(1)", "brightness(1.5)", "brightness(1)"] } : {}}
                transition={{ repeat: Infinity, duration: 1, delay: 0.2 }}
              >
                T
              </motion.span>
              <AnimatePresence>
                {stage === 1 && (
                  <motion.span
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ width: "auto", opacity: 1 }}
                    transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
                    className="overflow-hidden whitespace-nowrap text-zinc-500"
                  >
                    arwey
                  </motion.span>
                )}
              </AnimatePresence>
            </div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
