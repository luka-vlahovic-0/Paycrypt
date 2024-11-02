"use client";
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import okrugliOk from "../../../public/landingPage/okrugliOk.png";
import shopifyImg from "../../../public/landingPage/shopify.png";
import zapierImg from "../../../public/landingPage/zapier.png";

export default function LpSubHeader() {
  const prviControls = useAnimation();
  const drugiControls = useAnimation();

  const [prviRef, prviInView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  const [drugiRef, drugiInView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  useEffect(() => {
    if (prviInView) {
      prviControls.start("visible");
    } else {
      prviControls.start("hidden");
    }
    if (drugiInView) {
      drugiControls.start("visible");
    } else {
      drugiControls.start("hidden");
    }
  }, [prviInView, drugiInView, prviControls, drugiControls]);

  const fadeInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, staggerChildren: 0.15 },
    },
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, staggerChildren: 0.15 },
    },
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-28 my-12 mx-4 md:mx-0">
      <motion.div
        ref={prviRef}
        className="flex flex-col max-w-xl"
        initial="hidden"
        animate={prviControls}
        variants={fadeInLeft}
      >
        <motion.h1
          className="text-black text-[24px] md:text-[28px] lg:text-[36px] font-bold"
          variants={fadeInLeft}
        >
          Introducing the Crypto Payment Gateway
        </motion.h1>
        <motion.hr
          className="w-20 md:w-28 border-t-4 border-[#8952e3] mb-6"
          variants={fadeInLeft}
        />
        <motion.h2
          className="text-black text-[14px] md:text-[16px] lg:text-[18px]"
          variants={fadeInLeft}
        >
          The Crypto Scan-to-Pay widget is a convenient solution for retail
          stores, seamlessly integrating with Shopify and Zapier to enable
          cryptocurrency payments. It provides businesses with an effortless way
          to accept crypto, offering customers a modern and efficient payment
          alternative. By integrating with Shopify and Zapier, businesses can
          quickly tap into the advantages of crypto transactions, enhancing the
          shopping experience for their customers.
        </motion.h2>
      </motion.div>

      <motion.div
        ref={drugiRef}
        className="flex flex-col gap-4 md:gap-8"
        initial="hidden"
        animate={drugiControls}
        variants={fadeInRight}
      >
        {[
          "Scan to Pay Crypto currencies",
          "Zapier, Shopify integration",
          "Match your theme. No code required",
        ].map((text, index) => (
          <motion.div
            key={index}
            className="flex flex-row gap-2 mb-2 items-center"
            variants={fadeInRight}
          >
            <Image
              src={okrugliOk}
              alt="Green Check Mark"
              height={28}
              width={28}
            />
            <p className="text-[14px] md:text-[16px] lg:text-[20px] font-extrabold">
              {text}
            </p>
          </motion.div>
        ))}
        <motion.h2
          className="text-black text-[16px] md:text-[18px] lg:text-[24px] font-bold"
          variants={fadeInRight}
        >
          Integrated App
        </motion.h2>
        <div className="flex flex-col md:flex-row gap-4">
          {[
            { img: shopifyImg, text: "Shopify" },
            { img: zapierImg, text: "Zapier" },
          ].map(({ img, text }, index) => (
            <motion.div
              key={index}
              className="bg-[#8952e3] w-full md:w-56 h-18 flex flex-row rounded-2xl"
              variants={fadeInRight}
            >
              <div className="p-4 md:p-6 flex flex-row gap-2 items-center justify-center">
                <Image src={img} alt={`${text} Logo`} height={20} width={40} />
                <p className="text-white text-[14px] md:text-[16px] lg:text-[20px] font-bold">
                  {text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
