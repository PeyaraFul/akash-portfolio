import Image from "next/image";
import Link from "next/link";
import React from "react";
import Akash from "../../../public/akash.png";
import { CiFacebook, CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { BtnStyle } from "@/lib/Btn";

const HeroSection = () => {
  return (
    <section
      id="hero-section"
      className="relative min-h-screen overflow-hidden bg-[#030712] text-white"
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-0 h-96 w-96 rounded-full bg-cyan-500/20 blur-[120px]" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-green-500/20 blur-[120px]" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6 py-20">
        <div className="grid w-full grid-cols-1 gap-16 lg:grid-cols-2">
          {/* Left Content */}
          <div className="flex flex-col justify-center">
            {/* Badge */}
            <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-green-400/20 bg-green-400/10 px-4 py-2 text-sm text-green-300 backdrop-blur-md">
              <span className="h-2 w-2 animate-pulse rounded-full bg-green-400"></span>
              Available For Freelance Work
            </div>

            {/* Heading */}
            <h1 className="text-5xl font-black leading-tight md:text-7xl">
              Hi, I&apos;m
              <span className="bg-gradient-to-r ml-2 from-cyan-400 via-sky-400 to-green-400 bg-clip-text text-transparent">
                Akash Mia
              </span>
            </h1>

            {/* Sub Heading */}
            <h2 className="mt-5 text-xl font-semibold text-cyan-300 md:text-2xl">
              MERN Stack Developer
            </h2>

            {/* Description */}
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-300">
              I build modern, scalable, and high-performance web applications
              with React, Next.js, Node.js, Express, MongoDB, and Tailwind CSS.
              Passionate about creating engaging user experiences and solving
              real-world problems.
            </p>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#contact-form">
                <button className={BtnStyle.primaryBtn}>Hire Me</button>
              </a>

              <a href="/MERN-Stack_developer_akashMia.pdf" download>
                <button className={BtnStyle.secondaryBtn}>
                  Download Resume
                </button>
              </a>
            </div>

            {/* Stats */}
            <div className="mt-12 flex flex-wrap gap-4">
              <div className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur-md">
                <h3 className="text-2xl font-bold">10+</h3>
                <p className="text-sm text-slate-400">
                  Learning Projects <br />
                  Completed
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur-md">
                <h3 className="text-2xl font-bold">MERN</h3>
                <p className="text-sm text-slate-400">Full Stack Development</p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur-md">
                <h3 className="text-2xl font-bold">24/7</h3>
                <p className="text-sm text-slate-400">Learning & Building</p>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-10 flex gap-4">
              <Link
                href="https://www.facebook.com/arakash022"
                target="_blank"
                className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-cyan-500"
              >
                <CiFacebook size={28} />
              </Link>

              <Link
                href="https://www.linkedin.com/in/md-akash-mia-bd"
                target="_blank"
                className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-cyan-500"
              >
                <CiLinkedin size={28} />
              </Link>

              <Link
                href="https://github.com/PeyaraFul"
                target="_blank"
                className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-cyan-500"
              >
                <FaGithub size={24} />
              </Link>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex items-center justify-center">
            <div className="relative">
              {/* Glow */}
              <div className="absolute inset-0 rounded-full bg-cyan-500 opacity-20 blur-3xl"></div>

              {/* Image */}
              <Image
                src={Akash}
                alt="Akash Mia"
                width={500}
                height={500}
                priority
                className="relative rounded-full border-4 border-white/10 shadow-[0_0_80px_rgba(34,211,238,0.25)]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
