import Link from "next/link";

import Image from "next/image";

import { notFound } from "next/navigation";

import { projectDetails } from "@/data/project-details";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ProjectPage({
  params,
}: ProjectPageProps) {
  const { slug } = await params;
  const project = projectDetails.find(
    (item) => item.slug === slug
  );

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-black text-white">
      <section className="container-width px-6 py-32">
        {/* Category */}
        <div className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm uppercase tracking-[0.2em] text-zinc-400">
          {project.category}
        </div>

        <div className="mt-4 inline-flex rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-2 text-sm text-emerald-400">
        {project.status}
        </div>

        {/* Title */}
        <h1 className="mt-8 text-5xl font-bold tracking-tight md:text-7xl">
          {project.title}
        </h1>

        {/* Description */}
        <p className="mt-8 max-w-3xl text-xl leading-9 text-zinc-400">
          {project.description}
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
        <Link
            href={project.github}
            target="_blank"
            className="rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm text-white transition hover:bg-white/10"
        >
            View GitHub
        </Link>

        <Link
            href={project.demo}
            target="_blank"
            className="rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm text-white transition hover:bg-white/10"
        >
            Live Demo
        </Link>
        </div>

        <div className="mt-20 overflow-hidden rounded-[2rem] border border-white/10">
        <Image
            src={project.image}
            alt={project.title}
            width={1600}
            height={900}
            className="h-auto w-full object-cover"
            priority
        />
        </div>

        {/* Overview */}
        <div className="mt-24 max-w-4xl">
          <h2 className="text-3xl font-semibold">
            Project Overview
          </h2>

          <p className="mt-6 leading-8 text-zinc-400">
            {project.overview}
          </p>
        </div>

        {/* Features */}
        <div className="mt-24">
          <h2 className="text-3xl font-semibold">
            Key Features
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {project.features.map((feature) => (
              <div
                key={feature}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 text-zinc-300"
              >
                {feature}
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack */}
        <div className="mt-24">
          <h2 className="text-3xl font-semibold">
            Technology Stack
          </h2>

          <div className="mt-8 flex flex-wrap gap-4">
            {project.tech.map((tech) => (
              <div
                key={tech}
                className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-zinc-300"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>

        {/* Challenges */}
        <div className="mt-24 max-w-4xl">
          <h2 className="text-3xl font-semibold">
            Engineering Challenges
          </h2>

          <p className="mt-6 leading-8 text-zinc-400">
            {project.challenges}
          </p>
        </div>

        {/* Outcome */}
        <div className="mt-24 max-w-4xl">
          <h2 className="text-3xl font-semibold">
            Outcome
          </h2>

          <p className="mt-6 leading-8 text-zinc-400">
            {project.outcome}
          </p>
        </div>
      </section>
    </main>
  );
}