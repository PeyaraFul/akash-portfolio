import React from "react";
import driveNestImage from "../../../public/drive-nest4.png";
import Image from "next/image";
import { BtnStyle } from "@/lib/Btn";

const DriveNest = () => {
  return (
    <div>
      <section className=" mx-auto px-4 py-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 overflow-hidden rounded-3xl border border-white/10 bg-slate-900 shadow-2xl">
          {/* Left Side - Project Screenshot */}
          <div className="relative group">
            <Image
              src={driveNestImage}
              width={600}
              height={600}
              alt="Drive Nest Project Screenshot"
              className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
            />

            {/* Badge */}
            <div className="absolute top-5 left-5 rounded-full bg-white/10 backdrop-blur-md px-4 py-2 text-sm font-medium text-white border border-white/20">
              MERN-Stack Project
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="flex flex-col justify-center p-4 md:p-8 text-white">
            <span className="mb-3 inline-block rounded-full bg-blue-500/10 px-4 py-1 text-sm font-medium text-blue-400 border border-blue-500/20">
              Car Rental Platform
            </span>

            <h2 className="text-3xl md:text-3xl font-bold leading-tight">
              Drive Nest
            </h2>

            <p className="mt-2 text-slate-300 ">
              Drive Nest is a modern full-stack car rental platform where users
              can browse vehicles, view detailed car information, and book cars
              easily. The platform includes secure authentication, booking
              management, and a responsive user-friendly interface.
            </p>

            {/* Features */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
                <h4 className="font-semibold text-md">Authentication</h4>
                <p className="text-sm text-slate-400 mt-1">
                  JWT & express based secure login system.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
                <h4 className="font-semibold text-md">Booking System</h4>
                <p className="text-sm text-slate-400 mt-1">
                  Users can book cars and manage reservations.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
                <h4 className="font-semibold text-md">Responsive UI</h4>
                <p className="text-sm text-slate-400 mt-1">
                  Optimized for mobile, tablet, and desktop devices.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
                <h4 className="font-semibold text-md">Modern Stack</h4>
                <p className="text-sm text-slate-400 mt-1">
                  Built using React, Next.js, Express.js, MongoDB, and Tailwind
                  CSS.
                </p>
              </div>
            </div>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="https://drive-nest-omega.vercel.app"
                target="_blank"
                className={BtnStyle.primaryBtn}
              >
                Live Demo
              </a>

              <a href="#" className={BtnStyle.secondaryBtn}>
                GitHub
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DriveNest;
