import React from 'react';
import { Code2, Database, GitBranch, Brain, Smartphone, Layers, Boxes } from 'lucide-react';
import { motion } from 'framer-motion';

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
        <motion.h2
          className="text-center font-manrope text-3xl font-semibold tracking-tight md:text-4xl"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
        >
          Skills
        </motion.h2>
        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7">
          {skills.map(({ name, icon: Icon }, i) => (
            <motion.div
              key={name}
              className="group relative flex flex-col items-center rounded-2xl border border-white/10 bg-white/[0.06] p-4 text-center shadow-[0_0_0_1px_rgba(255,255,255,0.02)] transition hover:border-cyan-400/30 hover:bg-white/[0.08]"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: 0.05 * i, duration: 0.5 }}
              whileHover={{ y: -4 }}
            >
              <div className="rounded-xl bg-cyan-400/10 p-3 ring-1 ring-white/10 transition group-hover:ring-cyan-400/30">
                <Icon className="h-6 w-6 text-cyan-300" />
              </div>
              <span className="mt-2 text-sm text-white/80">{name}</span>
              <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 ring-1 ring-cyan-400/30 transition group-hover:opacity-100" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
