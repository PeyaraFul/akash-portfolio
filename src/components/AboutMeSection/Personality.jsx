"use client";

import React from "react";
import { FiUsers, FiMessageSquare, FiZap, FiTarget } from "react-icons/fi";

const skills = [
  {
    title: "Communication",
    desc: "Able to communicate project ideas and collaborate effectively with others.",
    icon: <FiMessageSquare size={28} />,
    color: "from-blue-100 to-cyan-50",
  },
  {
    title: "Team Work",
    desc: "Comfortable working in teams and contributing to collaborative projects.",
    icon: <FiUsers size={28} />,
    color: "from-green-100 to-emerald-50",
  },
  {
    title: "Fast Learner",
    desc: "Quickly adapt to new technologies and continuously improve development skills.",
    icon: <FiZap size={28} />,
    color: "from-yellow-100 to-orange-50",
  },
  {
    title: "Problem Solving",
    desc: "Passionate about solving coding challenges and building scalable solutions.",
    icon: <FiTarget size={28} />,
    color: "from-purple-100 to-pink-50",
  },
];

const SoftSkills = ({ isOpen }) => {
  return (
    <section className={`max-w-7xl mx-auto px-4 py-6 ${isOpen}`}>
      {/* Heading */}
      <div className="text-center mb-14">
        <h1 className="text-3xl  font-bold text-gray-900">
          Soft Skills & Personality
        </h1>

        <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
          Beyond coding, I focus on communication, teamwork, learning, and
          solving problems.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {skills.map((skill, index) => (
          <div
            key={index}
            className={`group relative overflow-hidden rounded-3xl border border-gray-200 bg-gradient-to-br ${skill.color} p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl`}
          >
            {/* Hover Glow */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-white/30"></div>

            {/* Icon */}
            <div className="relative z-10 mb-5 w-fit rounded-2xl bg-white p-4 shadow-md text-gray-800 transition duration-300 group-hover:scale-110">
              {skill.icon}
            </div>

            {/* Content */}
            <div className="relative z-10">
              <h3 className="text-xl font-semibold text-gray-900">
                {skill.title}
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-gray-600">
                {skill.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SoftSkills;
