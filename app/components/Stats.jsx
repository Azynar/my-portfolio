'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { FiBriefcase, FiPackage, FiStar, FiGlobe } from 'react-icons/fi';

const stats = [
  { value: 3, suffix: '+', label: 'Years Building' },
  { value: 3, suffix: '+', label: 'Projects Shipped' },
  { value: 1, suffix: '+', label: 'Publication Featured' },
  { value: 100, suffix: '%', label: 'Remote Ready' },
];

function Icon({ index }) {
  const icons = [FiBriefcase, FiPackage, FiStar, FiGlobe];
  const Comp = icons[index % icons.length];
  return <Comp className="h-6 w-6 text-[var(--muted)]" aria-hidden />;
}

export default function Stats() {
  const [counts, setCounts] = useState(stats.map(() => 0));
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current || hasAnimated) return;

    const prefersReduced = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setHasAnimated(true);

        if (prefersReduced) {
          setCounts(stats.map((s) => s.value));
          return;
        }

        const startTime = performance.now();
        const durations = stats.map(() => 1100);
        const delays = stats.map((_, i) => i * 140);

        const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

        const animate = (now) => {
          const next = stats.map((s, i) => {
            const elapsed = Math.max(0, now - startTime - delays[i]);
            const progress = Math.min(elapsed / durations[i], 1);
            const eased = easeOutCubic(progress);
            return Math.floor(s.value * eased);
          });

          setCounts(next);

          const allDone = next.every((v, i) => v >= stats[i].value);
          if (!allDone) requestAnimationFrame(animate);
        };

        requestAnimationFrame(animate);
      },
      { threshold: 0.35 }
    );

    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section id="stats" ref={sectionRef} className="bg-[var(--surface)] px-6 py-16 md:px-24 md:py-20">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-y-6 gap-x-8 text-center sm:grid-cols-2 md:grid-cols-4">
        <dl className="contents">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              className="space-y-2 rounded-lg border border-[var(--border)] bg-white/5 p-6 transform transition-all duration-300 shadow-sm hover:shadow-2xl hover:-translate-y-1 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
            >
              <dt className="flex items-center justify-center gap-2 text-sm text-[var(--muted)]">
                <Icon index={index} />
                <span className="sr-only">{stat.label}</span>
              </dt>
              <dd className="text-center">
                <p className="inline-flex items-baseline gap-2">
                  <span aria-live="polite" className="text-4xl font-extrabold text-[var(--accent)] font-[var(--font-syne)] md:text-5xl">
                    {counts[index]}
                  </span>
                  <span className="text-2xl font-extrabold text-[var(--accent)]">{stat.suffix}</span>
                </p>
                <p className="mt-1 text-sm text-[var(--muted)]">{stat.label}</p>
              </dd>
            </motion.div>
          ))}
        </dl>
      </div>
    </section>
  );
}
