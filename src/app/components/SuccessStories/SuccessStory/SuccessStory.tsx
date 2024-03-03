import React from "react";
// Next
import Image from "next/image";
// TS
import { SuccessStory as SuccessStoryType } from "@/types";
// Interface
interface SuccessStoryProps {
  className?: string;
  story: SuccessStoryType;
}
const SuccessStory = ({ className = "", story }: SuccessStoryProps) => {
  return (
    <div className={`grid grid-cols-1 gap-[1.5rem] ${className}`}>
      {story?.imageSRCS?.map((imageSRC, idx) => (
        <div className="relative p-[1px] rounded-[20px]" key={idx}>
          {/** Linear gradient border */}
          <div className="absolute inset-0  z-[-1] rounded-[22px] linear-border h-full overflow-hidden">
            <div className=" bg-benefit h-[100%] rounded-[20px] absolute w-full"></div>
          </div>
          {/** Success story img */}
          <Image
            loading="lazy"
            src={imageSRC}
            width={500}
            className={`rounded-[20px] w-full object-cover  ${
              story?.imageSRCS?.length <= 2
                ? "max-h-[270px] sm:max-h-[320px]"
                : "max-h-[180px] sm:max-h-[280px]"
            }`}
            height={400}
            alt={process.env.NEXT_PUBLIC_ALT_IMAGE as string}
          />
        </div>
      ))}
    </div>
  );
};

export default SuccessStory;
