"use client";
import React, { useRef } from "react";
// Next
import dynamic from "next/dynamic";
// Content
import {
  HOW_IT_WORKS_PARAGRAPH,
  HOW_IT_WORKS_TITLE,
  HOW_IT_WORKS_BTN_TEXT,
} from "@/utils/content";
// CONST
import {
  MAIN_SECTION_PARAGRAPH_AOS_ANIMATION,
  MAIN_SECTION_PARAGRAPH_AOS_DELAY,
} from "@/utils/const";
// Icons
import { FaArrowRight } from "react-icons/fa";
import ScrollSection from "../ScrollSection";
// Components
const SectionTitle = dynamic(() => import("@/app/components/SectionTitle"));
const HowItWorksColumns = dynamic(
  () => import("@/app/components/HowItWorks/HowItWorksColumns")
);
const Button = dynamic(() => import("@/app/components/Buttons/Server"));
// Interface
interface HowItWorksProps {
  className?: string;
}
const HowItWorks = ({ className = "" }: HowItWorksProps) => {
  const mainRef = useRef(null);
  return (
    <div className={`${className}`} ref={mainRef}>
      {/** Title & Pargraph */}
      <ScrollSection className=" py-10 md:py-20">
        <div className="container mx-auto  text-center px-2 md:px-0">
          <SectionTitle
            title={HOW_IT_WORKS_TITLE}
            description={HOW_IT_WORKS_PARAGRAPH}
          />
        </div>
      </ScrollSection>
      {/** Columns */}
      <HowItWorksColumns className="" mainRef={mainRef} />
      {/** Button */}
      <div
        data-aos="fade-in"
        data-aos-once="true"
        className="w-full text-center pb-0 1xl:!pb-20 !py-20 1xl:!py-0"
      >
        <Button
          titleStyle={{
            letterSpacing: "2px",
            fontWeight: "700",
          }}
          titleClassName="uppercase"
          addReflectionBelow
          className="!mx-auto iconArrow -mt-32 1xl:-mt-0"
          background="red"
          style={{
            boxShadow: "5px 2px 70px 1px rgba(213, 164, 107, 0.2)",
          }}
          title={HOW_IT_WORKS_BTN_TEXT}
          // Icon={FaArrowRight}
          iconClassName="!h-[20px]"
          iconPath="/images/arrow-right.svg"
        />
      </div>
    </div>
  );
};

export default HowItWorks;
