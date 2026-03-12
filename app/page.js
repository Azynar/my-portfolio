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
    </main>
  )
}