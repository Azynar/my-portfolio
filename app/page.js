'use client';

import { useState } from 'react';

export default function Home() {
  return (
    <main>
      <nav className="navbar">
        <div className="nav-logo">Azynar<span>.</span></div>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

  <section className="hero">
  <div className="hero-content">
    <p className="hero-tag">// Web3 Developer & Technical Writer</p>
    <h1 className="hero-title">
      Hi, I'm <span>Azynar</span><br />
      of Web3
    </h1>
    <p className="hero-bio">
      I'm Abdulazeem — a Web3 developer and technical writer focused on 
      building clean, functional products and making complex blockchain 
      concepts easy to understand. I build landing pages, dApps, and write 
      docs that developers actually enjoy reading.
    </p>
    <div className="hero-buttons">
      <a href="#projects" className="btn-primary">View My Work</a>
      <a href="#contact" className="btn-secondary">Hire Me</a>
    </div>
  </div>
  <div className="hero-image">
    <img src="/avatar.png" alt="Azynar" />
  </div>
</section>

<section className="projects" id="projects">
  <p className="section-tag">// What I've Built</p>
  <h2 className="section-title">Projects</h2>

  <div className="projects-grid">

    <div className="project-card">
      <div className="project-number">01</div>
      <h3 className="project-name">Web3 Landing Page</h3>
      <p className="project-desc">
        A clean, modern landing page for a Web3 project. Built with 
        Next.js and Tailwind CSS.
      </p>
      <div className="project-tags">
        <span className="tag">Next.js</span>
        <span className="tag">Tailwind</span>
        <span className="tag">Web3</span>
      </div>
      <div className="project-links">
        <a href="#" className="project-link">↗ Live Demo</a>
        <a href="#" className="project-link">⌥ GitHub</a>
      </div>
    </div>

    <div className="project-card">
      <div className="project-number">02</div>
      <h3 className="project-name">DeFi Dashboard</h3>
      <p className="project-desc">
        A dashboard for tracking DeFi portfolio positions and 
        on-chain activity in real time.
      </p>
      <div className="project-tags">
        <span className="tag">React</span>
        <span className="tag">Ethers.js</span>
        <span className="tag">Supabase</span>
      </div>
      <div className="project-links">
        <a href="#" className="project-link">↗ Live Demo</a>
        <a href="#" className="project-link">⌥ GitHub</a>
      </div>
    </div>

    <div className="project-card">
      <div className="project-number">03</div>
      <h3 className="project-name">Protocol Docs</h3>
      <p className="project-desc">
        Comprehensive developer documentation for a DeFi protocol — 
        covering architecture, SDK references and integration guides.
      </p>
      <div className="project-tags">
        <span className="tag">Technical Writing</span>
        <span className="tag">Docusaurus</span>
      </div>
      <div className="project-links">
        <a href="#" className="project-link">↗ Read Docs</a>
      </div>
    </div>

  </div>
</section>

<section className="skills" id="skills">
  <p className="section-tag">// What I Work With</p>
  <h2 className="section-title">Skills & Tools</h2>

  <div className="skills-grid">

    <div className="skill-group">
      <h3 className="skill-group-title">Blockchain Dev</h3>
      <p className="skill-group-sub">Smart Contracts & Protocols</p>
      <ul className="skill-list">
        <li>Solidity</li>
        <li>Hardhat</li>
        <li>Ethers.js</li>
        <li>Web3.js</li>
      </ul>
    </div>

    <div className="skill-group">
      <h3 className="skill-group-title">Frontend</h3>
      <p className="skill-group-sub">UI & Web Development</p>
      <ul className="skill-list">
        <li>React / Next.js</li>
        <li>JavaScript</li>
        <li>HTML / CSS</li>
        <li>Tailwind CSS</li>
      </ul>
    </div>

    <div className="skill-group">
      <h3 className="skill-group-title">Technical Writing</h3>
      <p className="skill-group-sub">Docs, Blogs & Content</p>
      <ul className="skill-list">
        <li>Developer Docs</li>
        <li>Whitepaper Writing</li>
        <li>Blog Articles</li>
        <li>API Reference</li>
      </ul>
    </div>

  </div>
</section>

<section className="contact" id="contact">
  <p className="section-tag">// Get In Touch</p>
  <h2 className="section-title">Let's Build Together</h2>

  <div className="contact-wrap">

    <div className="contact-left">
      <h3 className="contact-heading">Got a project in mind?</h3>
      <p className="contact-desc">
        Whether you need a Web3 landing page, smart contract development, 
        or clear technical writing for your protocol — I'm open to 
        freelance projects. Let's talk.
      </p>

      <div className="contact-links">
  <a href="https://twitter.com/Azynar01" className="contact-link">
    <span>𝕏</span> Azynar of Web3
  </a>
  <a href="https://www.linkedin.com/in/abdulazeem-badmus-bb748b195/" className="contact-link">
    <span>in</span> Abdulazeem Badmus
  </a>
  <a href="https://github.com/Azynar" className="contact-link">
    <span>⌥</span> github.com/Azynar
  </a>
  <a href="https://wa.me/2347032396032" className="contact-link">
    <span>💬</span> WhatsApp
  </a>
  <a href="mailto:azynar35@@gmail.com" className="contact-link">
    <span>✉</span> azynar35@gmail.com
  </a>
</div>
    </div>

    <div className="contact-right">
      <div className="form-group">
        <label>Name</label>
        <input type="text" placeholder="Satoshi Nakamoto" />
      </div>
      <div className="form-group">
        <label>Email</label>
        <input type="email" placeholder="you@example.com" />
      </div>
      <div className="form-group">
        <label>Message</label>
        <textarea placeholder="Tell me about your project..."></textarea>
      </div>
      <button className="btn-primary" onClick={() => alert('Message coming soon! Reach me directly via email or socials.')}>
  Send Message →
</button>
    </div>

  </div>
</section>
<footer className="footer">
  <div className="footer-left">
    © 2025 <span>Azynar</span> — Built with Next.js
  </div>
  <a href="#" className="footer-top">Back to top ↑</a>
</footer>
    </main>
  )
}