export default function About() {
  return (
    <section id="about" className="px-6 md:px-24 py-20 md:py-32">
      <div style={{maxWidth: '1100px', margin: '0 auto'}}>

        <p className="text-[#8899aa] text-xs uppercase tracking-widest mb-4">About Me</p>
        <h2 style={{fontFamily: 'var(--font-syne)', fontWeight: 800}} className="text-4xl md:text-5xl text-[#f0f4ff] tracking-tight mb-12 md:mb-16">
          Who I Am.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">

          <div className="flex flex-col gap-6">
            <p style= {{fontFamily: 'var(--font-syne)'}} className="text-[#8899aa] text-1x1 leading-relaxed border-l-2 border-[#1e6fff] pl-4">
              I build clean, functional Web3 products and write technical content that developers actually enjoy reading. My work sits at the intersection of development and communication.
            </p>
            <p style= {{fontFamily: 'var(--font-syne)'}} className="text-[#8899aa] text-1x1 leading-relaxed">
              As a Web3 developer and technical writer, I enjoy turning complex blockchain concepts into clear, usable systems and content.
            </p>
            <p style= {{fontFamily: 'var(--font-syne)'}} className="text-[#8899aa] text-1x1 leading-relaxed">
              I build landing pages, dApps, and write docs — with the same mindset: clarity, efficiency, and long-term value.
            </p>
            <p style= {{fontFamily: 'var(--font-syne)'}} className="text-[#8899aa] text-1x1 leading-relaxed">
              Curious by default and detail-driven by habit, I care deeply about how things look, how they work, and why they exist.
            </p>
          </div>

          <div className="relative" style={{maxHeight: '500px', overflow: 'hidden'}}>
            <img
              src="/avatar.png"
              alt="Azynar"
              className="w-full object-cover object-top"
              style={{filter: 'grayscale(20%)', maxHeight: '500px'}}
            />
            <div style={{background: 'linear-gradient(to top, var(--bg), transparent)'}} className="absolute bottom-0 left-0 right-0 h-24"></div>
          </div>

        </div>
      </div>
    </section>
  );
}