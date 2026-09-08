'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { FiGithub, FiTwitter, FiLinkedin, FiMail, FiSend, FiCheck, FiCopy } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

const socials = [
  { icon: <FiMail size={16} />, label: 'Email', handle: 'azynar35@gmail.com', href: 'mailto:azynar35@gmail.com' },
  { icon: <FaWhatsapp size={16} />, label: 'WhatsApp', handle: '+234 703 239 6032', href: 'https://wa.me/2347032396032' },
  { icon: <FiLinkedin size={16} />, label: 'LinkedIn', handle: 'abdulazeem-badmus', href: 'https://linkedin.com/in/abdulazeem-badmus-bb748b195' },
  { icon: <FiTwitter size={16} />, label: 'Twitter / X', handle: '@Azynar01', href: 'https://twitter.com/Azynar01' },
  { icon: <FiGithub size={16} />, label: 'GitHub', handle: 'Azynar', href: 'https://github.com/Azynar' },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    company: '',
  });

  const messagePlaceholder = "Hi Azynar! We are looking to build a new web application/automation tool. Let's discuss scope, timeline, and pricing.";
  const whatsappNumber = '2347032396032';
  const whatsappHref = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(formData.message || messagePlaceholder)}`;

  const copyEmail = () => {
    navigator.clipboard.writeText('azynar35@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError('');

    if (formData.company) {
      setTimeout(() => {
        setSubmitted(true);
        setLoading(false);
        setFormData({ name: '', email: '', message: '', company: '' });
      }, 500);
      return;
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          honeypot: formData.company,
        }),
      });
      const data = await response.json();

      if (!response.ok) {
        setError(data.error || 'Something went wrong. Please try again.');
        return;
      }

      setSubmitted(true);
      setFormData({ name: '', email: '', message: '', company: '' });
      setTimeout(() => setSubmitted(false), 4000);
    } catch {
      setError('Connection error. Feel free to contact via WhatsApp or direct email.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="bg-[var(--bg)] px-6 py-20 md:px-24 md:py-24 border-t border-[var(--border)]">
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-[var(--accent)] font-[var(--font-syne)]">
              Get In Touch
            </span>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-[var(--text)] font-[var(--font-syne)] sm:text-4xl">
              Let&apos;s build something <span className="text-[var(--accent)]">remarkable</span>.
            </h2>
          </div>
          <p className="mt-3 max-w-md text-xs text-[var(--muted)] sm:text-sm md:mt-0">
            I typically respond within 24 hours. Send a direct message, schedule a call, or reach out on WhatsApp.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col justify-between lg:col-span-5 space-y-5"
          >
            <div>
              <h3 className="text-base font-bold text-[var(--text)] font-[var(--font-syne)]">
                Direct Channels
              </h3>
              <p className="mt-1 text-xs text-[var(--muted)]">
                Whether you have a fully scoped PRD or just an initial idea on a notepad, let&apos;s talk about the best path forward.
              </p>

              {/* Email quick-copy */}
              <div className="mt-4 flex items-center justify-between rounded-xl border border-[var(--border)] bg-[var(--surface)] p-3.5 shadow-xs">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--surface-2)] text-[var(--accent)]">
                    <FiMail size={15} />
                  </div>
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-wider text-[var(--muted)]">Direct Email</p>
                    <p className="text-xs font-medium text-[var(--text)]">azynar35@gmail.com</p>
                  </div>
                </div>
                <button
                  onClick={copyEmail}
                  className="inline-flex items-center gap-1 rounded-md border border-[var(--border)] bg-[var(--surface-2)] px-2.5 py-1 text-[10px] font-medium text-[var(--muted)] transition-colors hover:text-[var(--text)]"
                >
                  {copied ? <FiCheck size={11} className="text-emerald-500" /> : <FiCopy size={11} />}
                  <span>{copied ? 'Copied' : 'Copy'}</span>
                </button>
              </div>

              {/* Social Channels list */}
              <div className="mt-3 flex flex-col gap-2">
                {socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between rounded-xl border border-[var(--border)] bg-[var(--surface)] px-3.5 py-2.5 shadow-xs transition-colors hover:border-[var(--text)]/20 hover:bg-[var(--surface-2)]"
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="text-[var(--muted)]">
                        {social.icon}
                      </span>
                      <span className="text-xs font-medium text-[var(--text)]">
                        {social.label}
                      </span>
                    </div>
                    <span className="font-mono text-[11px] text-[var(--muted)]">
                      {social.handle}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            <div className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-3.5 text-xs text-[var(--muted)]">
              <span className="font-semibold text-[var(--text)]">Fast Track:</span> Need an immediate response? Chat directly on WhatsApp for same-day estimates.
            </div>
          </motion.div>

          {/* Right Column: Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-xs lg:col-span-7"
          >
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              {/* Honeypot field */}
              <div className="hidden" aria-hidden="true">
                <label htmlFor="company">Company</label>
                <input
                  id="company"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                />
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="name" className="text-xs font-medium text-[var(--muted)]">
                    Your Name <span className="text-red-500">*</span>
                  </label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Alex Morgan"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className="text-xs font-medium text-[var(--muted)]">
                    Your Email <span className="text-red-500">*</span>
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="alex@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <div className="flex items-center justify-between">
                  <label htmlFor="message" className="text-xs font-medium text-[var(--muted)]">
                    Project Details &amp; Goals <span className="text-red-500">*</span>
                  </label>
                  <span className="font-mono text-[10px] text-[var(--muted)]">
                    {formData.message.length} chars
                  </span>
                </div>
                <Textarea
                  id="message"
                  placeholder={messagePlaceholder}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={4}
                />
              </div>

              <Button
                type="submit"
                disabled={loading || submitted}
                className="w-full rounded-xl py-3 text-xs font-semibold"
              >
                {loading ? (
                  <span>Sending Message...</span>
                ) : submitted ? (
                  <>
                    <FiCheck size={14} className="text-emerald-400" />
                    <span>Message Received! I will be in touch shortly.</span>
                  </>
                ) : (
                  <>
                    <FiSend size={13} />
                    <span>Send Project Inquiry →</span>
                  </>
                )}
              </Button>

              {error && (
                <p className="rounded-lg bg-red-500/10 p-2.5 text-center text-xs text-red-500">
                  {error}
                </p>
              )}

              {/* WhatsApp Sync Button */}
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--surface-2)] py-2.5 text-center text-xs font-medium text-[var(--muted)] transition-colors hover:text-[var(--text)] hover:border-[var(--text)]/20"
              >
                <FaWhatsapp size={14} className="text-emerald-500" />
                <span>Or Continue on WhatsApp with this message</span>
              </a>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}