"use client";

import { useEffect, useState } from "react";

import { motion } from "framer-motion";
import { Menu } from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const navItems = [
  {
    name: "Home",
    href: "#home",
    id: "home",
  },
  {
    name: "About",
    href: "#about",
    id: "about",
  },
  {
    name: "Projects",
    href: "#projects",
    id: "projects",
  },
  {
    name: "Skills",
    href: "#skills",
    id: "skills",
  },
  {
    name: "Contact",
    href: "#contact",
    id: "contact",
  },
];

export function Navbar() {

  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) =>
        document.getElementById(item.id)
      );

      const scrollPosition = window.scrollY + 200;

      sections.forEach((section) => {
        if (!section) return;

        const offsetTop = section.offsetTop;
        const offsetHeight = section.offsetHeight;

        if (
          scrollPosition >= offsetTop &&
          scrollPosition < offsetTop + offsetHeight
        ) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/30 backdrop-blur-xl"
    >
      <div className="container-width flex h-16 items-center justify-between px-6">
        {/* Logo */}
        <div>
          <h1 className="text-lg font-semibold tracking-tight">
            Sarbasish Chowdhury
          </h1>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={`text-sm transition duration-300 ${
                activeSection === item.id
                  ? "text-white"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <button className="text-zinc-300">
                <Menu size={24} />
              </button>
            </SheetTrigger>

            <SheetContent
              side="right"
              className="border-white/10 bg-black text-white"
            >
              <div className="mt-12 flex flex-col gap-6">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={`text-lg transition ${
                      activeSection === item.id
                        ? "text-white"
                        : "text-zinc-400 hover:text-white"
                    }`}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
}