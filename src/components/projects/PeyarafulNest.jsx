import React from "react";
import peyarafulNestImage from "../../../public/peyarafulNest.png";
import Image from "next/image";
import { BtnStyle } from "@/lib/Btn";
import Link from "next/link";

const PeyarafulNest = () => {
  return (
    <div id="projects-section">
     
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-green-400  ">
          Projects
        </h1>
        <p className="text-gray-500 mt-3">
         Projects I have worked on. Every project is a learning experience.
        </p>
      </div>
      <section className=" mx-auto px-4 py-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 overflow-hidden rounded-3xl border border-white/10 bg-slate-900 shadow-2xl">
          {/* Left Side - Project Screenshot */}
          <div className="relative group">
            <Image
              src={peyarafulNestImage}
              width={600}
              height={600}
              alt="Drive Nest Project Screenshot"
              className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
            />

            {/* Badge */}
            <div className="absolute top-5 left-5 rounded-full bg-white/10 backdrop-blur-md px-4 py-2 text-sm font-medium text-gray-600 border border-gray/20">
              Full-Stack Project
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="flex flex-col justify-center p-4 md:p-8 text-white">
            <span className="mb-3 inline-block rounded-full bg-blue-500/10 px-4 py-1 text-sm font-medium text-blue-400 border border-blue-500/20">
              Property Rental Platform
            </span>

            <h2 className="text-3xl md:text-3xl font-bold leading-tight">
              Peyaraful Nest
            </h2>

            <p className="mt-2 text-slate-300 ">
              Peyaraful Nest is a modern property rental platform where property
              owners can list rental properties and tenants can browse, book,
              and manage rental requests and received payments. The platform
              features secure user authentication, role-based access control, property management, booking workflow, and stripe payment integration. Built with
              MongoDB, Express.js, React.js, and Node.js, fully responsive UI
              for mobile, tablet, and desktop, JWT authentication, role-based
              dashboards, property approval workflow, booking management, Stripe
              payment integration, and RESTful APIs.
            </p>

            {/* Features */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
                <h4 className="font-semibold text-md">Authentication</h4>
                <p className="text-sm text-slate-400 mt-1">
                 Role-based authentication with JWT & express based secure login system.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
                <h4 className="font-semibold text-md">Features</h4>
                <p className="text-sm text-slate-400 mt-1">
                  Booking system, posting rating and review, property management, and stripe payment, different dashboards for tenant and property owners.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
                <h4 className="font-semibold text-md">Responsive UI</h4>
                <p className="text-sm text-slate-400 mt-1">
                  Optimized for mobile, tablet, and desktop devices.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
                <h4 className="font-semibold text-md">Tools and Tech</h4>
                <p className="text-sm text-slate-400 mt-1">
                  MongoDB, Express.js, React.js, and Node.js, tailwind CSS.
                </p>
              </div>
            </div>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                target="_blank"
                href="https://peyaraful-nest-client.vercel.app"
                className={BtnStyle.primaryBtn}
              >
                Live Demo
              </Link>

              <Link
                target="_blank"
                href="https://github.com/PeyaraFul/peyaraful-nest-client"
                className={BtnStyle.secondaryBtn}
              >
                GitHub
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PeyarafulNest;
