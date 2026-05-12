import BlogCard from './components/BlogCard';
import Link from 'next/link';

const articles = [
  {
    number: '01',
    title: 'Article Title — replace with actual title',
    summary: 'Brief description of what the article covers',
    date: 'March 2025',
    tags: ['Web3', 'Security'],
    href: '#',
    platform: 'Hashnode',
  },
  {
    number: '02',
    title: 'Article Title — replace with actual title',
    summary: 'Brief description of what the article covers',
    date: 'April 2025',
    tags: ['Blockchain', 'Guides'],
    href: '#',
    platform: 'Hashnode',
  },
  {
    number: '03',
    title: 'Article Title — replace with actual title',
    summary: 'Brief description of what the article covers',
    date: 'May 2025',
    tags: ['Technical Writing', 'Web3'],
    href: '#',
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
          The Blog.
        </h1>
        <p className="mb-16 max-w-xl text-sm leading-relaxed text-[var(--muted)]">
          I write about Web3 development, technical writing, and building
          products on the blockchain.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((article) => (
            <BlogCard key={article.number} article={article} />
          ))}
        </div>

      </div>

    </main>
  );
}