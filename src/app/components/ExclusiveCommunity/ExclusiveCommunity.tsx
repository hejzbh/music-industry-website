import React from "react";
// Next
import dynamic from "next/dynamic";
// Content
import {
  EXCLUSIVE_COMMUNITY_TITLE,
  EXCLUSIVE_COMMUNITY_PARAGRAPH,
} from "@/utils/content";
// CONST
// Components
const SectionTitle = dynamic(() => import("@/app/components/SectionTitle"));
const ExclusiveCommunityBanner = dynamic(
  () => import("./ExclusiveCommunityBanner")
);
// Interface
interface ExclusiveCommunityProps {
  className?: string;
}

const ExclusiveCommunity = ({ className = "" }: ExclusiveCommunityProps) => {
  return (
    <div className={`${className} overflow-hidden py-10 md:py-5 mb-20`}>
      {/** Title & Pagaraph */}
      <div className="container mx-auto text-center mb-20 ">
        <SectionTitle
          title={EXCLUSIVE_COMMUNITY_TITLE}
          description={EXCLUSIVE_COMMUNITY_PARAGRAPH}
        />
      </div>
      {/** Banner with animated card */}
      <div className="flex justify-center items-center ">
        <div className="w-[90%] py-5 relative">
          <ExclusiveCommunityBanner />
        </div>
      </div>
    </div>
  );
};

export default ExclusiveCommunity;
