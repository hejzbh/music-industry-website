import React from "react";
// Next
import dynamic from "next/dynamic";
// Content
import { SPONSORS_TITLE } from "@/utils/content";
// Components
const SponsorsSlideShow = dynamic(
  () => import("@/app/components/Sponsors/SponsorsSlideShow")
);
// Interface
interface SponsorsProps {
  className?: string;
}
const Sponsors = ({ className = "" }: SponsorsProps) => {
  return (
    <div
      data-aos="fade-in"
      data-aos-delay="200"
      data-aos-once="true"
      className={`mt-8 md:mt-4 mx-auto ${className}`}
    >
      {/** Title */}
      <h2
        style={{ letterSpacing: "4px" }}
        className="drop-shadow-md text-white text-[18px] md:text-[20px] lg:text-[21px] uppercase text-center"
      >
        {SPONSORS_TITLE}
      </h2>
      {/** Sponsors slide */}
      <div className="overflow-hidden">
        <SponsorsSlideShow className="mt-10" />
      </div>
    </div>
  );
};

export default Sponsors;
