"use client";
import React, { useState } from "react";
// Next
import dynamic from "next/dynamic";
import localFont from "next/font/local";
// Content
import { HERO_BTN_TEXT } from "@/utils/content";
import Image from "next/image";
// Components
const Button = dynamic(() => import("@/app/components/Buttons/Server"));
const VideoPlayer = dynamic(() => import("@/app/components/VideoPlayer"));
// Font
const PREditorialFONT = localFont({
  src: "./fonts/ppediotorial-italic.ttf",
});
// Interface
interface HeroContentProps {
  className?: string;
}
const HeroContent = ({ className = "" }: HeroContentProps) => {
  const [information] = useState([
    { name: "Immediate access", img: 1 },
    { name: "Always up-to-date", img: 2 },
    { name: "24-day guarantee", img: 3 },
    { name: "secure purchase", img: 4 },
  ]);
  return (
    <div
      className={`text-center w-full flex flex-col px-6 justify-center items-center ${className}`}
    >
      {/** Title */}
      <h1
        data-aos="fade-in"
        data-aos-once="true"
        className="gradient-text-3 text-[24px] xs:text-[32px] md:text-[38px] lg:text-[42px] font-semibold leading-none  tracking-wide text-center uppercase "
      >
        dominate{" "}
        <span className="gradient-text-4">
          <span
            className={`${PREditorialFONT.className} lowercase font-normal text-[23px] xs:text-[30px] md:text-[38px] lg:text-[53px]`}
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
        className="mt-1 mb-7 drop-shadow-md text-white  uppercase text-[15px] sm:text-[17px] md:text-[19px] lg:text-[20px]  "
        style={{ letterSpacing: "3.8px" }}
      >
        A private network of music industry leaders
      </p>
      <VideoPlayer
        videoClassName="w-full h-full !rounded-[20px] object-cover"
        videoSRC="/videos/rapper4.mp4"
        className="h-[35rem] max-w-4xl w-full relative"
      />
      <div className="mt-10 flex items-center flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-5 ">
        <div className="flex -space-x-2.5">
          {Array(5)
            .fill(0)
            .map((_, i) => {
              return (
                <Image
                  key={i}
                  src={`/images/hero/character-${i + 1}.png`}
                  alt="character"
                  width={48}
                  height={48}
                />
              );
            })}
        </div>
        <h3 className="text-heroTagline text-[15px] sm:text-[17px] md:text-[19px] lg:text-[20px]">
          Join <span className="font-semibold text-white">3,000+ rappers</span>{" "}
          and industry professionals
        </h3>
      </div>
      {/**BTN */}
      <div
        data-aos="fade-in"
        data-aos-once="true"
        data-aos-delay="200"
        className="mt-7"
      >
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

      <div className="w-[80%] relative my-10 md:my-16 h-1">
        <Image
          src="/images/hero/line.png"
          alt="line"
          layout="fill"
          objectFit="contain"
        />
      </div>

      <div className="flex items-center flex-col space-y-6 md:space-y-0 md:flex-row md:space-x-10 lg:space-x-16 text-white">
        {information.map((v, i) => {
          return (
            <div
              key={i}
              className="flex space-x-4 items-center text-[13px] xs:text-[14px] md:text-[16px]"
            >
              <Image
                width={32}
                height={32}
                src={`/images/hero/icon-${v.img}.png`}
                alt="icon"
              />
              <p className="tracking-[2px] uppercase font-medium text-left">
                {v.name}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HeroContent;
