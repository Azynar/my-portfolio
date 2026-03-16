import BlogCard from './components/BlogCard';

const articles = [
  {
    number: '01',
    title: 'Understanding Smart Contracts',
    summary: 'A beginner friendly guide to understanding what smart contracts are, how they work and why they matter in Web3.',
    date: 'March 2025',
    tags: ['Web3', 'Solidity', 'Beginners'],
    href: '#',
    platform: 'Hashnode',
  },
  {
    number: '02',
    title: 'How to Write Developer Documentation',
    summary: 'A practical guide to writing clear, useful developer docs that engineers actually enjoy reading.',
    date: 'April 2025',
    tags: ['Technical Writing', 'Docs', 'Guide'],
    href: '#',
    platform: 'Medium',
  },
  {
    number: '03',
    title: 'Getting Started with Next.js',
    summary: 'Everything you need to know to build your first Next.js application from scratch.',
    date: 'May 2025',
    tags: ['Next.js', 'React', 'Frontend'],
    href: '#',
    platform: 'Hashnode',
  },
];

export default function Blog() {
  return (
    <main style={{background: 'var(--bg)', minHeight: '100vh'}}>

    <div className="px-6 md:px-24 pt-32 md:pt-40 pb-20 md:pb-32" style={{maxWidth: '1100px', margin: '0 auto'}}>

      <a href="/" style={{border: '1px solid var(--border)', fontFamily: 'var(--font-syne)', fontWeight: 700}} className="inline-flex items-center gap-2 text-[#8899aa] text-xs uppercase tracking-widest px-5 py-2 rounded-full hover:border-[#1e6fff] hover:text-[#1e6fff] transition-all no-underline mb-12">
        ← Back to Home
      </a>

        <p className="text-[#8899aa] text-xs uppercase tracking-widest mb-4">Writing</p>
        <h1 style={{fontFamily: 'var(--font-syne)', fontWeight: 800}} className="text-5xl md:text-6xl text-[#f0f4ff] tracking-tight mb-6">
          The Blog.
        </h1>
        <p className="text-[#8899aa] text-sm leading-relaxed max-w-xl mb-16">
          I write about Web3 development, technical writing, and building
          products on the blockchain. Articles published on Hashnode and Medium.
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