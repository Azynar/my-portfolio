import Link from 'next/link';

const whatsappNumber = '2347032396032';
const contactEmail = 'azynar35@gmail.com';

export default function ServiceDetail({
  eyebrow,
  title,
  introduction,
  suitableFor,
  deliverables,
  considerations,
  faqs,
  whatsappMessage,
  relatedServices,
}) {
  const whatsappHref = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
  const emailHref = `mailto:${contactEmail}?subject=${encodeURIComponent(`Project enquiry: ${eyebrow}`)}`;

  return (
    <main className="min-h-screen bg-[var(--bg)] px-6 pb-24 pt-32 md:px-24 md:pt-40 md:pb-32">
      <div className="mx-auto max-w-5xl">
        <Link
          href="/services"
          className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-2 text-sm font-medium text-[var(--muted)] transition-colors hover:text-[var(--text)]"
        >
          <span aria-hidden="true">←</span>
          All services
        </Link>

        <header className="mt-9 max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
            {eyebrow}
          </p>
          <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-[var(--text)] font-[var(--font-syne)] sm:text-4xl md:text-5xl">
            {title}
          </h1>
          <p className="mt-5 text-base leading-relaxed text-[var(--muted)] sm:text-lg">
            {introduction}
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center justify-center rounded-full bg-[var(--accent)] px-5 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
            >
              Discuss on WhatsApp
            </a>
            <a
              href={emailHref}
              className="inline-flex min-h-11 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface)] px-5 py-3 text-sm font-semibold text-[var(--text)] transition-colors hover:border-[var(--text)]/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
            >
              Email about this service
            </a>
            <Link
              href="/contact"
              className="inline-flex min-h-11 items-center justify-center px-2 py-3 text-sm font-semibold text-[var(--muted)] underline-offset-4 hover:text-[var(--text)] hover:underline"
            >
              Use the project form
            </Link>
          </div>
          <p className="mt-3 text-xs leading-relaxed text-[var(--muted)]">
            A first message can be brief. Share what you are trying to improve; we can clarify requirements before discussing scope.
          </p>
        </header>

        <div className="mt-14 grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
          <section className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 md:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--accent)]">
              Is this a fit?
            </p>
            <h2 className="mt-2 text-2xl font-bold text-[var(--text)] font-[var(--font-syne)]">
              This may be useful if…
            </h2>
            <ul className="mt-5 space-y-3">
              {suitableFor.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-[var(--muted)]">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <aside className="rounded-2xl border border-[var(--border)] bg-[var(--surface-2)] p-6 md:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--accent)]">
              What happens next
            </p>
            <ol className="mt-5 space-y-4">
              {[
                ['01', 'Understand', 'We discuss the users, goals, and current workflow.'],
                ['02', 'Scope', 'We agree on deliverables, constraints, and a proposal.'],
                ['03', 'Build and review', 'The agreed work is implemented, tested, and reviewed before handover.'],
              ].map(([number, step, description]) => (
                <li key={number} className="flex gap-3">
                  <span className="font-mono text-xs font-bold text-[var(--accent)]">{number}</span>
                  <div>
                    <h3 className="text-sm font-semibold text-[var(--text)]">{step}</h3>
                    <p className="mt-1 text-xs leading-relaxed text-[var(--muted)]">{description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </aside>
        </div>

        <section className="mt-14">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--accent)]">
              Possible scope
            </p>
            <h2 className="mt-2 text-2xl font-bold text-[var(--text)] font-[var(--font-syne)] sm:text-3xl">
              What a project could include
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">
              These are discussion points, not a fixed package. The proposal confirms what is included for your project.
            </p>
          </div>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {deliverables.map((item) => (
              <li
                key={item}
                className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-4 text-sm leading-relaxed text-[var(--text)]"
              >
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-10 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 md:p-8">
          <h2 className="text-xl font-bold text-[var(--text)] font-[var(--font-syne)]">
            Scope and practical considerations
          </h2>
          <ul className="mt-4 space-y-3">
            {considerations.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-[var(--muted)]">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-14">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--accent)]">
              Common questions
            </p>
            <h2 className="mt-2 text-2xl font-bold text-[var(--text)] font-[var(--font-syne)] sm:text-3xl">
              Before we discuss your project
            </h2>
          </div>
          <div className="mt-5 space-y-3">
            {faqs.map(({ question, answer }) => (
              <details
                key={question}
                className="group rounded-xl border border-[var(--border)] bg-[var(--surface)] p-5"
              >
                <summary className="cursor-pointer list-none pr-6 text-sm font-semibold text-[var(--text)] marker:hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)]">
                  {question}
                  <span className="float-right text-[var(--accent)]" aria-hidden="true">
                    +
                  </span>
                </summary>
                <p className="mt-3 max-w-3xl text-sm leading-relaxed text-[var(--muted)]">{answer}</p>
              </details>
            ))}
          </div>
        </section>

        {relatedServices.length > 0 && (
          <nav aria-label="Related services" className="mt-12 border-t border-[var(--border)] pt-8">
            <h2 className="text-sm font-semibold text-[var(--text)]">Related services</h2>
            <ul className="mt-3 flex flex-wrap gap-x-6 gap-y-2">
              {relatedServices.map(({ label, href }) => (
                <li key={href}>
                  <Link href={href} className="text-sm text-[var(--accent)] underline-offset-4 hover:underline">
                    {label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/projects" className="text-sm text-[var(--accent)] underline-offset-4 hover:underline">
                  Browse selected projects
                </Link>
              </li>
            </ul>
          </nav>
        )}

        <section className="mt-12 rounded-2xl border border-[var(--border)] bg-[var(--surface-2)] p-6 md:p-8">
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <h2 className="text-2xl font-bold text-[var(--text)] font-[var(--font-syne)]">
                Tell me what you are trying to solve.
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">
                We can work out whether this service is the right fit and what a practical first scope might look like.
              </p>
            </div>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 shrink-0 items-center justify-center rounded-full bg-[var(--accent)] px-5 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
            >
              Start on WhatsApp
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
