import React from "react";
// Next
import Image from "next/image";
// Content
import {
  REAL_RESULTS_BIG_IMAGE,
  REAL_RESULTS_SMALL_IMAGE,
} from "@/utils/content";
// Interface
interface RealResultsImageProps {
  className?: string;
}
const RealResultsImage = ({ className = "" }: RealResultsImageProps) => {
  return (
    <div className={`relative smallSM:px-10 flex justify-center ${className}`}>
      {/** Text */}
      <p
        style={{ letterSpacing: 7 }}
        className="-rotate-90 absolute bottom-[6rem] xs:bottom-[7rem] sm:bottom-[9rem] left-[-2.2rem] xs:left-[-1.8rem] preSM:left-[-2.5rem] smallSM:left-[-3rem] sm:left-[-2.9rem] md:left-0 bigMD:left-[-2.9rem] 1.5xl:left-[-2rem] 2xl:left-[-2.3rem] 3xl:left-[-2rem] text-white/80 uppercase  text-[17px] sm:text-[21px] xl:text-[24px]"
      >
        Before
      </p>
      {/** Images */}
      <div className="relative flex items-center items-centter justify-center sm:px-10 z-[1]">
        <Image
          loading="lazy"
          src={REAL_RESULTS_SMALL_IMAGE}
          alt={process.env.NEXT_PUBLIC_ALT_IMAGE as string}
          quality={80}
          width={368}
          height={250}
          className="rounded-[20px] drop-shadow-xl  h-full max-h-[85%] mt-10 mr-[-10px] xs:mr-[-40px] max-w-[80px] xs:max-w-[100px] preSM:max-w-[150px] smallSM:max-w-[180px] sm:max-w-[220px] md:max-w-[210px] bigMD:max-w-[130px] lg:max-w-[150px] xl:max-w-[180px] 1xl:max-w-[190px] 2xl:max-w-[200px] 3xl:max-w-[280px] opacity-50 z-[-1]"
        />
        <Image
          loading="lazy"
          src={REAL_RESULTS_BIG_IMAGE}
          alt={process.env.NEXT_PUBLIC_ALT_IMAGE as string}
          quality={80}
          width={520}
          className="rounded-[20px] drop-shadow-xl w-full max-w-[140px] xs:max-w-[150px] preSM:max-w-[220px] smallSM:max-w-[240px] sm:max-w-[280px] md:max-w-[275px]  bigMD:max-w-[180px] lg:max-w-[190px] xl:max-w-[230px] 1xl:max-w-[290px] 2xl:max-w-[320px] 3xl:max-w-[430px]"
          height={250}
        />
      </div>

      {/** Text */}
      <p
        style={{ letterSpacing: 7 }}
        className="-rotate-90 absolute bottom-[50%] translate-y-[-50%] right-[-2.2rem] xs:right-[-1.8rem] preSM:right-[-1.5rem] smallSM:right-[-2.2rem] sm:right-[-1.9rem] md:right-0 bigMD:right-[-1.9rem] 1.5xl:right-[-1rem] 2xl:right-[-1.3rem] 3xl:right-[-1rem] text-white uppercase text-[17px] smallSM:text-[21px] xl:text-[24px]"
      >
        After
      </p>
    </div>
  );
};

export default RealResultsImage;
