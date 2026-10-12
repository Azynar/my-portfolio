import { cn } from '@/lib/utils';

export function SectionHeading({ eyebrow, title, description, className = '' }) {
  return (
    <div className={cn('mb-10 max-w-3xl', className)}>
      {eyebrow ? (
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
          {eyebrow}
        </p>
      ) : null}

      <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-[var(--text)] font-[var(--font-syne)] sm:text-4xl md:text-5xl">
        {title}
      </h1>

      {description ? (
        <p className="mt-4 text-sm leading-relaxed text-[var(--muted)] sm:text-base">
          {description}
        </p>
      ) : null}
    </div>
  );
}
