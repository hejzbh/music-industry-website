import React from "react";
// Next
import Image from "next/image";
// Interface
interface StatsProps {
  className?: string;
  statsValues: {
    value: string;
    name: string;
  }[];
}
const Stats = ({ className = "", statsValues }: StatsProps) => {
  return (
    <div
      className={`${className} flex items-center justify-between sm:justify-center space-x-4 preSM:space-x-10`}
    >
      {statsValues?.map((statsValue, idx) => (
        <div className="text-center md:text-left" key={idx}>
          {/** Value & Arrow */}
          <div className="flex items-center space-x-2">
            <span className="text-white drop-shadow-sm text-[13px] xs:text-[14px] preSM:text-[16px] sm:text-[18px] md:text-[20px] ">
              {statsValue?.value}
            </span>
            <Image
              loading="lazy"
              src={"/images/arrowUp.png"}
              width={15}
              className="w-full hidden sm:block max-w-[10px] md:max-w-[15px]"
              height={15}
              alt={process.env.NEXT_PUBLIC_ALT_IMAGE as string}
            />
          </div>
          {/** Name */}
          <p className="text-testimonialStatsName font-semibold text-[12px] xs:text-[13px] preSM:text-[15px] md:text-[16px]">
            {statsValue?.name}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Stats;
