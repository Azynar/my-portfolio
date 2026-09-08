import { FiExternalLink, FiCalendar, FiClock } from 'react-icons/fi';
import { Badge } from '@/components/ui/badge';

export default function BlogCard({ article }) {
  return (
    <a
      href={article.href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col justify-between rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-xs transition-all hover:border-[var(--text)]/20"
    >
      <div>
        <div className="flex items-center justify-between mb-3.5">
          <Badge variant="accent" className="text-[10px]">
            Article #{article.number}
          </Badge>
          <Badge variant="outline" className="text-[10px]">
            {article.platform}
          </Badge>
        </div>

        <h3 className="text-base font-bold leading-snug text-[var(--text)] font-[var(--font-syne)] transition-colors group-hover:text-[var(--accent)]">
          {article.title}
        </h3>

        <p className="mt-2 text-xs leading-relaxed text-[var(--muted)]">
          {article.summary}
        </p>

        <div className="mt-4 flex flex-wrap gap-1">
          {article.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md border border-[var(--border)] bg-[var(--surface-2)] px-2 py-0.5 font-mono text-[9px] text-[var(--muted)]"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-5 flex items-center justify-between border-t border-[var(--border)] pt-3.5">
        <div className="flex items-center gap-2 text-[11px] text-[var(--muted)]">
          <span className="inline-flex items-center gap-1">
            <FiCalendar size={11} /> {article.date}
          </span>
          <span>·</span>
          <span className="inline-flex items-center gap-1">
            <FiClock size={11} /> {article.readTime}
          </span>
        </div>
        <div className="flex items-center gap-1 text-xs font-semibold text-[var(--accent)]">
          <span>Read</span>
          <FiExternalLink size={12} className="transition-transform group-hover:translate-x-0.5" />
        </div>
      </div>
    </a>
  );
}