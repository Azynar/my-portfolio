'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FiArrowDown, FiDownload, FiArrowRight, FiTerminal } from 'react-icons/fi';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export default function Hero() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative flex min-h-[88vh] items-center bg-[var(--bg)] px-6 pt-28 pb-16 md:px-24 md:pt-36 md:pb-24"
    >
      <div className="mx-auto grid w-full max-w-5xl grid-cols-1 items-center gap-12 lg:grid-cols-[1.3fr_1fr] lg:gap-14">
        <div>
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-5 inline-flex"
          >
            <Badge variant="success" className="gap-2 px-3 py-1">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              <span className="text-[11px] font-medium tracking-wide">
                Available for Freelance &amp; Contract Work
              </span>
            </Badge>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.08 }}
            className="mb-2 text-xs font-semibold uppercase tracking-widest text-[var(--muted)] font-[var(--font-syne)]"
          >
            Abdulazeem Badmus · Building as Azynar
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.12 }}
            className="mb-5 text-4xl font-extrabold leading-[1.08] tracking-tight text-[var(--text)] font-[var(--font-syne)] sm:text-5xl md:text-6xl"
          >
            I turn ideas into <span className="text-[var(--accent)]">shipped web products</span> that deliver results.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.18 }}
            className="mb-8 max-w-lg text-sm leading-relaxed text-[var(--muted)] sm:text-base"
          >
            Web developer building responsive, fast user interfaces with React, Next.js, TypeScript, and Tailwind CSS—growing towards full-stack with Node.js, Supabase, and REST API integrations.
          </motion.p>

          {/* Metric Stats */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.24 }}
            className="mb-8 grid max-w-md grid-cols-3 gap-4 rounded-xl border border-[var(--border)] bg-[var(--surface)] p-4 shadow-xs"
          >
            <div>
              <p className="text-xl font-bold text-[var(--text)] font-[var(--font-syne)]">3+ Yrs</p>
              <p className="text-[11px] text-[var(--muted)]">Shipping Code</p>
            </div>
            <div className="border-x border-[var(--border)] px-3">
              <p className="text-xl font-bold text-[var(--accent)] font-[var(--font-syne)]">&lt; 48h</p>
              <p className="text-[11px] text-[var(--muted)]">Sprint Response</p>
            </div>
            <div>
              <p className="text-xl font-bold text-[var(--text)] font-[var(--font-syne)]">100%</p>
              <p className="text-[11px] text-[var(--muted)]">IP Handover</p>
            </div>
          </motion.div>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap items-center gap-3"
          >
            <Button
              size="lg"
              onClick={() => scrollTo('contact')}
              className="rounded-full px-6 font-semibold"
            >
              <span>Let&apos;s Build Together</span>
              <FiArrowRight size={14} />
            </Button>

            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollTo('projects')}
              className="rounded-full px-6 font-semibold"
            >
              <span>Explore Projects</span>
            </Button>

            <a
              href="/Abdulazeem-Badmus.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-[var(--muted)] transition-colors hover:text-[var(--text)]"
            >
              <FiDownload size={13} />
              <span>CV / Resume</span>
            </a>
          </motion.div>
        </div>

        {/* Hero Visual Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="relative mx-auto w-full max-w-sm lg:max-w-md"
        >
          {/* Avatar Card */}
          <div className="relative aspect-square overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-2 shadow-md">
            <div className="relative h-full w-full overflow-hidden rounded-xl bg-[var(--surface-2)]">
              <Image
                src="/avatar.png"
                alt="Abdulazeem Badmus (Azynar), Web Developer"
                fill
                sizes="(max-width: 1024px) 100vw, 420px"
                className="object-cover object-top"
                priority
              />
            </div>
          </div>

          {/* Stack summary pill */}
          <div className="mt-3 flex items-center justify-between rounded-xl border border-[var(--border)] bg-[var(--surface)] px-4 py-2.5 shadow-xs">
            <div className="flex items-center gap-2 text-xs text-[var(--muted)]">
              <FiTerminal size={14} className="text-[var(--accent)]" />
              <span className="font-mono text-[11px] text-[var(--text)]">React · Next.js · Node.js</span>
            </div>
            <span className="rounded-md bg-[var(--surface-2)] px-2 py-0.5 font-mono text-[10px] text-[var(--muted)]">
              TypeScript &amp; Supabase
            </span>
          </div>
        </motion.div>
      </div>

      {/* Scroll Down */}
      <button
        onClick={() => scrollTo('about')}
        aria-label="Scroll to About section"
        className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-1 text-[11px] font-medium text-[var(--muted)] transition-colors hover:text-[var(--text)]"
      >
        <span>Scroll</span>
        <FiArrowDown size={12} />
      </button>
    </section>
  );
}