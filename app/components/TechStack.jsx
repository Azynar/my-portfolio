'use client';

import { motion } from 'framer-motion';
import { 
  SiNextdotjs, 
  SiReact, 
  SiTailwindcss, 
  SiTypescript, 
  SiNodedotjs, 
  SiPostgresql, 
  SiSupabase, 
  SiGit,
  SiTelegram
} from 'react-icons/si';
import { TbBrandVercel, TbApi } from 'react-icons/tb';

const stackCategories = [
  {
    category: 'Frontend & UI',
    description: 'Blazing-fast, SEO-optimized web interfaces',
    items: [
      { name: 'Next.js (App Router)', icon: <SiNextdotjs size={20} />, tag: 'Primary Framework' },
      { name: 'React 19', icon: <SiReact size={20} />, tag: 'UI Library' },
      { name: 'TypeScript', icon: <SiTypescript size={20} />, tag: 'Type Safety' },
      { name: 'Tailwind CSS v4', icon: <SiTailwindcss size={20} />, tag: 'Styling Engine' },
    ],
  },
  {
    category: 'Backend & APIs',
    description: 'Databases, server-side routes, and REST endpoints',
    items: [
      { name: 'Node.js', icon: <SiNodedotjs size={20} />, tag: 'Runtime' },
      { name: 'Supabase / PostgreSQL', icon: <SiSupabase size={20} />, tag: 'Database & Auth' },
      { name: 'REST APIs (CRUD)', icon: <TbApi size={20} />, tag: 'Fetch / Patch / Endpoints' },
      { name: 'PostgreSQL', icon: <SiPostgresql size={20} />, tag: 'Relational DB' },
    ],
  },
  {
    category: 'Automation & DevOps',
    description: 'Background bots, notification systems, and CI/CD',
    items: [
      { name: 'Telegram Bot API', icon: <SiTelegram size={20} />, tag: 'Alert Systems' },
      { name: 'Webhook Integrations', icon: <TbApi size={20} />, tag: 'Event Pipelines' },
      { name: 'Vercel / Cloud CI/CD', icon: <TbBrandVercel size={20} />, tag: 'Hosting' },
      { name: 'Git & GitHub', icon: <SiGit size={20} />, tag: 'Version Control' },
    ],
  },
];

export default function TechStack() {
  return (
    <section id="stack" className="bg-[var(--bg)] px-6 py-20 md:px-24 md:py-24 border-t border-[var(--border)]">
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-[var(--accent)] font-[var(--font-syne)]">
              Skills &amp; Architecture
            </span>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-[var(--text)] font-[var(--font-syne)] sm:text-4xl">
              Built for speed. <span className="text-[var(--accent)]">Engineered to scale.</span>
            </h2>
          </div>
          <p className="mt-3 max-w-md text-xs text-[var(--muted)] sm:text-sm md:mt-0">
            I pick modern, battle-tested tools that eliminate boilerplate, load in sub-seconds, and stay reliable in production.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
          {stackCategories.map((group, groupIdx) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: groupIdx * 0.1 }}
              className="flex flex-col rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 shadow-xs"
            >
              <div className="mb-4">
                <h3 className="text-base font-bold text-[var(--text)] font-[var(--font-syne)]">{group.category}</h3>
                <p className="mt-0.5 text-xs text-[var(--muted)]">{group.description}</p>
              </div>

              <div className="flex flex-col gap-2">
                {group.items.map((tech) => (
                  <div
                    key={tech.name}
                    className="flex items-center justify-between rounded-xl border border-[var(--border)] bg-[var(--surface-2)]/60 px-3.5 py-2.5 transition-colors hover:border-[var(--text)]/20 hover:bg-[var(--surface-2)]"
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[var(--surface)] text-[var(--text)]">
                        {tech.icon}
                      </div>
                      <span className="text-xs font-semibold text-[var(--text)]">{tech.name}</span>
                    </div>
                    <span className="rounded bg-[var(--surface)] px-2 py-0.5 font-mono text-[9px] text-[var(--muted)]">
                      {tech.tag}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
