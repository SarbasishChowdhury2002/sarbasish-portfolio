"use client";

import { Reveal } from "@/components/animations/reveal";

import { skills } from "@/data/skills";

export function SkillsSection() {
  return (
    <section
      id="skills"
      className="relative py-32"
    >
      <div className="container-width px-6">
        {/* Heading */}
        <Reveal
          className="max-w-3xl"
        >
          <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">
            Skills
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
            Technologies and engineering
            <span className="block text-zinc-500">
              expertise across domains.
            </span>
          </h2>

          <p className="mt-8 text-lg leading-8 text-zinc-400">
            A strong engineering foundation spanning artificial intelligence,
            cybersecurity, distributed systems, and modern full-stack
            development.
          </p>
        </Reveal>

        {/* Skills Grid */}
        <div className="mt-20 grid gap-8 md:grid-cols-2">
          {skills.map((skillGroup, index) => (
            <Reveal
              key={skillGroup.category}
              delay={index * 0.1}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur"
            >
              <h3 className="text-2xl font-semibold">
                {skillGroup.category}
              </h3>

              <div className="mt-6 flex flex-wrap gap-3">
                {skillGroup.items.map((item) => (
                  <div
                    key={item}
                    className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-300 transition duration-300 hover:border-white/20 hover:bg-white/10"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}