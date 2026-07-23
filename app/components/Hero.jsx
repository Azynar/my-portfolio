'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Hero() {
  return (
    <section id="hero" className="relative flex min-h-screen items-center overflow-hidden bg-[var(--bg)] px-6 py-10 pt-20 md:px-24 md:py-12 md:pt-28">
      <div className="pointer-events-none absolute -top-32 right-0 h-72 w-72 rounded-full bg-[var(--accent)]/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-1/4 h-64 w-64 rounded-full bg-blue-200/30 blur-3xl" />
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-8 lg:grid-cols-[1.3fr_1fr] lg:gap-12">
        
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-4 inline-flex items-center rounded-full border border-green-200 bg-green-50 px-4 py-2"
          >
            <span className="text-sm text-green-700">● Available for freelance projects</span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="mb-4 text-xs uppercase tracking-[0.32em] text-[var(--accent)] font-[var(--font-syne)]"
          >
            Abdulazeem Babatunde Badmus — Building as Azynar
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-6 max-w-3xl text-4xl font-extrabold leading-[0.96] tracking-[-0.04em] text-[var(--text)] font-[var(--font-syne)] sm:text-5xl md:text-6xl"
          >
            I build <span className="text-[var(--accent)]">modern websites</span> and software that help <span className="text-[var(--accent)]">businesses grow</span>.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mb-8 max-w-2xl text-sm leading-relaxed text-[var(--muted)] md:text-base"
          >
            I design and ship fast, reliable web experiences and automation tools that help businesses move from idea to execution.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mb-10 grid grid-cols-3 gap-4 max-w-md"
          >
            <div>
              <p className="text-2xl font-bold text-[var(--text)] font-[var(--font-syne)]">3+</p>
              <p className="text-xs text-[var(--muted)]">Years Building</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-[var(--text)] font-[var(--font-syne)]">5+</p>
              <p className="text-xs text-[var(--muted)]">Projects Shipped</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-[var(--text)] font-[var(--font-syne)]">100%</p>
              <p className="text-xs text-[var(--muted)]">Remote Ready</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65 }}
            className="flex flex-wrap items-center gap-3"
          >
            <a href="#contact" className="rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(30,111,255,0.25)] transition-all duration-500 hover:-translate-y-0.5 hover:opacity-90">
              Hire Me
            </a>
            <a href="#projects" className="rounded-full border border-[var(--border)] bg-white/80 px-5 py-3 text-sm font-semibold text-[var(--text)] transition-all duration-500 hover:-translate-y-0.5 hover:border-[var(--accent)] hover:text-[var(--accent)]">
              View Projects
            </a>
            <a href="/Abdulazeem-Badmus.pdf" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-[var(--accent)] underline underline-offset-4 hover:opacity-80">
              Resume →
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="relative mx-auto w-full max-w-sm lg:max-w-none"
        >
          <div className="relative aspect-square overflow-hidden rounded-3xl border border-[var(--border)] bg-white/50">
            <Image
              src="/avatar.png"
              alt="Abdulazeem Badmus (Azynar), web developer"
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}