import React from "react";
// Next
import dynamic from "next/dynamic";
// Content
import {
  SUCCESS_STORIES_TITLE,
  SUCCESS_STORIES_PARAGRAPH,
} from "@/utils/content";
// CONST
import {
  MAIN_SECTION_PARAGRAPH_AOS_ANIMATION,
  MAIN_SECTION_PARAGRAPH_AOS_DELAY,
} from "@/utils/const";
// Components
const SectionTitle = dynamic(() => import("@/app/components/SectionTitle"));
const SuccessStoriesSlider = dynamic(
  () => import("@/app/components/Sliders/SuccessStoriesSlider")
);
// Interface
interface SuccessStoriesProps {
  className?: string;
}

const SuccessStories = ({ className = "" }: SuccessStoriesProps) => {
  return (
    <div
      className={`${className} px-2 md:px-0 overflow-hidden pb-16 md:pb-[1rem]`}
    >
      {/** Title & Pagaraph */}
      <div className="container mx-auto text-center">
        <SectionTitle
          title={SUCCESS_STORIES_TITLE}
          description={SUCCESS_STORIES_PARAGRAPH}
        />
      </div>
      {/** Slider */}
      <div data-aos="fade-up" data-aos-delay="200" data-aos-duration="500">
        <SuccessStoriesSlider className="mt-10" />
      </div>
    </div>
  );
};

export default SuccessStories;
