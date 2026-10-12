import Hero from './components/Hero';
import About from './components/About';
import ProblemSection from './components/ProblemSection';
import Projects from './components/Projects';
import TechStack from './components/TechStack';
import Services from './components/Services';
import Writing from './components/Writing';
import Process from './components/Process';
import CTAStrip from './components/CTAStrip';
import Contact from './components/Contact';
import Preloader from './components/Preloader';

export const metadata = {
  title: 'AZYNAR | Badmus Abdulazeem Babatunde — Web Developer',
  description:
    'Official portfolio of Badmus Abdulazeem Babatunde, the developer behind AZYNAR. Explore websites, web applications, business systems, and selected projects.',
};

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--bg)]">
      <Preloader />
      <Hero />
      <About />
      <ProblemSection />
      <Projects />
      <TechStack />
      <Services />
      <Writing />
      <Process />
      <CTAStrip />
      <Contact />
    </main>
  );
}