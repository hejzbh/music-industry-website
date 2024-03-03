import React from "react";
// Next
import dynamic from "next/dynamic";
// TS
import { Benefit } from "@/types";
// Utils
import { boldMarkedText } from "@/utils/helpers";

const VideoPlayer = dynamic(() => import("@/app/components/VideoPlayer"));

// Interface
interface BenefitCardProps {
  className?: string;
  benefit: Benefit;
  isActiveInSlider?: boolean;
  onClick?: () => void;
}

const BenefitCard = ({
  className = "",
  benefit,
  isActiveInSlider,
  onClick,
}: BenefitCardProps) => {
  return (
    <div
      onClick={onClick && onClick}
      className={`transition-all relative cursor-pointer duration-300 ease-in-out ${
        isActiveInSlider ? "md:translate-y-[-3%] md:pb-10" : ""
      } ${className}`}
    >
      {/** Text box */}
      <div className="relative">
        {/** Linear gradient border */}
        <div className="absolute inset-0  z-[-1] rounded-[22px] linear-border h-full overflow-hidden">
          <div className=" bg-benefit h-[100%] rounded-[20px] absolute w-full"></div>
        </div>
        {/** Text */}
        <div className="relative rounded-[20px]">
          <div
            style={{
              background:
                "linear-gradient(180deg, rgba(29,29,29,1) 5%, rgba(18,18,18,1) 100%)",
            }}
            className="p-6 preSM:p-10 text-left preSM:text-center bigMD:text-left max-w-[calc(100%-2px)]   mx-auto relative !pb-[7rem] preSM:!pb-[8rem] rounded-[20px] shadow-sm"
          >
            {/** Title */}
            <h2 className="gradient-text-6 text-[25px] sm:text-[27px] lg:text-[29px] uppercase font-semibold drop-shadow-md">
              {benefit.title}
            </h2>
            {/** Subtitle */}
            <p className="text-white drop-shadow-sm text-[16px] sm:text-[17px] md:text-[18px] py-5 preSM:py-7 bigMD:max-w-[90%]">
              {benefit.subtitle}
            </p>
            {/** Description */}
            <p className=" drop-shadow-sm text-[14px] sm:text-[15px] md:text-[16px] text-benefitDescription">
              {boldMarkedText({
                text: benefit.description,
                boldClassName: "text-white/70 font-semibold",
              })}
            </p>
          </div>
        </div>
      </div>

      {/** Image */}
      <div
        className={`p-10 pt-0 pb-0 mt-[-100px] relative h-full ${
          isActiveInSlider
            ? "min-h-[18em] sm:min-h-[374px]"
            : "min-h-[18em] sm:min-h-[334px]"
        }`}
      >
        <VideoPlayer
          videoClassName="w-full h-full !rounded-[20px] object-cover"
          videoSRC={benefit?.videoSRC}
          className="absolute top-0 left-5 right-5 md:left-10 md:right-10 overflow-hidden bottom-0 h-full  rounded-[20px]"
        />
      </div>
    </div>
  );
};
//  style={{
//  background:
//  "linear-gradient(180deg, rgba(18,18,18,1) 5%, rgba(29,29,29,1) 100%)",
//}}

export default BenefitCard;
