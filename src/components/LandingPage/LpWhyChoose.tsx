"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import qrCode from "../../../public/landingPage/qr-code.png";
import easy from "../../../public/landingPage/wireframe.png";
import update from "../../../public/landingPage/auto-update.png";

export default function LpWhyChoose() {
  const fromLeft = {
    hidden: { opacity: 0, x: -75 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };
  const fromRight = {
    hidden: { opacity: 0, x: 75 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };
  const fromBottom = {
    hidden: { opacity: 0, y: 75 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const [headerRef, headerInView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  const [jedanRef, jedanInView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  const [dvaRef, dvaInView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [triRef, triInView] = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <div className="flex flex-col items-center justify-center mb-10 p-4">
      <motion.h1
        ref={headerRef}
        initial="hidden"
        animate={headerInView ? "visible" : "hidden"}
        variants={fromBottom}
        className="text-black text-[24px] md:text-[28px] lg:text-[36px] font-bold mt-10 text-center"
      >
        Why Choose Us
      </motion.h1>
      <motion.hr
        ref={headerRef}
        initial="hidden"
        animate={headerInView ? "visible" : "hidden"}
        variants={fromBottom}
        className="w-28 border-t-4 border-[#8952e3] mb-6"
      />

      <div className="flex flex-col md:flex-row items-start justify-center gap-8 px-6 md:px-36 w-full">
        <motion.div
          ref={jedanRef}
          initial="hidden"
          animate={jedanInView ? "visible" : "hidden"}
          variants={fromLeft}
          className="flex flex-col items-center justify-start flex-1 max-w-md"
        >
          <Image
            src={qrCode}
            alt="Flexible payment option for consumers"
            height={50}
            width={50}
            className="mb-4"
          />
          <h1 className="text-black text-[18px] md:text-[20px] lg:text-[24px] font-bold">
            Flexible Payment Option
          </h1>
          <h2 className="text-black text-[14px] md:text-[16px] lg:text-[18px] text-center">
            Paycrypt helps you create payment requests sent to your consumers
            automatically, while checking and saving transaction statistics.
          </h2>
        </motion.div>

        <motion.div
          ref={dvaRef}
          initial="hidden"
          animate={dvaInView ? "visible" : "hidden"}
          variants={fromBottom}
          className="flex flex-col items-center justify-start flex-1 max-w-md"
        >
          <Image
            src={update}
            alt="Auto-update feature for seamless transactions"
            height={50}
            width={50}
            className="mb-4"
          />
          <h1 className="text-black text-[18px] md:text-[20px] lg:text-[24px] font-bold">
            Auto-update
          </h1>
          <h2 className="text-black text-[14px] md:text-[16px] lg:text-[18px] text-center">
            Orders and payments are synchronized to always remain clear and
            up-to-date with your store.
          </h2>
        </motion.div>

        <motion.div
          ref={triRef}
          initial="hidden"
          animate={triInView ? "visible" : "hidden"}
          variants={fromRight}
          className="flex flex-col items-center justify-start flex-1 max-w-md"
        >
          <Image
            src={easy}
            alt="Easy setup process for businesses"
            height={50}
            width={50}
            className="mb-4"
          />
          <h1 className="text-black text-[18px] md:text-[20px] lg:text-[24px] font-bold">
            Easy To Setup
          </h1>
          <h2 className="text-black text-[14px] md:text-[16px] lg:text-[18px] text-center">
            Customize the widget to fit your look and feel—no code required, and
            easy to set up.
          </h2>
        </motion.div>
      </div>
    </div>
  );
}
