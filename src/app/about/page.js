"use client";

import React from "react";
import { motion } from "framer-motion";

const page = () => {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Next.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Git",
    "MySQL",
    "Tailwind CSS",
    "Framer Motion",
  ];
  return (
    <motion.div
      className="flex w-full h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: 0 }}
      transition={{ duration: 1 }}
    >
      {/* Container */}
      <div className=" mt-7 flex  w-full h-[cal(100vh-6rem)] justify-center items-center px-4 md:px-16 lg:px-24 space-x-8">
        {/* Biography */}
        <div className="left w-full md:w-1/2 h-full">
          <div className="flex flex-col justify-center items-center gap-3">
            <h2 className="text-3xl font-bold mb-2 text-black">Biography</h2>
            <p className="text-normal md:text-lg mb-2 md:mb-4 text-black px-4 md:px-0 text-center md:text-left">
              Hello! I'm Md Kamran Qutub, a passionate web developer and
              designer dedicated to crafting beautiful and functional digital
              experiences. With a background in Computer Science, I specialize
              in creating responsive and user-friendly websites that not only
              look great but also perform seamlessly across all devices.
            </p>
            {/* signature */}
            <div className="signature w-full flex justify-end ">
              <img
                src="/sign.svg"
                alt="Signature"
                className=" h-24 w-48 object-contain"
              />
            </div>
          </div>
          <div>
            <h2 className=" flex justify-center items-center text-3xl font-bold mb-2 text-black">
              Skills
            </h2>
            <div className="skills flex flex-wrap gap-4 mt-4">
              {skills.map((skill) => (
                <div
                  key={skill}
                  className="skill-item bg-black p-2 text-white rounded-lg text-center"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default page;
