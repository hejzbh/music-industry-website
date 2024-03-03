import React from "react";
// Next
import dynamic from "next/dynamic";
// Content
import { HERO_BTN_TEXT, LOGO_TEXT } from "@/utils/content";
import { FaArrowRight } from "react-icons/fa";
// Components
const Button = dynamic(() => import("@/app/components/Buttons/Server"));
const ImageLayout = dynamic(
  () => import("@/app/components/Layouts/ImageLayout")
);
const HeroContent = dynamic(() => import("./HeroContent/index"));
const Logo = dynamic(() => import("@/app/components/Logo"));
// Interface
interface HeroProps {
  className?: string;
}
const Hero = ({ className = "" }: HeroProps) => {
  return (
    <div
      className={`relative z-[1] px-2 md:px-0 pb-10 overflow-hidden ${className}`}
    >
      {/** Top reflection effect */}
      {/* <Image
        loading="eager"
        alt={process.env.NEXT_PUBLIC_ALT_IMAGE as string}
        width={1500}
        height={400}
        src="/images/topReflection.webp"
        className="absolute top-0 left-[50%] translate-x-[-50%] z-[-1]"
      /> */}
      {/** Background image */}
      <ImageLayout
        imageSRC="/images/heroBG-three.png"
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
        className="py-10 px-20 flex justify-between items-center w-full flex-col space-y-6 sm:flex-row sm:space-y-0"
      >
        <Logo className="w-full max-w-[170px] sm:max-w-[145px] md:max-w-[155px]" />
        <Button
          title={HERO_BTN_TEXT}
          titleStyle={{
            letterSpacing: "2px",
            fontWeight: "700",
          }}
          titleClassName="uppercase"
          className="iconArrow !hidden sm:!block"
          insideClassName="!px-5 !py-2.5"
          background="red"
          iconClassName="!h-[20px]"
          iconPath="/images/arrow-right.svg"
          addReflectionBelow
        />
      </div>

      {/** Content */}
      <div className="w-full py-10 md:py-6 md:pb-16 flex items-start justify-center">
        <HeroContent />
      </div>
    </div>
  );
};

export default Hero;
