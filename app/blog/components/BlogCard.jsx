import { FiExternalLink } from 'react-icons/fi';

export default function BlogCard({ article }) {
  return (
    <a href={article.href} target="_blank" rel="noopener noreferrer" className="group flex flex-col gap-4 rounded-2xl border border-[var(--border)] bg-white p-6 transition-all duration-300 hover:border-[var(--accent)]">

      <div className="flex items-center justify-between">
        <span className="text-xs tracking-widest text-[var(--accent)]">
          {article.number}
        </span>
        <span className="rounded-full border border-[var(--border)] px-3 py-1 text-xs text-[var(--muted)]">
          {article.platform}
        </span>
      </div>

      <h3 className="text-lg leading-snug text-[var(--text)] transition-colors duration-300 group-hover:text-[var(--accent)] font-[var(--font-syne)] font-bold">
        {article.title}
      </h3>

      <p className="flex-1 text-xs leading-relaxed text-[var(--muted)]">
        {article.summary}
      </p>

      <div className="flex flex-wrap gap-2">
        {article.tags.map((tag) => (
          <span key={tag} className="rounded-full bg-[var(--bg)] px-3 py-1 text-xs tracking-widest text-[var(--accent)]">
            {tag}
          </span>
        ))}
      </div>

      <div className="flex items-center justify-between mt-2">
        <span className="text-xs text-[var(--muted)]">{article.date}</span>
        <FiExternalLink size={14} className="text-[var(--muted)] transition-colors duration-300 group-hover:text-[var(--accent)]" />
      </div>

    </a>
  );
}