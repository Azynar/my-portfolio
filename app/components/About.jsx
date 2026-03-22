'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="px-6 md:px-24 py-20 md:py-32">
      <div style={{maxWidth: '1100px', margin: '0 auto'}}>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-[#8899aa] text-xs uppercase tracking-widest mb-4"
        >
          About Me
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          style={{fontFamily: 'var(--font-syne)', fontWeight: 800}}
          className="text-4xl md:text-5xl text-[#f0f4ff] tracking-tight mb-12 md:mb-16"
        >
          Who I Am.
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6"
          >
            <p className="text-[#8899aa] text-sm leading-relaxed border-l-2 border-[#1e6fff] pl-4">
              I build clean, functional Web3 products and write technical content that developers actually enjoy reading. My work sits at the intersection of development and communication.
            </p>
            <p className="text-[#8899aa] text-sm leading-relaxed">
              As a Web3 developer and technical writer, I enjoy turning complex blockchain concepts into clear, usable systems and content.
            </p>
            <p className="text-[#8899aa] text-sm leading-relaxed">
              I build landing pages, dApps, and write docs — with the same mindset: clarity, efficiency, and long-term value.
            </p>
            <p className="text-[#8899aa] text-sm leading-relaxed">
              Curious by default and detail-driven by habit, I care deeply about how things look, how they work, and why they exist.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: true }}
            className="relative"
            style={{maxHeight: '500px', overflow: 'hidden'}}
          >
            <Image
              src="/avatar.png"
              alt="Azynar"
              width={500}
              height={500}
              className="w-full object-cover object-top"
              style={{filter: 'grayscale(20%)', maxHeight: '500px'}}
            />
            <div style={{background: 'linear-gradient(to top, var(--bg), transparent)'}} className="absolute bottom-0 left-0 right-0 h-24"></div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}