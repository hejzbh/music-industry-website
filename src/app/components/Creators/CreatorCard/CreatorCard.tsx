import React from "react";
// Next
import Image from "next/image";
// TS
import { Creator } from "@/types";
// Interface
interface CreatorCardProps {
  className?: string;
  idx: number;
  creator: Creator;
}
const CreatorCard = ({ className = "", creator, idx }: CreatorCardProps) => {
  return (
    <div
      data-aos="fade-in"
      data-aos-delay={idx * 250}
      data-aos-once="true"
      title={creator.name}
      className={`relative card min-h-[20em] group  px-5 ${className}`}
    >
      <Image
        loading="lazy"
        alt={process.env.NEXT_PUBLIC_ALT_IMAGE as string}
        src={creator?.imageSRC}
        fill
        // As of last update, removed "z-[-2] transition-all duration-300 ease-in-out wrapper"
        className={`md:rounded-[2.5rem] rounded-[1.5rem]  object-contain ${
          creator.charachterImageSRC
            ? "group-hover:opacity-30"
            : "group-hover:opacity-80"
        }`}
        style={{ aspectRatio: "16/9" }}
      />
      {/** This is commented as of last update */}
      {creator.charachterImageSRC && (
        <Image
          loading="eager"
          width={400}
          height={400}
          className="absolute w-full h-full transition-all duration-500 ease-in-out z-[1] opacity-0 characherIMG object-contain"
          alt={process.env.NEXT_PUBLIC_ALT_IMAGE as string}
          src={creator.charachterImageSRC}
        />
      )}
      {/** Creator name */}
      {creator.name && (
        <h3 className="absolute bottom-0 left-[50%] translate-x-[-50%] font-semibold uppercase text-white drop-shadow-md text-[22px] transition-all z-[2] duration-300 ease-in-out  opacity-0 group-hover:bottom-20 group-hover:opacity-100">
          {creator.name}
        </h3>
      )}
    </div>
  );
};

/**width: 100%;
  opacity: 0;
  transition: all 0.5s;
  position: absolute;
  z-index: -1; */

export default CreatorCard;
