import Link from 'next/link';
import { Container } from '@/components/ui/container';
import { SectionHeading } from '@/components/ui/section-heading';
import { createPageMetadata } from '@/lib/metadata';
import { FaWhatsapp } from 'react-icons/fa';

export const metadata = createPageMetadata({
  title: 'Web Development & Digital Solutions | AZYNAR',
  description: 'Explore AZYNAR\'s website development, custom web applications, and business systems and integrations for businesses and startups.',
  path: '/services',
});

const servicePillars = [
  {
    title: 'Websites & Digital Experiences',
    description:
      'Business, corporate, service-company, and marketing websites that make your offer clear, build credibility, and guide visitors toward a relevant next step.',
    fit: 'Best when customers need a clear, public-facing place to understand your offer and contact you.',
    href: '/services/websites-digital-experiences',
    cta: 'Explore Websites',
  },
  {
    title: 'Web Applications & Custom Software',
    description:
      'Scoped web products, portals, dashboards, booking flows, and MVPs designed around real user needs and operational constraints.',
    fit: 'Best when customers or staff need accounts, role-specific access, or repeatable interactive workflows.',
    href: '/services/web-applications',
    cta: 'Explore Web Applications',
  },
  {
    title: 'Business Systems & Integrations',
    description:
      'Internal tools, workflow improvements, and system integrations that connect websites and operations with less manual work.',
    fit: 'Best when information or tasks need to move between existing tools or business processes.',
    href: '/services/business-systems-integrations',
    cta: 'Explore Business Systems',
  },
];

const whatsappHref = `https://wa.me/2347032396032?text=${encodeURIComponent(
  'Hi AZYNAR, I would like to discuss a project. I am not sure which solution I need yet.'
)}`;

const scopeList = [
  'Responsive page layouts and user journeys',
  'Service and company information architecture',
  'Contact, booking, or registration workflows',
  'Customer portals or internal dashboards, when required',
  'API and third-party integrations',
  'Basic technical SEO for public-facing websites',
  'Deployment and handover',
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[var(--bg)] pb-24 pt-32 md:pt-40 md:pb-32">
      <Container>
        <SectionHeading
          eyebrow="Services"
          title="Websites, web applications, and business systems"
          description="Different problems need different solutions. A company may need a public-facing website, an online store, a customer portal, an operational dashboard, or a workflow that connects existing tools. I start by understanding the users, requirements, constraints, and desired outcome before defining the scope."
        />

        <div className="grid gap-5 md:grid-cols-3">
          {servicePillars.map((service) => (
            <article
              key={service.title}
              className="flex flex-col rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-xs transition-colors hover:border-[var(--text)]/20 md:p-7"
            >
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--accent)]">
                  Service pillar
                </p>
                <h2 className="text-lg font-bold text-[var(--text)] font-[var(--font-syne)]">
                  {service.title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
                  {service.description}
                </p>
                <p className="mt-4 rounded-xl bg-[var(--surface-2)] p-3 text-xs leading-relaxed text-[var(--muted)]">
                  <span className="font-semibold text-[var(--text)]">A good fit if: </span>
                  {service.fit}
                </p>
              </div>

              <div className="mt-6">
                <Link
                  href={service.href}
                  className="inline-flex min-h-10 items-center gap-2 text-sm font-semibold text-[var(--accent)] underline-offset-4 hover:underline"
                >
                  <span>{service.cta}</span>
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>

        <section className="mt-6 flex flex-col gap-4 rounded-2xl border border-[var(--accent)]/25 bg-[var(--surface-2)] p-5 sm:flex-row sm:items-center sm:justify-between md:px-7">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--accent)]">
              Selling products online?
            </p>
            <h2 className="mt-1 text-lg font-bold text-[var(--text)] font-[var(--font-syne)]">
              E-commerce is available as a focused website service.
            </h2>
            <p className="mt-1 text-sm leading-relaxed text-[var(--muted)]">
              Plan around your catalogue, checkout, payment options, fulfilment, and who will manage products.
            </p>
          </div>
          <Link
            href="/services/ecommerce-websites"
            className="inline-flex min-h-10 shrink-0 items-center justify-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-2 text-sm font-semibold text-[var(--text)] transition-colors hover:border-[var(--text)]/30"
          >
            Explore e-commerce
            <span aria-hidden="true">→</span>
          </Link>
        </section>

        <section className="mt-12">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--accent)]">
              Not sure where to start?
            </p>
            <h2 className="mt-2 text-2xl font-bold text-[var(--text)] font-[var(--font-syne)]">
              Choose based on what people need to do
            </h2>
          </div>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {[
              {
                need: 'Explain and present',
                solution: 'A website',
                detail: 'Visitors need to understand your offer, browse information, and contact your business.',
              },
              {
                need: 'Sign in and complete tasks',
                solution: 'A web application',
                detail: 'Customers or staff need accounts, saved information, permissions, or multi-step workflows.',
              },
              {
                need: 'Move information between tools',
                solution: 'An integration',
                detail: 'A stable process needs information routed, synchronized, or handled with less repetitive work.',
              },
            ].map((option) => (
              <article key={option.solution} className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--muted)]">
                  {option.need}
                </p>
                <h3 className="mt-2 text-base font-bold text-[var(--text)] font-[var(--font-syne)]">
                  {option.solution}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">{option.detail}</p>
              </article>
            ))}
          </div>
          <p className="mt-4 text-sm text-[var(--muted)]">
            Some projects combine these. We can clarify the right starting point before agreeing on scope.
          </p>
        </section>

        <div className="mt-12 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 md:p-8">
          <h2 className="text-2xl font-bold text-[var(--text)] font-[var(--font-syne)]">
            What a project may include
          </h2>

          <ul className="mt-5 grid gap-3 sm:grid-cols-2">
            {scopeList.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-[var(--muted)]">
                <span className="mt-1 h-2 w-2 rounded-full bg-[var(--accent)]" aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <p className="mt-6 text-sm text-[var(--muted)]">
            Features, integrations, third-party fees, content entry, maintenance, and ongoing support are confirmed in the project proposal. A feature is not included merely because it appears in this general list.
          </p>
        </div>

        <div className="mt-12 flex flex-wrap items-center gap-3 rounded-2xl border border-[var(--border)] bg-[var(--surface-2)] p-6 md:p-8">
          <div className="mr-auto max-w-xl">
            <h2 className="text-xl font-bold text-[var(--text)] font-[var(--font-syne)]">
              Want help choosing a starting point?
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">
              Send a short description of the business problem. We can discuss fit before you prepare a detailed brief.
            </p>
          </div>
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-[var(--accent)] px-5 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
          >
            <FaWhatsapp size={16} aria-hidden="true" />
            Discuss on WhatsApp
          </a>
          <a
            href="mailto:azynar35@gmail.com?subject=Project%20enquiry"
            className="inline-flex min-h-11 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface)] px-5 py-3 text-sm font-semibold text-[var(--text)] transition-colors hover:border-[var(--text)]/30"
          >
            Email me
          </a>
          <Link
            href="/contact"
            className="inline-flex min-h-11 items-center justify-center px-2 py-3 text-sm font-semibold text-[var(--muted)] underline-offset-4 hover:text-[var(--text)] hover:underline"
          >
            Use the project form
          </Link>
        </div>
      </Container>
    </main>
  );
}
