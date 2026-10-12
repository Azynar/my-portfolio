import Contact from '@/app/components/Contact';
import { Container } from '@/components/ui/container';
import { SectionHeading } from '@/components/ui/section-heading';
import { createPageMetadata } from '@/lib/metadata';

export const metadata = createPageMetadata({
  title: 'Contact AZYNAR | Discuss Your Project',
  description: 'Contact AZYNAR to discuss a website, web application, or business-system integration.',
  path: '/contact',
});

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[var(--bg)] pb-24 pt-24 md:pt-28 md:pb-32">
      <Container className="max-w-6xl">
        <SectionHeading
          eyebrow="Contact"
          title="Tell me what you need to build"
          description="Share a little about your business, the problem you want to solve, and what you would like customers or staff to be able to do. I&apos;ll review the details and respond with the next step."
        />
        <Contact />
      </Container>
    </main>
  );
}
