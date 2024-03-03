import React from "react";
// Next
import Image from "next/image";
import dynamic from "next/dynamic";
// TS
import { Testimonial } from "@/types";
// Utils
import { boldMarkedText } from "@/utils/helpers";
// Components
const Stats = dynamic(() => import("./Stats"));
const VideoPlayer = dynamic(() => import("@/app/components/VideoPlayer"));
// Interface
interface TestimonialCardProps {
  className?: string;
  testimonial: Testimonial;
  onClick?: () => void;
}
const TestimonialCard = ({
  className = "",
  testimonial,
  onClick,
}: TestimonialCardProps) => {
  return (
    <div
      className={`rounded-[20px] cursor-pointer relative overflow-hidden p-[1px] ${className}`}
      onClick={onClick && onClick}
    >
      {/** Linear gradient border */}
      <div className="absolute inset-0 p-[1px] z-[-1] rounded-[20px] linear-border h-full overflow-hidden">
        <div className=" bg-benefit h-[100%] rounded-[20px] absolute w-full"></div>
      </div>
      {/** Inner */}
      <div
        className="rounded-[20px] px-4 py-6  sm:py-4 flex items-start sm:items-center flex-col space-y-2 sm:space-y-6 md:space-y-0 md:flex-row md:space-x-6 "
        style={{
          background:
            "linear-gradient(180deg, rgba(29,29,29,1) 5%, rgba(18,18,18,1) 100%)",
        }}
      >
        {/** Testimonial image */}
        {/**    <Image
          loading="lazy"
          className="rounded-[20px]"
          src={testimonial?.imageSRC}
          width={230}
          height={350}
          alt={process.env.NEXT_PUBLIC_ALT_IMAGE as string}
        /> */}
        <h2 className="block sm:hidden gradient-text-4 uppercase font-semibold text-[24px] preSM:text-[30px]">
          {testimonial?.title}
        </h2>
        <VideoPlayer
          videoClassName="h-full !rounded-[20px] object-cover absolute top-[1px] left-[1px] bottom-[1px] right-[1px]"
          videoSRC="/videos/singer.mp4"
          className="h-full relative min-h-[370px] min-w-full md:min-w-[270px]"
        />
        {/** Text */}
        <div className="text-left">
          {/** Title */}
          <h2 className="hidden sm:block gradient-text-4 uppercase font-semibold text-[24px] preSM:text-[30px]">
            {testimonial?.title}
          </h2>
          {/** Paragraph */}
          <p className="text-white drop-shadow-md text-[13px] xs:text-[14px] preSM:text-[16px] sm:text-[17px] my-5 md:max-w-[95%]">
            {testimonial?.description}
          </p>
          {/** Description */}
          <p className=" drop-shadow-sm text-[13px] xs:text-[14px] sm:text-[15px] text-benefitDescription">
            {boldMarkedText({
              text: testimonial.customerDescription,
              boldClassName: "text-white/70 font-semibold",
            })}
          </p>
          {/** Line */}
          <span
            style={{
              background:
                " linear-gradient(90deg, rgba(255,255,255,0.4755077030812324) 5%, rgba(50,50,51,0.5802696078431373) 100%)",
            }}
            className="block w-full h-[1px] rounded-md my-3"
          ></span>
          {/** Stats */}
          <Stats
            className="mt-3 justify-center md:justify-start"
            statsValues={testimonial.stats}
          />
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
