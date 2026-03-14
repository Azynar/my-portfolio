'use client';

import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-6 px-4 py-2 rounded-full transition-all duration-300 border border-white/10 backdrop-blur-xl bg-white/5 shadow-lg shadow-black/20`}>

<a href="#hero" className="flex-shrink-0">
  <div className="w-9 h-9 rounded-full overflow-hidden border-2 border-[#1e6fff] cursor-pointer hover:opacity-80 transition-opacity">
    <img src="/avatar.png" alt="Azynar" className="w-full h-full object-cover" />
  </div>
</a>

      <div className="w-px h-5 bg-[#1a2a4a]"></div>

      <ul className="flex items-center gap-6 list-none">
        <li><a href="#about" className="text-[#8899aa] text-xs uppercase tracking-widest hover:text-[#1e6fff] transition-colors duration-200 no-underline">About</a></li>
        <li><a href="#projects" className="text-[#8899aa] text-xs uppercase tracking-widest hover:text-[#1e6fff] transition-colors duration-200 no-underline">Projects</a></li>
        <li><a href="#skills" className="text-[#8899aa] text-xs uppercase tracking-widest hover:text-[#1e6fff] transition-colors duration-200 no-underline">Skills</a></li>
        <li><a href="#contact" className="text-[#8899aa] text-xs uppercase tracking-widest hover:text-[#1e6fff] transition-colors duration-200 no-underline">Contact</a></li>
      </ul>

      <div className="w-px h-5 bg-[#1a2a4a]"></div>

      <a href="/blog" className="bg-[#1e6fff] text-white text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full hover:opacity-80 transition-opacity no-underline">
        Blog
      </a>

    </nav>
  );
}