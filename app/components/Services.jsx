'use client';

import { motion } from 'framer-motion';
import { FiArrowRight, FiGlobe, FiCpu, FiServer, FiCheck } from 'react-icons/fi';
import { Badge } from '@/components/ui/badge';

const services = [
  {
    icon: <FiGlobe size={20} className="text-[var(--accent)]" />,
    tag: 'Websites & Digital Experiences',
    title: 'Business and marketing websites',
    headline: 'Clear and credible digital experiences that help visitors understand your offer and take the next step.',
    deliverables: [
      'Responsive business and marketing websites',
      'Service, about, and contact pages',
      'Contact forms and WhatsApp flows',
      'Basic on-page SEO and deployment support',
    ],
    cta: 'Explore Websites',
  },
  {
    icon: <FiServer size={20} className="text-[var(--accent)]" />,
    tag: 'Web Applications & Custom Software',
    title: 'User-facing web applications',
    headline: 'Scoped web products, portals, dashboards, and booking experiences built around actual user needs.',
    deliverables: [
      'Customer portals and internal dashboards',
      'Booking and registration workflows',
      'API-connected interfaces and backend routes',
      'User roles, permissions, and testing planning',
    ],
    cta: 'Explore Web Applications',
  },
  {
    icon: <FiCpu size={20} className="text-[var(--accent)]" />,
    tag: 'Business Systems & Integrations',
    title: 'Operational tools and integrations',
    headline: 'Workflow improvements and system connections that make business operations more manageable.',
    deliverables: [
      'Lead and enquiry collection flows',
      'Automated routing and notifications',
      'Third-party API integrations',
      'Internal dashboards and process improvements',
    ],
    cta: 'Explore Business Systems',
  },
];

export default function Services() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="services" className="bg-[var(--bg)] px-6 py-20 md:px-24 md:py-24 border-t border-[var(--border)]">
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-[var(--accent)] font-[var(--font-syne)]">
              Services &amp; Offerings
            </span>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-[var(--text)] font-[var(--font-syne)] sm:text-4xl">
              Practical digital solutions for growing businesses.
            </h2>
          </div>
          <p className="mt-3 max-w-md text-xs text-[var(--muted)] sm:text-sm md:mt-0">
            Start with the problem you need to solve. The right solution may be a public-facing website, a web application, or a business system connected to existing tools.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
          {services.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col justify-between rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-xs transition-all hover:border-[var(--text)]/20"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--surface-2)]">
                    {item.icon}
                  </div>
                  <Badge variant="outline" className="text-[10px]">
                    {item.tag}
                  </Badge>
                </div>

                <h3 className="text-base font-bold text-[var(--text)] font-[var(--font-syne)]">
                  {item.title}
                </h3>

                <p className="mt-2 text-xs leading-relaxed text-[var(--muted)]">
                  {item.headline}
                </p>

                <div className="mt-5 space-y-2 border-t border-[var(--border)] pt-4">
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-[var(--muted)]">
                    What&apos;s included:
                  </p>
                  {item.deliverables.map((del) => (
                    <div key={del} className="flex items-start gap-2 text-xs text-[var(--text)]">
                      <FiCheck size={13} className="mt-0.5 text-[var(--accent)] shrink-0" />
                      <span className="text-[11px] text-[var(--muted)]">{del}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[var(--border)]">
                <button
                  onClick={() => scrollTo('contact')}
                  className="group/btn inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--accent)] transition-colors hover:underline"
                >
                  <span>{item.cta}</span>
                  <FiArrowRight size={12} className="transition-transform group-hover/btn:translate-x-0.5" />
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}