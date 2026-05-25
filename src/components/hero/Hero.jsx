import Image from "next/image";
import React from "react";
import Akash from "../../../public/akash.png";
import { CiFacebook, CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { BtnStyle } from "@/lib/Btn";
import Link from "next/link";
// import resume from "../../../public/MERN-Stack_developer_akashMia.pdf";

const HeroSection = () => {
  return (
    <div>
      <div className="hero rounded-sm bg-linear-to-t/hsl from-[#050a30] to-[#0a8c95]">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <Image
            className="rounded-2xl shadow-2xl -mb-4"
            src={Akash}
            alt="Akash"
            width={500}
            height={500}
          />
          <div className=" flex lg:flex-col gap-10 -mr-3 mt-2 lg:mt-60">
            <Link href="https://www.facebook.com/arakash022" target="_blank">
              <CiFacebook className="text-white" size={30} />
            </Link>
            <Link
              href="https://www.linkedin.com/in/md-akash-mia-bd"
              target="_blank"
            >
              <CiLinkedin className="text-white" size={30} />
            </Link>
            <Link href="https://github.com/PeyaraFul" target="_blank">
              <FaGithub className="text-white" size={30} />
            </Link>
          </div>
          {/* <CiFacebook className="text-white" size={30} />
            <CiLinkedin className="text-white" size={30} />
            <FaGithub className="text-white" size={30} /> */}

          <div>
            <h2 className="text-xl font-bold text-white mb-6">Hello there!</h2>
            <h1 className="text-5xl font-bold text-white">Akash Mia</h1>
            <p className="py-6 text-white">
              I am a web developer and problem solver who builds modern,
              scalable web applications with clean, responsive, and engaging
              user experiences.
            </p>
            <div className="flex gap-4 ">
              <a href="#contact-form">
                <button className={BtnStyle.primaryBtn}>Hire Me</button>
              </a>
              <a href="/MERN-Stack_developer_akashMia.pdf" download>
                <button className={BtnStyle.secondaryBtn}>
                  Download Resume
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
