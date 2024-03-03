import React from "react";
// Const
import {
  MAIN_SECTION_PARAGRAPH_AOS_ANIMATION,
  MAIN_SECTION_PARAGRAPH_AOS_DELAY,
  MAIN_SECTION_TITLE_AOS_ANIMATION,
  MAIN_SECTION_TITLE_AOS_DELAY,
} from "@/utils/const";
// Interface
interface SectionTitleProps {
  className?: string;
  title: string;
  description: string;
}
const SectionTitle = ({
  className = "",
  title,
  description,
}: SectionTitleProps) => {
  return (
    <>
      <h2
        style={{ lineHeight: 1.2 }}
        data-aos={MAIN_SECTION_TITLE_AOS_ANIMATION}
        data-aos-delay={MAIN_SECTION_TITLE_AOS_DELAY}
        data-aos-once="true"
        data-aos-duration="400"
        className={`uppercase font-semibold text-[40px] sm:text-[52px] md:text-[66px] lg:text-[72px]  gradient-text-5 mb-4 ${className}`}
      >
        {title}
      </h2>
      {description && (
        <p
          data-aos={MAIN_SECTION_PARAGRAPH_AOS_ANIMATION}
          data-aos-delay={MAIN_SECTION_PARAGRAPH_AOS_DELAY}
          data-aos-once="true"
          className="text-sectionDescription text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px]  md:max-w-[70%] font-medium xl:max-w-[50%] mx-auto"
        >
          {description}
        </p>
      )}
    </>
  );
};

export default SectionTitle;
