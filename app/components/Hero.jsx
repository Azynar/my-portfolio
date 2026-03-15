export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center px-24 pt-32 pb-16">

      <div className="flex items-center gap-2 mb-8">
        <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
        <span className="text-green-400 text-xs tracking-widest uppercase">Available for work</span>
      </div>

      <h1 style={{fontFamily: 'var(--font-syne)', fontWeight: 800, lineHeight: 1.05}} className="text-7xl text-[#f0f4ff] tracking-tight mb-6">
        Hi, I'm Azynar <br /> <span style={{color: 'var(--accent)'}}>of Web3.</span>
      </h1>

      <p style={{fontFamily: 'var(--font-syne)', fontWeight: 700}} className="text-2xl text-[#f0f4ff] mb-5">
        Web3 Developer & Technical Writer.
      </p>

      <p style={{fontFamily: 'var(--font-syne)'}} className="text-[#8899aa] text-1x1g leading-relaxed mb-10 max-w-xl">
        I'm Abdulazeem — a Web3 developer and technical writer focused on
        building clean, functional products and making complex blockchain
        concepts easy to understand. I build landing pages, dApps, and write
        docs that developers actually enjoy reading.
      </p>

      <div className="flex items-center gap-4">
        <a href="#projects" style={{fontFamily: 'var(--font-syne)', fontWeight: 700}} className="bg-[#1e6fff] text-white text-xs uppercase tracking-widest px-8 py-3 rounded-full hover:opacity-80 transition-opacity no-underline">
          Hire me!
        </a>
        <a href="/resume" style={{fontFamily: 'var(--font-syne)', fontWeight: 700}} className="border border-[#1a2a4a] text-[#8899aa] text-xs uppercase tracking-widest px-8 py-3 rounded-full hover:border-[#1e6fff] hover:text-[#1e6fff] transition-all no-underline">
          My Resume →
        </a>
      </div>

    </section>
  );
}