'use client';

import { motion } from 'framer-motion';
import { FiSend, FiArrowRight } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const whatsappMessage = "Hi Azynar! I came across your portfolio and I would love to discuss a project.";
const whatsappHref = `https://wa.me/2347032396032?text=${encodeURIComponent(whatsappMessage)}`;

export default function CTAStrip() {
  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="cta" className="bg-[var(--bg)] px-6 py-16 md:px-24 border-t border-[var(--border)]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-5xl rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8 md:p-10 shadow-xs"
      >
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="max-w-xl">
            <Badge variant="outline" className="mb-3 text-[10px]">
              Open for Opportunities
            </Badge>
            <h2 className="text-2xl font-extrabold tracking-tight text-[var(--text)] font-[var(--font-syne)] sm:text-3xl">
              Have a project in mind? <br />
              <span className="text-[var(--accent)]">Let&apos;s turn it into reality.</span>
            </h2>
            <p className="mt-2 text-xs leading-relaxed text-[var(--muted)] sm:text-sm">
              Whether you need a high-converting web app built from scratch or manual workflows automated—I&apos;m ready to help you ship.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2.5">
            <Button
              onClick={scrollToContact}
              size="lg"
              className="rounded-full px-5 text-xs font-semibold"
            >
              <span>Send Message</span>
              <FiArrowRight size={13} />
            </Button>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="outline"
                size="lg"
                className="gap-2 rounded-full px-5 text-xs font-semibold"
              >
                <FaWhatsapp size={14} className="text-emerald-500" />
                <span>WhatsApp Chat</span>
              </Button>
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}