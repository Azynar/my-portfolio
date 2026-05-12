'use client';

import { motion } from 'framer-motion';
import { FiGithub, FiTwitter, FiLinkedin, FiMail } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-[var(--dark)] px-6 py-12 md:px-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mx-auto flex max-w-6xl flex-col gap-7 md:flex-row md:items-center md:justify-between"
      >
        <div className="flex flex-col gap-1">
          <span className="text-lg font-extrabold text-white font-[var(--font-syne)]">
            Azynar<span style={{color: 'var(--accent)'}}>.</span>
          </span>
          <span className="text-xs text-white/70">
            Full-Stack Developer & Technical Writer
          </span>
        </div>

        <div className="flex items-center gap-4">
          <a href="https://twitter.com/Azynar01" target="_blank" rel="noopener noreferrer" className="rounded-full border border-white/20 p-2 text-white/70 transition-all hover:border-[var(--accent)] hover:text-[var(--accent)]">
            <FiTwitter size={16} />
          </a>
          <a href="https://github.com/Azynar" target="_blank" rel="noopener noreferrer" className="rounded-full border border-white/20 p-2 text-white/70 transition-all hover:border-[var(--accent)] hover:text-[var(--accent)]">
            <FiGithub size={16} />
          </a>
          <a href="https://linkedin.com/in/abdulazeem-badmus-bb748b195" target="_blank" rel="noopener noreferrer" className="rounded-full border border-white/20 p-2 text-white/70 transition-all hover:border-[var(--accent)] hover:text-[var(--accent)]">
            <FiLinkedin size={16} />
          </a>
          <a href="https://wa.me/2347032396032" target="_blank" rel="noopener noreferrer" className="rounded-full border border-white/20 p-2 text-white/70 transition-all hover:border-[var(--accent)] hover:text-[var(--accent)]">
            <FaWhatsapp size={16} />
          </a>
          <a href="mailto:azynar35@gmail.com" className="rounded-full border border-white/20 p-2 text-white/70 transition-all hover:border-[var(--accent)] hover:text-[var(--accent)]">
            <FiMail size={16} />
          </a>
        </div>

        <a href="#hero" className="rounded-full border border-white/20 px-5 py-2 text-xs text-white/70 transition-all hover:border-[var(--accent)] hover:text-[var(--accent)]">
          Back to top ↑
        </a>
      </motion.div>
      <p className="mx-auto mt-8 max-w-6xl text-xs text-white/50">
        © 2026 Abdulazeem Badmus. Built with Next.js & Tailwind.
      </p>
    </footer>
  );
}