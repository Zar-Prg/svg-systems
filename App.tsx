import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import Testimonials from './components/Testimonials';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-cyber-950 text-slate-200 selection:bg-cyber-500 selection:text-cyber-950">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Experience />
        <Testimonials />
        <Certifications />
        <Skills />
      </main>
      <Contact />
    </div>
  );
}

export default App;