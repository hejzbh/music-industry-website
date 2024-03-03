import React from "react";
// Next
import dynamic from "next/dynamic";
// Utils
import {
  BENEFITS_BTN_TEXT,
  BENEFITS_PARAGRAPH,
  BENEFITS_TITLE,
} from "@/utils/content";
// Components
const SectionTitle = dynamic(() => import("@/app/components/SectionTitle"));
const BenefitsSlider = dynamic(
  () => import("@/app/components/Sliders/BenefitsSlider")
);
const Button = dynamic(() => import("@/app/components/Buttons/Server"));
// Interface
interface BenefitsProps {
  className?: string;
}
const Benefits = ({ className = "" }: BenefitsProps) => {
  return (
    <div
      className={`${className} px-2 md:px-0 overflow-hidden pb-20 md:pb-[5rem]`}
    >
      {/** Title & Pagaraph */}
      <div className="sm:max-w-[1300px] mx-auto text-center w-full">
        <SectionTitle title={BENEFITS_TITLE} description={BENEFITS_PARAGRAPH} />
      </div>
      {/** Slider */}
      <div
        data-aos="fade-up"
        data-aos-delay="200"
        data-aos-duration="500"
        data-aos-once="true"
      >
        <BenefitsSlider className="mt-5 sm:mt-10" />
      </div>
      {/* Button */}
      <div className="text-center" data-aos="fade-in" data-aos-once="true">
        <Button
          title={BENEFITS_BTN_TEXT}
          titleStyle={{
            letterSpacing: "2px",
            fontWeight: "700",
          }}
          titleClassName="uppercase"
          className="!mx-auto iconArrow"
          background="red"
          addReflectionBelow
          style={{
            background:
              "linear-gradient(90deg, rgba(204,17,17,1) 46%, rgba(160,5,5,1) 100%)",
            boxShadow: "0 2px 60px 3px rgba(213, 164, 107, 0.2)",
          }}
          // Icon={FaArrowRight}
          iconClassName="!h-[20px]"
          iconPath="/images/arrow-right.svg"
        />
      </div>
    </div>
  );
};

export default Benefits;
