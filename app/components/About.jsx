'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="bg-[var(--bg)] px-6 py-20 md:px-24 md:py-28">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 md:grid-cols-2 md:gap-16">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <p className="text-sm text-[var(--muted)]">About</p>
          <h2 className="text-3xl font-extrabold tracking-tight text-[var(--text)] font-[var(--font-syne)] md:text-5xl">
            The person behind the work.
          </h2>
          <p className="text-sm leading-relaxed text-[var(--muted)] md:text-base">
            I&apos;m Abdulazeem Badmus — a Computer Science graduate from the
            University of Ilorin, freelance developer, and technical writer
            operating as Azynar.
          </p>
          <p className="text-sm leading-relaxed text-[var(--muted)] md:text-base">
            I use JavaScript across the stack — React, Next.js, Node.js —
            with AI tools as part of my workflow, not a replacement for
            understanding what I&apos;m building.
          </p>
          <p className="text-sm leading-relaxed text-[var(--muted)] md:text-base">
            I write developer documentation, technical articles, and
            protocol content for Web3 projects. Clear writing is part
            of how I build, not an afterthought.
          </p>
          <p className="text-sm leading-relaxed text-[var(--muted)] md:text-base">
            Currently focused on Web3 applications, automation tools,
            and frontend products for startups. Open to collaborations,
            internships, and freelance work. Based in Nigeria.
            Working globally. Always building.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="overflow-hidden rounded-2xl border border-[var(--border)] bg-white"
        >
          <Image src="/avatar.png" alt="Abdulazeem avatar" width={500} height={500} className="h-full w-full object-cover object-top" />
        </motion.div>
      </div>
    </section>
  );
}