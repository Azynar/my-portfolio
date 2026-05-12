'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import projects from '../projects/data';

export default function Projects() {
  return (
    <section id="projects" className="bg-[var(--bg)] px-6 py-20 md:px-24 md:py-28">
      <div className="mx-auto max-w-6xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-4 text-sm text-[var(--muted)]"
        >
          Work
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="mb-12 text-3xl font-extrabold tracking-tight text-[var(--text)] font-[var(--font-syne)] md:text-5xl"
        >
          Things I&apos;ve shipped.
        </motion.h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--surface)] shadow-[0_8px_28px_rgba(5,10,24,0.05)] transition-all duration-500 hover:-translate-y-1.5 hover:border-[var(--accent)] hover:shadow-[0_14px_34px_rgba(30,111,255,0.12)]"
            >
              <div className="relative h-52 w-full overflow-hidden border-b border-[var(--border)] bg-[var(--bg)]">
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    loading={index === 0 ? 'eager' : 'lazy'}
                    sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw"
                    className="object-cover object-top transition-transform duration-500 hover:scale-105"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center">
                    <span className="text-sm text-[var(--muted)]">Image placeholder</span>
                  </div>
                )}
              </div>

              <div className="space-y-4 p-6">
                <span className="inline-flex rounded-full bg-[var(--bg)] px-3 py-1 text-xs text-[var(--accent)]">{project.category}</span>
                <h3 className="text-xl font-bold text-[var(--text)] font-[var(--font-syne)]">{project.title}</h3>
                <p className="text-sm leading-relaxed text-[var(--muted)]">{project.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="rounded-full border border-[var(--border)] px-3 py-1 text-xs text-[var(--muted)]">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2">
                  <Link href={`/projects/${project.slug}`} className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] px-4 py-2 text-xs text-[var(--text)] transition-all duration-300 hover:border-[var(--accent)] hover:text-[var(--accent)]">
                    View Details
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}