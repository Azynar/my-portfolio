'use client';

import { motion } from 'framer-motion';
import { FiAlertCircle, FiCalendar, FiInbox, FiGlobe } from 'react-icons/fi';

const problems = [
  {
    icon: <FiGlobe size={18} className="text-[var(--accent)]" />,
    title: 'Visitors cannot quickly find what you offer',
  },
  {
    icon: <FiInbox size={18} className="text-[var(--accent)]" />,
    title: 'Enquiries arrive through disconnected channels',
  },
  {
    icon: <FiCalendar size={18} className="text-[var(--accent)]" />,
    title: 'Booking or registration requires too much manual coordination',
  },
  {
    icon: <FiAlertCircle size={18} className="text-[var(--accent)]" />,
    title: 'A business needs a more credible destination for potential customers',
  },
];

export default function ProblemSection() {
  return (
    <section id="problems" className="bg-[var(--bg)] px-6 py-20 md:px-24 md:py-24 border-t border-[var(--border)]">
      <div className="mx-auto max-w-5xl">
        <div className="max-w-3xl">
          <span className="text-xs font-semibold uppercase tracking-widest text-[var(--accent)] font-[var(--font-syne)]">
            Problem to solve
          </span>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-[var(--text)] font-[var(--font-syne)] sm:text-4xl">
            Your online presence should do more than exist.
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
            Potential customers need to understand what you offer, trust your business, and know what to do next. If your information is scattered across social profiles and messages, it becomes harder to take action and harder to manage enquiries consistently.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
          {problems.map((problem, index) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.07 }}
              className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 shadow-xs"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--surface-2)]">
                {problem.icon}
              </div>
              <p className="text-sm leading-relaxed text-[var(--text)]">{problem.title}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
