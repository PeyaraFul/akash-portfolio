"use client";

import React from "react";
import Image from "next/image";

import Express from "../../../public/tech-img/express.png";
import Firebase from "../../../public/tech-img/firebase.png";
import MongoDB from "../../../public/tech-img/mongodb.png";
import Nodejs from "../../../public/tech-img/nodejs.png";
import Reactjs from "../../../public/tech-img/react.png";
import Js from "../../../public/tech-img/js.png";
import Html5 from "../../../public/tech-img/html5.png";
import Nextjs from "../../../public/tech-img/nextjs.png";
import Loading from "../../../public/tech-img/loading.png";
import Tailwindcss from "../../../public/tech-img/tailwind.png";

const frondEndTechs = [
  { name: "HTML5", img: Html5, color: "from-orange-100 to-orange-50" },
  { name: "React.js", img: Reactjs, color: "from-sky-100 to-sky-50" },
  { name: "Tailwind CSS", img: Tailwindcss, color: "from-cyan-100 to-cyan-50" },
  { name: "JavaScript", img: Js, color: "from-yellow-100 to-yellow-50" },
  { name: "Next.js", img: Nextjs, color: "from-gray-200 to-gray-100" },
];

const backEndTechs = [
  { name: "Express", img: Express, color: "from-gray-200 to-gray-100" },
  { name: "Node.js", img: Nodejs, color: "from-green-100 to-green-50" },
  { name: "MongoDB", img: MongoDB, color: "from-green-200 to-green-50" },
  { name: "Firebase", img: Firebase, color: "from-red-100 to-red-50" },
  { name: "Learning...", img: Loading, color: "from-blue-100 to-blue-50" },
];

const SkillCard = ({ tech }) => {
  return (
    <div
      className={`group relative rounded-2xl border border-gray-200 bg-gradient-to-br ${tech.color} p-5 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg`}
    >
      <Image
        src={tech.img}
        alt={tech.name}
        width={60}
        height={60}
        className="mx-auto mb-3 transition-transform duration-300 group-hover:scale-110"
      />

      <p className="text-sm font-semibold text-gray-800">{tech.name}</p>
    </div>
  );
};

const SkillsSection = () => {
  return (
    <section
      id="skills-section"
      className="max-w-7xl mx-auto px-4 py-10 bg-white"
    >
      {/* Heading */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-green-400">
          My Skills
        </h1>
        <p className="text-gray-500 mt-3">
          Technologies I use to build modern web applications
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Frontend */}
        <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-md">
          <h2 className="text-2xl font-semibold text-center mb-6 text-gray-800">
            Frontend
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-5">
            {frondEndTechs.map((tech, index) => (
              <SkillCard key={index} tech={tech} />
            ))}
          </div>
        </div>

        {/* Backend */}
        <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-md">
          <h2 className="text-2xl font-semibold text-center mb-6 text-gray-800">
            Backend
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-5">
            {backEndTechs.map((tech, index) => (
              <SkillCard key={index} tech={tech} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
