'use client';

import { motion } from 'framer-motion';

const posts = [
  {
    title: '[Replace with actual article title]',
    platform: 'Hashnode',
    description: '[Replace with actual article description]',
    tag: 'AI & Blockchain',
    link: '#',
  },
  {
    title: '[Replace with actual article title]',
    platform: 'Hashnode',
    description: '[Replace with actual article description]',
    tag: 'Automation',
    link: '#',
  },
  {
    title: '[Replace with actual article title]',
    platform: 'Hashnode',
    description: '[Replace with actual article description]',
    tag: 'Technical Writing',
    link: '#',
  },
];

export default function Writing() {
  return (
    <section id="writing" className="relative overflow-hidden bg-[var(--dark)] px-6 py-20 md:px-24 md:py-28">
      <div className="pointer-events-none absolute left-0 top-0 h-72 w-72 rounded-full bg-[var(--accent)]/15 blur-3xl" />
      <div className="mx-auto max-w-6xl">
        <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="mb-4 text-sm text-white/70">
          Writing
        </motion.p>
        <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-5 text-3xl font-extrabold tracking-tight text-white font-[var(--font-syne)] md:text-5xl">
          Developer content worth reading.
        </motion.h2>
        <motion.p initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="mb-12 max-w-3xl text-sm text-white/70 md:text-base">
          I write about AI-assisted development, automation systems, Web3 development, and technical communication. Published on Hashnode.
        </motion.p>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {posts.map((post, index) => (
            <motion.a
              key={post.tag + index}
              href={post.link}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="rounded-3xl border border-white/25 bg-white p-6 shadow-[0_14px_34px_rgba(0,0,0,0.32)] transition-all duration-500 hover:-translate-y-1 hover:border-[var(--accent)] hover:shadow-[0_18px_38px_rgba(30,111,255,0.22)]"
            >
              <span className="mb-3 inline-flex rounded-full border border-[var(--border)] bg-[var(--surface-2)] px-3 py-1 text-xs font-semibold text-[var(--text)]">
                {post.platform}
              </span>
              <h3 className="mb-3 text-xl font-extrabold leading-snug text-[var(--text)] font-[var(--font-syne)]">
                {post.title}
              </h3>
              <p className="mb-5 text-sm leading-relaxed text-[#374151]">{post.description}</p>
              <span className="inline-flex rounded-full bg-[var(--accent)]/10 px-3 py-1 text-xs font-semibold text-[var(--accent)]">
                {post.tag}
              </span>
            </motion.a>
          ))}
        </div>

        <a href="/blog" className="mt-10 inline-flex text-sm font-semibold text-white transition-colors hover:text-[var(--accent)]">
          View all articles →
        </a>
      </div>
    </section>
  );
}
