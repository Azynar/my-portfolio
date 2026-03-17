'use client';

import { useState, useEffect } from 'react';

function scrollToSection(id) {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}

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
    <nav className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 flex items-center justify-between gap-4 px-4 py-2 rounded-full transition-all duration-300 border border-white/10 backdrop-blur-xl bg-white/5 shadow-lg shadow-black/20`}>

      <a href="#hero" onClick={(e) => { e.preventDefault(); scrollToSection('hero'); }} className="flex-shrink-0">
        <div className="w-9 h-9 rounded-full overflow-hidden border-2 border-[#1e6fff] cursor-pointer hover:opacity-80 transition-opacity">
          <img src="/avatar.png" alt="Azynar" className="w-full h-full object-cover" />
        </div>
      </a>

      <div className="hidden md:block w-px h-5 bg-[#1a2a4a]"></div>

      <ul className="hidden md:flex items-center gap-6 list-none">
        <li><button onClick={() => scrollToSection('about')} className="text-[#8899aa] text-xs uppercase tracking-widest hover:text-[#1e6fff] transition-colors duration-200 bg-transparent border-none cursor-pointer">About</button></li>
        <li><button onClick={() => scrollToSection('projects')} className="text-[#8899aa] text-xs uppercase tracking-widest hover:text-[#1e6fff] transition-colors duration-200 bg-transparent border-none cursor-pointer">Projects</button></li>
        <li><button onClick={() => scrollToSection('skills')} className="text-[#8899aa] text-xs uppercase tracking-widest hover:text-[#1e6fff] transition-colors duration-200 bg-transparent border-none cursor-pointer">Skills</button></li>
        <li><button onClick={() => scrollToSection('contact')} className="text-[#8899aa] text-xs uppercase tracking-widest hover:text-[#1e6fff] transition-colors duration-200 bg-transparent border-none cursor-pointer">Contact</button></li>
      </ul>

      <div className="hidden md:block w-px h-5 bg-[#1a2a4a]"></div>

      <a href="/blog" className="bg-[#1e6fff] text-white text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full hover:opacity-80 transition-opacity no-underline">
        Blog
      </a>

    </nav>
  );
}