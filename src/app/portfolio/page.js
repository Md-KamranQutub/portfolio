"use client";
import React , {useRef} from "react";
import { motion, useScroll } from "framer-motion";
import Link from "next/link";
import { useTransform } from "framer-motion";
const page = () => {
  const projects = [
    {
      id: 1,
      title: "Naatify",
      img: "/naatify.png",
      desc: "This is a naat playing application",
      link: "#",
      from: "from-purple-800",
      to: "to-purple-600",
    },
    {
      id: 2,
      title: "Url Shortener",
      img: "/urlshortener.png",
      desc: "With the help of this application you can shorten your url easily",
      link: "#",
      from: "from-blue-950",
      to: "to-blue-800",
    },
    {
      id: 3,
      title: "Blog",
      img: "/blog.png",
      desc: "Write and Read the blogs about any topic",
      link: "#",
      from: "from-violet-950",
      to: "to-violet-800",
    },
    {
      id: 4,
      title: "Linktree",
      img: "/linktree.png",
      desc: "Linktree which can store all your links in just one place",
      link: "#",
      from: "from-fuchsia-900",
      to: "to-fuchsia-600",
    },
    {
      id: 5,
      title: "Buy Me A Chai",
      img: "/buymeachai.png",
      desc: "Buy me a chai for crowdfunding",
      link: "#",
      from: "from-indigo-800",
      to: "to-indigo-600",
    },
  ];
  const ref = useRef();
  const scrollYProgress = useScroll({ target: ref });
  const x = useTransform(
    scrollYProgress.scrollYProgress,
    [0, 1],
    ["0%", "-83.5%"]
  );
  return (
    <motion.div
      initial={{ y: "-200vh" }}
      animate={{ y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="h-[600vh] w-screen relative" ref={ref}>
        <div className="w-screen h-[calc(100vh-6rem)] flex justify-center items-center text-4xl md:text-8xl text-center">
          My Work
        </div>
        <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
          <motion.div style={{ x }} className="flex">
            <div className="h-screen w-screen bg-gradient-to-r from-purple-400 to-blue-300"></div>
            {projects.map((project) => (
              <div
                className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${project.from} ${project.to}`}
                key={project.id}
              >
                <div className="flex flex-col items-center justify-center gap-8 text-white">
                  <h1 className="text-5xl font-bold">{project.title}</h1>
                  <div className="relative w-1/2 h-1/2">
                    <img
                      src={project.img}
                      alt={project.title}
                      className="project-image rounded-lg shadow-black shadow-xl object-cover hover:scale-105 hover:brightness-50 transition-all"
                    />
                  </div>
                  <p>{project.desc}</p>
                  <Link
                    href={project.link}
                    className="project-link p-2 bg-white text-black rounded-md hover:bg-gray-200 transition"
                  >
                    View Project
                  </Link>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default page;
