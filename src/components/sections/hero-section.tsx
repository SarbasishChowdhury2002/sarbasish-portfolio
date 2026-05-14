"use client";

import { motion } from "framer-motion";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import { Button } from "@/components/ui/button";

import { Magnetic } from "@/components/animations/magnetic";

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* Main Glow */}
        <motion.div
          animate={{
            x: [0, 40, -30, 0],
            y: [0, -30, 20, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-1/2 top-1/2 h-[550px] w-[550px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/5 blur-3xl"
        />

        {/* Secondary Glow */}
        <motion.div
          animate={{
            x: [0, -20, 30, 0],
            y: [0, 20, -20, 0],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-1/2 top-1/2 h-[350px] w-[350px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-zinc-400/10 blur-3xl"
        />

        {/* Radial Fade */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20" />
      </div>

      {/* Hero Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mx-auto max-w-4xl text-center"
      >
        {/* Availability */}
        <div className="mb-6 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-300 backdrop-blur">
          AI • Security • Systems Engineering
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
          Building Intelligent
          <span className="block bg-gradient-to-b from-zinc-200 to-zinc-600 bg-clip-text text-transparent">
            Secure Systems
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mx-auto mt-8 max-w-2xl text-base leading-7 text-zinc-400 sm:text-lg">
          MTech CSE student at NITK Surathkal focused on trustworthy AI,
          cybersecurity, distributed systems, and scalable full-stack
          engineering.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Magnetic>
          <a href="#projects">
            <Button
              size="lg"
              className="rounded-full px-8 text-base"
            >
              View Projects
            </Button>
          </a>
          </Magnetic>

          <Magnetic>
          <a
            href="#"
            download
          >
            <Button
              variant="outline"
              size="lg"
              className="rounded-full border-white/10 bg-white/5 px-8 text-base text-white backdrop-blur hover:bg-white/10"
            >
              Download Resume
            </Button>
          </a>
          </Magnetic>
        </div>

        {/* Social Links */}
        <div className="mt-10 flex items-center justify-center gap-6">
          <a
            href="https://github.com/SarbasishChowdhury2002"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-500 transition duration-300 hover:scale-110 hover:text-white"
          >
            <FaGithub size={22} />
          </a>

          <a
            href="https://www.linkedin.com/in/sarbasish-chowdhury-5bb06425a/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-500 transition duration-300 hover:scale-110 hover:text-white"
          >
            <FaLinkedin size={22} />
          </a>

          <a
            href="mailto:chowdhurysarbasish10@gmail.com"
            className="text-zinc-500 transition duration-300 hover:scale-110 hover:text-white"
          >
            <MdEmail size={22} />
          </a>
        </div>
      </motion.div>
    </section>
  );
}