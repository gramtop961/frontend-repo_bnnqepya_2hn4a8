import React from 'react';
import { ExternalLink, Award } from 'lucide-react';

const projects = [
  {
    title: 'CitySudhaar',
    description:
      'Civic issue reporting app with Firebase backend, image upload, live issue tracking, and analytics.',
    link: '#',
  },
  {
    title: 'MyBlogs',
    description:
      'Blogging app built with Kotlin + Firebase Realtime Database + SharedPreferences for session handling.',
    link: '#',
  },
  {
    title: 'SpaceHub',
    description: 'Interactive space exploration project (NSD 2024 winner).',
    link: '#',
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
        <h2 className="text-center font-manrope text-3xl font-semibold tracking-tight md:text-4xl">Projects</h2>
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {projects.map((p) => (
            <div key={p.title} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.03] p-5">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(34,211,238,0.15),transparent_60%)] opacity-0 transition-opacity group-hover:opacity-100" />
              <h3 className="relative z-10 font-manrope text-xl font-semibold text-white">{p.title}</h3>
              <p className="relative z-10 mt-2 text-sm text-white/70">{p.description}</p>
              <a
                href={p.link}
                className="relative z-10 mt-4 inline-flex items-center gap-2 text-sm text-cyan-300 hover:text-cyan-200"
                target="_blank"
                rel="noreferrer"
              >
                View details <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <h2 className="text-center font-manrope text-3xl font-semibold tracking-tight md:text-4xl">Achievements</h2>
          <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
            {achievements.map((a) => (
              <div key={a.title} className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-4">
                <div className="rounded-lg bg-cyan-400/10 p-2">
                  <Award className="h-5 w-5 text-cyan-300" />
                </div>
                <div>
                  <p className="font-medium text-white">{a.title}</p>
                  <p className="text-sm text-white/70">{a.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div id="contact" className="mt-16 rounded-2xl border border-white/10 bg-white/5 p-6">
          <h3 className="font-manrope text-2xl font-semibold">Contact</h3>
          <p className="mt-2 text-white/70">Email: <a className="text-cyan-300 hover:text-cyan-200" href="mailto:sagark94165@gmail.com">sagark94165@gmail.com</a></p>
        </div>
      </div>
    </section>
  );
};

export default Work;
