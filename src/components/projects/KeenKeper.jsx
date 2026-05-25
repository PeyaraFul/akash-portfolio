import Image from "next/image";
import React from "react";
import KeeperImage from "../../../public/keeper.png";
import { BtnStyle } from "@/lib/Btn";
import Link from "next/link";

const KeenKeper = () => {
  return (
    <div>
      <div>
        <section className=" mx-auto mt-4 px-4 ">
          <div className="grid grid-cols-1 lg:grid-cols-2 overflow-hidden rounded-3xl border border-white/10 bg-slate-900 shadow-2xl">
            {/* Left Side - Project Screenshot */}
            <div className="relative group">
              <Image
                src={KeeperImage}
                width={600}
                height={600}
                alt="Drive Nest Project Screenshot"
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />

              {/* Badge */}
              <div className="absolute top-5 left-5 rounded-full bg-black/30 backdrop-blur-md px-4 py-2 text-sm font-medium text-white border border-white/20">
                UI/UX Design web
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="flex flex-col justify-center p-4 md:p-8 text-white">
              <span className="mb-3 inline-block rounded-full bg-blue-500/10 px-4 py-1 text-sm font-medium text-blue-400 border border-blue-500/20">
                social platform simple leaning project
              </span>

              <h2 className="text-3xl md:text-3xl font-bold leading-tight">
                KeenKeeper
              </h2>

              <p className="mt-2 text-slate-300 ">
                KeenKeeper is a only UI/UX social platform where shows a users
                can can connect with other users. They can video call, audio
                call and text each other.
              </p>

              {/* Features */}
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
                  <h4 className="font-semibold text-md">Filtering</h4>
                  <p className="text-sm text-slate-400 mt-1">
                    Only text, audio and video call can be filtered.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
                  <h4 className="font-semibold text-md">Responsive UI</h4>
                  <p className="text-sm text-slate-400 mt-1">
                    Optimized for mobile, tablet, and desktop devices.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
                  <h4 className="font-semibold text-md">Pi-chart</h4>
                  <p className="text-sm text-slate-400 mt-1">
                    Its showing the number you have connected with other users
                    on pi-chart.
                  </p>
                </div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
                <h4 className="font-semibold text-md">tech</h4>
                <p className="text-sm text-slate-400 mt-1">
                  HTML5 Javascript (ES6+), tailwind css.
                </p>
              </div>

              {/* Buttons */}
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="https://b13-a7-keen-keeper-nine.vercel.app"
                  target="_blank"
                  className={BtnStyle.primaryBtn}
                >
                  Live Demo
                </Link>

                <Link
                  target="_blank"
                  href="https://github.com/PeyaraFul/b13-a7-keen-keeper"
                  className={BtnStyle.secondaryBtn}
                >
                  GitHub
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default KeenKeper;
