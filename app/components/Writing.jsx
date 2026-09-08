'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FiExternalLink, FiArrowRight } from 'react-icons/fi';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const posts = [
  {
    title: 'AI is Smart. Blockchain is Honest. Here\'s What Happens When They Work Together.',
    summary: 'A technical deep-dive into how decentralized cryptographic ledgers and automated systems complement each other to verify synthetic data.',
    readTime: '9 min read',
    tags: ['Architecture', 'System Design'],
    link: 'https://azynar.hashnode.dev/ai-is-smart-blockchain-is-honest-here-s-what-happens-when-they-work-together',
  },
  {
    title: 'AI Coding in 2026: What Actually Breaks in Production',
    summary: 'An unfiltered analysis of developer tooling, context limits, subtle security bugs, and what engineering leaders must guard against.',
    readTime: '12 min read',
    tags: ['Production', 'Engineering', 'Security'],
    link: 'https://azynar.hashnode.dev/beyond-the-vibe-what-ai-coding-actually-looks-like-in-2026',
  },
];

export default function Writing() {
  return (
    <section id="writing" className="bg-[var(--bg)] px-6 py-20 md:px-24 md:py-24 border-t border-[var(--border)]">
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-[var(--accent)] font-[var(--font-syne)]">
              Technical Insights &amp; Essays
            </span>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-[var(--text)] font-[var(--font-syne)] sm:text-4xl">
              Thoughts on <span className="text-[var(--accent)]">modern engineering</span>.
            </h2>
          </div>
          <p className="mt-3 max-w-md text-xs text-[var(--muted)] sm:text-sm md:mt-0">
            I write about what works, what breaks, and architectural tradeoffs in modern web development.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
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
              className="group flex flex-col justify-between rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-xs transition-all hover:border-[var(--text)]/20"
            >
              <div>
                <div className="flex items-center justify-between mb-3.5">
                  <Badge variant="outline" className="text-[10px]">
                    Hashnode Article
                  </Badge>
                  <span className="text-[11px] text-[var(--muted)]">{post.readTime}</span>
                </div>

                <h3 className="text-base font-bold text-[var(--text)] font-[var(--font-syne)] transition-colors group-hover:text-[var(--accent)]">
                  {post.title}
                </h3>

                <p className="mt-2 text-xs leading-relaxed text-[var(--muted)]">
                  {post.summary}
                </p>

                <div className="mt-4 flex flex-wrap gap-1">
                  {post.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-md border border-[var(--border)] bg-[var(--surface-2)] px-2 py-0.5 font-mono text-[9px] text-[var(--muted)]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-5 flex items-center justify-between border-t border-[var(--border)] pt-3.5 text-xs font-semibold text-[var(--accent)]">
                <span>Read Full Article</span>
                <FiExternalLink size={12} className="transition-transform group-hover:translate-x-0.5" />
              </div>
            </motion.a>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link href="/blog">
            <Button variant="outline" size="sm" className="gap-1.5 rounded-full px-5 text-xs">
              <span>View All Blog Articles</span>
              <FiArrowRight size={12} />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}