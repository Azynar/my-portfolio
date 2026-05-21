'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { HiOutlineMenuAlt3, HiX } from 'react-icons/hi';

const navLinks = [
  { id: 'about', label: 'About' },
  { id: 'services', label: 'Services' },
  { id: 'projects', label: 'Projects' },
  { id: 'writing', label: 'Writing' },
  { id: 'contact', label: 'Contact' },
];

function scrollToSection(id) {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Close on Escape
    function onKey(e) {
      if (e.key === 'Escape') setIsOpen(false);
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  useEffect(() => {
    // Lock body scroll when mobile menu is open
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isOpen]);

  return (
    <>
      <nav
        role="navigation"
        aria-label="Main"
        className={`fixed top-5 left-1/2 z-50 w-[calc(100%-1.5rem)] max-w-6xl -translate-x-1/2 rounded-full border px-4 py-2 transition-all duration-300 md:px-6 ${
          scrolled
            ? 'border-[var(--border)] bg-[var(--surface)]/95 shadow-[0_14px_36px_rgba(5,10,24,0.08)] backdrop-blur-xl'
            : 'border-white/50 bg-[var(--surface)]/75 shadow-[0_6px_20px_rgba(5,10,24,0.04)] backdrop-blur-xl'
        }`}>
        <div className="flex items-center justify-between">
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('hero');
            }}
            className="text-xl font-extrabold font-[var(--font-syne)] text-[var(--text)]"
          >
            <div className="flex items-center leading-tight">
              <span className="text-xl font-extrabold font-[var(--font-syne)] text-[var(--text)]">
                Azynar<span className="text-[var(--accent)]">.</span>
              </span>
            </div>
          </a>

          <ul className="hidden items-center gap-7 md:flex">
            {navLinks.map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => scrollToSection(link.id)}
                  className="text-sm text-[var(--muted)] transition-colors hover:text-[var(--accent)]"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>

          <div className="hidden items-center gap-2 md:flex">
            <a href="#hero" onClick={(e) => { e.preventDefault(); scrollToSection('hero'); }} className="overflow-hidden rounded-full border border-[var(--border)]">
              <Image src="/avatar.png" alt="Azynar avatar" width={34} height={34} className="h-8 w-8 object-cover" />
            </a>
            <a href="/blog" className="rounded-full border border-[var(--border)] bg-white/80 px-4 py-2 text-xs font-semibold text-[var(--text)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]">
              Blog
            </a>
            <button onClick={() => scrollToSection('contact')} className="rounded-full bg-[var(--accent)] px-4 py-2 text-xs font-semibold text-white transition-opacity hover:opacity-85">
              Hire Me →
            </button>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <a href="#hero" onClick={(e) => { e.preventDefault(); scrollToSection('hero'); }} className="overflow-hidden rounded-full border border-[var(--border)]">
              <Image src="/avatar.png" alt="Azynar avatar" width={34} height={34} className="h-8 w-8 object-cover" />
            </a>
            <button
              onClick={() => setIsOpen((prev) => !prev)}
              aria-label="Toggle menu"
              aria-expanded={isOpen}
              className="rounded-full border border-[var(--border)] p-2 text-[var(--text)]"
            >
              {isOpen ? <HiX size={20} /> : <HiOutlineMenuAlt3 size={20} />}
            </button>
          </div>
        </div>
      </nav>

      <div className={`fixed left-1/2 top-20 z-40 w-[calc(100%-1.5rem)] max-w-6xl -translate-x-1/2 overflow-hidden rounded-2xl border border-[var(--border)] bg-white/95 p-4 backdrop-blur-xl transition-transform transition-opacity duration-300 ease-out md:hidden ${isOpen ? 'pointer-events-auto translate-y-0 scale-100 opacity-100' : 'pointer-events-none -translate-y-6 scale-95 opacity-0'}`} aria-hidden={!isOpen}>
        <div className="flex flex-col gap-2">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => {
                scrollToSection(link.id);
                setIsOpen(false);
              }}
              className="rounded-lg px-3 py-2 text-left text-sm text-[var(--text)] transition-colors hover:bg-[var(--bg)] hover:text-[var(--accent)]"
            >
              {link.label}
            </button>
          ))}
          <a href="/blog" className="rounded-lg px-3 py-2 text-sm text-[var(--text)] transition-colors hover:bg-[var(--bg)] hover:text-[var(--accent)]">
            Blog
          </a>
          <button
            onClick={() => {
              scrollToSection('contact');
              setIsOpen(false);
            }}
            className="mt-2 rounded-lg bg-[var(--accent)] px-3 py-2 text-sm font-semibold text-white"
          >
            Hire Me {'->'}
          </button>
        </div>
      </div>
    </>
  );
}