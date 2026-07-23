'use client';

import { motion } from 'framer-motion';

const steps = [
  {
    number: '01',
    title: 'Discovery',
    text: 'We talk about your project, your goals, and your timeline. I ask the right questions so nothing gets built twice.',
  },
  {
    number: '02',
    title: 'Proposal',
    text: 'You get a clear scope, timeline, and price — in writing, before any work begins.',
  },
  {
    number: '03',
    title: 'Build & Review',
    text: 'I build in stages and share progress. You give feedback. Nothing ships without your sign-off.',
  },
  {
    number: '04',
    title: 'Delivery',
    text: 'Clean code, proper documentation, and post-launch support. You own everything — no lock-in.',
  },
];

export default function Process() {
  return (
    <section id="process" className="bg-[var(--bg)] px-6 py-20 md:px-24 md:py-28">
      <div className="mx-auto max-w-6xl">
        <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="mb-4 text-sm text-[var(--muted)]">
          How I Work
        </motion.p>
        <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-12 text-3xl font-extrabold tracking-tight text-[var(--text)] font-[var(--font-syne)] md:text-5xl">
          No surprises. Just <span className="text-[var(--accent)]">results</span>.
        </motion.h2>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-4">
          {steps.map((step, index) => (
            <motion.article
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-5 shadow-[0_8px_28px_rgba(5,10,24,0.05)] transition-all duration-500 hover:-translate-y-2 hover:border-[var(--accent)] hover:shadow-[0_18px_38px_rgba(30,111,255,0.12)]"
            >
              <p className="mb-2 text-lg font-extrabold text-[var(--accent)] font-[var(--font-syne)]">{step.number}</p>
              <h3 className="mb-2 text-lg font-bold text-[var(--text)]">{step.title}</h3>
              <p className="text-sm leading-relaxed text-[var(--muted)]">{step.text}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
