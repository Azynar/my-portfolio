'use client';

import { useState } from 'react';
import { FiGithub, FiTwitter, FiLinkedin, FiMail } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

const socials = [
  { icon: <FiTwitter size={18} />, label: 'Twitter', handle: '@yourhandle', href: 'https://twitter.com/yourhandle' },
  { icon: <FiLinkedin size={18} />, label: 'LinkedIn', handle: 'linkedin.com/in/yourname', href: 'https://linkedin.com/in/yourname' },
  { icon: <FiGithub size={18} />, label: 'GitHub', handle: 'github.com/Azynar', href: 'https://github.com/Azynar' },
  { icon: <FaWhatsapp size={18} />, label: 'WhatsApp', handle: 'Chat directly', href: 'https://wa.me/yournumber' },
  { icon: <FiMail size={18} />, label: 'Email', handle: 'youremail@gmail.com', href: 'mailto:youremail@gmail.com' },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contact" className="px-24 py-32">
      <div style={{maxWidth: '1100px', margin: '0 auto'}}>

        <p className="text-[#8899aa] text-xs uppercase tracking-widest mb-4">Contact</p>
        <h2 style={{fontFamily: 'var(--font-syne)', fontWeight: 800}} className="text-5xl text-[#f0f4ff] tracking-tight mb-16">
          Get In Touch.
        </h2>

        <div className="grid grid-cols-2 gap-24">

          <div className="flex flex-col gap-8">
            <p style={{fontFamily: 'var(--font-syne)', fontWeight: 700}} className="text-2xl text-[#f0f4ff]">
              Got a project in mind?
            </p>
            <p className="text-[#8899aa] text-sm leading-relaxed">
              Whether you need a Web3 landing page, smart contract development,
              or clear technical writing for your protocol — I'm open to
              freelance projects. Let's talk.
            </p>
            <div className="flex flex-col gap-4">
              {socials.map((social) => (
                <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" style={{border: '1px solid var(--border)'}} className="flex items-center gap-4 px-5 py-3 rounded-xl hover:border-[#1e6fff] hover:bg-[#1e6fff]/5 hover:translate-x-2 transition-all duration-300 no-underline group">
                <span style={{color: 'var(--accent)'}} className="group-hover:scale-110 transition-transform duration-300">
                  {social.icon}
                </span>
                <div className="flex flex-col">
                  <span style={{fontFamily: 'var(--font-syne)', fontWeight: 700}} className="text-[#f0f4ff] text-xs uppercase tracking-widest">
                    {social.label}
                  </span>
                  <span className="text-[#8899aa] text-xs group-hover:text-[#1e6fff] transition-colors duration-300">
                    {social.handle}
                  </span>
                </div>
              </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <label className="text-[#8899aa] text-xs uppercase tracking-widest">Full Name</label>
              <input type="text" placeholder="Full Name" style={{background: 'var(--surface)', border: '1px solid var(--border)', color: 'var(--text)'}} className="px-4 py-3 rounded-xl text-sm outline-none focus:border-[#1e6fff] transition-colors" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[#8899aa] text-xs uppercase tracking-widest">Email</label>
              <input type="email" placeholder="you@example.com" style={{background: 'var(--surface)', border: '1px solid var(--border)', color: 'var(--text)'}} className="px-4 py-3 rounded-xl text-sm outline-none focus:border-[#1e6fff] transition-colors" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[#8899aa] text-xs uppercase tracking-widest">Message</label>
              <textarea placeholder="Hi Azynar! I came across your portfolio and I'd love to work with you. Could we talk about a project?" style={{background: 'var(--surface)', border: '1px solid var(--border)', color: 'var(--text)', resize: 'none'}} className="px-4 py-3 rounded-xl text-sm outline-none focus:border-[#1e6fff] transition-colors h-36" />
            </div>
            <button
              onClick={() => alert('Email sending coming soon! Reach me directly via WhatsApp or socials for now.')}
              style={{background: 'var(--accent)', fontFamily: 'var(--font-syne)', fontWeight: 700}}
              className="w-full py-3 rounded-xl text-white text-sm uppercase tracking-widest hover:opacity-80 transition-all"
            >
               Send Message →
            </button>
            <a 
              href={`https://wa.me/yournumber?text=Hi%20Azynar!%20I%20came%20across%20your%20portfolio%20and%20I%27d%20love%20to%20work%20with%20you.%20Could%20we%20talk%20about%20a%20project%3F`}
              target="_blank"
              rel="noopener noreferrer"
              style={{border: '1px solid var(--border)', fontFamily: 'var(--font-syne)', fontWeight: 700}} 
              className="w-full py-3 rounded-xl text-[#8899aa] text-sm uppercase tracking-widest hover:border-[#1e6fff] hover:text-[#1e6fff] transition-all no-underline text-center"
            >
              Chat on WhatsApp
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}