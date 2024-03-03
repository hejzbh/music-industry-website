import React from "react";
// Next
import dynamic from "next/dynamic";
// Components
const CreatorSlider = dynamic(
  () => import("@/app/components/Sliders/CreatorsSlider")
);
// Interface
interface CreatorsProps {
  className?: string;
}
const Creators = ({ className = "" }: CreatorsProps) => {
  return (
    <div
      className={`px-2 md:px-0 py-[6rem] md:py-[8rem] relative ${className}`}
    >
      {/** Upper title */}
      <h2
        data-aos="fade-in"
        data-aos-once="true"
        data-aos-delay="250"
        style={{ letterSpacing: ".8px", lineHeight: 1.2 }}
        className=" container mx-auto uppercase text-[25px] md:text-[29px] lg:text-[32px] font-semibold -mb-10 preSM:-mb-16 smallSM:-mb-8"
      >
        <span className="gradient-text-1">Creative</span>{" "}
        <span className="block gradient-text-2">community</span>
      </h2>
      {/** Slider */}
      <div>
        <CreatorSlider className="my-5" />
      </div>
      {/** Bottom title */}
      <h2
        data-aos="fade-in"
        data-aos-once="true"
        data-aos-delay="250"
        style={{ letterSpacing: "1.7px", lineHeight: 1.2 }}
        className="container mx-auto text-creatorsBottomText text-[25px] md:text-[29px] lg:text-[32px] text-right uppercase -mt-10 preSM:-mt-16 smallSM:-mt-12"
        // loop: true,
      >
        of creators <span className="text-right block">like you</span>
      </h2>
    </div>
  );
};

export default Creators;
