'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { HiOutlineMenuAlt3, HiX } from 'react-icons/hi';
import { FiSun, FiMoon, FiArrowRight } from 'react-icons/fi';
import { useTheme } from './ThemeProvider';
import { Button } from '@/components/ui/button';

const navLinks = [
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'stack', label: 'Stack' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const { theme, toggleTheme, mounted } = useTheme();
  const pathname = usePathname();
  const router = useRouter();

  const isHome = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    function onKey(e) {
      if (e.key === 'Escape') setIsOpen(false);
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isOpen]);

  useEffect(() => {
    if (!isHome) return;

    const sections = navLinks.map((l) => document.getElementById(l.id)).filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((e) => e.isIntersecting);
        if (visible) {
          setActiveSection(visible.target.id);
        }
      },
      { rootMargin: '-30% 0px -40% 0px', threshold: 0.1 }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [isHome]);

  const handleNavClick = (id) => {
    setIsOpen(false);
    if (isHome) {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      router.push(`/#${id}`);
    }
  };

  return (
    <>
      <nav
        role="navigation"
        aria-label="Main Navigation"
        className={`fixed top-4 left-1/2 z-50 w-[calc(100%-2rem)] max-w-5xl -translate-x-1/2 rounded-full border px-4 py-2 transition-all duration-200 md:px-5 ${
          scrolled
            ? 'border-[var(--border)] bg-[var(--surface)]/90 shadow-md backdrop-blur-md'
            : 'border-[var(--border)]/70 bg-[var(--surface)]/70 shadow-xs backdrop-blur-sm'
        }`}
      >
        <div className="flex items-center justify-between">
          <Link
            href="/"
            onClick={(e) => {
              if (isHome) {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }
            }}
            className="group flex items-center gap-2.5"
          >
            <div className="relative h-7 w-7 overflow-hidden rounded-full border border-[var(--border)] bg-[var(--surface-2)]">
              <Image src="/avatar.png" alt="Azynar" fill sizes="28px" className="object-cover" priority />
            </div>
            <span className="text-base font-bold font-[var(--font-syne)] tracking-tight text-[var(--text)]">
              Azynar<span className="text-[var(--accent)]">.</span>
            </span>
          </Link>

          {/* Focused Core Nav Links */}
          <ul className="hidden items-center gap-6 md:flex">
            {navLinks.map((link) => {
              const isActive = isHome && activeSection === link.id;
              return (
                <li key={link.id}>
                  <button
                    onClick={() => handleNavClick(link.id)}
                    className={`text-xs font-medium transition-colors hover:text-[var(--text)] ${
                      isActive ? 'text-[var(--accent)] font-semibold' : 'text-[var(--muted)]'
                    }`}
                  >
                    {link.label}
                  </button>
                </li>
              );
            })}
          </ul>

          <div className="hidden items-center gap-2.5 md:flex">
            <Link
              href="/blog"
              className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-colors hover:text-[var(--text)] ${
                pathname === '/blog'
                  ? 'bg-[var(--surface-2)] text-[var(--accent)] font-semibold'
                  : 'text-[var(--muted)]'
              }`}
            >
              Blog
            </Link>

            <Button
              size="sm"
              onClick={() => handleNavClick('contact')}
              className="rounded-full px-4 text-xs font-semibold"
            >
              <span>Get in Touch</span>
              <FiArrowRight size={12} />
            </Button>

            {mounted && (
              <button
                onClick={toggleTheme}
                aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
                className="flex h-8 w-8 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface-2)] text-[var(--muted)] transition-colors hover:text-[var(--text)] hover:border-[var(--text)]/30"
              >
                {theme === 'dark' ? <FiSun size={14} /> : <FiMoon size={14} />}
              </button>
            )}
          </div>

          <div className="flex items-center gap-2 md:hidden">
            {mounted && (
              <button
                onClick={toggleTheme}
                aria-label="Toggle theme"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface-2)] text-[var(--muted)]"
              >
                {theme === 'dark' ? <FiSun size={14} /> : <FiMoon size={14} />}
              </button>
            )}
            <button
              onClick={() => setIsOpen((prev) => !prev)}
              aria-label="Toggle menu"
              aria-expanded={isOpen}
              className="flex h-8 w-8 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface-2)] text-[var(--text)]"
            >
              {isOpen ? <HiX size={16} /> : <HiOutlineMenuAlt3 size={16} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div
        className={`fixed left-1/2 top-18 z-40 w-[calc(100%-2rem)] max-w-5xl -translate-x-1/2 overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-4 shadow-xl backdrop-blur-xl transition-all duration-200 ease-out md:hidden ${
          isOpen
            ? 'pointer-events-auto translate-y-0 scale-100 opacity-100'
            : 'pointer-events-none -translate-y-4 scale-95 opacity-0'
        }`}
        aria-hidden={!isOpen}
      >
        <div className="flex flex-col gap-1">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className="rounded-lg px-3 py-2 text-left text-xs font-medium text-[var(--text)] transition-colors hover:bg-[var(--surface-2)]"
            >
              {link.label}
            </button>
          ))}
          <Link
            href="/blog"
            onClick={() => setIsOpen(false)}
            className="rounded-lg px-3 py-2 text-left text-xs font-medium text-[var(--text)] transition-colors hover:bg-[var(--surface-2)]"
          >
            Blog
          </Link>
          <Button
            size="sm"
            onClick={() => handleNavClick('contact')}
            className="mt-2 w-full rounded-xl py-2.5 text-xs font-semibold"
          >
            <span>Get in Touch</span>
            <FiArrowRight size={12} />
          </Button>
        </div>
      </div>
    </>
  );
}