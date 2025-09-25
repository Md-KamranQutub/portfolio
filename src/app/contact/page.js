"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

const page = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    console.log(form.current);

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        form.current,
        {
          publicKey: "U4N-OJW_mWfoiAnHf",
        }
      )
      .then(
        () => {
          setSuccess(true);
          setError(false);
        },
        (error) => {
          setSuccess(false);
          setError(true);
        }
      );
  };

  const char = ["S", "a", "y", " ", "H", "e", "l", "l", "o", "!"];
  return (
    <motion.div
      initial={{ y: "-200vh" }}
      animate={{ y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="flex md:flex-row flex-col h-[calc(100vh-6rem)] w-screen justify-center items-center gap-4 p-4">
        <div className="flex justify-center items-center h-full w-full md:w-1/2 p-4">
          <div className="h-fit w-fit text-4xl md:text-8xl gap-4">
            {char.map((c, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{ duration: 3, delay: i * 0.2, repeat: Infinity }}
              >
                {c}
              </motion.span>
            ))}
            😊
          </div>
        </div>

        <div className="flex flex-col justify-center items-center h-full w-full md:w-1/2 p-4  gap-4">
          <p className="text-2xl font-semibold self-start">Dear Kamran,</p>
          <form
            className="flex flex-col gap-4 w-full "
            onSubmit={sendEmail}
            ref={form}
          >
            <input
              className="border p-2 rounded-md bg-transparent outline-0 border-b-2 border-b-black resize-none"
              type="text"
              name="user_name"
              id="name"
              placeholder="Enter Your Name"
            />
            <textarea
              name="user_message"
              id="message"
              className="border p-2 rounded-md bg-transparent outline-0 border-b-2 border-b-black h-28 resize-none "
              placeholder="Write Your message"
            />
            <input
              name="user_email"
              type="email"
              id="email"
              className="border p-2 rounded-md bg-transparent outline-0 border-b-2 border-b-black resize-none"
              placeholder="Your Email"
            />
            <button
              type="submit"
              className="bg-black text-white px-4 py-3 w-fit h-fit rounded-md self-center "
            >
              Send
            </button>
            {success && (
              <div className="text-green-500">
                Your emaill sent successfully
              </div>
            )}
            {error && <div className="text-red-400">Email failed to send</div>}
          </form>
        </div>
      </div>
    </motion.div>
  );
};

export default page;
