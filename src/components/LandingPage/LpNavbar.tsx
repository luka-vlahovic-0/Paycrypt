import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import logoImg from "../../../public/landingPage/paycryptLogo.png";
import Image from "next/image";
import Link from "next/link";

export default function LpNavbar() {
  return (
    <nav className="flex items-center justify-between p-4 px-6 md:px-16 lg:px-24 bg-white text-black">
      <Link href="/">
        <Image
          src={logoImg}
          alt="PayCrypt logo"
          className="object-contain h-14 w-28"
        />
      </Link>

      <div className="flex items-center">
        <SignedOut>
          <SignInButton mode="modal">
            <button className="mx-2 bg-white text-black text-lg px-4 py-2 rounded">
              Login
            </button>
          </SignInButton>
          <SignUpButton mode="modal">
            <button className="mx-2 bg-[#8952e3] text-white text-lg px-6 py-3 rounded-xl">
              Sign Up
            </button>
          </SignUpButton>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  );
}
