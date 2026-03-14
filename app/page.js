'use client';

import { useState } from 'react';

export default function Home() {
  return (
    <main style={{background: 'var(--bg)', minHeight: '100vh', color: 'var(--text)'}}>
      <nav style={{borderBottom: '1px solid var(--border)', background: 'rgba(5,10,24,0.9)'}} className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-24 py-5 backdrop-blur-md">
        <div style={{fontFamily: 'var(--font-heading)', color: 'var(--text)'}} className="text-xl font-extrabold tracking-tight">
          Azynar<span style={{color: 'var(--accent)'}}>.</span>
        </div>
        <ul className="flex gap-10 list-none">
          <li><a href="#about" style={{color: 'var(--muted)'}} className="text-xs uppercase tracking-widest no-underline">About</a></li>
          <li><a href="#projects" style={{color: 'var(--muted)'}} className="text-xs uppercase tracking-widest no-underline">Projects</a></li>
          <li><a href="#skills" style={{color: 'var(--muted)'}} className="text-xs uppercase tracking-widest no-underline">Skills</a></li>
          <li><a href="#contact" style={{color: 'var(--muted)'}} className="text-xs uppercase tracking-widest no-underline">Contact</a></li>
        </ul>
      </nav>

      <section className="min-h-screen flex items-center justify-between gap-16 px-24 pt-32 pb-16">
  <div className="flex flex-col gap-6 max-w-xl">
    <p style={{color: 'var(--accent)'}} className="text-xs uppercase tracking-widest">
      // Web3 Developer & Technical Writer
    </p>
    <h1 style={{fontFamily: 'var(--font-heading)', color: 'var(--text)'}} className="text-7xl font-extrabold leading-tight tracking-tight">
      Hi, I'm <span style={{color: 'var(--accent)'}}>Azynar</span><br />
      of Web3
    </h1>
    <p style={{color: 'var(--muted)'}} className="text-sm leading-relaxed">
      I'm Abdulazeem — a Web3 developer and technical writer focused on 
      building clean, functional products and making complex blockchain 
      concepts easy to understand. I build landing pages, dApps, and write 
      docs that developers actually enjoy reading.
    </p>
    <div className="flex gap-4">
      <a href="#projects" style={{background: 'var(--accent)', color: 'var(--bg)'}} className="px-8 py-3 text-xs font-bold uppercase tracking-widest no-underline transition-opacity hover:opacity-80">
        View My Work
      </a>
      <a href="#contact" style={{border: '1px solid var(--accent)', color: 'var(--accent)'}} className="px-8 py-3 text-xs font-bold uppercase tracking-widest no-underline transition-opacity hover:opacity-80">
        Hire Me
      </a>
    </div>
  </div>
  <div style={{border: '2px solid var(--accent)'}} className="w-72 h-72 rounded-full overflow-hidden flex-shrink-0">
    <img src="/avatar.png" alt="Azynar" className="w-full h-full object-cover" />
  </div>
</section>
    </main>
  )
}