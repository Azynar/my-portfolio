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
    </main>
  )
}