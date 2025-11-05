import React from 'react';
import { motion } from 'framer-motion';

const items = [
  'Kotlin-first mindset for clean, scalable mobile codebases.',
  'Firebase for auth, realtime data, analytics and storage.',
  'Design thinking with a focus on intuitive, user-first flows.',
];

const About = () => {
  return (
    <section id="about" className="relative w-full bg-[#0b0f14] px-6 py-20 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(34,211,238,0.08),transparent_60%)]" />
      <div className="relative mx-auto max-w-5xl">
        <motion.h2
          className="text-center font-manrope text-3xl font-semibold tracking-tight md:text-4xl"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
        >
          About
        </motion.h2>
        <motion.p
          className="mx-auto mt-6 max-w-3xl text-center text-white/70"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ delay: 0.15, duration: 0.6 }}
        >
          Third-year Computer Science student specializing in AI & ML. Passionate about developing real-world Android apps using Kotlin and Firebase, combining technical skills with design thinking to create meaningful digital experiences.
        </motion.p>
        <div className="mx-auto mt-10 grid max-w-4xl grid-cols-1 gap-4 md:grid-cols-3">
          {items.map((text, i) => (
            <motion.div
              key={text}
              className="rounded-2xl border border-white/10 bg-white/[0.06] p-4 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] backdrop-blur-sm transition hover:border-cyan-400/30 hover:bg-white/[0.08]"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.1 * i, duration: 0.55 }}
            >
              <p className="text-sm text-white/75">{text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
