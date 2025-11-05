import React from 'react';
import Spline from '@splinetool/react-spline';
import { Github, Linkedin, Download } from 'lucide-react';
import { motion } from 'framer-motion';

const buttons = [
  { label: 'GitHub', href: '#', icon: Github },
  { label: 'LinkedIn', href: '#', icon: Linkedin },
  { label: 'Download Resume', href: '#', icon: Download },
];

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[92vh] w-full overflow-hidden bg-[#0b0f14] text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0b0f14]/40 via-[#0b0f14]/70 to-[#0b0f14]" />
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col items-center px-6 pt-24 md:flex-row md:items-end md:gap-16 md:pt-28">
        <motion.div
          className="z-10 w-full text-center md:text-left"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <motion.span
            className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-sm text-cyan-300 ring-1 ring-white/10"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Android Developer
            <span className="h-1 w-1 rounded-full bg-cyan-300"></span>
            Kotlin • Firebase
          </motion.span>
          <motion.h1
            className="font-manrope text-4xl font-semibold tracking-tight md:text-6xl"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Sagar
          </motion.h1>
          <motion.p
            className="mt-3 max-w-2xl text-base text-white/75 md:text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.45, duration: 0.6 }}
          >
            Building thoughtful Android experiences with modern Kotlin, clean architecture, and Firebase-driven features.
          </motion.p>

          <motion.div
            className="mt-8 flex flex-wrap items-center justify-center gap-3 md:justify-start"
            initial="hidden"
            animate="show"
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.08 } },
            }}
          >
            {buttons.map(({ label, href, icon: Icon }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                whileHover={{ y: -2, scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                className="group inline-flex items-center gap-2 rounded-lg bg-white/10 px-4 py-2 text-sm text-white shadow-sm backdrop-blur transition hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-cyan-400/60"
              >
                <Icon className="h-5 w-5 text-cyan-300 transition group-hover:text-cyan-200" />
                <span>{label}</span>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#0b0f14]" />
    </section>
  );
};

export default Hero;
