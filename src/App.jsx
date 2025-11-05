import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Work from './components/Work';

function App() {
  return (
    <div className="min-h-screen w-full bg-[#0b0f14] text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Work />
      </main>
      <footer className="border-t border-white/10 bg-[#0b0f14] px-6 py-6 text-center text-xs text-white/50">
        © {new Date().getFullYear()} Sagar — Built with Kotlin, Firebase, and care
      </footer>
    </div>
  );
}

export default App;
