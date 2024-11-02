"use client";

import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import kakoRadiImg from "../../../public/landingPage/kakoRadi.png";

export default function LpHowItWorks() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [inView, controls]);

 
  const slideFromRight = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.3, 
      },
    },
  };

  return (
    <motion.div
      className="bg-[#f9f8ff] flex flex-col items-center justify-center"
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={slideFromRight}
    >
      <motion.h1 className="text-black text-[24px] md:text-[28px] lg:text-[36px] font-bold mt-10" variants={slideFromRight}>
        How it works?
      </motion.h1>
      <motion.hr className="w-24 md:w-28 border-t-4 border-[#8952e3] mb-6" variants={slideFromRight} />
      <div className="flex flex-col md:flex-row items-center justify-center gap-16 md:gap-48 mt-6 mb-10 mx-4 md:mx-0">
        <Image src={kakoRadiImg} alt="How it works" height={400} width={400} className="max-w-full" />
        <div className="bg-[#f5f1ff] p-6 flex flex-col items-center justify-center rounded-3xl max-w-lg w-full">
          
          <motion.div className="flex flex-row gap-4 mb-6" variants={slideFromRight}>
            <p className="text-[24px] md:text-[30px] lg:text-[50px] font-extrabold text-purple-600">1</p>
            <div className="flex flex-col gap-2">
              <motion.h1 className="text-black text-[18px] md:text-[20px] lg:text-[24px] font-bold" variants={slideFromRight}>
                Set up Paycrypt
              </motion.h1>
              <motion.h2 className="text-black text-[14px] md:text-[16px] lg:text-[18px]" variants={slideFromRight}>
                Create an account to login Paycrypt, enter wallet address and select the cryptocurrencies for payment. Simply integrate the service into your project by embedding code.
              </motion.h2>
            </div>
          </motion.div>

          
          <motion.div className="flex flex-row gap-4 mb-6" variants={slideFromRight}>
            <p className="text-[24px] md:text-[30px] lg:text-[50px] font-extrabold text-purple-600">2</p>
            <div className="flex flex-col gap-2">
              <motion.h1 className="text-black text-[18px] md:text-[20px] lg:text-[24px] font-bold" variants={slideFromRight}>
                Customize invoice detail
              </motion.h1>
              <motion.h2 className="text-black text-[14px] md:text-[16px] lg:text-[18px]" variants={slideFromRight}>
                Create an invoice by setting the cryptocurrency you want to receive payment in and the network. A QR code is generated.
              </motion.h2>
            </div>
          </motion.div>

          
          <motion.div className="flex flex-row gap-4" variants={slideFromRight}>
            <p className="text-[24px] md:text-[30px] lg:text-[50px] font-extrabold text-purple-600">3</p>
            <div className="flex flex-col gap-2">
              <motion.h1 className="text-black text-[18px] md:text-[20px] lg:text-[24px] font-bold" variants={slideFromRight}>
                Crypto scan-to-pay!
              </motion.h1>
              <motion.h2 className="text-black text-[14px] md:text-[16px] lg:text-[18px]" variants={slideFromRight}>
                Users use the camera to scan the QR code or click on the link to navigate to the wallet browser. Cryptocurrency is sent to the wallet address set up.
              </motion.h2>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
