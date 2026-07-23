'use client';

import { motion } from 'framer-motion';

const services = [
  {
    title: 'Web Development',
    body: 'Fast, working websites and web apps — built to launch in days, not months, and to actually hold up once they\'re live.',
    cta: 'Start a project →',
  },
  {
    title: 'Automation Systems',
    body: 'Bots and workflow tools that take repetitive manual work off your plate, so your time goes toward things that actually need a human.',
    cta: 'Automate my workflow →',
  },
];

function scrollToSection(id) {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}

export default function Services() {
  return (
    <section id="services" className="bg-[var(--bg)] px-6 py-20 md:px-24 md:py-28">
      <div className="mx-auto max-w-6xl">
        <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="mb-4 text-sm text-[var(--muted)]">
          What I Do
        </motion.p>
        <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-12 text-3xl font-extrabold tracking-tight text-[var(--text)] font-[var(--font-syne)] md:text-5xl">
          Two things. <span className="text-[var(--accent)]">Done properly.</span>
        </motion.h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {services.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-8 shadow-[0_8px_28px_rgba(5,10,24,0.05)] transition-all duration-500 hover:-translate-y-2 hover:border-[var(--accent)] hover:bg-white hover:shadow-[0_20px_44px_rgba(30,111,255,0.14)]"
            >
              <h3 className="mb-4 text-xl font-bold text-[var(--text)] font-[var(--font-syne)]">{item.title}</h3>
              <p className="mb-6 text-sm leading-relaxed text-[var(--muted)]">{item.body}</p>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-sm font-semibold text-[var(--accent)] transition-transform duration-300 hover:translate-x-1"
              >
                {item.cta}
              </button>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}