import BlogCard from './components/BlogCard';
import Link from 'next/link';

const articles = [
  {
    number: '01',
    title: 'AI is Smart. Blockchain is Honest. Here\'s What Happens When They Work Together.',
    summary: 'How AI and blockchain work together to create verifiable, transparent, and trustworthy systems — preventing bias and proving data integrity.',
    date: 'April 2026',
    readTime: '9 min read',
    tags: ['AI', 'Blockchain'],
    href: 'https://azynar.hashnode.dev/ai-is-smart-blockchain-is-honest-here-s-what-happens-when-they-work-together',
    platform: 'Hashnode',
  },
  {
    number: '02',
    title: 'AI Coding in 2026: What Actually Breaks in Production',
    summary: 'A developer\'s honest breakdown of AI coding tools, real production failures, security vulnerabilities, and what founders need to know.',
    date: 'June 2026',
    readTime: '12 min read',
    tags: ['AI', 'Production'],
    href: 'https://azynar.hashnode.dev/beyond-the-vibe-what-ai-coding-actually-looks-like-in-2026',
    platform: 'Hashnode',
  },
];

export default function Blog() {
  return (
    <main className="min-h-screen bg-[var(--bg)]">

    <div className="mx-auto max-w-6xl px-6 pb-20 pt-32 md:px-24 md:pb-28 md:pt-40">

      <Link href="/" className="mb-12 inline-flex items-center gap-2 rounded-full border border-[var(--border)] px-5 py-2 text-xs text-[var(--text)] transition-all hover:border-[var(--accent)] hover:text-[var(--accent)]">
        ← Back to Home
      </Link>

        <p className="mb-4 text-sm text-[var(--muted)]">Writing</p>
        <h1 className="mb-6 text-5xl font-extrabold tracking-tight text-[var(--text)] font-[var(--font-syne)] md:text-6xl">
          The <span className="text-[var(--accent)]">Blog</span>.
        </h1>
        <p className="mb-16 max-w-xl text-sm leading-relaxed text-[var(--muted)]">
          I write about AI, Web3, and what it actually looks like to build real things — no hype, just what worked and what broke.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {articles.map((article) => (
            <BlogCard key={article.number} article={article} />
          ))}
        </div>

      </div>

    </main>
  );
}