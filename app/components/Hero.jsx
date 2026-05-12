'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden bg-[var(--bg)] px-6 pb-20 pt-32 md:px-24 md:pb-28 md:pt-44">
      <div className="pointer-events-none absolute -top-32 right-0 h-72 w-72 rounded-full bg-[var(--accent)]/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-1/4 h-64 w-64 rounded-full bg-blue-200/30 blur-3xl" />
      <div className="mx-auto max-w-5xl">
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
          className="mb-6 text-4xl font-extrabold leading-[1.05] tracking-[-0.03em] text-[var(--text)] font-[var(--font-syne)] md:text-7xl"
        >
          I Build for the Web.
          <br />
          I Write for Developers.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mb-4 max-w-3xl text-base leading-relaxed text-[var(--muted)] md:text-lg"
        >
          Full-Stack Developer & Technical Writer specialising in Web2 products, Web3 applications, and developer content that actually gets read.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mb-10 max-w-3xl text-sm leading-relaxed text-[var(--muted)] md:text-base"
        >
          I&apos;m Abdulazeem — a Computer Science graduate and freelance developer based in Nigeria, working with startups, small businesses, and Web3 protocols globally. I write code that ships and documentation that developers bookmark.
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
          <a href="/resume" className="rounded-full border border-[var(--border)] bg-white/80 px-6 py-3 text-sm font-semibold text-[var(--text)] transition-all duration-500 hover:-translate-y-0.5 hover:border-[var(--accent)] hover:text-[var(--accent)]">
            My Resume →
          </a>
        </motion.div>
      </div>
    </section>
  );
}