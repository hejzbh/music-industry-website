import React from "react";
// Next
import dynamic from "next/dynamic";
// Content
import { SUCCESS_BANNER_BTN_TEXT, SUCCESS_BANNER_TITLE } from "@/utils/content";
// Icons
import { FaArrowRight } from "react-icons/fa";
import {
  CHILDREN_SECTION_AOS_ANIMATION,
  CHILDREN_SECTION_AOS_DELAY,
} from "@/utils/const";
// Components
const Button = dynamic(() => import("@/app/components/Buttons/Server"));
// Interface
interface SuccessStoryBannerProps {
  className?: string;
}
const SuccessStoryBanner = ({ className = "" }: SuccessStoryBannerProps) => {
  return (
    <div
      data-aos={CHILDREN_SECTION_AOS_ANIMATION}
      data-aos-delay={CHILDREN_SECTION_AOS_DELAY}
      data-aos-once="true"
      className={`container  mx-auto lg:max-w-[80%] my-[4rem] mt-20 md:my-5 px-2 md:px-0 ${className}`}
      style={{
        filter:
          "drop-shadow(0px 4px 30px rgba(213, 164, 107, 0.3))  drop-shadow(0px 12px 14px rgba(212, 38, 38, 0.15)) drop-shadow(0px 12px 7px rgba(212, 38, 38, 0.10))",
      }}
    >
      <div className="animatedGradientRed rounded-[20px] p-[1px] ">
        <div
          className="shadow-md rounded-[20px] p-[2rem]  flex-col md:flex-row justify-center py-[3rem] md:p-[4rem] md:py-[5rem] flex items-center w-full space-y-7 md:space-y-0 text-center md:text-left md:justify-between"
          style={{
            background:
              "linear-gradient(114deg, rgba(204,17,17,1) 38%, rgba(160,5,5,1) 100%)",
            boxShadow: "0 4px 120px 0 rgba(213, 164, 107, 0.3)",
          }}
        >
          {/** Title */}
          <h2 className="uppercase drop-shadow-xl text-[25px] md:text-[28px] xl:text-[32px] font-bold max-w-[90%] smallSM:max-w-[70%] bigMD:max-w-[57%] lg2x:max-w-[50%] 1.2xl:max-w-[45%] 2xl:max-w-[37%] gradient-text-4">
            {SUCCESS_BANNER_TITLE}
          </h2>
          {/**BTN */}
          <div>
            <Button
              title={SUCCESS_BANNER_BTN_TEXT}
              titleStyle={{
                letterSpacing: "2px",
                fontWeight: "700",
              }}
              titleClassName="uppercase"
              className="!mx-auto iconArrow"
              background="black"
              // Icon={FaArrowRight}
              iconClassName="!h-[20px]"
              iconPath="/images/arrow-right.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessStoryBanner;
