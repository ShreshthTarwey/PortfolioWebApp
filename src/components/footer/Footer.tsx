"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Github, Linkedin, Mail, ArrowUp, Heart, Code2 } from "lucide-react";

const SOCIALS = [
  { icon: <Github className="w-4 h-4" />, href: "https://github.com/ShreshthTarwey", label: "GitHub", color: "hover:text-white hover:border-white/40 hover:shadow-[0_0_15px_rgba(255,255,255,0.1)]" },
  { icon: <Linkedin className="w-4 h-4" />, href: "https://www.linkedin.com/in/shreshth-tarwey", label: "LinkedIn", color: "hover:text-blue-400 hover:border-blue-500/50 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)]" },
  { icon: <Mail className="w-4 h-4" />, href: "mailto:shreshthtarwey3010@gmail.com", label: "Email", color: "hover:text-rose-400 hover:border-rose-500/50 hover:shadow-[0_0_15px_rgba(244,63,94,0.3)]" },
];

const NAV_LINKS = [
  { name: "About", href: "#about" },
  { name: "Education", href: "#education" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Achievements", href: "#achievements" },
  { name: "Certifications", href: "#certifications" },
  { name: "Code Pulse", href: "#codepulse" },
  { name: "Contact", href: "#contact" },
];

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative bg-[#030303] border-t border-white/10 overflow-hidden">
      {/* Subtle top glow line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-orange-500/40 to-transparent" />

      {/* Ambient orb */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-orange-500/4 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8 relative z-10">
        {/* Top row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-14">
          {/* Brand block */}
          <div className="flex flex-col gap-5">
            <Link href="/" className="relative flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-tr from-orange-500 to-rose-600 text-white font-black text-2xl shadow-[0_0_25px_rgba(249,115,22,0.4)] overflow-hidden group self-start">
              <motion.div
                className="absolute -inset-[100%] bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12"
                animate={{ x: ["-100%", "200%"] }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              />
              <span className="relative z-10 tracking-tighter">ST</span>
            </Link>
            <div>
              <p className="text-white font-black text-xl tracking-tight">Shreshth Tarwey</p>
              <p className="text-orange-400/80 text-sm font-medium tracking-wide mt-1">Full Stack Developer</p>
            </div>
            <p className="text-zinc-500 text-sm leading-relaxed max-w-xs">
              Building beautiful, performant web experiences — one component at a time.
            </p>
            {/* Social icons */}
            <div className="flex items-center gap-3">
              {SOCIALS.map((s) => (
                <Link
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  aria-label={s.label}
                  className={`w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-zinc-400 transition-all duration-300 ${s.color}`}
                >
                  {s.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <p className="text-xs font-bold text-zinc-500 uppercase tracking-[0.3em] mb-5">Quick Links</p>
            <div className="grid grid-cols-2 gap-x-6 gap-y-3">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm text-zinc-400 hover:text-orange-400 transition-colors flex items-center gap-1.5 group"
                >
                  <span className="w-1 h-1 rounded-full bg-orange-500/40 group-hover:bg-orange-500 transition-colors flex-none" />
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Status + CTA */}
          <div className="flex flex-col gap-5">
            <p className="text-xs font-bold text-zinc-500 uppercase tracking-[0.3em] mb-1">Current Status</p>
            <div className="flex items-center gap-3 p-4 rounded-2xl border border-emerald-500/20 bg-emerald-500/5">
              <div className="relative flex h-2.5 w-2.5 flex-none">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </div>
              <div>
                <p className="text-emerald-400 font-bold text-sm">Open to Opportunities</p>
                <p className="text-zinc-500 text-xs">Internships &amp; Freelance</p>
              </div>
            </div>

            <Link
              href="#contact"
              className="relative flex items-center justify-center gap-2 py-3.5 rounded-2xl font-black text-sm text-white overflow-hidden group shadow-[0_0_20px_rgba(249,115,22,0.3)] hover:shadow-[0_0_35px_rgba(249,115,22,0.6)] transition-all duration-300"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-orange-500 via-rose-500 to-pink-500 group-hover:from-orange-400 group-hover:to-pink-400 transition-all" />
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent skew-x-12"
                animate={{ x: ["-100%", "200%"] }}
                transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut", repeatDelay: 1 }}
              />
              <Mail className="relative z-10 w-4 h-4" />
              <span className="relative z-10">Let&apos;s Connect</span>
            </Link>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8" />

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-zinc-600 text-xs flex items-center gap-1.5 flex-wrap justify-center"
          >
            &copy; {new Date().getFullYear()} Shreshth Tarwey — Built with
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 inline" />
            using
            <Code2 className="w-3.5 h-3.5 text-blue-400 inline" />
            Next.js &amp; Framer Motion
          </motion.p>

          {/* Back to top */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -3, scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-zinc-400 hover:text-white hover:border-white/30 hover:bg-white/10 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] text-xs font-bold uppercase tracking-widest transition-all duration-300"
          >
            <ArrowUp className="w-3.5 h-3.5" />
            Back to Top
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
