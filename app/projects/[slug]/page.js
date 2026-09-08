import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { FiArrowLeft, FiArrowRight, FiExternalLink, FiGithub, FiCheck } from 'react-icons/fi';
import projects, { getProjectBySlug } from '../data';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const SITE_BASE = 'https://azynardev.vercel.app';

export async function generateStaticParams() {
  return projects.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({ params }) {
  const resolved = await params;
  let slug = resolved?.slug;
  if (Array.isArray(slug)) slug = slug[0];
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: 'Project Not Found | Azynar',
      description: 'The requested project case study could not be found.',
    };
  }

  const imageUrl = project.image ? new URL(project.image, SITE_BASE).toString() : undefined;

  return {
    title: `${project.title} — Case Study | Azynar`,
    description: project.desc,
    openGraph: {
      title: `${project.title} | Azynar`,
      description: project.desc,
      url: `${SITE_BASE}/projects/${project.slug}`,
      images: imageUrl ? [{ url: imageUrl, alt: project.title }] : [],
    },
    twitter: {
      card: 'summary_large_image',
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
    notFound();
  }

  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  return (
    <main className="min-h-screen bg-[var(--bg)] px-6 pt-32 pb-24 md:px-24 md:pt-40 md:pb-32">
      <div className="mx-auto max-w-4xl">
        {/* Back navigation */}
        <Link href="/#projects">
          <Button variant="outline" size="sm" className="gap-1.5 rounded-lg text-xs">
            <FiArrowLeft size={13} />
            <span>Back to Projects</span>
          </Button>
        </Link>

        {/* Title Header */}
        <div className="mt-8">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <Badge variant="accent" className="text-xs">
              {project.category}
            </Badge>
            {project.status && (
              <Badge variant="outline" className="text-xs">
                {project.status}
              </Badge>
            )}
          </div>

          <h1 className="text-3xl font-extrabold tracking-tight text-[var(--text)] font-[var(--font-syne)] sm:text-4xl md:text-5xl">
            {project.title}
          </h1>

          <p className="mt-3 text-sm leading-relaxed text-[var(--muted)] sm:text-base">
            {project.desc}
          </p>

          {/* Action links */}
          <div className="mt-6 flex flex-wrap items-center gap-2.5">
            {project.demo && project.demo !== 'N/A' && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="sm" className="gap-1.5 rounded-lg text-xs">
                  <span>Live Demo</span>
                  <FiExternalLink size={12} />
                </Button>
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" size="sm" className="gap-1.5 rounded-lg text-xs">
                  <FiGithub size={13} />
                  <span>Source Code</span>
                </Button>
              </a>
            )}
          </div>
        </div>

        {/* Project Hero Image */}
        {project.image && (
          <div className="mt-8 overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-xs">
            <div className="flex items-center gap-2 border-b border-[var(--border)] bg-[var(--surface-2)] px-4 py-2.5">
              <div className="flex gap-1.5">
                <span className="h-2 w-2 rounded-full bg-[var(--border)]" />
                <span className="h-2 w-2 rounded-full bg-[var(--border)]" />
                <span className="h-2 w-2 rounded-full bg-[var(--border)]" />
              </div>
              <span className="ml-2 font-mono text-[11px] text-[var(--muted)] truncate">
                {project.demo && project.demo !== 'N/A' ? project.demo : project.slug}
              </span>
            </div>
            <div className="relative h-72 w-full sm:h-96 md:h-[440px]">
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                priority
                className="object-cover object-top"
              />
            </div>
          </div>
        )}

        {/* Deep Dive Content */}
        <div className="mt-10 space-y-6">
          {/* Detailed Narrative */}
          <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 md:p-8">
            <h2 className="text-lg font-bold text-[var(--text)] font-[var(--font-syne)] mb-3">
              Overview &amp; Architecture
            </h2>
            <p className="text-xs sm:text-sm leading-relaxed text-[var(--muted)] whitespace-pre-line">
              {project.long || project.desc}
            </p>
          </div>

          {/* Problem vs Solution Grid */}
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6">
              <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[var(--muted)]">
                The Bottleneck
              </span>
              <h3 className="mt-1.5 text-base font-bold text-[var(--text)] font-[var(--font-syne)]">
                The Problem
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-[var(--muted)]">
                {project.problem}
              </p>
            </div>

            <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6">
              <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[var(--accent)]">
                The Engineering
              </span>
              <h3 className="mt-1.5 text-base font-bold text-[var(--text)] font-[var(--font-syne)]">
                The Solution
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-[var(--muted)]">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Key Measurable Outcomes */}
          {project.outcomes && (
            <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 md:p-8">
              <h2 className="text-lg font-bold text-[var(--text)] font-[var(--font-syne)] mb-4">
                Measurable Impact &amp; Results
              </h2>
              <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                {project.outcomes.map((outcome) => (
                  <div key={outcome} className="flex items-center gap-2.5 rounded-xl border border-[var(--border)] bg-[var(--surface-2)] p-3.5">
                    <FiCheck size={15} className="text-[var(--accent)] shrink-0" />
                    <span className="text-xs font-medium text-[var(--text)]">{outcome}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Technologies Used */}
          <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 md:p-8">
            <h2 className="text-base font-bold text-[var(--text)] font-[var(--font-syne)] mb-3">
              Technologies &amp; Tools Used
            </h2>
            <div className="flex flex-wrap gap-1.5">
              {project.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-md border border-[var(--border)] bg-[var(--surface-2)] px-2.5 py-1 font-mono text-[11px] text-[var(--muted)]"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Next / Previous Project Navigation */}
        <div className="mt-12 flex items-center justify-between border-t border-[var(--border)] pt-6">
          {prevProject ? (
            <Link
              href={`/projects/${prevProject.slug}`}
              className="group flex flex-col items-start text-left"
            >
              <span className="inline-flex items-center gap-1 text-[10px] font-medium text-[var(--muted)] group-hover:text-[var(--text)]">
                <FiArrowLeft size={11} /> Previous Case Study
              </span>
              <span className="text-xs font-bold text-[var(--text)] font-[var(--font-syne)] group-hover:text-[var(--accent)]">
                {prevProject.title}
              </span>
            </Link>
          ) : <div />}

          {nextProject ? (
            <Link
              href={`/projects/${nextProject.slug}`}
              className="group flex flex-col items-end text-right"
            >
              <span className="inline-flex items-center gap-1 text-[10px] font-medium text-[var(--muted)] group-hover:text-[var(--text)]">
                Next Case Study <FiArrowRight size={11} />
              </span>
              <span className="text-xs font-bold text-[var(--text)] font-[var(--font-syne)] group-hover:text-[var(--accent)]">
                {nextProject.title}
              </span>
            </Link>
          ) : <div />}
        </div>
      </div>

      {/* JSON-LD Schema.org Structured Data */}
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
            keywords: project.tags?.join(', '),
            isPartOf: {
              '@type': 'WebSite',
              name: 'Azynar Portfolio',
              url: SITE_BASE,
            },
            sameAs: project.github ? [project.github] : undefined,
          }),
        }}
      />
    </main>
  );
}
