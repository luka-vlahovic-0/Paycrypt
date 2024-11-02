import LpFaq from "@/components/LandingPage/LpFaq";
import LpFooter from "@/components/LandingPage/LpFooter";
import LpHeader from "@/components/LandingPage/LpHeader";
import LpHowItWorks from "@/components/LandingPage/LpHowItWorks";
import LpOurSolution from "@/components/LandingPage/LpOurSolution";
import LpReady from "@/components/LandingPage/LpReady";
import LpSubHeader from "@/components/LandingPage/LpSubHeader";
import LpWhyChoose from "@/components/LandingPage/LpWhyChoose";

export const metadata = {
  title: "Contact Us - PayCrypt | Your Gateway to Seamless Crypto Payments",
  description: "Get in touch with PayCrypt to learn more about our seamless crypto payment solutions. We're here to help you streamline your transactions and enhance your payment processes."
};



export default function Home() {
  return (
    <>
      <LpHeader />
      <LpSubHeader />
      <LpHowItWorks />
      <LpOurSolution />
      <LpWhyChoose />
      <LpFaq />
      <LpReady />
      <LpFooter />
    </>
  );
}
