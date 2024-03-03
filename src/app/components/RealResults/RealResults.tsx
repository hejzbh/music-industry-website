import React from "react";
// Next
import dynamic from "next/dynamic";
// Content
import {
  REAL_RESULTS_PARAGRAPH,
  REAL_RESULTS_TITLE,
  REAL_RESULTS_BTN_TEXT,
  REAL_RESULTS_FIRST_DESCRIPTION,
  REAL_RESULTS_SECOND_DESCRIPTION,
} from "@/utils/content";
// Icons
import { FaArrowRight } from "react-icons/fa";
import { boldMarkedText } from "@/utils/helpers";
import Image from "next/image";
// Components
const SectionTitle = dynamic(() => import("@/app/components/SectionTitle"));
const Button = dynamic(() => import("@/app/components/Buttons/Server"));
const RealResultsImage = dynamic(() => import("./RealResultsImage"));
// Interface
interface RealResultsProps {
  className?: string;
}

const RealResults = ({ className = "" }: RealResultsProps) => {
  return (
    <div className={`${className}  overflow-hidden pb-20 md:pb-[5rem]`}>
      {/** Title & Pagaraph */}
      <div className="text-center container mx-auto">
        <SectionTitle
          title={REAL_RESULTS_TITLE}
          description={REAL_RESULTS_PARAGRAPH}
        />
      </div>
      {/** Content */}
      <div className="flex flex-1 justify-center items-center">
        <div
          data-aos="fade-in"
          data-aos-once="true"
          data-aos-delay="200"
          className="flex justify-center flex-col lg:flex-row items-center container  mt-6 space-y-10 lg:space-y-0 lg:space-x-14"
        >
          {/** Text */}
          <div className="text-center lg:text-left flex items-center lg:items-start flex-col max-w-[471px] w-full">
            {/** First description */}
            <p className="max-w-md text-white drop-shadow-sm text-[18px] sm:text-[20px] leading-7 font-medium">
              {REAL_RESULTS_FIRST_DESCRIPTION}
            </p>
            {/** Second Description */}
            <p className="w-full drop-shadow-sm text-[15px] sm:text-[16px] font-normal text-benefitDescription my-10 leading-6">
              {boldMarkedText({
                text: REAL_RESULTS_SECOND_DESCRIPTION,
                boldClassName: "text-white/70 font-bold",
              })}
            </p>
            {/** BTN */}
            <div className="mb-10">
              <Button
                title={REAL_RESULTS_BTN_TEXT}
                titleStyle={{
                  letterSpacing: "2px",
                  fontWeight: "700",
                }}
                titleClassName="uppercase"
                className="mx-auto bigMD:mx-0 iconArrow"
                background="red"
                // Icon={FaArrowRight}
                iconClassName="!h-[20px]"
                iconPath="/images/arrow-right.svg"
              />
            </div>
          </div>
          {/* Image */}

          <Image
            loading="lazy"
            src={"/images/rrTest.png"}
            alt={process.env.NEXT_PUBLIC_ALT_IMAGE as string}
            width={670}
            height={721}
            className=" w-full h-full lg:max-w-[60%] xl:max-w-[670px] xl:max-h-[721px]"
          />
          {/* <div> */}
          {/* <RealResultsImage /> */}
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default RealResults;
