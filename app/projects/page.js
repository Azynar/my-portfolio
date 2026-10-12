import Link from 'next/link';
import projects from './data';
import { Container } from '@/components/ui/container';
import { SectionHeading } from '@/components/ui/section-heading';
import { createPageMetadata } from '@/lib/metadata';

export const metadata = createPageMetadata({
  title: 'Web Development Projects & Case Studies | AZYNAR',
  description: 'Explore AZYNAR\'s web projects, prototypes, and digital solutions, including the problem, implementation approach, and verified project status.',
  path: '/projects',
});

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-[var(--bg)] pb-24 pt-32 md:pt-40 md:pb-32">
      <Container className="max-w-5xl">
        <SectionHeading
          eyebrow="Projects"
          title="Projects and practical experiments"
          description="I use projects to explore real requirements, improve my engineering skills, and demonstrate how design and implementation decisions come together. Each case study explains the context, what was built, and what is complete."
        />

        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.slug}
              className="overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-xs"
            >
              <div className="border-b border-[var(--border)] bg-[var(--surface-2)] p-4">
                <div className="flex items-center justify-between gap-3">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">
                    {project.category}
                  </span>
                  {project.status && (
                    <span className="rounded-full border border-[var(--border)] px-2 py-1 text-[10px] font-medium text-[var(--text)]">
                      {project.status}
                    </span>
                  )}
                </div>
              </div>

              <div className="p-6">
                <h2 className="text-xl font-bold text-[var(--text)] font-[var(--font-syne)]">
                  {project.title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
                  {project.desc}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-[var(--border)] bg-[var(--surface-2)] px-2.5 py-1 text-[10px] font-medium text-[var(--muted)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-6">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--accent)] transition-opacity hover:opacity-80"
                  >
                    <span>View case study</span>
                    <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </main>
  );
}
