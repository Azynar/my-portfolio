'use client';

import { motion } from 'framer-motion';

const services = [
  {
    title: 'Web Development',
    body: 'I build fast, clean websites and web applications for businesses that need to look credible and convert visitors. From simple landing pages to full e-commerce platforms.',
    bestFor: 'Small businesses, startups, product companies',
    offerings: ['Landing pages', 'E-commerce stores', 'Business websites', 'Web3 frontends and dApps'],
    cta: 'Start a project →',
  },
  {
    title: 'Smart Contract Development',
    body: 'I write and review Solidity smart contracts for Web3 projects that need clean, documented, secure code. Currently deepening expertise in DeFi primitives and contract security.',
    bestFor: 'Web3 startups, token projects, DeFi protocols',
    offerings: ['ERC-20/ERC-721 contracts', 'Token launch pages', 'dApp development', 'Contract documentation'],
    cta: 'Discuss your protocol →',
  },
  {
    title: 'Technical Writing',
    body: 'I turn complex technical concepts into documentation, tutorials, and developer guides that people actually finish reading.',
    bestFor: 'Developer tool companies, Web3 protocols, SaaS startups',
    offerings: ['Developer documentation', 'Protocol whitepapers', 'API references', 'Blog articles and tutorials'],
    cta: 'Get a writing sample →',
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-[var(--bg)] px-6 py-20 md:px-24 md:py-28">
      <div className="mx-auto max-w-6xl">
        <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="mb-4 text-sm text-[var(--muted)]">
          What I Do
        </motion.p>
        <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-12 text-3xl font-extrabold tracking-tight text-[var(--text)] font-[var(--font-syne)] md:text-5xl">
          Three things. Done properly.
        </motion.h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {services.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-[0_8px_28px_rgba(5,10,24,0.05)] transition-all duration-500 hover:-translate-y-1.5 hover:border-[var(--accent)] hover:shadow-[0_14px_34px_rgba(30,111,255,0.12)]"
            >
              <h3 className="mb-4 text-xl font-bold text-[var(--text)] font-[var(--font-syne)]">{item.title}</h3>
              <p className="mb-4 text-sm leading-relaxed text-[var(--muted)]">{item.body}</p>
              <p className="mb-2 text-xs font-semibold text-[var(--text)]">Best for: {item.bestFor}</p>
              <ul className="mb-5 space-y-1 text-sm text-[var(--muted)]">
                {item.offerings.map((service) => (
                  <li key={service}>- {service}</li>
                ))}
              </ul>
              <button className="text-sm font-semibold text-[var(--accent)] transition-transform duration-300 hover:translate-x-1">{item.cta}</button>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
