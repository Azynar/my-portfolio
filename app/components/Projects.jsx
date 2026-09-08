'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FiExternalLink, FiGithub, FiArrowRight, FiCheck } from 'react-icons/fi';
import projects from '../projects/data';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

export default function Projects() {
  const featured = projects.find((p) => p.featured) || projects[0];
  const others = projects.filter((p) => p.slug !== featured.slug);

  return (
    <section id="projects" className="bg-[var(--bg)] px-6 py-20 md:px-24 md:py-24 border-t border-[var(--border)]">
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-[var(--accent)] font-[var(--font-syne)]">
              Selected Case Studies
            </span>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-[var(--text)] font-[var(--font-syne)] sm:text-4xl">
              Work that delivered <span className="text-[var(--accent)]">real impact</span>.
            </h2>
          </div>
          <p className="mt-3 max-w-md text-xs text-[var(--muted)] sm:text-sm md:mt-0">
            Every project is built to solve a specific bottleneck: slow performance, complex user onboarding, or manual operations.
          </p>
        </div>

        {/* Featured Project Showcase Card */}
        {featured && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-8 overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-xs transition-all hover:border-[var(--text)]/20"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12">
              {/* Image Preview with Browser Mockup Header */}
              <div className="relative flex flex-col border-b border-[var(--border)] lg:col-span-7 lg:border-b-0 lg:border-r">
                {/* Mockup Header */}
                <div className="flex items-center gap-2 border-b border-[var(--border)] bg-[var(--surface-2)] px-4 py-2">
                  <div className="flex gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-[var(--border)]" />
                    <span className="h-2 w-2 rounded-full bg-[var(--border)]" />
                    <span className="h-2 w-2 rounded-full bg-[var(--border)]" />
                  </div>
                  <span className="ml-2 rounded bg-[var(--surface)] px-2 py-0.5 text-[10px] font-mono text-[var(--muted)] truncate max-w-[200px]">
                    {featured.demo || 'azynardev.vercel.app'}
                  </span>
                </div>

                <div className="relative min-h-[260px] flex-1 overflow-hidden bg-[var(--surface-2)] sm:min-h-[320px]">
                  {featured.image ? (
                    <Image
                      src={featured.image}
                      alt={featured.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 55vw"
                      className="object-cover object-top"
                      priority
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center text-xs text-[var(--muted)]">
                      Preview
                    </div>
                  )}
                </div>
              </div>

              {/* Content Column */}
              <div className="flex flex-col justify-between p-6 lg:col-span-5 lg:p-7">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="accent">
                      Featured Build
                    </Badge>
                    <Badge variant="outline">
                      {featured.category}
                    </Badge>
                  </div>

                  <h3 className="text-xl font-bold text-[var(--text)] font-[var(--font-syne)] leading-snug">
                    {featured.title}
                  </h3>

                  <p className="mt-2.5 text-xs leading-relaxed text-[var(--muted)]">
                    {featured.desc}
                  </p>

                  {/* Measurable Outcomes */}
                  {featured.outcomes && (
                    <div className="mt-4 space-y-1.5">
                      <p className="text-[10px] font-semibold uppercase tracking-wider text-[var(--muted)]">
                        Key Outcomes:
                      </p>
                      {featured.outcomes.slice(0, 3).map((outcome) => (
                        <div key={outcome} className="flex items-center gap-2 text-xs text-[var(--text)]">
                          <FiCheck size={13} className="text-[var(--accent)] shrink-0" />
                          <span>{outcome}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Tags */}
                  <div className="mt-5 flex flex-wrap gap-1">
                    {featured.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md border border-[var(--border)] bg-[var(--surface-2)] px-2 py-0.5 text-[10px] font-mono text-[var(--muted)]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="mt-6 flex flex-wrap items-center gap-2.5 border-t border-[var(--border)] pt-4">
                  <Link href={`/projects/${featured.slug}`}>
                    <Button size="sm" className="gap-1.5 rounded-lg text-xs">
                      <span>Read Case Study</span>
                      <FiArrowRight size={12} />
                    </Button>
                  </Link>

                  {featured.demo && featured.demo !== 'N/A' && (
                    <a
                      href={featured.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button variant="outline" size="sm" className="gap-1.5 rounded-lg text-xs">
                        <span>Live Site</span>
                        <FiExternalLink size={11} />
                      </Button>
                    </a>
                  )}

                  {featured.github && (
                    <a
                      href={featured.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-8 w-8 items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--surface-2)] text-[var(--muted)] transition-colors hover:text-[var(--text)] hover:border-[var(--text)]/30"
                      aria-label="GitHub Repository"
                    >
                      <FiGithub size={13} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Secondary Project Cards */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {others.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-xs transition-all hover:border-[var(--text)]/20"
            >
              <div>
                {/* Mockup Frame & Image */}
                <div className="relative border-b border-[var(--border)]">
                  <div className="flex items-center gap-1.5 border-b border-[var(--border)] bg-[var(--surface-2)] px-3.5 py-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-[var(--border)]" />
                    <span className="h-1.5 w-1.5 rounded-full bg-[var(--border)]" />
                    <span className="h-1.5 w-1.5 rounded-full bg-[var(--border)]" />
                    <span className="ml-2 font-mono text-[10px] text-[var(--muted)] truncate max-w-[180px]">
                      {project.slug}
                    </span>
                  </div>

                  <div className="relative h-44 w-full overflow-hidden bg-[var(--surface-2)]">
                    {project.image ? (
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover object-top"
                      />
                    ) : (
                      <div className="flex h-full items-center justify-center text-xs text-[var(--muted)]">
                        Preview
                      </div>
                    )}
                  </div>
                </div>

                <div className="p-5">
                  <div className="flex items-center gap-2 mb-2.5">
                    <Badge variant="default" className="text-[10px]">
                      {project.category}
                    </Badge>
                    {project.status && (
                      <Badge variant="outline" className="text-[10px]">
                        {project.status}
                      </Badge>
                    )}
                  </div>

                  <h3 className="text-base font-bold text-[var(--text)] font-[var(--font-syne)]">
                    {project.title}
                  </h3>

                  <p className="mt-2 text-xs leading-relaxed text-[var(--muted)] line-clamp-2">
                    {project.desc}
                  </p>

                  <div className="mt-3.5 flex flex-wrap gap-1">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md border border-[var(--border)] bg-[var(--surface-2)] px-2 py-0.5 font-mono text-[9px] text-[var(--muted)]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between border-t border-[var(--border)] px-5 py-3 bg-[var(--surface-2)]/30">
                <Link
                  href={`/projects/${project.slug}`}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-[var(--accent)] hover:underline"
                >
                  <span>Case Study</span>
                  <FiArrowRight size={11} />
                </Link>

                <div className="flex items-center gap-1.5">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-md border border-[var(--border)] p-1.5 text-[var(--muted)] transition-colors hover:text-[var(--text)]"
                      aria-label="GitHub"
                    >
                      <FiGithub size={12} />
                    </a>
                  )}
                  {project.demo && project.demo !== 'N/A' && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-md border border-[var(--border)] p-1.5 text-[var(--muted)] transition-colors hover:text-[var(--text)]"
                      aria-label="Live Demo"
                    >
                      <FiExternalLink size={12} />
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* GitHub link */}
        <div className="mt-10 text-center">
          <a
            href="https://github.com/Azynar"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-medium text-[var(--muted)] transition-colors hover:text-[var(--text)]"
          >
            <FiGithub size={14} />
            <span>Explore open-source repositories &amp; active commits on GitHub →</span>
          </a>
        </div>
      </div>
    </section>
  );
}