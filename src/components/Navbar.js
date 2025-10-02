"use client";

import React ,{ useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Navlink from "./Navlink";
import { motion } from "framer-motion";

const Navbar = () => {
  const links = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Contact", href: "/contact" },
  ];

  const [open, setOpen] = useState(false);
  const containerVariant = {
    closed: { x: "100vw" },
    opened: {
      x: "0vw",
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariant = {
    closed: { opacity: 0, x: -40 },
    opened: { opacity: 1, x: 0 },
  };
  const topVariant = {
    closed: { rotate: 0 },
    opened: { rotate: 45 },
  };
  const middleVariant = {
    closed: { opacity: 1 },
    opened: { opacity: 0 },
  };
  const bottomVariant = {
    closed: { rotate: 0 },
    opened: { rotate: -45 },
  };

  return (
    <div className="h-24 w-full flex justify-between items-center px-4 md:px-16 lg:px-24 space-x-8">
      <Link className="w-1/3" href={"/"}>
        <div className="logo bg-white w-fit px-1 rounded-lg flex gap-1 items-center">
          <span className="bg-white text-black p-2 rounded-lg font-bold">
            Port
          </span>
          <span className="bg-black text-white p-1 rounded-lg font-bold px-1">
            folio
          </span>
        </div>
      </Link>
      <div className="hidden md:flex w-1/3 md:justify-center space-x-1 md:space-x-6 lg:space-x-12">
        {links.map((link, index) => (
          <Navlink key={index} link={link} />
        ))}
      </div>
      {open && (
        <motion.div
          className="absolute top-24 left-0 w-[80%] bg-white md:hidden flex flex-col items-center space-y-4 py-4 shadow-lg"
          variants={containerVariant}
          initial="closed"
          animate="opened"
        >
          {links.map((link, index) => (
            <motion.div
              key={index}
              variants={itemVariant}
              initial="closed"
              animate="opened"
              transition={{ delay: 0.2*index }}
            >
              <Link href={link.href}>{link.label}</Link>
            </motion.div>
          ))}
        </motion.div>
      )}

      <button
        className="hamburger flex flex-col gap-2.5 md:hidden"
        onClick={() => setOpen(!open)}
      >
        <motion.div
          className="first h-1 w-10 bg-black origin-left"
          variants={topVariant}
          animate={open ? "opened" : "closed"}
        ></motion.div>
        <motion.div
          className="second h-1 w-10 bg-black origin-left"
          variants={middleVariant}
          animate={open ? "opened" : "closed"}
        ></motion.div>
        <motion.div
          className="third h-1 w-10 bg-black origin-left"
          variants={bottomVariant}
          animate={open ? "opened" : "closed"}
        ></motion.div>
      </button>

      <div className=" px-4  hidden md:flex w-1/3 icons sm:justify-end space-x-1 md:space-x-3">
        <Link href="https://facebook.com" target="_blank">
          <Image src="/facebook.png" alt="Icon" width={25} height={30} />
        </Link>
        <Link href="https://instagram.com" target="_blank">
          <Image src="/instagram.png" alt="Icon" width={25} height={30} />
        </Link>
        <Link href="https://github.com/Md-KamranQutub" target="_blank">
          <Image src="/github.png" alt="Icon" width={25} height={30} />
        </Link>
        <Link href="http://linkedin.com/in/md-kamran-qutub-92711b20a" target="_blank">
          <Image src="/linkedin.png" alt="Icon" width={25} height={30} />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
