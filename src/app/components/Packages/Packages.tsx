import React from "react";
// Next
import dynamic from "next/dynamic";
// Content
import { PACKAGES_TITLE } from "@/utils/content";
// Const
import { packagesList } from "@/utils/const";
// Components
const SectionTitle = dynamic(() => import("@/app/components/SectionTitle"));
const Package = dynamic(() => import("./Package"));
// Interface
interface PackagesProps {
  className?: string;
}
const Packages = ({}: PackagesProps) => {
  return (
    <div>
      {/** Title & Pagaraph */}
      <div className="text-center container mx-auto">
        <SectionTitle title={PACKAGES_TITLE} description="" />
      </div>
      {/** Packages */}
      <div className="container mx-auto mt-10 items-center grid md:grid-cols-2 lg:max-w-[80%] gap-8">
        {packagesList?.map((packageItem, idx) => (
          <Package key={idx} package={packageItem} idx={idx} />
        ))}
      </div>
    </div>
  );
};

export default Packages;
