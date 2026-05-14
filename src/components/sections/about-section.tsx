"use client";

import { Reveal } from "@/components/animations/reveal";

const expertise = [
  {
    title: "Artificial Intelligence",
    description:
      "Building trustworthy AI systems with focus on NLP, explainable AI, and intelligent automation.",
  },
  {
    title: "Cybersecurity",
    description:
      "Exploring secure architectures, cryptography, database security, and secure distributed systems.",
  },
  {
    title: "Full Stack Engineering",
    description:
      "Designing scalable web applications using modern frontend and backend technologies.",
  },
  {
    title: "Distributed Systems",
    description:
      "Working on fog computing, scalable infrastructure, and efficient system-level optimization.",
  },
];

export function AboutSection() {
  return (
    <section
      id="about"
      className="relative py-32"
    >
      <div className="container-width px-6">
        {/* Section Heading */}
        <Reveal>
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">
              About
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
              Engineering intelligent systems
              <span className="block text-zinc-500">
                with security and scalability.
              </span>
            </h2>

            <p className="mt-8 text-lg leading-8 text-zinc-400">
              I am an MTech CSE student at NITK Surathkal passionate about
              building trustworthy AI systems, secure architectures, and scalable
              intelligent applications. My interests span artificial intelligence,
              cybersecurity, distributed systems, and full-stack engineering.
            </p>
          </div>
        </Reveal>

        {/* Expertise Grid */}
        <div className="mt-20 grid gap-6 md:grid-cols-2">
          {expertise.map((item, index) => (
            <Reveal
              key={item.title}
              delay={index * 0.1}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur"
            >
              <h3 className="text-2xl font-semibold">
                {item.title}
              </h3>

              <p className="mt-4 leading-7 text-zinc-400">
                {item.description}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}