"use client";

import React from "react";
import {
  FiCode,
  FiBookOpen,
  FiCoffee,
  FiGlobe,
  FiTarget,
  FiTrendingUp,
} from "react-icons/fi";

const hobbies = [
  {
    title: "Coding",
    desc: "I love building web apps and exploring new technologies.",
    icon: <FiCode size={26} />,
    color: "from-blue-100 to-cyan-50",
  },
  {
    title: "Reading",
    desc: "I enjoy learning from programming and self-improvement books.",
    icon: <FiBookOpen size={26} />,
    color: "from-purple-100 to-pink-50",
  },
  {
    title: "Coffee & Focus",
    desc: "Coffee helps me stay focused during long coding sessions.",
    icon: <FiCoffee size={26} />,
    color: "from-yellow-100 to-orange-50",
  },
  {
    title: "Exploring Tech",
    desc: "I like exploring new tools, frameworks and developer trends.",
    icon: <FiGlobe size={26} />,
    color: "from-green-100 to-emerald-50",
  },
];

const plans = [
  {
    title: "Become Full Stack Expert",
    desc: "Master advanced MERN stack and scalable system design.",
    icon: <FiTarget size={26} />,
    color: "from-indigo-100 to-blue-50",
  },
  {
    title: "Learn DevOps",
    desc: "Understand deployment, CI/CD and cloud infrastructure.",
    icon: <FiTrendingUp size={26} />,
    color: "from-rose-100 to-pink-50",
  },
  {
    title: "Build SaaS Products",
    desc: "Create real-world SaaS applications and solve real problems.",
    icon: <FiCode size={26} />,
    color: "from-cyan-100 to-sky-50",
  },
];

const HobbiesAndPlans = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-20">
      {/* Hobbies */}
      <div className="mb-20">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-900">
          Hobbies
        </h1>
        <p className="text-center text-gray-500 mt-4 mb-10">
          Things I enjoy doing outside of coding
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {hobbies.map((item, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-3xl border border-gray-200 bg-gradient-to-br ${item.color} p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl`}
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-white/30"></div>

              <div className="relative z-10 mb-4 w-fit rounded-2xl bg-white p-3 shadow-md text-gray-800 group-hover:scale-110 transition">
                {item.icon}
              </div>

              <h3 className="relative z-10 text-lg font-semibold text-gray-900">
                {item.title}
              </h3>

              <p className="relative z-10 mt-2 text-sm text-gray-600">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Plans */}
      <div>
        <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-900">
          Future Plans
        </h1>
        <p className="text-center text-gray-500 mt-4 mb-10">
          My roadmap for becoming a better developer
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {plans.map((item, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-3xl border border-gray-200 bg-gradient-to-br ${item.color} p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl`}
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-white/30"></div>

              <div className="relative z-10 mb-4 w-fit rounded-2xl bg-white p-3 shadow-md text-gray-800 group-hover:scale-110 transition">
                {item.icon}
              </div>

              <h3 className="relative z-10 text-lg font-semibold text-gray-900">
                {item.title}
              </h3>

              <p className="relative z-10 mt-2 text-sm text-gray-600">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HobbiesAndPlans;
