"use client";
import React, { useEffect } from "react";
// Next
import dynamic from "next/dynamic";
import Image from "next/image";
// Content
import {
  EXCLUSIVE_COMMUNITY_BANNER_TITLE,
  EXCLUSIVE_COMMUNITY_BTN_TEXT,
} from "@/utils/content";
// Const
import {
  CHILDREN_SECTION_AOS_ANIMATION,
  CHILDREN_SECTION_AOS_DELAY,
  exclusiveCommunityList,
} from "@/utils/const";
// Icons
// import { FaArrowRight } from "react-icons/fa";
import { boldMarkedText } from "@/utils/helpers";
// Components
const Button = dynamic(() => import("@/app/components/Buttons/Server"));
// Interface
interface ExclusiveCommunityBannerProps {
  className?: string;
}

const ExclusiveCommunityBanner = ({
  className = "",
}: ExclusiveCommunityBannerProps) => {
  useEffect(() => {
    const getWidth = () => {
      const placeholder: HTMLDivElement = document.getElementById(
        "banner-placeholder"
      ) as HTMLDivElement;
      const image: HTMLImageElement = document.getElementById(
        "banner-image"
      ) as HTMLImageElement;

      if (placeholder && image) {
        placeholder.style.width = `${image.offsetWidth}px`;
        placeholder.style.height = `${image.clientHeight}px`;
      }
    };
    getWidth();
    window.addEventListener("resize", getWidth);
    return () => window.removeEventListener("resize", getWidth);
  }, []);

  return (
    <>
      <Image
        src="/images/rapcult-card.webp"
        width={350}
        height={350}
        alt={`${process.env.NEXT_PUBLIC_NAME} CARD`}
        id="banner-image"
        className="absolute z-10 max-w-[12rem] xs:max-w-[15rem] md:max-w-none scale-125 md:scale-110 xl:scale-[1.5] left-1/2 -translate-x-1/2 xl:-translate-x-[125%] 
        xl:top-1/2 xl:-translate-y-1/2 "
      />

      <div
        data-aos={CHILDREN_SECTION_AOS_ANIMATION}
        data-aos-delay={CHILDREN_SECTION_AOS_DELAY}
        data-aos-once="true"
        className={`rounded-[20px] overflow-hidden w-full p-[1px] z-[1] ${className}`}
      >
        {/** Linear gradient border */}
        <div className="absolute inset-0 p-[1px] z-[-1] rounded-[20px] linear-border h-full overflow-hidden">
          <div className="bg-benefit h-[100%] rounded-[20px] absolute w-full"></div>
        </div>
        {/** Inner */}
        <div
          style={{
            background:
              "linear-gradient(94deg, rgba(29,29,29,1) 50%, rgba(18,18,18,1) 100%)",
          }}
          className="py-20 flex-1 relative rounded-[20px] w-full flex flex-col xl:flex-row items-center justify-between px-10 xl:px-20"
        >
          {/** Placeholder */}*{" "}
          <div
            id="banner-placeholder"
            className="h-1 opacity-0 scale-110 xl:scale-[1.5]"
          ></div>
          {/** Text */}
          <div className="flex flex-col items-center text-center xl:text-left xl:items-start space-y-12">
            {/** Title */}
            <h2 className="text-white drop-shadow-md text-[17px] md:text-[18px] lg:text-[20px]  lg:max-w-md 2xl:max-w-lg">
              {EXCLUSIVE_COMMUNITY_BANNER_TITLE}
            </h2>
            {/** List */}
            <div className="my-[2rem] space-y-8 flex flex-col w-auto px-2">
              {exclusiveCommunityList?.map((text, idx) => (
                <div
                  key={idx}
                  className="flex text-left items-start justify-center lg:justify-start space-x-4 max-w-xs"
                >
                  <Image
                    width={24}
                    height={24}
                    alt={`Check`}
                    src="/images/check.png"
                    className="w-full max-w-[17px] mt-2 md:max-w-[19px] lg:max-w-[24px]"
                  />
                  <span className=" drop-shadow-sm text-[14px] md:text-[15px] lg:text-[16px] text-benefitDescription">
                    {boldMarkedText({
                      text: text,
                      boldClassName: "text-white/70 font-semibold",
                    })}
                  </span>
                </div>
              ))}
            </div>
            {/**BTN */}
            <div>
              <Button
                title={EXCLUSIVE_COMMUNITY_BTN_TEXT}
                titleStyle={{
                  letterSpacing: "2px",
                  fontWeight: "700",
                }}
                titleClassName="uppercase"
                className="mx-auto lg:mx-0 w-auto iconArrow "
                background="red"
                // Icon={FaArrowRight}
                iconClassName="!h-[20px]"
                iconPath="/images/arrow-right.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExclusiveCommunityBanner;
