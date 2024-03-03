import React from "react";
// Next
import dynamic from "next/dynamic";
import Image from "next/image";
// Content
import { LOGO_TEXT } from "@/utils/content";
// Components
const ImageLayout = dynamic(
  () => import("@/app/components/Layouts/ImageLayout")
);
const HeroContent = dynamic(() => import("./HeroContent"));
const Logo = dynamic(() => import("@/app/components/Logo"));
// Interface
interface HeroProps {
  className?: string;
}
const Hero = ({ className = "" }: HeroProps) => {
  return (
    <div className={`relative z-[1] px-2 md:px-0 overflow-hidden ${className}`}>
      {/** Top reflection effect */}
      <Image
        loading="eager"
        alt={process.env.NEXT_PUBLIC_ALT_IMAGE as string}
        width={1500}
        height={400}
        src="/images/topReflection.webp"
        className="absolute top-0 left-[50%] translate-x-[-50%] z-[-1]"
      />
      {/** Background image */}
      <ImageLayout
        imageSRC="/images/heroBG-two.webp"
        includeBlackLayout
        className="!z-[-3]"
        eager
        blackLayoutClassName="!z-[-2]"
      />
      {/** Top logo text */}
      <div
        data-aos="fade-in"
        data-aos-delay="350"
        data-aos-once="true"
        className="absolute top-[3.5rem] !left-[50%]  !translate-x-[-50%]"
      >
        <Logo className="w-full max-w-[170px] sm:max-w-[145px] md:max-w-[155px]" />
      </div>

      {/** Content */}
      <div className="container mx-auto min-h-screen py-10 md:pt-20 flex items-center justify-center">
        <HeroContent />
      </div>
    </div>
  );
};

export default Hero;
