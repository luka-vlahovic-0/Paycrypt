"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import biznisImg from "../../../public/landingPage/for-bussiness.png";
import consumerImg from "../../../public/landingPage/for-consumer.png";
import solution1 from "../../../public/landingPage/solution1.png";
import solution2 from "../../../public/landingPage/solution2.png";

export default function LpOurSolution() {
  const fromLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };
  const fromRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };
  const fromBottom = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const [headerRef, headerInView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  const [leftRef, leftInView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  const [rightRef, rightInView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  const [imageRightRef, imageRightInView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  const [imageLeftRef, imageLeftInView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <div className="flex flex-col items-center justify-center p-4">
      <motion.h1
        ref={headerRef}
        initial="hidden"
        animate={headerInView ? "visible" : "hidden"}
        variants={fromBottom}
        className="text-black text-[24px] md:text-[28px] lg:text-[36px] font-bold mt-10 text-center"
      >
        Our Solution
      </motion.h1>
      <motion.hr
        ref={headerRef}
        initial="hidden"
        animate={headerInView ? "visible" : "hidden"}
        variants={fromBottom}
        className="w-28 border-t-4 border-[#8952e3] mb-6"
      />
      <motion.h2
        ref={headerRef}
        initial="hidden"
        animate={headerInView ? "visible" : "hidden"}
        variants={fromBottom}
        className="text-black text-[14px] md:text-[16px] lg:text-[18px] mb-10 text-center"
      >
        Paycrypt builds the payment gateway that connects your business, your
        store, or anything with your consumer in the crypto world.
      </motion.h2>

      <div className="flex flex-col md:flex-row md:gap-8 gap-6 items-center justify-center w-full">
        <motion.div
          ref={leftRef}
          initial="hidden"
          animate={leftInView ? "visible" : "hidden"}
          variants={fromLeft}
          className="flex flex-row gap-4 bg-[#f5f1ff] p-6 rounded-3xl max-w-xl w-full md:w-1/2 h-40"
        >
          <Image
            src={biznisImg}
            alt="For Business"
            height={70}
            width={70}
            className="object-contain"
          />
          <div className="flex flex-col items-start justify-center">
            <h1 className="text-black text-[16px] md:text-[18px] lg:text-[24px] font-bold">
              For Your Business
            </h1>
            <h2 className="text-black text-[14px] md:text-[16px] lg:text-[18px]">
              Paycrypt helps you create payment requests sent to your consumers
              automatically and check, save, and view transaction statistics.
            </h2>
          </div>
        </motion.div>

        <motion.div
          ref={rightRef}
          initial="hidden"
          animate={rightInView ? "visible" : "hidden"}
          variants={fromRight}
          className="flex flex-row gap-4 bg-[#f5f1ff] p-6 rounded-3xl max-w-xl w-full md:w-1/2 h-40"
        >
          <Image
            src={consumerImg}
            alt="For Consumer"
            height={70}
            width={70}
            className="object-contain"
          />
          <div className="flex flex-col items-start justify-center">
            <h1 className="text-black text-[16px] md:text-[18px] lg:text-[24px] font-bold">
              For Your Consumer
            </h1>
            <h2 className="text-black text-[14px] md:text-[16px] lg:text-[18px]">
              We make it possible for consumers to pay with their
              cryptocurrencies using any crypto wallet.
            </h2>
          </div>
        </motion.div>
      </div>

      <motion.div
        ref={imageRightRef}
        initial="hidden"
        animate={imageRightInView ? "visible" : "hidden"}
        variants={fromRight}
        className="w-full flex justify-center my-10"
      >
        <Image
          id="saDesne"
          src={solution1}
          alt="Paycrypt solution for businesses"
          height={700}
          width={1184}
          className="max-w-full h-auto"
        />
      </motion.div>
      <motion.div
        ref={imageLeftRef}
        initial="hidden"
        animate={imageLeftInView ? "visible" : "hidden"}
        variants={fromLeft}
        className="w-full flex justify-center my-10"
      >
        <Image
          id="saLeve"
          src={solution2}
          alt="Paycrypt solution for consumers"
          height={700}
          width={1184}
          className="max-w-full h-auto"
        />
      </motion.div>
    </div>
  );
}
