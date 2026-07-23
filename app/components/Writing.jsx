'use client';

import { motion } from 'framer-motion';
import { FiExternalLink } from 'react-icons/fi';

const posts = [
  {
    title: 'AI is Smart. Blockchain is Honest. Here\'s What Happens When They Work Together.',
    readTime: '9 min read',
    link: 'https://azynar.hashnode.dev/ai-is-smart-blockchain-is-honest-here-s-what-happens-when-they-work-together',
  },
  {
    title: 'AI Coding in 2026: What Actually Breaks in Production',
    readTime: '12 min read',
    link: 'https://azynar.hashnode.dev/beyond-the-vibe-what-ai-coding-actually-looks-like-in-2026',
  },
];

export default function Writing() {
  return (
    <section id="writing" className="relative overflow-hidden bg-[var(--dark)] px-6 py-20 md:px-24 md:py-28">
      <div className="pointer-events-none absolute left-0 top-0 h-72 w-72 rounded-full bg-[var(--accent)]/15 blur-3xl" />
      <div className="mx-auto max-w-4xl">
        <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="mb-4 text-sm text-white/70">
          Writing
        </motion.p>
        <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-5 text-3xl font-extrabold tracking-tight text-white font-[var(--font-syne)] md:text-5xl">
          Developer content worth <span className="text-[var(--accent)]">reading</span>.
        </motion.h2>
        <motion.p initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="mb-10 max-w-2xl text-sm text-white/70 md:text-base">
          I write about AI, Web3, and what it actually looks like to build real things. Published on Hashnode.
        </motion.p>

        <div className="flex flex-col divide-y divide-white/10 border-y border-white/10">
          {posts.map((post, index) => (
            <motion.a
              key={post.link}
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group flex items-center justify-between gap-4 py-5 transition-colors hover:text-[var(--accent)]"
            >
              <div>
                <h3 className="text-base font-bold text-white transition-colors group-hover:text-[var(--accent)] font-[var(--font-syne)] md:text-lg">
                  {post.title}
                </h3>
                <p className="mt-1 text-xs text-white/50">{post.readTime}</p>
              </div>
              <FiExternalLink size={16} className="shrink-0 text-white/40 transition-colors group-hover:text-[var(--accent)]" />
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