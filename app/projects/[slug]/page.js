import Image from 'next/image';
import Link from 'next/link';
import { getProjectBySlug } from '../data';
import projects from '../data';

const SITE_BASE = 'https://azynardev.vercel.app';

export async function generateMetadata({ params }) {
  const resolved = await params;
  let slug = resolved?.slug;
  if (Array.isArray(slug)) slug = slug[0];
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: 'Project not found',
      description: 'Requested project could not be found.',
    };
  }

  const imageUrl = project.image ? new URL(project.image, SITE_BASE).toString() : undefined;

  return {
    title: project.title,
    description: project.desc,
    openGraph: {
      title: project.title,
      description: project.desc,
      url: `${SITE_BASE}/projects/${project.slug}`,
      images: imageUrl ? [{ url: imageUrl, alt: project.title }] : [],
    },
    twitter: {
      title: project.title,
      description: project.desc,
      images: imageUrl ? [imageUrl] : [],
    },
    alternates: {
      canonical: `${SITE_BASE}/projects/${project.slug}`,
    },
  };
}

export default async function ProjectPage({ params }) {
  const { slug: rawSlug } = await params;
  let slug = rawSlug;
  if (Array.isArray(slug)) slug = slug[0];
  const project = getProjectBySlug(slug);

  if (!project) {
    return (
      <div className="px-6 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-2xl font-bold">Project not found</h2>
          <p className="mt-4 text-sm text-[var(--muted)]">No project matches the requested slug: <strong>{String(slug)}</strong></p>
          <p className="mt-2 text-xs text-[var(--muted)]">Available slugs: {projects.map(p => p.slug).join(', ')}</p>
          <Link href="/" className="mt-6 inline-block text-[var(--accent)]">Go home</Link>
        </div>
      </div>
    );
  }

  return (
    <section className="bg-[var(--bg)] px-6 py-20 md:px-24 md:py-28">
      <div className="mx-auto max-w-4xl">
        <Link href="/" className="text-sm text-[var(--muted)]">← Back</Link>

        <h1 className="mt-4 text-3xl font-extrabold text-[var(--text)] font-[var(--font-syne)]">{project.title}</h1>
        <span className="inline-block mt-2 rounded-full bg-[var(--bg)] px-3 py-1 text-xs text-[var(--accent)]">{project.category}</span>

        <div className="mt-6 space-y-6">
          {project.image ? (
            <div className="relative h-64 w-full overflow-hidden rounded-xl border border-[var(--border)]">
              <Image src={project.image} alt={project.title} fill loading="eager" className="object-cover" />
            </div>
          ) : null}

          <p className="text-sm leading-relaxed text-[var(--muted)]">{project.long || project.desc}</p>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div>
              <h3 className="text-sm font-semibold text-[var(--text)]">Problem</h3>
              <p className="mt-2 text-sm text-[var(--muted)]">{project.problem}</p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-[var(--text)]">Solution</h3>
              <p className="mt-2 text-sm text-[var(--muted)]">{project.solution}</p>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-[var(--text)]">Tech</h3>
            <div className="mt-2 flex flex-wrap gap-2">
              {project.tags.map((t) => (
                <span key={t} className="rounded-full border border-[var(--border)] px-3 py-1 text-xs text-[var(--muted)]">{t}</span>
              ))}
            </div>
          </div>

          <div className="flex gap-3">
            {project.github && (
              <a href={project.github} className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] px-4 py-2 text-xs text-[var(--text)]">GitHub</a>
            )}
            {project.demo && project.demo !== 'N/A' && project.demo !== '#' && (
              <a href={project.demo} className="inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-4 py-2 text-xs text-white">Live Demo</a>
            )}
          </div>
        </div>
      </div>
      {/* JSON-LD for project */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'CreativeWork',
            name: project.title,
            description: project.desc,
            url: `${SITE_BASE}/projects/${project.slug}`,
            image: project.image ? new URL(project.image, SITE_BASE).toString() : undefined,
            keywords: project.tags && project.tags.join(', '),
            isPartOf: {
              '@type': 'WebSite',
              name: 'Azynar Portfolio',
              url: SITE_BASE,
            },
            sameAs: project.github ? [project.github] : undefined,
          }),
        }}
      />
    </section>
  );
}
