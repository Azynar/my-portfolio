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
            From <span className="text-[var(--accent)]">learning</span> to <span className="text-[var(--accent)]">shipping</span>.
          </h2>
          <p className="text-sm leading-relaxed text-[var(--muted)] md:text-base">
            I&apos;m Abdulazeem Badmus — a Computer Science graduate from the
            University of Ilorin, building as Azynar. I design, build,
            and ship products end-to-end, from the interface to the backend.
          </p>
          <p className="text-sm leading-relaxed text-[var(--muted)] md:text-base">
            My work spans React, Next.js, Node.js, and AI-assisted
            workflows. The goal is simple: turn ideas into live products
            that are useful, fast, and reliable.
          </p>
          <p className="text-sm leading-relaxed text-[var(--muted)] md:text-base">
            Over the last three years, I&apos;ve shipped projects across
            websites, automation tools, and product-style builds for
            startups and businesses that needed momentum without the usual
            overhead.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="overflow-hidden rounded-2xl border border-[var(--border)] bg-white"
        >
          <Image src="/Abdulazeem.png" alt="Abdulazeem avatar" width={500} height={500} className="h-full w-full object-cover object-top" />
        </motion.div>
      </div>
    </section>
  );
}