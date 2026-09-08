'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FiCode, FiLayers, FiCompass } from 'react-icons/fi';

const highlights = [
  { icon: <FiCode size={16} />, title: "Modern Frontend Architecture", desc: "Building responsive, accessible, and fast web interfaces with React, Next.js, and Tailwind CSS." },
  { icon: <FiLayers size={16} />, title: "Backend & API Integration", desc: "Connecting robust REST APIs (CRUD endpoints, fetch/patch/update) with Node.js and Supabase databases." },
  { icon: <FiCompass size={16} />, title: "Clear Communication", desc: "Frequent progress demos, transparent turnaround times, and reliable collaboration." },
];

export default function About() {
  return (
    <section id="about" className="bg-[var(--bg)] px-6 py-20 md:px-24 md:py-24 border-t border-[var(--border)]">
      <div className="mx-auto grid max-w-5xl grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-14">
        {/* Story column */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="space-y-5"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-[var(--accent)] font-[var(--font-syne)]">
            About Me
          </span>

          <h2 className="text-3xl font-extrabold tracking-tight text-[var(--text)] font-[var(--font-syne)] sm:text-4xl">
            From first concept to <span className="text-[var(--accent)]">production scale</span>.
          </h2>

          <p className="text-sm leading-relaxed text-[var(--muted)]">
            I&apos;m <strong className="text-[var(--text)]">Abdulazeem Badmus</strong> — a Computer Science graduate from the University of Ilorin, building under the alias <strong className="text-[var(--text)]">Azynar</strong>.
          </p>

          <p className="text-sm leading-relaxed text-[var(--muted)]">
            I work primarily as a web developer specializing in Next.js, React, Tailwind CSS, and TypeScript, actively growing into a full-stack developer by building backend integrations with Node.js, Supabase, and REST APIs.
          </p>

          <p className="text-sm leading-relaxed text-[var(--muted)]">
            Over the past 3+ years, I&apos;ve helped founders and businesses take ideas from designs to live, performant applications. My focus is writing clean, maintainable code that delivers great user experiences and real value.
          </p>

          {/* Value Highlights */}
          <div className="grid grid-cols-1 gap-2.5 pt-2">
            {highlights.map((h) => (
              <div key={h.title} className="flex items-start gap-3 rounded-xl border border-[var(--border)] bg-[var(--surface)] p-3.5 shadow-xs">
                <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[var(--surface-2)] text-[var(--accent)]">
                  {h.icon}
                </div>
                <div>
                  <h3 className="text-xs font-bold text-[var(--text)] font-[var(--font-syne)]">{h.title}</h3>
                  <p className="text-[11px] text-[var(--muted)] mt-0.5">{h.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Headshot Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="relative mx-auto w-full max-w-sm"
        >
          <div className="relative overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-3 shadow-md">
            <div className="relative aspect-4/5 w-full overflow-hidden rounded-xl bg-[var(--surface-2)]">
              <Image
                src="/Abdulazeem.png"
                alt="Abdulazeem Badmus"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-top"
              />
            </div>

            <div className="mt-3 flex items-center justify-between px-1.5 pb-1">
              <div>
                <p className="text-sm font-bold text-[var(--text)] font-[var(--font-syne)]">Abdulazeem Badmus</p>
                <p className="text-xs text-[var(--muted)]">BSc Computer Science · Web Developer</p>
              </div>
              <span className="rounded-md border border-[var(--border)] bg-[var(--surface-2)] px-2.5 py-0.5 text-[10px] font-medium text-[var(--muted)]">
                Nigeria (UTC+1)
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}