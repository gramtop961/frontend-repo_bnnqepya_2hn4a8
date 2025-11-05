import React from 'react';
import { Rocket, User, Wrench, FolderOpen, Mail } from 'lucide-react';

const links = [
  { id: 'home', label: 'Home', icon: Rocket },
  { id: 'about', label: 'About', icon: User },
  { id: 'skills', label: 'Skills', icon: Wrench },
  { id: 'work', label: 'Projects', icon: FolderOpen },
  { id: 'contact', label: 'Contact', icon: Mail },
];

function scrollToId(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#0b0f14]/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <button
          className="inline-flex items-center gap-2 rounded-lg bg-white/5 px-3 py-1.5 text-sm font-semibold text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-400/50"
          onClick={() => scrollToId('home')}
        >
          <span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-cyan-400/10">
            <Rocket className="h-3.5 w-3.5 text-cyan-300" />
          </span>
          Sagar
        </button>
        <nav className="hidden items-center gap-1 md:flex">
          {links.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => scrollToId(id)}
              className="group inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-white/70 transition hover:bg-white/5 hover:text-white focus:outline-none focus:ring-2 focus:ring-cyan-400/40"
            >
              <Icon className="h-4 w-4 text-white/60 group-hover:text-cyan-300" />
              <span>{label}</span>
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
