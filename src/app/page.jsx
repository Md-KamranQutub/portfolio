"use client"
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const Homepage = () => {
  return (
    <motion.div className="flex flex-col md:flex-row items-center justify-center h-full w-full" initial={{ y: "-200vh" }} animate={{ y: 0 }} transition={{ duration: 1 }}>
      <div className="image w-full h-1/2 md:w-1/2 md:h-full flex justify-center items-center">
        <img src="/hero.png" alt="Hero" className=" h-[80%] w-full object-contain" />
      </div>
      <div className="text h-1/2 w-full  md:w-1/2 md:h-full md:flex md:flex-col md:justify-center md:pr-24 xl:pr-48 md:space-y-4 px-4 md:px-0 text-center md:text-left">
        <div className="heading">
          <h1 className=" text-3xl mb-2 md:text-4xl font-bold md:mb-4">
            Crafting Digital Experiences, Designing Tomorrow.
          </h1>
        </div>
        <div className="description">
          <p className="text-normal md:text-lg mb-2 md:mb-4">
            Welcome to my digital canvas, where innovation and creativity
            converge to shape exceptional user experiences.
            With a keen eye for aesthetics and a mastery of code, my portfolio showcases a diverse collection of projects that reflect my commitment to excellence.
          </p>
        </div>
        <div className="buttons flex gap-4 justify-center md:justify-start">
          <Link href={"/portfolio"}><button className="bg-black text-white px-2 md:px-4 py-2 rounded-lg">
            View my work
          </button></Link>
          <Link href={"/contact"}><button className=" px-2 md:px-4 py-2 rounded-lg ring-1 ring-black ">
            Contact Me
          </button></Link>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;
