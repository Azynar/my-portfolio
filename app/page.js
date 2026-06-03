import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Stats from './components/Stats';
import Services from './components/Services';
import Projects from './components/Projects';
import Writing from './components/Writing';
import Process from './components/Process';
import CTAStrip from './components/CTAStrip';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Preloader from './components/Preloader';

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--bg)]">
      <Preloader />
      <Navbar />
      <Hero />
      <About />
      <Stats />
      <Services />
      <Projects />
      {/* <Writing /> */}
      <Process />
      <CTAStrip />
      <Contact />
      <Footer />
    </main>
  );
}