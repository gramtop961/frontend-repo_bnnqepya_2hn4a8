import React from 'react';
import Spline from '@splinetool/react-spline';
import { Github, Linkedin, Download } from 'lucide-react';

const Hero = () => {
  const buttons = [
    {
      label: 'GitHub',
      href: '#',
      icon: <Github className="h-5 w-5" />,
    },
    {
      label: 'LinkedIn',
      href: '#',
      icon: <Linkedin className="h-5 w-5" />,
    },
    {
      label: 'Download Resume',
      href: '#',
      icon: <Download className="h-5 w-5" />,
    },
  ];

  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden bg-[#0b0f14] text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/qQUip0dJPqrrPryE/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0b0f14]/60 via-[#0b0f14]/80 to-[#0b0f14]" />
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col items-center px-6 pt-24 md:flex-row md:items-end md:gap-16 md:pt-28">
        <div className="z-10 w-full text-center md:text-left">
          <p className="mb-3 inline-block rounded-full bg-white/5 px-3 py-1 text-sm text-cyan-300 ring-1 ring-white/10">Android Developer</p>
          <h1 className="font-manrope text-4xl font-semibold tracking-tight md:text-6xl">Sagar</h1>
          <p className="mt-3 max-w-2xl text-base text-white/70 md:text-lg">
            Android Developer | Kotlin Enthusiast | Firebase Learner
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 md:justify-start">
            {buttons.map((b) => (
              <a
                key={b.label}
                href={b.href}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 rounded-lg bg-white/10 px-4 py-2 text-sm text-white backdrop-blur transition hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-cyan-400/60"
              >
                {b.icon}
                <span>{b.label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#0b0f14]" />
    </section>
  );
};

export default Hero;
