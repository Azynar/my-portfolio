'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden bg-[var(--bg)] px-6 py-12 md:px-24 min-h-screen flex items-center pt-20 md:pt-28">
      <div className="pointer-events-none absolute -top-32 right-0 h-72 w-72 rounded-full bg-[var(--accent)]/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-1/4 h-64 w-64 rounded-full bg-blue-200/30 blur-3xl" />
      <div className="mx-auto max-w-5xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-7 inline-flex items-center rounded-full border border-green-200 bg-green-50 px-4 py-2"
        >
          <span className="text-sm text-green-700">● Available for freelance projects</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-4 text-2xl font-extrabold leading-[1.05] tracking-[-0.02em] text-[var(--text)] font-[var(--font-syne)] sm:text-4xl md:text-5xl lg:text-6xl"
        >
          I Help Startups Build Faster,
          <br className="hidden sm:inline" />
          Automate Smarter, and Document Clearly.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mb-3 max-w-3xl text-sm leading-relaxed text-[var(--muted)] md:text-base"
        >
          AI-powered JavaScript developer and technical writer. I use modern AI tools to ship products faster, build automation systems that save time, and write documentation that actually gets read.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mb-8 max-w-3xl text-sm leading-relaxed text-[var(--muted)] md:text-base"
        >
          I&apos;m Abdulazeem — a developer and technical writer who works at the intersection of AI-assisted development, automation, and clear technical communication. Based in Nigeria. Working globally. Always building.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.65 }}
          className="flex flex-wrap items-center gap-3"
        >
          <a href="#projects" className="rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(30,111,255,0.25)] transition-all duration-500 hover:-translate-y-0.5 hover:opacity-90">
            See My Work ↓
          </a>
          <a href="/resume" className="rounded-full border border-[var(--border)] bg-white/80 px-5 py-3 text-sm font-semibold text-[var(--text)] transition-all duration-500 hover:-translate-y-0.5 hover:border-[var(--accent)] hover:text-[var(--accent)]">
            Resume →
          </a>
        </motion.div>
      </div>
    </section>
  );
}