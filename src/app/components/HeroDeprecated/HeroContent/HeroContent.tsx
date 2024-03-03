import React from "react";
// Next
import dynamic from "next/dynamic";
import localFont from "next/font/local";
// Content
import { HERO_BTN_TEXT } from "@/utils/content";
// Icons
import { FaArrowRight } from "react-icons/fa";
// Components
const Button = dynamic(() => import("@/app/components/Buttons/Server"));
// Font
const PREditorialFONT = localFont({
  src: "./fonts/ppediotorial-italic.ttf",
});
// Interface
interface HeroContentProps {
  className?: string;
}
const HeroContent = ({ className = "" }: HeroContentProps) => {
  return (
    <div className={`text-center ${className}`}>
      {/** Title */}
      <h1
        data-aos="fade-in"
        data-aos-once="true"
        className="gradient-text-3 text-[48px] xs:text-[60px] md:text-[100px] lg:text-[110px] font-semibold leading-none md:leading-[120px] tracking-wide text-center uppercase "
      >
        <span>dom</span>inate
        <br />
        <span className="gradient-text-4">
          {" "}
          <span
            className={`${PREditorialFONT.className} lowercase font-normal text-[55px] xs:text-[80px] md:text-[120px] lg:text-[135px]`}
          >
            the{" "}
          </span>
          world stage
        </span>
      </h1>
      {/** Paragraph */}
      <p
        data-aos="fade-in"
        data-aos-once="true"
        data-aos-delay="200"
        className="my-[2.5rem] md:my-[2.8rem] drop-shadow-md text-white  uppercase text-[16px] sm:text-[18px] md:text-[20px] lg:text-[21px]  "
        style={{ letterSpacing: "3.8px" }}
      >
        A private network <br /> of music industry leaders
      </p>
      {/**BTN */}
      <div data-aos="fade-in" data-aos-once="true" data-aos-delay="200">
        <Button
          title={HERO_BTN_TEXT}
          titleStyle={{
            letterSpacing: "2px",
            fontWeight: "700",
          }}
          titleClassName="uppercase"
          className="!mx-auto iconArrow"
          background="red"
          // Icon={FaArrowRight}
          iconClassName="!h-[20px]"
          iconPath="/images/arrow-right.svg"
          addReflectionBelow
        />
      </div>
    </div>
  );
};

export default HeroContent;
