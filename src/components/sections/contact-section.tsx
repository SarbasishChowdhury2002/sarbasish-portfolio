"use client";

import { Reveal } from "@/components/animations/reveal";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="relative py-32"
    >
      <div className="container-width px-6">
        <Reveal
          className="rounded-[2rem] border border-white/10 bg-white/5 p-10 text-center backdrop-blur md:p-16"
        >
          {/* Heading */}
          <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">
            Contact
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-6xl">
            Let’s build something
            <span className="block text-zinc-500">
              impactful together.
            </span>
          </h2>

          {/* Description */}
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-zinc-400">
            Interested in AI systems, cybersecurity, scalable engineering,
            research collaborations, or innovative projects? Let’s connect.
          </p>

          {/* Email */}
          <div className="mt-10">
            <a
              href="mailto:chowdhurysarbasish10@gmail.com"
              className="inline-flex rounded-full border border-white/10 bg-white/5 px-8 py-4 text-base text-white transition hover:bg-white/10"
            >
              chowdhurysarbasish10@gmail.com
            </a>
          </div>

          {/* Social Links */}
          <div className="mt-10 flex items-center justify-center gap-6">
            <a
              href="https://github.com/SarbasishChowdhury2002"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-500 transition duration-300 hover:scale-110 hover:text-white"
            >
              <FaGithub size={24} />
            </a>

            <a
              href="https://www.linkedin.com/in/sarbasish-chowdhury-5bb06425a/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-500 transition duration-300 hover:scale-110 hover:text-white"
            >
              <FaLinkedin size={24} />
            </a>

            <a
              href="mailto:chowdhurysarbasish10@gmail.com"
              className="text-zinc-500 transition duration-300 hover:scale-110 hover:text-white"
            >
              <MdEmail size={24} />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}