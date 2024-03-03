"use client";
import React, { useEffect, useRef } from "react";
// Next
import Image from "next/image";
// Const
import { sponsorsList } from "@/utils/const";
// Interface
interface SponsorsSlideShowProps {
  className?: string;
}
const SponsorsSlideShow = ({ className = "" }: SponsorsSlideShowProps) => {
  const mainRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const onResize = () => {
      // this is function to center scroll so we can achive bidirectional scroll
      if (mainRef.current) {
        mainRef.current.scrollLeft = 1000000;
        mainRef.current.scrollLeft /= 2;
      }
    };

    onResize();

    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);
  return (
    <>
      {/** Desktop */}
      <div className={`relative hidden slideTrack:block  w-full ${className} `}>
        <div
          ref={mainRef}
          className="w-full flex items-center justify-start no-scrollbar md:justify-center overflow-x-auto  lg:overflow-x-hidden space-x-[4rem] md:space-x-[5.5rem]"
        >
          {[...sponsorsList]?.map((sponsor, idx) => (
            <div key={idx} title={sponsor.title}>
              <Image
                src={sponsor.imageSRC}
                alt={sponsor.title}
                loading="lazy"
                width={140}
                height={100}
                className="w-full h-full max-w-[100px] min-w-[100px] sm:min-w-[120px] md:max-w-[140px] max-h-[100px] md:min-w-[130px]"
                quality={80}
              />
            </div>
          ))}
          {/** Right black layout */}
        </div>
      </div>
      {/** MOBILE */}
      <div
        className={`slider block slideTrack:hidden relative !overflow-hidden ${className}`}
      >
        <div className="flex items-center space-x-[5.5rem] slide-track">
          {[
            ...sponsorsList,
            ...sponsorsList,
            ...sponsorsList,
            ...sponsorsList,
            ...sponsorsList,
            ...sponsorsList,
          ]?.map((sponsor, idx) => (
            <div key={idx} title={sponsor.title}>
              <Image
                src={sponsor.imageSRC}
                alt={sponsor.title}
                loading="lazy"
                width={140}
                height={100}
                className="w-full h-full max-w-[100px] min-w-[120px] md:max-w-[140px] max-h-[100px] md:min-w-[130px]"
                quality={80}
              />
            </div>
          ))}
          {/** Right black layout */}
        </div>
      </div>
    </>
  );
};

export default SponsorsSlideShow;
