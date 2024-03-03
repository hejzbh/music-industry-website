"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
// Interface
interface RapcultCardProps {
  className?: string;
}
const RapcultCard = ({ className = "" }: RapcultCardProps) => {
  const [style, setStyle] = useState<{ zoom: number; x: number; y: number }>({
    zoom: 0.8,
    x: 0,
    y: 20,
  });

  useEffect(() => {
    if (typeof window === "undefined") return;
  }, []);

  return (
    <div
      onMouseLeave={() => {
        if (window?.innerWidth <= 768) return null;
        setStyle({
          zoom: 0.8,
          x: 0,
          y: 20,
        });
      }}
      onMouseMove={(e) => {
        if (window?.innerWidth <= 768) return null;
        setStyle({
          y: (70 * e.clientX) / innerWidth - 40,
          x: 7 - (15 * e.clientY) / innerHeight,
          zoom: 1 - (0.2 * e.clientY) / innerHeight,
        });
      }}
      className={`absolute lg:-bottom-8 -translate-x-1/2 bottom-[36%] z-50  ${className}`}
      style={{ left: "calc(50% - 15vw)" }}
    >
      <div
        style={{
          transform: `scale(${style.zoom}) rotateX(${style.x}deg) rotateY(${style.y}deg)`,
        }}
        className="!relative flex items-center justify-center w-full h-full rapcult-card-container"
      >
        <Image
          src="/images/rapcult-card.webp"
          width={450}
          height={450}
          alt="TUFFEX CARD"
          className="z-[1]"
        />
      </div>
    </div>
  );
};

export default RapcultCard;
