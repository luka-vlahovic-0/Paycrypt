"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import zenaImg from "../../../public/contactPage/zenaZaFormu.png";
import CoContactForm from "./ContactForm";

const textVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
      staggerChildren: 0.2,
    },
  },
  hiddenMobile: { opacity: 0, y: 50 },
  visibleMobile: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
      staggerChildren: 0.2,
    },
  },
};

const formVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
  hiddenMobile: { opacity: 0, y: 50 },
  visibleMobile: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const slideFromRight = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      staggerChildren: 0.3, 
    },
  },
};

export default function Contact() {
  return (
    <div className="min-h-screen w-full bg-[#f9f8ff] flex flex-col md:flex-row items-center justify-center space-y-10 md:space-y-0 md:space-x-20 max-w-full mx-auto px-4">

      <motion.div
        className="flex flex-col text-center md:text-left max-w-2xl"
        initial="hidden"
        animate="visible"
        variants={textVariants}
      >
        <motion.p
          className="text-[14px] md:text-[18px] text-[#8952e3] font-extrabold"
          variants={textVariants}
        >
          Contact Us
        </motion.p>
        <motion.h1
          className="text-[32px] md:text-[45px] font-extrabold text-[#000f5c] mb-2"
          variants={textVariants}
        >
          Let&apos;s get in Touch!
        </motion.h1>
        <motion.hr className="w-24 md:w-28 border-t-4 border-[#8952e3] mb-6 hidden md:block" variants={slideFromRight} />
        <motion.h2
          className="text-base md:text-lg lg:text-[24px] font-manrope text-[#000f5c]"
          variants={textVariants}
        >
          Get a Custom-Built, Seamless Payment Solution for Your Business with
          PayCrypt
        </motion.h2>
      </motion.div>

      <motion.div
        className="relative w-full"
        initial="hidden"
        animate="visible"
        variants={formVariants}
      >
        <CoContactForm />

        <Image
          src={zenaImg}
          alt="Zena"
          className="absolute bottom-[5px] right-[138px] w-[120px] z-10 pointer-events-none hidden md:block"
          priority={true}
        />
      </motion.div>
    </div>
  );
}
