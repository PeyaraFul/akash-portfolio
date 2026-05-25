import Image from "next/image";
import React from "react";

import UiDoc from "../../../public/ui-doc2.png";
import Reactjs from "../../../public/tech-img/react.png";
import Nextjs from "../../../public/tech-img/nextjs.png";
import MongoDB from "../../../public/tech-img/mongodb.png";
import Tailwindcss from "../../../public/tech-img/tailwind.png";
import { BtnStyle } from "@/lib/Btn";

const topics = [
  {
    name: "Tailwind CSS",
    img: Tailwindcss,
    desc: "Flexbox, Grid, colors, hover effects and responsive design made UI/UX development fun and fast.",
    color: "from-cyan-100 to-cyan-50",
  },
  {
    name: "React.js",
    img: Reactjs,
    desc: "Component-based structure, hooks, props and state management made frontend development powerful.",
    color: "from-sky-100 to-sky-50",
  },
  {
    name: "Next.js",
    img: Nextjs,
    desc: "Server-side rendering, routing and full-stack capability improved my development experience.",
    color: "from-gray-200 to-gray-100",
  },
  {
    name: "MongoDB & Express",
    img: MongoDB,
    desc: "My first database experience with CRUD operations, authentication and backend structure.",
    color: "from-green-100 to-green-50",
  },
];

const EnjoyTopics = ({ isOpen }) => {
  return (
    <section className={`max-w-7xl mx-auto px-4 py-10 ${isOpen}`}>
      {/* Heading */}

      {/* Layout */}
      <h1 className="text-2xl md:text-3xl font-bold">
        Topics I Enjoyed with the journey
      </h1>
      <p className="text-gray-500 mt-3">
        Technologies that shaped my development journey
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <div className="space-y-5">
          {topics.map((item, index) => (
            <div
              key={index}
              className={`rounded-2xl border border-gray-200 bg-gradient-to-br ${item.color} p-5 shadow-sm hover:shadow-md transition`}
            >
              <div className="flex items-center gap-3 mb-2">
                <Image src={item.img} alt={item.name} width={28} height={28} />
                <h3 className="font-semibold text-gray-800">{item.name}</h3>
              </div>

              <p className="text-sm text-gray-600 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Right Image */}
        <div className="relative group">
          <Image
            src={UiDoc}
            alt="UI Document"
            width={600}
            height={600}
            className="rounded-3xl shadow-lg transition duration-500 group-hover:scale-105"
          />

          {/* overlay */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-black/20 to-transparent"></div>
        </div>
      </div>
    </section>
  );
};

export default EnjoyTopics;
