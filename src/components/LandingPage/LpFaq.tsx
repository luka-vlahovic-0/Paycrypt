"use client";

import React, { useState } from "react";
import faqImg from "../../../public/landingPage/faq.png";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const faqData = [
  { question: "What is Paycrypt?", answer: "Paycrypt is a flexible payment solution that helps businesses manage transactions easily." },
  { question: "How does the payment process work?", answer: "You can create payment requests sent automatically to your consumers, check, save, and view statistics." },
  { question: "Is there an auto-update feature?", answer: "Yes, orders and payments are synchronized in real-time to keep everything up to date." },
  { question: "How easy is it to set up?", answer: "Setting up is simple. Customize the widget to fit your style with no code required." },
];

export default function LpFaq() {
  const [openIndex, setOpenIndex] = useState(0); 

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index); 
  };

  // Animation Variants
  const fromLeft = {
    hidden: { opacity: 0, x: -75 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };
  const fromRight = {
    hidden: { opacity: 0, x: 75 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };


  const [headerRef, headerInView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [imageRef, imageInView] = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-56 bg-[#f9f8ff] p-8">
     
      <div className="flex-col items-center justify-center">
        <motion.h1
          ref={headerRef}
          initial="hidden"
          animate={headerInView ? "visible" : "hidden"}
          variants={fromLeft}
          className="text-black text-[28px] md:text-[36px] font-bold mt-10"
        >
          FAQs
        </motion.h1>
        <motion.hr
          ref={headerRef}
          initial="hidden"
          animate={headerInView ? "visible" : "hidden"}
          variants={fromLeft}
          className="w-28 border-t-4 border-[#8952e3] mb-6"
        />
        <motion.h2
          ref={headerRef}
          initial="hidden"
          animate={headerInView ? "visible" : "hidden"}
          variants={fromLeft}
          className="text-black text-[16px] md:text-[18px] mb-20"
        >
          Everything you need to know about us
        </motion.h2>
        <motion.div
          ref={imageRef}
          initial="hidden"
          animate={imageInView ? "visible" : "hidden"}
          variants={fromLeft}
        >
          <Image src={faqImg} alt="FAQ" height={500} width={500} />
        </motion.div>
      </div>

      
      <div className="flex flex-col gap-4 w-full max-w-lg">
        {faqData.map((faq, index) => {
          // eslint-disable-next-line react-hooks/rules-of-hooks
          const [faqRef, faqInView] = useInView({ threshold: 0.2, triggerOnce: true });
          return (
            <motion.div
              key={index}
              ref={faqRef}
              initial="hidden"
              animate={faqInView ? "visible" : "hidden"}
              variants={fromRight}
              className={`border border-gray-300 rounded-2xl p-4 cursor-pointer transition-shadow duration-300 ${
                openIndex === index ? "shadow-[0_0_10px_2px_#8952e3]" : ""
              }`}
              onClick={() => toggleQuestion(index)}
            >
              <h3 className="text-black text-[18px] font-bold">
                {faq.question}
              </h3>
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index ? "max-h-96" : "max-h-0"
                }`}
              >
                <p className="text-black text-[16px] mt-2">
                  {faq.answer}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
