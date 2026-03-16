import { FiGithub, FiExternalLink } from 'react-icons/fi';

export default function Projects() {
  const projects = [
    {
      number: '01',
      title: 'Web3 Landing Page',
      desc: 'A clean, modern landing page for a Web3 project. Built with Next.js and Tailwind CSS.',
      tags: ['Next.js', 'Tailwind', 'Web3'],
      demo: '#',
      github: '#',
      image: null,
    },
    {
      number: '02',
      title: 'DeFi Dashboard',
      desc: 'A dashboard for tracking DeFi portfolio positions and on-chain activity in real time.',
      tags: ['React', 'Ethers.js', 'Supabase'],
      demo: '#',
      github: '#',
      image: null,
    },
    {
      number: '03',
      title: 'Protocol Docs',
      desc: 'Comprehensive developer documentation for a DeFi protocol — covering architecture, SDK references and integration guides.',
      tags: ['Technical Writing', 'Docusaurus'],
      demo: '#',
      github: '#',
      isWriting: true,
    },
  ];

  return (
    <section id="projects" className="px-6 md:px-24 py-20 md:py-32">
      <div style={{maxWidth: '1100px', margin: '0 auto'}}>

        <p className="text-[#8899aa] text-xs uppercase tracking-widest mb-4">Work</p>
        <h2 style={{fontFamily: 'var(--font-syne)', fontWeight: 800}} className="text-4xl md:text-5xl text-[#f0f4ff] tracking-tight mb-12 md:mb-16">
          Things I've Built.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div key={project.number} style={{background: 'var(--surface)', border: '1px solid var(--border)'}} className="rounded-2xl overflow-hidden hover:border-[#1e6fff] transition-all duration-300">

              <div style={{background: 'var(--bg)', height: '220px'}} className="w-full flex items-center justify-center border-b border-[#1a2a4a]">
                <span style={{fontFamily: 'var(--font-syne)'}} className="text-[#1a2a4a] text-6xl font-extrabold">
                  {project.number}
                </span>
              </div>

              <div className="p-8 flex flex-col gap-4">
                <h3 style={{fontFamily: 'var(--font-syne)', fontWeight: 700}} className="text-2xl text-[#f0f4ff]">
                  {project.title}
                </h3>
                <p className="text-[#8899aa] text-sm leading-relaxed">
                  {project.desc}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} style={{background: 'var(--border)', color: 'var(--accent2)'}} className="text-xs px-3 py-1 rounded-full tracking-widest">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-4 mt-2">
                  <a href={project.github} style={{border: '1px solid var(--border)'}} className="flex items-center gap-2 text-[#8899aa] text-xs uppercase tracking-widest px-5 py-2 rounded-full hover:border-[#1e6fff] hover:text-[#1e6fff] transition-all no-underline">
                    <FiGithub size={14} />
                    View Project
                  </a>
                  <a href={project.demo} className="flex items-center gap-2 bg-[#1e6fff] text-white text-xs uppercase tracking-widest px-5 py-2 rounded-full hover:opacity-80 transition-opacity no-underline">
                    <FiExternalLink size={14} />
                    Live Demo
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}