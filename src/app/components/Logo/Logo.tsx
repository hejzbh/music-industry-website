import React from "react";
// Next
import Image from "next/image";
// Interface
interface LogoProps {
  className?: string;
}
const Logo = ({ className = "" }: LogoProps) => {
  return (
    <p
      className={`uppercase drop-shadow-md text-[28px] xl:text-[32px] text-white font-bold text-center ${className}`}
    >
      Tuffex
    </p>
  );
};

export default Logo;
