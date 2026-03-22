"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  Mail, Github, Linkedin, Send, Check, Terminal,
  MapPin, Clock, ArrowRight, Loader2
} from "lucide-react";
import Link from "next/link";

const CONTACT_ITEMS = [
  {
    icon: <Mail className="w-5 h-5" />,
    label: "Email",
    value: "shreshthtarwey3010@gmail.com",
    href: "mailto:shreshthtarwey3010@gmail.com",
    color: "from-rose-500/20 to-pink-500/10",
    border: "border-rose-500/20 hover:border-rose-500/50",
    iconColor: "text-rose-400",
    glow: "hover:shadow-[0_0_25px_rgba(244,63,94,0.15)]",
  },
  {
    icon: <Linkedin className="w-5 h-5" />,
    label: "LinkedIn",
    value: "shreshth-tarwey",
    href: "https://www.linkedin.com/in/shreshth-tarwey",
    color: "from-blue-500/20 to-cyan-500/10",
    border: "border-blue-500/20 hover:border-blue-500/50",
    iconColor: "text-blue-400",
    glow: "hover:shadow-[0_0_25px_rgba(59,130,246,0.15)]",
  },
  {
    icon: <Github className="w-5 h-5" />,
    label: "GitHub",
    value: "ShreshthTarwey",
    href: "https://github.com/ShreshthTarwey",
    color: "from-zinc-500/20 to-zinc-600/10",
    border: "border-zinc-500/20 hover:border-zinc-400/50",
    iconColor: "text-zinc-300",
    glow: "hover:shadow-[0_0_25px_rgba(255,255,255,0.07)]",
  },
];

type FormState = "idle" | "sending" | "success" | "error";

export default function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });
  const [formState, setFormState] = useState<FormState>("idle");
  const [focused, setFocused] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;
    setFormState("sending");

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );
      setFormState("success");
      formRef.current.reset();
      setTimeout(() => setFormState("idle"), 5000);
    } catch {
      setFormState("error");
      setTimeout(() => setFormState("idle"), 4000);
    }
  };

  const fields = [
    { name: "user_name",    label: "your_name",    type: "text",  placeholder: "Shreshth Tarwey" },
    { name: "user_email",   label: "your_email",   type: "email", placeholder: "you@example.com" },
    { name: "subject",      label: "subject",      type: "text",  placeholder: "Let's collaborate!" },
  ];

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative py-28 md:py-36 overflow-hidden bg-[#030303]"
    >
      {/* Background */}
      <div
        className="absolute inset-0 z-0 opacity-[0.018]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(90deg, rgba(255,255,255,0.5) 0px, rgba(255,255,255,0.5) 1px, transparent 1px, transparent 60px), repeating-linear-gradient(0deg, rgba(255,255,255,0.5) 0px, rgba(255,255,255,0.5) 1px, transparent 1px, transparent 60px)",
        }}
      />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-orange-500/8 to-transparent rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[300px] bg-rose-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16 md:mb-20"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-[2px] bg-gradient-to-r from-orange-500 to-transparent" />
            <span className="text-sm font-bold uppercase tracking-[0.4em] text-orange-400">Get In Touch</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter">
            Got an Idea?{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-rose-400">
              Let&apos;s Build It.
            </span>
          </h2>
          <p className="mt-4 text-zinc-400 max-w-lg text-base md:text-lg">
            Open to internships, freelance projects, and exciting collaborations. Drop me a message — I respond within 24 hours.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-start">

          {/* === LEFT: Contact Cards === */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-2 flex flex-col gap-4"
          >
            {/* Status badge */}
            <div className="flex items-center gap-3 mb-2">
              <div className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </div>
              <span className="text-emerald-400 text-sm font-bold tracking-wide">Available for work</span>
            </div>

            {/* Info badges */}
            <div className="flex gap-3 flex-wrap mb-2">
              <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 text-xs text-zinc-400 font-medium">
                <MapPin className="w-3.5 h-3.5 text-orange-400" /> India
              </div>
              <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 text-xs text-zinc-400 font-medium">
                <Clock className="w-3.5 h-3.5 text-blue-400" /> IST (UTC +5:30)
              </div>
            </div>

            {/* Contact links */}
            {CONTACT_ITEMS.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + i * 0.12 }}
              >
                <Link
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  className={`flex items-center gap-4 p-4 rounded-2xl bg-gradient-to-r ${item.color} border ${item.border} ${item.glow} backdrop-blur-sm transition-all duration-300 group`}
                >
                  <div className={`w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center ${item.iconColor} group-hover:scale-110 transition-transform`}>
                    {item.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-0.5">{item.label}</p>
                    <p className="text-sm text-zinc-200 font-medium truncate">{item.value}</p>
                  </div>
                  <ArrowRight className={`w-4 h-4 ${item.iconColor} opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all`} />
                </Link>
              </motion.div>
            ))}

            {/* Quote block */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mt-4 p-5 rounded-2xl border border-orange-500/10 bg-orange-500/5"
            >
              <p className="text-zinc-400 text-sm italic leading-relaxed">
                &ldquo;Code is like humor. When you have to explain it, it&apos;s bad.&rdquo;
              </p>
              <p className="text-orange-400/70 text-xs font-bold mt-2 uppercase tracking-widest">— Cory House</p>
            </motion.div>
          </motion.div>

          {/* === RIGHT: Terminal Form === */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-3"
          >
            {/* Terminal window chrome */}
            <div className="rounded-3xl overflow-hidden border border-white/10 bg-black/60 backdrop-blur-xl shadow-[0_0_80px_rgba(0,0,0,0.6)]">
              {/* Title bar */}
              <div className="flex items-center gap-3 px-6 py-4 bg-white/5 border-b border-white/8">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500" />
                </div>
                <div className="flex items-center gap-2 ml-2">
                  <Terminal className="w-3.5 h-3.5 text-zinc-500" />
                  <span className="text-zinc-500 text-xs font-mono">~/portfolio/contact — bash</span>
                </div>
              </div>

              <form ref={formRef} onSubmit={handleSubmit} className="p-6 md:p-8 flex flex-col gap-5">
                {/* Prompt line */}
                <div className="flex items-center gap-2 text-emerald-400 font-mono text-sm mb-2">
                  <span className="text-orange-400">shreshth</span>
                  <span className="text-zinc-500">@portfolio</span>
                  <span className="text-zinc-600">:</span>
                  <span className="text-blue-400">~</span>
                  <span className="text-zinc-500">$</span>
                  <span className="text-zinc-300 ml-1">send_message</span>
                  <motion.span
                    className="w-2 h-4 bg-zinc-400 rounded-[2px] ml-1"
                    animate={{ opacity: [1, 0] }}
                    transition={{ repeat: Infinity, duration: 0.8 }}
                  />
                </div>

                {/* Text fields */}
                {fields.map((field, i) => (
                  <motion.div
                    key={field.name}
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.5 + i * 0.1 }}
                    className="flex flex-col gap-1.5"
                  >
                    <label className="text-emerald-400 font-mono text-xs flex items-center gap-1.5">
                      <span className="text-orange-400/60">›</span>
                      <span>{field.label}:</span>
                    </label>
                    <div className={`relative rounded-xl border transition-all duration-300 ${focused === field.name ? "border-orange-500/60 shadow-[0_0_20px_rgba(249,115,22,0.12)]" : "border-white/8"} bg-white/4`}>
                      <input
                        type={field.type}
                        name={field.name}
                        required
                        placeholder={field.placeholder}
                        onFocus={() => setFocused(field.name)}
                        onBlur={() => setFocused(null)}
                        className="w-full bg-transparent px-4 py-3.5 text-zinc-200 text-sm font-mono placeholder:text-zinc-600 focus:outline-none"
                      />
                      {focused === field.name && (
                        <motion.div
                          layoutId="input-glow"
                          className="absolute inset-0 rounded-xl border border-orange-500/30 pointer-events-none"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                        />
                      )}
                    </div>
                  </motion.div>
                ))}

                {/* Textarea */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.8 }}
                  className="flex flex-col gap-1.5"
                >
                  <label className="text-emerald-400 font-mono text-xs flex items-center gap-1.5">
                    <span className="text-orange-400/60">›</span>
                    <span>message:</span>
                  </label>
                  <div className={`relative rounded-xl border transition-all duration-300 ${focused === "message" ? "border-orange-500/60 shadow-[0_0_20px_rgba(249,115,22,0.12)]" : "border-white/8"} bg-white/4`}>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      placeholder="Hey Shreshth, I'd love to work with you on..."
                      onFocus={() => setFocused("message")}
                      onBlur={() => setFocused(null)}
                      className="w-full bg-transparent px-4 py-3.5 text-zinc-200 text-sm font-mono placeholder:text-zinc-600 focus:outline-none resize-none"
                    />
                  </div>
                </motion.div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={formState === "sending" || formState === "success"}
                  whileHover={{ scale: formState === "idle" ? 1.02 : 1 }}
                  whileTap={{ scale: 0.98 }}
                  className="relative mt-2 w-full py-4 rounded-2xl font-black text-sm uppercase tracking-widest overflow-hidden transition-all duration-300 disabled:cursor-not-allowed"
                >
                  {/* BG layer */}
                  <span className={`absolute inset-0 transition-all duration-500 ${
                    formState === "success"
                      ? "bg-gradient-to-r from-emerald-500 to-teal-500"
                      : formState === "error"
                      ? "bg-gradient-to-r from-rose-600 to-red-600"
                      : "bg-gradient-to-r from-orange-500 via-rose-500 to-pink-500"
                  }`} />
                  {/* Shimmer */}
                  {formState === "idle" && (
                    <motion.span
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent skew-x-12"
                      animate={{ x: ["-100%", "200%"] }}
                      transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut", repeatDelay: 1 }}
                    />
                  )}
                  {/* Shadow glow */}
                  <span className={`absolute inset-0 rounded-2xl transition-all duration-300 ${formState === "success" ? "shadow-[0_0_30px_rgba(16,185,129,0.4)]" : "shadow-[0_0_30px_rgba(249,115,22,0.4)]"}`} />

                  <span className="relative z-10 flex items-center justify-center gap-2 text-white">
                    {formState === "sending" && <><Loader2 className="w-4 h-4 animate-spin" /> Sending...</>}
                    {formState === "success" && <><Check className="w-4 h-4" /> Message Sent!</>}
                    {formState === "error" && <>Failed — Try Again</>}
                    {formState === "idle" && <><Send className="w-4 h-4" /> Send Message<ArrowRight className="w-4 h-4" /></>}
                  </span>
                </motion.button>

                {formState === "success" && (
                  <motion.p
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center text-emerald-400 text-xs font-mono"
                  >
                    ✓ I&apos;ll get back to you within 24 hours!
                  </motion.p>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
