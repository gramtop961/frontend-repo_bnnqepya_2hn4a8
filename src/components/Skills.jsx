import React from 'react';
import { Code2, Database, GitBranch, Brain, Smartphone, Layers, Boxes } from 'lucide-react';

const skills = [
  { name: 'Kotlin', icon: Code2 },
  { name: 'C/C++', icon: Boxes },
  { name: 'Firebase', icon: Database },
  { name: 'Git', icon: GitBranch },
  { name: 'Android Studio', icon: Smartphone },
  { name: 'OOP', icon: Layers },
  { name: 'DSA', icon: Brain },
];

const Skills = () => {
  return (
    <section id="skills" className="w-full bg-[#0b0f14] px-6 py-20 text-white">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center font-manrope text-3xl font-semibold tracking-tight md:text-4xl">Skills</h2>
        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7">
          {skills.map(({ name, icon: Icon }) => (
            <div key={name} className="group flex flex-col items-center rounded-xl border border-white/10 bg-white/5 p-4 text-center transition hover:border-cyan-400/40 hover:bg-white/10">
              <Icon className="h-6 w-6 text-cyan-300 transition group-hover:text-cyan-200" />
              <span className="mt-2 text-sm text-white/80">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
