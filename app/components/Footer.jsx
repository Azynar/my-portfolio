'use client';

import Link from 'next/link';
import { FiGithub, FiTwitter, FiLinkedin, FiMail, FiArrowUp } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-[var(--border)] bg-[var(--surface)] px-6 py-12 md:px-24">
      <div className="mx-auto flex max-w-5xl flex-col gap-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-col gap-1">
            <Link href="/" className="text-lg font-bold font-[var(--font-syne)] text-[var(--text)] tracking-tight">
              Azynar<span className="text-[var(--accent)]">.</span>
            </Link>
            <p className="text-xs text-[var(--muted)] max-w-sm">
              Web Developer. Shipping modern web apps and high-leverage software.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-2">
            <a
              href="https://twitter.com/Azynar01"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-8 w-8 items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--surface-2)] text-[var(--muted)] transition-colors hover:text-[var(--text)] hover:border-[var(--text)]/30"
              aria-label="Twitter / X"
            >
              <FiTwitter size={14} />
            </a>
            <a
              href="https://github.com/Azynar"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-8 w-8 items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--surface-2)] text-[var(--muted)] transition-colors hover:text-[var(--text)] hover:border-[var(--text)]/30"
              aria-label="GitHub"
            >
              <FiGithub size={14} />
            </a>
            <a
              href="https://linkedin.com/in/abdulazeem-badmus-bb748b195"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-8 w-8 items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--surface-2)] text-[var(--muted)] transition-colors hover:text-[var(--text)] hover:border-[var(--text)]/30"
              aria-label="LinkedIn"
            >
              <FiLinkedin size={14} />
            </a>
            <a
              href="https://wa.me/2347032396032"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-8 w-8 items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--surface-2)] text-[var(--muted)] transition-colors hover:text-[var(--text)] hover:border-[var(--text)]/30"
              aria-label="WhatsApp"
            >
              <FaWhatsapp size={14} />
            </a>
            <a
              href="mailto:azynar35@gmail.com"
              className="flex h-8 w-8 items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--surface-2)] text-[var(--muted)] transition-colors hover:text-[var(--text)] hover:border-[var(--text)]/30"
              aria-label="Email"
            >
              <FiMail size={14} />
            </a>
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 self-start md:self-auto rounded-lg border border-[var(--border)] bg-[var(--surface-2)] px-3 py-1.5 text-xs font-medium text-[var(--muted)] transition-colors hover:text-[var(--text)]"
          >
            <span>Top</span>
            <FiArrowUp size={12} />
          </button>
        </div>

        <div className="flex flex-col gap-2 border-t border-[var(--border)] pt-6 text-xs text-[var(--muted)] sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Abdulazeem Badmus. All rights reserved.</p>
          <p className="text-[11px]">Ibadan, Nigeria (UTC+1)</p>
        </div>
      </div>
    </footer>
  );
}