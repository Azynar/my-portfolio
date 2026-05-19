'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden bg-[var(--bg)] px-6 py-12 md:px-24 md:py-16 min-h-screen flex items-center">
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
          className="mb-4 text-3xl font-extrabold leading-[1.05] tracking-[-0.02em] text-[var(--text)] font-[var(--font-syne)] sm:text-4xl md:text-6xl lg:text-7xl"
        >
          I Build Products That Work.
          <br className="hidden sm:inline" />
          Then I Write About How They Work.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mb-3 max-w-3xl text-sm leading-relaxed text-[var(--muted)] md:text-base"
        >
          JavaScript developer and technical writer working at the intersection of Web2, Web3, and AI-assisted development. I build fast, ship real things, and document everything clearly.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mb-8 max-w-3xl text-sm leading-relaxed text-[var(--muted)] md:text-base"
        >
          I&apos;m Abdulazeem — a Computer Science graduate from Nigeria building in public and shipping real products. I use JavaScript across the stack with AI tools as part of my workflow, not a replacement for understanding what I&apos;m building.
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
            Resume→
          </a>
        </motion.div>
      </div>
    </section>
  );
}