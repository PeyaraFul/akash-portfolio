"use client";
import Image from "next/image";
import React, { useState } from "react";
import Akash from "../../../public/akash-reward.png";
import EnjoyTopics from "./EnjoyTopics";
import { BtnStyle } from "@/lib/Btn";
import SoftSkills from "./Personality";

const CoddingJourney = () => {
  const [isOpen, setIsOpen] = useState("hidden");
  const exploreMore = () => {
    setIsOpen((prev) => (prev === "hidden" ? "" : "hidden"));
  };
  return (
    <section id="about-me-section" className="max-w-7xl mx-auto px-4 py-20">
      {/* Heading */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-green-400  ">
          About Me
        </h1>
        <p className="text-gray-500 mt-3">
          My programming journey & experience
        </p>
      </div>

      {/* Card */}
      <div className="border border-gray-200 bg-white shadow-lg rounded-3xl  overflow-hidden hover:shadow-2xl transition-all duration-300">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 ">
          {/* Image */}
          <div className="relative group overflow-hidden">
            <Image
              src={Akash}
              alt="Programming Journey"
              width={600}
              height={600}
              className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
            />

            {/* overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
          </div>

          {/* Content */}
          <div className="p-6 md:p-10 text-gray-800">
            <h2 className="text-2xl md:text-3xl font-bold">
              Programming Journey
            </h2>

            <p className={`  mt-4 text-gray-600 leading-relaxed`}>
              It was both interesting and challenging. I spent most of my time
              learning coding every day with full dedication. Programming Hero
              played a huge role in my journey and helped me build strong
              fundamentals. Special thanks to CEO Jhankar Mahbub sir for the
              guidance. Finally, I achieved 100% marks in all learning projects.
            </p>

            {/* Highlight box */}
            <div className="mt-6 rounded-2xl border border-blue-100 bg-blue-50 p-4">
              <p className="text-sm text-blue-700">
                🚀 Built strong foundation in JavaScript, React, and full-stack
                development through consistent practice.
              </p>
            </div>

            {/* Button */}
            <div className="mt-8">
              <button onClick={exploreMore} className={BtnStyle.primaryBtn}>
                Learn more
              </button>
            </div>
          </div>
        </div>
        <EnjoyTopics isOpen={isOpen} />
        <SoftSkills isOpen={isOpen} />
      </div>
    </section>
  );
};

export default CoddingJourney;
