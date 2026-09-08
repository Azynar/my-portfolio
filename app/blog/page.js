import Link from 'next/link';
import { FiArrowLeft } from 'react-icons/fi';
import BlogCard from './components/BlogCard';

export const metadata = {
  title: 'Technical Writing & Articles',
  description:
    'Engineering essays, production postmortems, and architectural deep-dives on Web Development, Next.js, and APIs by Abdulazeem Badmus.',
};

const articles = [
  {
    number: '01',
    title: 'AI is Smart. Blockchain is Honest. Here\'s What Happens When They Work Together.',
    summary:
      'How distributed cryptographic ledgers and automated systems work together to create verifiable, transparent systems and data integrity guardrails.',
    date: 'April 2026',
    readTime: '9 min read',
    tags: ['Architecture', 'System Design'],
    href: 'https://azynar.hashnode.dev/ai-is-smart-blockchain-is-honest-here-s-what-happens-when-they-work-together',
    platform: 'Hashnode',
  },
  {
    number: '02',
    title: 'AI Coding in 2026: What Actually Breaks in Production',
    summary:
      'An analysis of AI-assisted engineering workflows, context constraints, subtle edge case bugs in async logic, and production stability considerations.',
    date: 'June 2026',
    readTime: '12 min read',
    tags: ['Production', 'Engineering', 'Developer Tooling'],
    href: 'https://azynar.hashnode.dev/beyond-the-vibe-what-ai-coding-actually-looks-like-in-2026',
    platform: 'Hashnode',
  },
];

export default function Blog() {
  return (
    <main className="min-h-screen bg-[var(--bg)] px-6 pt-32 pb-24 md:px-24 md:pt-40 md:pb-32">
      <div className="mx-auto max-w-5xl">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 rounded-lg border border-[var(--border)] bg-[var(--surface)] px-3 py-1.5 text-xs font-medium text-[var(--muted)] transition-colors hover:text-[var(--text)] hover:border-[var(--text)]/30 mb-8"
        >
          <FiArrowLeft size={13} />
          <span>Back to Home</span>
        </Link>

        <div className="mb-12 max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-widest text-[var(--accent)] font-[var(--font-syne)] mb-2 block">
            Articles &amp; Insights
          </span>

          <h1 className="text-3xl font-extrabold tracking-tight text-[var(--text)] font-[var(--font-syne)] sm:text-4xl md:text-5xl">
            The <span className="text-[var(--accent)]">Engineering Blog</span>.
          </h1>

          <p className="mt-3 text-xs leading-relaxed text-[var(--muted)] sm:text-sm">
            Writing about web engineering, system architecture, performance optimization, and lessons learned from production software.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {articles.map((article) => (
            <BlogCard key={article.number} article={article} />
          ))}
        </div>
      </div>
    </main>
  );
}