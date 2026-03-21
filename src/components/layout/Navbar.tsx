"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[9999] transition-all duration-500 ${scrolled ? "bg-[#09090b]/80 backdrop-blur-xl border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.5)]" : "bg-transparent border-b border-transparent"}`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="relative flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-tr from-orange-500 to-rose-600 text-white font-black text-2xl shadow-[0_0_20px_rgba(249,115,22,0.4)] overflow-hidden group">
          <motion.div 
            className="absolute -inset-[100%] bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12"
            animate={{ x: ['-100%', '200%'] }}
            transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
          />
          <span className="relative z-10 tracking-tighter">ST</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8 bg-white/5 px-8 py-3 rounded-full border border-white/10 backdrop-blur-md shadow-[0_0_20px_rgba(255,255,255,0.05)]">
          {links.map((link, i) => (
            <Link
              key={i}
              href={link.href}
              className="text-sm font-semibold text-zinc-300 hover:text-orange-400 transition-colors relative group"
            >
              {link.name}
              <motion.span
                className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-[3px] bg-gradient-to-r from-orange-400 to-rose-500 rounded-full transition-all duration-300 group-hover:w-full shadow-[0_0_10px_rgba(249,115,22,0.8)]"
              />
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link href="https://github.com/ShreshthTarwey" target="_blank" className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-zinc-400 hover:text-white hover:bg-white/10 hover:border-white/30 hover:shadow-[0_0_15px_rgba(255,255,255,0.2)] transition-all">
            <Github className="w-5 h-5" />
          </Link>
          <Link href="https://www.linkedin.com/in/shreshth-tarwey" target="_blank" className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-zinc-400 hover:text-blue-400 hover:bg-blue-500/10 hover:border-blue-500/50 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] transition-all">
            <Linkedin className="w-5 h-5" />
          </Link>
          <Link href="mailto:shreshthtarwey3010@gmail.com" className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-zinc-400 hover:text-rose-400 hover:bg-rose-500/10 hover:border-rose-500/50 hover:shadow-[0_0_15px_rgba(225,29,72,0.4)] transition-all">
            <Mail className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </header>
  );
}
