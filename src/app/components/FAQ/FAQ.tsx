import React from "react";
// Next
import dynamic from "next/dynamic";
// Content
import { FAQ_TITLE, FAQ_BTN_TITLE } from "@/utils/content";
// Const
import {
  CHILDREN_SECTION_AOS_ANIMATION,
  CHILDREN_SECTION_AOS_DELAY,
} from "@/utils/const";
// Components
const FAQList = dynamic(() => import("./FAQList"));
const Button = dynamic(() => import("@/app/components/Buttons/Server"));
// Interfacce
interface FAQProps {
  className?: string;
}
const FAQ = ({ className = "" }: FAQProps) => {
  return (
    <>
      <div
        data-aos={CHILDREN_SECTION_AOS_ANIMATION}
        data-aos-delay={CHILDREN_SECTION_AOS_DELAY}
        data-aos-once="true"
        className={`container mx-auto md:max-w-[70%] rounded-[20px] z-[1]  p-[1px] relative ${className}`}
      >
        {/** Linear gradient border */}
        <div className="absolute inset-0 p-[1px] z-[-1] rounded-[20px] linear-border h-full overflow-hidden">
          <div className=" bg-benefit h-[100%] rounded-[20px] absolute w-full"></div>
        </div>
        {/** Inner */}
        <div
          className="p-5 rounded-[20px]"
          style={{
            background:
              "linear-gradient(127deg, rgba(29,29,29,1) 15%, rgba(18,18,18,1) 100%)",
          }}
        >
          {/** Title */}
          <h2 className="gradient-text-5 uppercase font-semibold text-center text-[30px] md:text-[35px]">
            {FAQ_TITLE}
          </h2>
          {/** Questions and answer */}
          <FAQList className="mt-10" />
        </div>
      </div>
      {/** Button */}
      <div className="text-center">
        <Button
          background="red"
          title={FAQ_BTN_TITLE}
          titleStyle={{
            letterSpacing: "2px",
            fontWeight: "700",
          }}
          addReflectionBelow
          titleClassName="uppercase"
          className="!mx-auto mt-[5rem] iconArrow"
          // Icon={FaArrowRight}
          iconClassName="!h-[20px]"
          iconPath="/images/arrow-right.svg"
        />
      </div>
    </>
  );
};

export default FAQ;
