'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center px-6 md:px-24 pt-32 pb-16">

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-2 mb-8"
      >
        <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
        <span className="text-green-400 text-xs tracking-widest uppercase">Available for work</span>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        style={{fontFamily: 'var(--font-syne)', fontWeight: 800, lineHeight: 1.05}}
        className="text-4xl md:text-8xl text-[#f0f4ff] tracking-tight mb-6"
      >
        Hi, I'm Azynar <br />
        <span style={{color: 'var(--accent)'}}>of Web3.</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        style={{fontFamily: 'var(--font-syne)', fontWeight: 700}}
        className="text-xl md:text-2xl text-[#f0f4ff] mb-5"
      >
        Web3 Developer & Technical Writer.
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-[#8899aa] text-sm leading-relaxed mb-10 max-w-xl"
        style={{fontFamily: 'var(--font-syne)'}}
      >
        I'm Abdulazeem — a Web3 developer and technical writer focused on
        building clean, functional products and making complex blockchain
        concepts easy to understand. I build landing pages, dApps, and write
        docs that developers actually enjoy reading.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="flex flex-col md:flex-row items-start md:items-center gap-4"
      >
        <a href="#projects" style={{fontFamily: 'var(--font-syne)', fontWeight: 700}} className="bg-[#1e6fff] text-white text-xs uppercase tracking-widest px-8 py-3 rounded-full hover:opacity-80 transition-opacity no-underline">
          Hire me!
        </a>
        <a href="/resume" style={{fontFamily: 'var(--font-syne)', fontWeight: 700}} className="border border-[#1a2a4a] text-[#8899aa] text-xs uppercase tracking-widest px-8 py-3 rounded-full hover:border-[#1e6fff] hover:text-[#1e6fff] transition-all no-underline">
          My Resume →
        </a>
      </motion.div>

    </section>
  );
}