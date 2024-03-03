"use client";
import React, { useState } from "react";
// Next
import Image from "next/image";
// TS
import { HowItWork } from "@/types";

// Interface
interface HowItWorksCardProps {
  className?: string;
  isReversed: boolean;
  idx: number;
  card: HowItWork;
  move?: any;
  mobile: boolean;
}
const HowItWorksCard = ({
  className = "",
  isReversed,
  card,
  idx,
  move,
  mobile,
}: HowItWorksCardProps) => {
  const [titleWidth] = useState(idx === 1 ? "600px" : "470px");
  const [descriptionWidth] = useState(
    idx === 1 || idx === 2 ? "500px" : "470px"
  );
  return mobile ? (
    <div className="flex 1xl:hidden keen-slider__slide bg-[#121212] w-full flex-col">
      {/** Image */}

      {/** Text */}
      <div
        data-aos={isReversed ? "fade-right" : "fade-left"}
        data-aos-once="true"
        className={`flex-[1] px-2 z-[2] flex justify-center items-center flex-col w-full`}
      >
        {/** Title */}
        <h2
          style={{ letterSpacing: "1px", lineHeight: 1 }}
          className="uppercase text-center pt-3 lg:pt-0 drop-shadow-lg text-[26px] md:text-[28px] lg:text-[33px] xl:text-[36px] 2xl:text-[40px] gradient-text-4 font-semibold max-w-[90%] lg:max-w-[80%] 1xl:max-w-[60%]"
        >
          {card.title}
        </h2>

        <div className="relative my-10 w-full">
          <div className="absolute w-full h-[1px] flex justify-center items-center left-0 right-0 bg-howItWorksLineBG">
            <div className="flex items-center space-x-10">
              {Array(4)
                .fill(0)
                .map((v, i) => {
                  return (
                    <div
                      key={i}
                      // href={i !== j ? `/#how-it-works-${j}` : ""}
                      onClick={(e) =>
                        i === idx ? e.preventDefault() : move(i)
                      }
                      className={`${
                        i === idx
                          ? "w-[20px] h-[20px] cursor-auto"
                          : "w-[12px] h-[12px] cursor-pointer"
                      } rounded-full bg-howItWorksLineBG`}
                    ></div>
                  );
                })}
            </div>
          </div>
        </div>

        <div className="flex items-start md:items-center md:text-center flex-col px-6 ">
          {/** Description */}
          <p
            style={{ letterSpacing: ".7px" }}
            className="text-white drop-shadow-sm mb-5 font-[400] text-[15px] md:text-[17px] lg:text-[18px] 1xl:text-[19px] 2xl:text-[21px]  md:max-w-[90%] lg:max-w-[70%]"
          >
            {card.description}
          </p>
          {/** List */}
          <ul className="space-y-3 flex flex-col items-start">
            {card?.list?.map((text, idx) => (
              <li
                className="text-howItWorkList justify-start w-full  text-[15px] lg:text-[16px] 2xl:text-[18px] drop-shadow-sm flex items-center space-x-4"
                key={idx}
              >
                <Image
                  width={22}
                  height={10}
                  alt={`Check`}
                  src="/images/check.png"
                  className=" w-full max-w-[17px] md:max-w-[19px] lg:max-w-[22px]"
                />
                <span>{text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="flex-[1] 1xl:flex-[2] relative z-[1]">
        {/** Card image */}
        <Image
          className={`z-[-2] w-full`}
          loading="lazy"
          src={card.imageSRC}
          alt={card.title}
          objectFit="cover"
          width={1000}
          height={800}
          quality={80}
        />
        {/** Join rapcult text image */}
        <Image
          loading="lazy"
          alt={process.env.NEXT_PUBLIC_ALT_IMAGE as string}
          src="/images/how-it-works/joinRapcultText.png"
          width={400}
          height={250}
          className={`absolute top-[50%] w-full max-w-[180px] lg:max-w-[250px] left-[50%] 1xl:max-w-[400px] ${
            isReversed ? "lg:left-[50%]" : "lg:left-[40%]"
          } translate-x-[-50%] translate-y-[-50%] z-[-1]`}
        />
      </div>
    </div>
  ) : (
    // desktop
    <div
      className={`hidden 1xl:flex justify-between h-full xl:h-screen overflow-hidden bg-[#121212] w-full items-center flex-col space-y-4 lg:space-y-0 ${
        isReversed ? "lg:flex-row-reverse" : "lg:flex-row"
      } ${className}`}
      id={`how-it-works-${idx}`}
    >
      {/** Image */}
      <div className="flex-[1] 1xl:flex-[2] relative z-[1]">
        {/** Card image */}
        <Image
          className={`z-[-2] w-full lg:max-h-[1000px] max-w-[1000px]  ${
            isReversed ? "lg:ml-auto" : "lg:mr-auto"
          }`}
          loading="lazy"
          src={card.imageSRC}
          alt={card.title}
          objectFit="cover"
          width={1000}
          height={800}
          quality={80}
        />
        {/** Join rapcult text image */}
        <Image
          loading="lazy"
          alt={process.env.NEXT_PUBLIC_ALT_IMAGE as string}
          src="/images/how-it-works/joinRapcultText.png"
          width={400}
          height={250}
          className={`absolute top-[50%] w-full max-w-[180px] lg:max-w-[250px] left-[50%] 1xl:max-w-[400px] ${
            isReversed ? "lg:left-[60%]" : "lg:left-[30%]"
          } translate-x-[-50%] translate-y-[-50%] z-[-1]`}
        />
      </div>

      {/** Text */}
      <div
        data-aos={isReversed ? "fade-right" : "fade-left"}
        data-aos-once="true"
        className={`flex-[1] px-2 z-[2] text-center lg:text-left ${
          isReversed
            ? "lg:pl-[7rem] xl:pl-[10rem] 3xl:pl-[22rem]"
            : "1xl:ml-[-250px]"
        }`}
      >
        {/** Title */}
        <h2
          style={{ letterSpacing: "1px", lineHeight: 1, width: titleWidth }}
          className={`uppercase pt-3 lg:pt-0 drop-shadow-lg text-[26px] md:text-[28px] lg:text-[33px] xl:text-[36px] 2xl:text-[40px] gradient-text-4 font-semibold`}
        >
          {card.title}
        </h2>
        {/** Description */}
        <p
          style={{ letterSpacing: ".7px", width: descriptionWidth }}
          className="text-white drop-shadow-sm my-7 font-[500] text-[15px] md:text-[17px] lg:text-[18px] 1xl:text-[20px]    leading-7"
        >
          {card.description}
        </p>
        {/** List */}
        <ul className="space-y-3">
          {card?.list?.map((text, idx) => (
            <li
              className="text-howItWorkList justify-center lg:justify-start text-[15px] lg:text-[16px] 2xl:text-[18px] drop-shadow-sm flex items-center space-x-2"
              key={idx}
            >
              <Image
                width={22}
                height={10}
                alt={`Check`}
                src="/images/check.png"
                className="mr-[6px] lg:mr-3 w-full max-w-[17px] md:max-w-[19px] lg:max-w-[22px]"
              />
              {text}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HowItWorksCard;
