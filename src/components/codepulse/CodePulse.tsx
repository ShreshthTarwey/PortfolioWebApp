"use client";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Github, ExternalLink, Code2, Zap, GitFork, Users, Trophy, TrendingUp, Activity } from "lucide-react";
import Link from "next/link";

// Animated counter hook
function useCounter(target: number, inView: boolean, duration = 2000) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [target, inView, duration]);
  return count;
}

// SVG Donut Ring component
function DonutRing({ percentage, color, radius = 52, strokeWidth = 8 }: { percentage: number; color: string; radius?: number; strokeWidth?: number }) {
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;
  
  return (
    <svg className="absolute inset-0 -rotate-90" viewBox="0 0 120 120" width="120" height="120">
      {/* Track */}
      <circle cx="60" cy="60" r={radius} fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth={strokeWidth} />
      {/* Fill */}
      <motion.circle
        cx="60" cy="60" r={radius}
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeDasharray={circumference}
        initial={{ strokeDashoffset: circumference }}
        animate={{ strokeDashoffset }}
        transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
        style={{ filter: `drop-shadow(0 0 6px ${color})` }}
      />
    </svg>
  );
}

interface GitHubData {
  publicRepos: number;
  followers: number;
  following: number;
  totalContributions: number;
  topLangs: { lang: string; count: number }[];
  joinedYear: number;
}

interface LeetCodeData {
  totalSolved: number;
  easySolved: number;
  mediumSolved: number;
  hardSolved: number;
  contestRating: number;
  topPercentage: number;
  ranking: number;
}

const LANG_COLORS: Record<string, string> = {
  TypeScript: "#3178c6",
  JavaScript: "#f7df1e",
  "C++": "#f34b7d",
  Python: "#3572A5",
  HTML: "#e34c26",
  CSS: "#563d7c",
  C: "#555555",
  PHP: "#4F5D95",
  "Jupyter Notebook": "#DA5B0B",
};

export default function CodePulse() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const [ghData, setGhData] = useState<GitHubData | null>(null);
  const [lcData, setLcData] = useState<LeetCodeData | null>(null);
  const [ghLoading, setGhLoading] = useState(true);
  const [lcLoading, setLcLoading] = useState(true);

  useEffect(() => {
    fetch("/api/github")
      .then((r) => r.json())
      .then((d) => { setGhData(d); setGhLoading(false); });
    fetch("/api/leetcode")
      .then((r) => r.json())
      .then((d) => { setLcData(d); setLcLoading(false); });
  }, []);

  const reposCount = useCounter(ghData?.publicRepos ?? 0, isInView && !ghLoading);
  const contribCount = useCounter(ghData?.totalContributions ?? 0, isInView && !ghLoading);
  const followersCount = useCounter(ghData?.followers ?? 0, isInView && !ghLoading);
  const totalSolved = useCounter(lcData?.totalSolved ?? 0, isInView && !lcLoading);
  const easySolved = useCounter(lcData?.easySolved ?? 0, isInView && !lcLoading);
  const mediumSolved = useCounter(lcData?.mediumSolved ?? 0, isInView && !lcLoading);
  const hardSolved = useCounter(lcData?.hardSolved ?? 0, isInView && !lcLoading);

  const easyPct = lcData ? Math.round((lcData.easySolved / 933) * 100) : 0;
  const medPct = lcData ? Math.round((lcData.mediumSolved / 2029) * 100) : 0;
  const hardPct = lcData ? Math.round((lcData.hardSolved / 916) * 100) : 0;
  const overallPct = lcData ? Math.round((lcData.totalSolved / 3878) * 100) : 0;

  return (
    <section id="codepulse" ref={sectionRef} className="relative py-24 md:py-32 bg-[#030303] overflow-hidden">
      
      {/* Background: Scanline Grid */}
      <div className="absolute inset-0 z-0 opacity-[0.025]" style={{
        backgroundImage: "repeating-linear-gradient(transparent, transparent 39px, rgba(255,255,255,0.5) 39px, rgba(255,255,255,0.5) 40px)",
      }} />
      
      {/* Glowing ambient orbs */}
      <div className="absolute top-1/4 left-0 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[600px] h-[600px] bg-orange-500/5 rounded-full blur-[150px] pointer-events-none" />

      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full mb-16 md:mb-20">
         <motion.div 
           initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }} transition={{ duration: 0.8, ease: "easeOut" }}
           className="flex items-center gap-4 mb-4"
         >
           <div className="w-12 h-[2px] bg-gradient-to-r from-emerald-500 to-transparent" />
           <h2 className="text-sm md:text-lg font-bold uppercase tracking-[0.4em] text-emerald-400">Live Activity</h2>
         </motion.div>
         <motion.div
           initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
           className="flex flex-col md:flex-row md:items-end justify-between gap-6"
         >
           <h3 className="text-4xl md:text-6xl font-black text-white tracking-tighter">
             Code <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-orange-400">Pulse</span>.
           </h3>
           <p className="text-zinc-400 font-medium text-sm md:text-base max-w-sm tracking-wide">
             Real-time data directly from GitHub and LeetCode APIs. Updated every hour.
           </p>
         </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 lg:gap-8">

          {/* === GITHUB PANEL === */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.0, type: "spring", bounce: 0.3 }}
            className="relative rounded-3xl overflow-hidden border border-emerald-500/20 bg-black/40 backdrop-blur-xl shadow-[0_0_80px_rgba(16,185,129,0.05)]"
          >
            {/* Emerald border glow line on top */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-emerald-500 to-transparent" />
            
            {/* Subtle inner ambient */}
            <div className="absolute -top-32 -left-32 w-64 h-64 bg-emerald-500/10 rounded-full blur-[80px] pointer-events-none" />

            <div className="p-8 md:p-10 h-full flex flex-col gap-8">
              {/* Header Row */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                    <Github className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-black text-lg tracking-tight">ShreshthTarwey</h4>
                    <p className="text-emerald-400/70 text-xs font-mono uppercase tracking-widest">github.com</p>
                  </div>
                </div>
                {/* Live pulse indicator */}
                <div className="flex items-center gap-2">
                  <div className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                  </div>
                  <span className="text-emerald-400/50 text-[10px] font-mono uppercase tracking-widest">Live</span>
                </div>
              </div>

              {/* Key Stats Grid */}
              <div className="grid grid-cols-3 gap-4">
                {[
                  { label: "Repos", value: reposCount, icon: <GitFork className="w-4 h-4" />, color: "text-emerald-400" },
                  { label: "Contributions", value: contribCount, icon: <Activity className="w-4 h-4" />, color: "text-green-400" },
                  { label: "Followers", value: followersCount, icon: <Users className="w-4 h-4" />, color: "text-blue-400" },
                ].map((stat) => (
                  <div key={stat.label} className="bg-white/5 rounded-2xl p-4 border border-white/5 flex flex-col items-center gap-2 text-center group hover:border-emerald-500/30 hover:bg-emerald-500/5 transition-all duration-300">
                    <div className={`${stat.color} opacity-70 group-hover:opacity-100 transition-opacity`}>{stat.icon}</div>
                    <span className="text-2xl md:text-3xl font-black text-white tabular-nums">{stat.value}</span>
                    <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">{stat.label}</span>
                  </div>
                ))}
              </div>

              {/* Top Languages */}
              <div className="flex flex-col gap-3">
                <p className="text-xs font-bold text-zinc-400 uppercase tracking-widest flex items-center gap-2">
                  <Code2 className="w-3.5 h-3.5 text-emerald-400" /> Top Languages
                </p>
                <div className="flex flex-col gap-2.5">
                  {(ghData?.topLangs ?? [
                    { lang: "JavaScript", count: 8 },
                    { lang: "TypeScript", count: 5 },
                    { lang: "C++", count: 6 },
                    { lang: "Python", count: 4 },
                  ]).map(({ lang, count }, i) => {
                    const maxCount = ghData?.topLangs?.[0]?.count ?? 1;
                    const pct = Math.round((count / maxCount) * 100);
                    const color = LANG_COLORS[lang] ?? "#888";
                    return (
                      <motion.div
                        key={lang}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: i * 0.1 + 0.3 }}
                        className="flex items-center gap-3"
                      >
                        <div className="w-2 h-2 rounded-full flex-none" style={{ backgroundColor: color }} />
                        <span className="text-xs text-zinc-300 font-medium w-28 truncate">{lang}</span>
                        <div className="flex-1 h-1.5 bg-white/5 rounded-full overflow-hidden">
                          <motion.div
                            className="h-full rounded-full"
                            style={{ backgroundColor: color, boxShadow: `0 0 8px ${color}` }}
                            initial={{ width: 0 }}
                            whileInView={{ width: `${pct}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.0, delay: i * 0.1 + 0.5, ease: "easeOut" }}
                          />
                        </div>
                        <span className="text-[10px] text-zinc-500 font-mono w-4">{count}</span>
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              {/* CTA */}
              <Link href="https://github.com/ShreshthTarwey" target="_blank" className="mt-auto flex items-center justify-center gap-2 py-3.5 rounded-2xl border border-emerald-500/20 bg-emerald-500/5 hover:bg-emerald-500/15 hover:border-emerald-500/50 text-emerald-400 font-bold text-sm uppercase tracking-widest transition-all duration-300 group">
                <Github className="w-4 h-4" />
                View GitHub Profile
                <ExternalLink className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
              </Link>
            </div>
          </motion.div>

          {/* === LEETCODE PANEL === */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.0, type: "spring", bounce: 0.3, delay: 0.1 }}
            className="relative rounded-3xl overflow-hidden border border-orange-500/20 bg-black/40 backdrop-blur-xl shadow-[0_0_80px_rgba(249,115,22,0.05)]"
          >
            {/* Orange border glow line on top */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-orange-500 to-transparent" />

            {/* Subtle inner ambient */}
            <div className="absolute -top-32 -right-32 w-64 h-64 bg-orange-500/10 rounded-full blur-[80px] pointer-events-none" />

            <div className="p-8 md:p-10 h-full flex flex-col gap-8">
              {/* Header Row */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center">
                    <Zap className="w-5 h-5 text-orange-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-black text-lg tracking-tight">Shreshth_Tarwey</h4>
                    <p className="text-orange-400/70 text-xs font-mono uppercase tracking-widest">leetcode.com</p>
                  </div>
                </div>
                {/* Live pulse indicator */}
                <div className="flex items-center gap-2">
                  <div className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-orange-500" />
                  </div>
                  <span className="text-orange-400/50 text-[10px] font-mono uppercase tracking-widest">Live</span>
                </div>
              </div>

              {/* Main Donut + Total Solved */}
              <div className="flex items-center gap-8">
                <div className="relative w-[120px] h-[120px] flex-none flex items-center justify-center">
                  <DonutRing percentage={overallPct} color="#f97316" />
                  <div className="text-center z-10">
                    <div className="text-2xl font-black text-white tabular-nums">{totalSolved}</div>
                    <div className="text-[9px] text-zinc-500 font-bold uppercase tracking-widest">Solved</div>
                  </div>
                </div>
                <div className="flex flex-col gap-4 flex-1">
                  {/* Easy */}
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest">Easy</span>
                      <span className="text-xs font-mono text-zinc-400">{easySolved} / 933</span>
                    </div>
                    <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                      <motion.div className="h-full bg-emerald-500 rounded-full" style={{ boxShadow: "0 0 8px #10b981" }}
                        initial={{ width: 0 }} whileInView={{ width: `${easyPct}%` }} viewport={{ once: true }}
                        transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }} />
                    </div>
                  </div>
                  {/* Medium */}
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-xs font-bold text-yellow-400 uppercase tracking-widest">Medium</span>
                      <span className="text-xs font-mono text-zinc-400">{mediumSolved} / 2029</span>
                    </div>
                    <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                      <motion.div className="h-full bg-yellow-500 rounded-full" style={{ boxShadow: "0 0 8px #eab308" }}
                        initial={{ width: 0 }} whileInView={{ width: `${medPct}%` }} viewport={{ once: true }}
                        transition={{ duration: 1.2, delay: 0.6, ease: "easeOut" }} />
                    </div>
                  </div>
                  {/* Hard */}
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-xs font-bold text-rose-400 uppercase tracking-widest">Hard</span>
                      <span className="text-xs font-mono text-zinc-400">{hardSolved} / 916</span>
                    </div>
                    <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                      <motion.div className="h-full bg-rose-500 rounded-full" style={{ boxShadow: "0 0 8px #f43f5e" }}
                        initial={{ width: 0 }} whileInView={{ width: `${hardPct}%` }} viewport={{ once: true }}
                        transition={{ duration: 1.2, delay: 0.8, ease: "easeOut" }} />
                    </div>
                  </div>
                </div>
              </div>

              {/* Extra Stats Row */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/5 rounded-2xl p-5 border border-white/5 hover:border-orange-500/30 hover:bg-orange-500/5 transition-all duration-300">
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingUp className="w-4 h-4 text-orange-400" />
                    <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Contest Rating</span>
                  </div>
                  <div className="text-2xl font-black text-white">{lcData?.contestRating ?? "—"}</div>
                </div>
                <div className="bg-white/5 rounded-2xl p-5 border border-white/5 hover:border-orange-500/30 hover:bg-orange-500/5 transition-all duration-300">
                  <div className="flex items-center gap-2 mb-2">
                    <Activity className="w-4 h-4 text-orange-400" />
                    <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Global Rank</span>
                  </div>
                  <div className="text-2xl font-black text-white">
                    {lcData?.ranking ? `#${lcData.ranking.toLocaleString()}` : "—"}
                  </div>
                </div>
              </div>

              {/* CTA */}
              <Link href="https://leetcode.com/u/Shreshth_Tarwey/" target="_blank" className="mt-auto flex items-center justify-center gap-2 py-3.5 rounded-2xl border border-orange-500/20 bg-orange-500/5 hover:bg-orange-500/15 hover:border-orange-500/50 text-orange-400 font-bold text-sm uppercase tracking-widest transition-all duration-300 group">
                <Trophy className="w-4 h-4" />
                View LeetCode Profile
                <ExternalLink className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
              </Link>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
