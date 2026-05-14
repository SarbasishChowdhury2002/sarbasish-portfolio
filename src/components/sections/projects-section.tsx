"use client";

import Link from "next/link";

import { Reveal } from "@/components/animations/reveal";

import { projects } from "@/data/projects";

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="relative py-32"
    >
      <div className="container-width px-6">
        {/* Heading */}
        <Reveal className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">
            Projects
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
            Selected engineering and
            <span className="block text-zinc-500">
              research-driven projects.
            </span>
          </h2>

          <p className="mt-8 text-lg leading-8 text-zinc-400">
            A collection of AI, cybersecurity, distributed systems, and
            full-stack engineering projects focused on scalability,
            trustworthiness, and intelligent system design.
          </p>
        </Reveal>

        {/* Projects Grid */}
        <div className="mt-20 grid gap-8 lg:grid-cols-2">
          {projects.map((project, index) => (
            <Link 
              key={project.slug}
              href={`/projects/${project.slug}`}>
            <Reveal
              delay={index * 0.1}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur transition-all duration-500 hover:-translate-y-2 hover:border-white/20 hover:bg-white/[0.07]"
            >
              {/* Hover Glow */}
              <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
                <div className="absolute -left-10 top-0 h-40 w-40 rounded-full bg-white/10 blur-3xl" />
              </div>

              {/* Category */}
              <div className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs uppercase tracking-[0.2em] text-zinc-400">
                {project.category}
              </div>

              {/* Title */}
              <h3 className="mt-6 text-3xl font-semibold tracking-tight">
                {project.title}
              </h3>

              {/* Description */}
              <p className="mt-4 leading-7 text-zinc-400">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="mt-8 flex flex-wrap gap-3">
                {project.tech.map((tech) => (
                  <div
                    key={tech}
                    className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-300 transition duration-300 hover:border-white/20 hover:bg-white/10"
                  >
                    {tech}
                  </div>
                ))}
              </div>
            </Reveal>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}