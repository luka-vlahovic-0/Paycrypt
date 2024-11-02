import Image from "next/image";
import React from "react";
import logo from "../../../public/landingPage/paycryptLogo.png";
import githubLogo from "../../../public/landingPage/plaviGithub.png";
import linkedInLogo from "../../../public/landingPage/okrugliLinkedinLogo.png";
import Link from "next/link";

export default function LpFooter() {
  return (
    <>
      <footer className="bg-[#f9f8ff] flex flex-col md:flex-row items-center justify-center gap-20 md:gap-60 px-8 md:px-32 py-10">
        <div className="flex flex-col items-start max-w-3xl">
          <Image src={logo} alt="PayCrypt logo" height={150} width={150} />
          <hr className="w-28 border-t-4 border-[#8952e3] mb-6" />
          <h2 className="text-black text-[16px] md:text-[18px]">
            Paycrypt is a seamless and flexible payment solution designed to
            streamline transactions for businesses and their customers. With
            Paycrypt, you can easily create payment requests, manage transaction
            records, and keep all payments synchronized in real-time, ensuring
            everything is up to date. The platform offers a smooth setup
            process, customizable features, and an auto-update function to keep
            orders and payments aligned with your business needs.
          </h2>
        </div>
        <div className="flex flex-col items-center justify-center md:mt-10">
          <Link href="/contact">
            <button className="bg-[#8952e3] text-white font-bold w-56 text-2xl px-6 py-3 rounded-xl mb-10">
              Get Started
            </button>
          </Link>

          
        </div>
      </footer>
      <div className="flex flex-row items-center justify-center bg-[#f9f8ff]">
        <p className="text-slate-600 text-[16px] md:text-[18px] p-2 font-bold">
          © 2024 Luka Vlahovic. All rights reserved.
        </p>
        <div className="flex flex-row gap-4">
            <a
              href="https://github.com/luka-vlahovic-0"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit our GitHub profile"
            >
              <Image
                src={githubLogo}
                alt="GitHub logo"
                height={40}
                width={40}
                className="cursor-pointer"
              />
            </a>

            <a
              href="https://www.linkedin.com/in/luka-vlahovic-657162281/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit our LinkedIn profile"
            >
              <Image
                src={linkedInLogo}
                alt="LinkedIn logo"
                height={40}
                width={40}
                className="cursor-pointer"
              />
            </a>
          </div>
      </div>
    </>
  );
}
