import React from "react";
// Next
import dynamic from "next/dynamic";
import Image from "next/image";
// Compoennts
const BlackLayout = dynamic(() => import("../BlackLayout"));
// Interface
interface ImageLayoutProps {
  className?: string;
  includeBlackLayout?: boolean;
  blackLayoutClassName?: string;
  imageSRC: string;
  eager?: boolean;
}
const ImageLayout = ({
  className = "",
  blackLayoutClassName = "",
  imageSRC,
  includeBlackLayout,
  eager,
}: ImageLayoutProps) => {
  return (
    <>
      {includeBlackLayout && (
        <BlackLayout
          className={`!z-[-1] !bg-black/50 ${blackLayoutClassName}`}
        />
      )}
      <Image
        loading={eager ? "eager" : "lazy"}
        src={imageSRC}
        alt={process.env.NEXT_PUBLIC_ALT_IMAGE as string}
        fill
        objectFit="cover"
        quality={80}
        className={`top-0 left-0 w-full h-full z-[-1] ${className}`}
      />
    </>
  );
};

export default ImageLayout;
