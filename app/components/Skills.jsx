'use client';

import { motion } from 'framer-motion';

import { SiSolidity, SiEthereum, SiReact, SiNextdotjs, SiTailwindcss, SiJavascript, SiNodedotjs, SiGit } from 'react-icons/si';
import { FiFileText, FiBook, FiEdit, FiCode } from 'react-icons/fi';

const skillGroups = [
  {
    title: 'Blockchain Dev',
    sub: 'Currently building this Stack',
    icon: <SiEthereum size={18} />,
    skills: ['Solidity (Learning)', 'Smart Contracts', 'Web3 Concepts', 'ERC-20', 'Ethers.js (Learning)'],
  },
  {
    title: 'Web Development',
    sub: 'Web2 & Web3 Frontend',
    icon: <SiReact size={18} />,
    skills: ['React', 'Next.js', 'JavaScript', 'HTML & CSS', 'Tailwind CSS', 'E-Commerce', 'Landing Pages', 'Business Sites'],
  },
  {
    title: 'Technical Writing',
    sub: 'Docs, Blogs & Content',
    icon: <FiFileText size={18} />,
    skills: ['Developer Docs', 'Whitepapers', 'Blog Articles', 'API Reference', 'Protocol Docs', 'Tutorials'],
  },
  {
    title: 'Tools & Others',
    sub: 'Workflow & Productivity',
    icon: <FiCode size={18} />,
    skills: ['Git & GitHub', 'VS Code', 'Figma', 'Notion', 'Docusaurus', 'IPFS'],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="px-6 md:px-24 py-20 md:py-32">
      <div style={{maxWidth: '1100px', margin: '0 auto'}}>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-[#8899aa] text-xs uppercase tracking-widest mb-4"
      >
        Expertise
      </motion.p>
      <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          style={{fontFamily: 'var(--font-syne)', fontWeight: 800}}
          className="text-4xl md:text-5xl text-[#f0f4ff] tracking-tight mb-12 md:mb-16"
      >
          Skills & Tools.
      </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillGroups.map((group, index) => (
            <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            viewport={{ once: true }}
            style={{background: 'var(--surface)', border: '1px solid var(--border)'}}
            className="rounded-2xl p-8 flex flex-col gap-6 hover:border-[#1e6fff] transition-all duration-300"
          >
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-3" style={{color: 'var(--accent)'}}>
                  {group.icon}
                  <h3 style={{fontFamily: 'var(--font-syne)', fontWeight: 700}} className="text-lg text-[#f0f4ff]">
                    {group.title}
                  </h3>
                </div>
                <p className="text-[#8899aa] text-xs uppercase tracking-widest pl-7">
                  {group.sub}
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span key={skill} style={{border: '1px solid var(--border)', color: 'var(--muted)'}} className="text-xs px-3 py-1 rounded-full tracking-widest hover:border-[#1e6fff] hover:text-[#1e6fff] transition-all cursor-default">
                    {skill}
                  </span>
                ))}
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}