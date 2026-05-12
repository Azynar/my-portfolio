'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { FiGithub, FiTwitter, FiLinkedin, FiMail } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

const socials = [
  { icon: <FiTwitter size={18} />, label: 'Twitter', handle: '@Azynar01', href: 'https://twitter.com/Azynar01' },
  { icon: <FiLinkedin size={18} />, label: 'LinkedIn', handle: 'linkedin.com/in/abdulazeem-badmus', href: 'https://linkedin.com/in/abdulazeem-badmus-bb748b195' },
  { icon: <FiGithub size={18} />, label: 'GitHub', handle: 'github.com/Azynar', href: 'https://github.com/Azynar' },
  { icon: <FaWhatsapp size={18} />, label: 'WhatsApp', handle: 'wa.me/2347032396032', href: 'https://wa.me/2347032396032' },
  { icon: <FiMail size={18} />, label: 'Email', handle: 'azynar35@gmail.com', href: 'mailto:azynar35@gmail.com' },
];

export default function Contact() {

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
  name: '',
  email: '',
  message: '',
});

  const messagePlaceholder = "Hi Azynar! I came across your portfolio and I would love to work with you. Could we talk about a project?";
  const whatsappNumber = '2347032396032';
  const whatsappHref = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(formData.message || messagePlaceholder)}`;

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await response.json();

      if (!response.ok) {
        setError(data.error || 'Something went wrong. Try again.');
        return;
      }

      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitted(false), 3000);
    } catch {
      setError('Something went wrong. Try again.');
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <section id="contact" className="bg-[var(--bg)] px-6 py-20 md:px-24 md:py-28">
      <div className="mx-auto max-w-6xl">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mb-4 text-sm text-[var(--muted)]"
      >
        Contact
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true }}
        className="mb-12 text-3xl font-extrabold tracking-tight text-[var(--text)] font-[var(--font-syne)] md:text-5xl"
      >
          Get In Touch.
      </motion.h2>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-16">

        <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col gap-8"
        >
            <p className="text-2xl font-bold text-[var(--text)] font-[var(--font-syne)]">
              Got a project in mind?
            </p>
            <p className="text-sm leading-relaxed text-[var(--muted)]">
              Whether you need a Web3 landing page, smart contract development, or clear technical writing for your protocol — I am open to freelance projects.
            </p>
            <div className="flex flex-col gap-4">
              {socials.map((social) => (
                <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 rounded-xl border border-[var(--border)] px-5 py-3 transition-all duration-300 hover:translate-x-2 hover:border-[var(--accent)] hover:bg-white">
                <span className="text-[var(--accent)] transition-transform duration-300 group-hover:scale-110">
                  {social.icon}
                </span>
                <div className="flex flex-col">
                  <span className="text-xs uppercase tracking-widest text-[var(--text)] font-[var(--font-syne)]">
                    {social.label}
                  </span>
                  <span className="text-xs text-[var(--muted)] transition-colors duration-300 group-hover:text-[var(--accent)]">
                    {social.handle}
                  </span>
                </div>
              </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex flex-col gap-4"
          >
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <label className="text-xs uppercase tracking-widest text-[var(--muted)]">Name</label>
              <input
                type="text"
                placeholder="Satoshi Nakamoto"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="rounded-xl border border-[var(--border)] bg-white px-4 py-3 text-sm text-[var(--text)] outline-none transition-colors focus:border-[var(--accent)]"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs uppercase tracking-widest text-[var(--muted)]">Email</label>
              <input
                  type="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="rounded-xl border border-[var(--border)] bg-white px-4 py-3 text-sm text-[var(--text)] outline-none transition-colors focus:border-[var(--accent)]"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs uppercase tracking-widest text-[var(--muted)]">Message</label>
              <textarea 
                placeholder={messagePlaceholder}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                className="h-36 resize-none rounded-xl border border-[var(--border)] bg-white px-4 py-3 text-sm text-[var(--text)] outline-none transition-colors focus:border-[var(--accent)]" 
              />
            </div>
            <button
              type="submit"
              disabled={loading || submitted}
              className={`w-full rounded-xl py-3 text-sm font-semibold text-white transition-all disabled:cursor-not-allowed disabled:opacity-50 ${submitted ? 'bg-green-500' : 'bg-[var(--accent)] hover:opacity-85'}`}
            >
              {loading ? 'Sending...' : submitted ? 'Message Sent ✓' : 'Send Message →'}
            </button>

            {error && (
                <p className="text-center text-xs text-red-600">{error}</p>
            )}
            </form>
            <a 
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full rounded-xl border border-[var(--border)] py-3 text-center text-sm text-[var(--text)] transition-all hover:border-[var(--accent)] hover:text-[var(--accent)]"
            >
              Chat on WhatsApp
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}