import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Work from './components/Work';

function App() {
  return (
    <div className="min-h-screen w-full bg-[#0b0f14] text-white">
      <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#0b0f14]/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
          <a href="#home" className="font-manrope text-lg font-semibold tracking-tight">Sagar</a>
          <nav className="hidden gap-6 text-sm text-white/70 md:flex">
            <a className="hover:text-white" href="#about">About</a>
            <a className="hover:text-white" href="#skills">Skills</a>
            <a className="hover:text-white" href="#work">Projects</a>
            <a className="hover:text-white" href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <About />
        <Skills />
        <Work />
      </main>

      <footer className="border-t border-white/10 bg-[#0b0f14] px-6 py-6 text-center text-xs text-white/50">
        © {new Date().getFullYear()} Sagar — Built with love for Android, Kotlin & Firebase
      </footer>
    </div>
  );
}

export default App;
