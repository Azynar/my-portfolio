'use client';

import { motion } from 'framer-motion';
import { FiSearch, FiFileText, FiCode, FiCheckCircle } from 'react-icons/fi';

const steps = [
  {
    number: '01',
    icon: <FiSearch size={18} className="text-[var(--accent)]" />,
    title: 'Discovery & Strategy',
    text: 'We clarify the exact problem, target audience, and business goals. I map out requirements so we build the right thing once.',
  },
  {
    number: '02',
    icon: <FiFileText size={18} className="text-[var(--accent)]" />,
    title: 'Scope & Architecture',
    text: 'You receive a clear breakdown with timelines, architectural choices, and transparent pricing in writing before any code is written.',
  },
  {
    number: '03',
    icon: <FiCode size={18} className="text-[var(--accent)]" />,
    title: 'Sprint Build & Demos',
    text: 'I build in rapid iterative sprints with private preview links. You test features as they are built—no waiting for weeks in the dark.',
  },
  {
    number: '04',
    icon: <FiCheckCircle size={18} className="text-[var(--accent)]" />,
    title: 'Launch & Handover',
    text: 'Final QA, performance audit, clean repository transfer, and warranty support. You retain 100% intellectual property.',
  },
];

export default function Process() {
  return (
    <section id="process" className="bg-[var(--bg)] px-6 py-20 md:px-24 md:py-24 border-t border-[var(--border)]">
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-[var(--accent)] font-[var(--font-syne)]">
              Collaborative Workflow
            </span>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-[var(--text)] font-[var(--font-syne)] sm:text-4xl">
              Zero guesswork. <span className="text-[var(--accent)]">Predictable delivery.</span>
            </h2>
          </div>
          <p className="mt-3 max-w-md text-xs text-[var(--muted)] sm:text-sm md:mt-0">
            A battle-tested 4-step framework designed to maintain velocity without sacrificing code quality.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <motion.article
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="flex flex-col justify-between rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 shadow-xs transition-all hover:border-[var(--text)]/20"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs font-bold text-[var(--accent)]">
                    {step.number}
                  </span>
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--surface-2)]">
                    {step.icon}
                  </div>
                </div>

                <h3 className="text-sm font-bold text-[var(--text)] font-[var(--font-syne)] mb-1.5">
                  {step.title}
                </h3>

                <p className="text-xs leading-relaxed text-[var(--muted)]">
                  {step.text}
                </p>
              </div>

              <div className="mt-5 h-1 w-full rounded-full bg-[var(--surface-2)] overflow-hidden">
                <div
                  className="h-full bg-[var(--accent)]"
                  style={{ width: `${(index + 1) * 25}%` }}
                />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
