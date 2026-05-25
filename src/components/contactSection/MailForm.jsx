"use client";

import Link from "next/link";
import React from "react";
import { CiFacebook, CiLinkedin, CiMail } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";
import { BtnStyle } from "@/lib/Btn";

const contacts = [
  {
    accountName: "arakash022@gmail.com",
    icon: <CiMail size={32} />,
    link: "https://mail.google.com/mail/?view=cm&fs=1&to=arakash022@gmail.com",
    color: "from-red-500 to-orange-500",
  },
  {
    accountName: "+8801790291061",
    icon: <FaWhatsapp size={28} />,
    link: "https://wa.me/8801790291061",
    color: "from-green-500 to-emerald-600",
  },
  {
    accountName: "Md Akash Mia",
    icon: <CiLinkedin size={32} />,
    link: "https://www.linkedin.com/in/md-akash-mia-bd",
    color: "from-cyan-500 to-blue-600",
  },
  {
    accountName: "AR Akash",
    icon: <CiFacebook size={32} />,
    link: "https://www.facebook.com/arakash022",
    color: "from-blue-500 to-indigo-600",
  },
];

const MailForm = () => {
  const inputBoxClass =
    "w-full rounded-2xl border shadow-[inset_0_1px_8px_rgba(0,169,237,0.3)]  border-white/10 bg-white/5 px-5 py-4 outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 resize-none";

  return (
    <section
      id="contact-form"
      className="max-w-7xl mx-auto px-4 py-20 text-white"
    >
      {/* Heading */}
      <div className="text-center mb-14">
        <h1 className="text-4xl text-green-400 md:text-5xl font-bold mt-5">
          Let's Work Together
        </h1>

        <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
          Have a project idea, freelance opportunity, or collaboration request?
          Feel free to reach out anytime.
        </p>
      </div>

      {/* Main Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start text-black">
        {/* Contact Form */}
        <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 md:p-8 shadow-2xl text-black">
          <h2 className="text-2xl font-semibold mb-6">Send Me a Message</h2>

          <form className="space-y-5 text-black">
            <div>
              <label className="text-sm text-slate-800 mb-2 block">
                Your Name
              </label>

              <input
                type="text"
                placeholder="Enter your name"
                className={inputBoxClass}
              />
            </div>

            <div>
              <label className="text-sm text-slate-800 mb-2 block">
                Your Email
              </label>

              <input
                type="email"
                placeholder="example@gmail.com"
                className={inputBoxClass}
              />
            </div>

            <div>
              <label className="text-sm text-slate-800 mb-2 block">
                Project Description
              </label>

              <textarea
                rows={6}
                placeholder="Tell me about your project..."
                className={inputBoxClass}
              ></textarea>
            </div>

            <button type="submit" className={`${BtnStyle.primaryBtn} w-full`}>
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Cards */}
        <div>
          <h2 className="text-2xl font-semibold mb-6 text-center lg:text-left">
            Connect With Me
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {contacts.map((contact, index) => (
              <Link
                href={contact.link}
                target="_blank"
                key={index}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 transition-all duration-300 hover:-translate-y-2 hover:border-white/20 hover:bg-white/10 hover:shadow-2xl"
              >
                {/* Gradient Glow */}
                <div
                  className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition duration-500 bg-gradient-to-br ${contact.color}`}
                ></div>

                <div className="relative z-10 flex flex-col items-center text-center">
                  <div
                    className={`mb-4 rounded-2xl bg-gradient-to-r ${contact.color} p-4 text-white shadow-lg`}
                  >
                    {contact.icon}
                  </div>

                  <h3 className="font-semibold text-lg">
                    {contact.accountName}
                  </h3>

                  <p className="text-sm text-slate-400 mt-2">
                    Message me directly
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MailForm;
