"use client";

import React from "react";
import backgroundImage from "../../../public/landingPage/ljubicastaPozadina.png";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";

export default function LpReady() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  const popUpVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="flex items-center justify-center my-10">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={popUpVariants}
        style={{
          backgroundImage: `url(${backgroundImage.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "250px",
          width: "82%",
        }}
        className="flex flex-col items-start justify-center gap-4 px-6 md:px-32 py-10 rounded-3xl shadow-lg"
      >
        <h1 className="text-white text-[20px] md:text-[34px] font-extrabold text-center">
          Ready to try Paycrypt?
        </h1>
        <h2 className="text-white text-[16px] md:text-[18px] text-start">
          We will provide you with the best solution for your business
        </h2>

        <Link href="/contact">
          
          <button className="bg-white text-[#8952e3] text-lg px-6 py-3 rounded-xl transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#8952e3] focus:ring-opacity-50">
            Get Started
          </button>
        </Link>
      </motion.div>
    </div>
  );
}
