'use client';

import { motion } from 'framer-motion';

export default function CTAStrip() {
  return (
    <section id="cta" className="relative overflow-hidden bg-[var(--accent)] px-6 py-16 text-white md:px-24">
      <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-white/20 blur-3xl" />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mx-auto flex max-w-6xl flex-col gap-6 md:flex-row md:items-center md:justify-between"
      >
        <div>
          <h2 className="text-3xl font-extrabold tracking-tight font-[var(--font-syne)] md:text-4xl">Got a project? Let&apos;s talk.</h2>
          <p className="mt-3 max-w-3xl text-sm text-white/90 md:text-base">
            Whether you need a web application, an automation system, or documentation that developers will actually read — I&apos;m available and ready to help.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <a href="#contact" className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-[var(--accent)] shadow-[0_10px_26px_rgba(255,255,255,0.28)] transition-transform duration-300 hover:-translate-y-0.5">
            Send me a message →
          </a>
          <a href="https://wa.me/2347032396032" className="rounded-full border border-white px-5 py-3 text-sm font-semibold text-white transition-colors duration-300 hover:bg-white hover:text-[var(--accent)]">
            Chat on WhatsApp
          </a>
        </div>
      </motion.div>
    </section>
  );
}
