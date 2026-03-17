'use client';

import { motion } from 'framer-motion';
import { FiGithub, FiTwitter, FiLinkedin, FiMail } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer style={{borderTop: '1px solid var(--border)'}} className="px-24 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        style={{maxWidth: '1100px', margin: '0 auto'}}
        className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-0"
      >
        <div className="flex flex-col gap-1">
          <span style={{fontFamily: 'var(--font-syne)', fontWeight: 800}} className="text-[#f0f4ff] text-lg">
            Azynar<span style={{color: 'var(--accent)'}}>.</span>
          </span>
          <span className="text-[#8899aa] text-xs">
            © 2026 Azynar — Built with Next.js & Tailwind
          </span>
        </div>

        <div className="flex items-center gap-4">
          <a href="https://twitter.com/Azynar01" target="_blank" rel="noopener noreferrer" style={{border: '1px solid var(--border)'}} className="p-2 rounded-full text-[#8899aa] hover:border-[#1e6fff] hover:text-[#1e6fff] transition-all">
            <FiTwitter size={16} />
          </a>
          <a href="https://linkedin.com/in/abdulazeem-badmus-bb748b195" target="_blank" rel="noopener noreferrer" style={{border: '1px solid var(--border)'}} className="p-2 rounded-full text-[#8899aa] hover:border-[#1e6fff] hover:text-[#1e6fff] transition-all">
            <FiLinkedin size={16} />
          </a>
          <a href="https://github.com/Azynar" target="_blank" rel="noopener noreferrer" style={{border: '1px solid var(--border)'}} className="p-2 rounded-full text-[#8899aa] hover:border-[#1e6fff] hover:text-[#1e6fff] transition-all">
            <FiGithub size={16} />
          </a>
          <a href="https://wa.me/2347032396032" target="_blank" rel="noopener noreferrer" style={{border: '1px solid var(--border)'}} className="p-2 rounded-full text-[#8899aa] hover:border-[#1e6fff] hover:text-[#1e6fff] transition-all">
            <FaWhatsapp size={16} />
          </a>
          <a href="azynar35@gmail.com" style={{border: '1px solid var(--border)'}} className="p-2 rounded-full text-[#8899aa] hover:border-[#1e6fff] hover:text-[#1e6fff] transition-all">
            <FiMail size={16} />
          </a>
        </div>

        <a href="#hero" style={{border: '1px solid var(--border)', fontFamily: 'var(--font-syne)', fontWeight: 700}} className="text-[#8899aa] text-xs uppercase tracking-widest px-5 py-2 rounded-full hover:border-[#1e6fff] hover:text-[#1e6fff] transition-all no-underline">
          Back to top ↑
        </a>

      </motion.div>
    </footer>
  );
}