import React from 'react';
import { ExternalLink, Award } from 'lucide-react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'CitySudhaar',
    description:
      'Civic issue reporting app with Firebase backend, image upload, live issue tracking, and analytics.',
    link: '#',
    tags: ['Kotlin', 'Firebase', 'MVVM'],
  },
  {
    title: 'MyBlogs',
    description:
      'Blogging app built with Kotlin + Firebase Realtime Database + SharedPreferences for session handling.',
    link: '#',
    tags: ['Kotlin', 'Realtime DB'],
  },
  {
    title: 'SpaceHub',
    description: 'Interactive space exploration project (NSD 2024 winner).',
    link: '#',
    tags: ['AR/VR', 'UI'],
  },
];

const achievements = [
  {
    title: 'Smart India Hackathon 2024',
    detail: 'Led team VitalVizAR, developed MEDMIND (AR/VR medical website).',
  },
  {
    title: 'National Science Day 2024',
    detail: '1st place for SpaceHub project.',
  },
];

const Work = () => {
  return (
    <section id="work" className="w-full bg-[#0b0f14] px-6 py-20 text-white">
      <div className="mx-auto max-w-6xl">
        <motion.h2
          className="text-center font-manrope text-3xl font-semibold tracking-tight md:text-4xl"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
        >
          Projects
        </motion.h2>
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {projects.map((p, i) => (
            <motion.a
              key={p.title}
              href={p.link}
              target="_blank"
              rel="noreferrer"
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.07] to-white/[0.04] p-5 shadow-[0_0_0_1px_rgba(255,255,255,0.03)] transition"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.08 * i, duration: 0.55 }}
              whileHover={{ y: -6, scale: 1.01 }}
            >
              <div className="absolute inset-0 bg-[radial-gradient(200px_120px_at_top_right,rgba(34,211,238,0.18),transparent)] opacity-0 transition-opacity group-hover:opacity-100" />
              <h3 className="relative z-10 font-manrope text-xl font-semibold text-white">{p.title}</h3>
              <p className="relative z-10 mt-2 text-sm text-white/70">{p.description}</p>
              <div className="relative z-10 mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="rounded-full bg-cyan-400/10 px-2 py-0.5 text-xs text-cyan-200 ring-1 ring-cyan-400/20">{t}</span>
                ))}
              </div>
              <div className="relative z-10 mt-4 inline-flex items-center gap-2 text-sm text-cyan-300 group-hover:text-cyan-200">
                View details <ExternalLink className="h-4 w-4" />
              </div>
            </motion.a>
          ))}
        </div>

        <div className="mt-16">
          <motion.h2
            className="text-center font-manrope text-3xl font-semibold tracking-tight md:text-4xl"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
          >
            Achievements
          </motion.h2>
          <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
            {achievements.map((a, i) => (
              <motion.div
                key={a.title}
                className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.06] p-4 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] backdrop-blur-sm"
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: 0.08 * i, duration: 0.5 }}
              >
                <div className="rounded-lg bg-cyan-400/10 p-2 ring-1 ring-white/10">
                  <Award className="h-5 w-5 text-cyan-300" />
                </div>
                <div>
                  <p className="font-medium text-white">{a.title}</p>
                  <p className="text-sm text-white/70">{a.detail}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          id="contact"
          className="mt-16 rounded-2xl border border-white/10 bg-white/[0.06] p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.02)]"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.55 }}
        >
          <h3 className="font-manrope text-2xl font-semibold">Contact</h3>
          <p className="mt-2 text-white/70">
            Email: <a className="text-cyan-300 hover:text-cyan-200" href="mailto:sagark94165@gmail.com">sagark94165@gmail.com</a>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Work;
