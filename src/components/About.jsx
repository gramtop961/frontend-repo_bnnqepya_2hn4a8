import React from 'react';

const About = () => {
  return (
    <section id="about" className="relative w-full bg-[#0b0f14] px-6 py-20 text-white">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-center font-manrope text-3xl font-semibold tracking-tight md:text-4xl">About</h2>
        <p className="mx-auto mt-6 max-w-3xl text-center text-white/70">
          Third-year Computer Science student specializing in AI & ML. Passionate about developing real-world Android apps using Kotlin and Firebase, combining technical skills with design thinking to create meaningful digital experiences.
        </p>
        <div className="mx-auto mt-10 grid max-w-4xl grid-cols-1 gap-4 md:grid-cols-3">
          <div className="rounded-xl border border-white/10 bg-white/5 p-4">
            <p className="text-sm text-white/70">Kotlin-first mindset for clean, scalable mobile codebases.</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-4">
            <p className="text-sm text-white/70">Firebase for auth, realtime data, analytics and storage.</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-4">
            <p className="text-sm text-white/70">Design thinking with a focus on intuitive, user-first flows.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
