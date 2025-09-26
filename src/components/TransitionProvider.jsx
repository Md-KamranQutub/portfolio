"use client";
import React, { use, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname , useState } from "next/navigation";
import Navbar from "./Navbar";

const TransitionProvider = ({ children }) => {
  const pathName = usePathname();
  
  return (
    <AnimatePresence mode="wait">
      <div key={pathName} className=" w-[100vw] h-[100vh] bg-gradient-to-b from-white to-red-300 text-black">
        <motion.div
          className="h-screen w-screen fixed rounded-b-[100px]  bg-black z-50 "
          animate={{ height: "0vh" }}
          exit={{ height: "140vh" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
        <motion.div
            className="h-fit w-fit top-0 bottom-0 left-0 right-0 cursor-default m-auto text-8xl fixed rounded-b-[100px] text-white z-50 "
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            exit={{ opacity: 1 }}
            transition={{duration:0.5 , ease:"easeOut"}}
        >
        {pathName}
        </motion.div>
        <motion.div
          className="h-screen w-screen fixed rounded-t-[100px]  bg-black bottom-0 z-50 "
          initial={{ height: "140vh" }}
          animate={{ height: "0vh" , transition:{delay:0.5}}}
        />
        <div className=" h-24 w-full">
          <Navbar />
        </div>
        <div className=" h-[calc(100vh-6rem)]">{children}</div>
      </div>
    </AnimatePresence>
  );
};

export default TransitionProvider;
