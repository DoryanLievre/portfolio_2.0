"use client";
import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
export default function Header() {
  return (
    <header className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl-items-center">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center"
      >
        <SocialIcon
          aria-label="mon compte linkedin"
          url="https://www.linkedin.com/in/doryan-li%C3%A8vre/"
          target="_blank"
          fgColor="gray"
          bgColor="transparent"
          className="hover:scale-125 transition-all duration-500 ease-in-out"
        />
        <SocialIcon
          aria-label="mn compte github"
          url="https://github.com/DoryanLievre"
          target="_blank"
          fgColor="gray"
          bgColor="transparent"
          className="hover:scale-125 transition-all duration-500 ease-in-out"
        />
      </motion.div>
      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center text-gray-300"
      >
        <SocialIcon
          className="cursor-pointer hover:scale-125 transition-all duration-500 ease-in-out"
          network="email"
          fgColor="gray"
          bgColor="transparent"
          href="#contact"

        />
        <p className="uppercase hidden md:inline-flex text-sm text-gray-400">
          Contactez-moi
        </p>
      </motion.div>
    </header>
  );
}
