import Image from "next/image";
import laptopImg from "../../../public/landingPage/paycryptLaptop.png";
import Link from "next/link";

export default function LpHeader() {
  return (
    <div className="h-screen bg-gradient-to-r from-[#8952e3] to-[#7330e0] flex flex-col lg:flex-row items-center justify-center gap-10 px-6 md:px-16 lg:px-32 py-16 md:py-20 lg:py-28">
      <div className="flex flex-col text-center lg:text-left lg:w-1/2">
        <h1 className="text-white text-[16px] md:text-[24px] font-extrabold">
          Welcome to PayCrypt
        </h1>
        <h2 className="text-white text-[32px] sm:text-[40px] md:text-[45px] lg:text-[50px] mb-6 md:mb-8 font-extrabold leading-tight">
          Instant Payments – From Crypto to Fiat in a Tap
        </h2>
        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
          <Link href="/contact">
            <button className="bg-white text-[#8952e3] text-lg px-6 py-3 rounded-xl">
              Get Started
            </button>
          </Link>
          <Link href="/contact">
            <button className="bg-transparent text-white text-lg px-6 py-3 rounded-xl border-2 border-white">
              Explore
            </button>
          </Link>
        </div>
      </div>

      <div className="w-full lg:w-auto mt-8 md:mt-0">
        <Image
          src={laptopImg}
          alt="PayCrypt laptop"
          height={800}
          width={800}
          className="mx-auto"
        />
      </div>
    </div>
  );
}
