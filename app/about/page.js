import Link from 'next/link';
import { Container } from '@/components/ui/container';
import { SectionHeading } from '@/components/ui/section-heading';
import { createPageMetadata } from '@/lib/metadata';

export const metadata = createPageMetadata({
  title: 'Badmus Abdulazeem Babatunde (AZYNAR) | About',
  description: 'Learn about Badmus Abdulazeem Babatunde, the developer behind AZYNAR, and his approach to building useful websites, web applications, and business systems while developing deeper software engineering skills.',
  path: '/about',
});

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[var(--bg)] pb-24 pt-32 md:pt-40 md:pb-32">
      <Container className="max-w-4xl">
        <SectionHeading
          eyebrow="About"
          title="Building useful digital solutions—and becoming a stronger engineer"
        />

        <div className="space-y-6 text-sm leading-relaxed text-[var(--muted)] sm:text-base">
          <p>
            I&apos;m Abdulazeem Badmus, the developer behind AZYNAR. I work on websites, web applications, and business systems that help people understand services, make enquiries, request bookings, and interact with businesses more easily.
          </p>

          <p>
            I approach projects by first understanding the problem and the people who need to use the solution. From there, I define the scope, choose suitable tools, build the agreed functionality, and test the experience before launch.
          </p>

          <p>
            Alongside client work, I&apos;m strengthening my foundations in JavaScript, TypeScript, React, backend development, databases, testing, and software engineering practices. My longer-term direction is full-stack engineering, with room to specialize as I gain deeper experience and learn which technical problems I can contribute to most effectively.
          </p>

          <p>
            AZYNAR is where I bring together practical client work, continued learning, and a commitment to building digital products that are useful and maintainable.
          </p>
        </div>

        <div className="mt-10 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 md:p-8">
          <h2 className="text-xl font-bold text-[var(--text)] font-[var(--font-syne)]">
            Working principles
          </h2>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2">
            {[
              'Understand requirements before choosing tools.',
              'Keep scope and expectations explicit.',
              'Prefer the simplest solution that meets the real requirement.',
              'Be honest about what is complete, tested, and supported.',
              'Continue improving the engineering behind the work.',
            ].map((principle) => (
              <li key={principle} className="flex items-start gap-3 text-sm text-[var(--muted)]">
                <span className="mt-1 h-2 w-2 rounded-full bg-[var(--accent)]" aria-hidden="true" />
                <span>{principle}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-3">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-[var(--accent)] px-5 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
          >
            Start a Conversation
          </Link>
          <Link
            href="/projects"
            className="inline-flex items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface)] px-5 py-3 text-sm font-semibold text-[var(--text)] transition-colors hover:border-[var(--text)]/30"
          >
            View Projects
          </Link>
        </div>
      </Container>
    </main>
  );
}
