import React from "react";
// Next
import dynamic from "next/dynamic";
// Content
import { FOOTER_LOGO_TITLE, FOOTER_COPYRIGHT } from "@/utils/content";
// Components
const FooterLinks = dynamic(
  () => import("@/app/components/Footer/FooterLinks")
);
const SocialMedia = dynamic(() => import("@/app/components/SocialMedia"));
// Interface
interface FooterProps {
  className?: string;
}
const Footer = ({ className = "" }: FooterProps) => {
  const year = new Date().getFullYear();

  return (
    <div
      data-aos="fade-in"
      data-aos-once="true"
      className={` px-2 xl:px-20 mt-10 md:mt-[5rem] ${className}`}
    >
      {/** Line */}
      <div
        className="w-full rounded-sm shadow-sm min-h-[2px]"
        style={{
          background:
            "linear-gradient(94deg, rgba(255,255,255,0.233657212885154064) 30%, rgba(50,50,51,0.8631827731092436) 100%)",
        }}
      ></div>
      {/** Footer content inner */}
      <div className="md:max-w-[95%] my-10 3xl:max-w-[80%] mx-auto grid bigMD:grid-cols-3 gap-10 bigMD:gap-2 justify-center items-center text-center md:text-left">
        {/** Logo */}
        <div>
          <h2
            className="uppercase drop-shadow-md text-[28px] xl:text-[32px] text-white font-bold"
            style={{ letterSpacing: "3px" }}
          >
            {FOOTER_LOGO_TITLE}
          </h2>
          <p className="text-footerText mt-[2px] text-[15px] xl:text-[16px]">
            &copy; {FOOTER_COPYRIGHT?.replaceAll(`{YEAR}`, year?.toString())}
          </p>
        </div>
        {/**  Links */}
        <div className="text-center">
          <FooterLinks />
        </div>
        {/** Social media */}
        <div className="text-center">
          <SocialMedia className="justify-center bigMD:justify-end" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
