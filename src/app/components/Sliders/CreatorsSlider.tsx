"use client";
import "keen-slider/keen-slider.min.css";
// React
import React, { useEffect, useState } from "react";
// Next
import dynamic from "next/dynamic";
// NPM
import { useKeenSlider } from "keen-slider/react";
// Const
import { creatorsList } from "@/utils/const";
// Components
const CreatorCard = dynamic(
  () => import("@/app/components/Creators/CreatorCard")
);
// Interface
interface CreatorsSliderProps {
  className?: string;
}

// Animation
const animation = { duration: 20000, easing: (t: number) => t };

const CreatorsSlider = ({ className = "" }: CreatorsSliderProps) => {
  const [slides, setSlides] = useState(1);

  const [sliderRef] = useKeenSlider({
    loop: true,
    renderMode: "performance",
    slides: {
      perView: slides,
      spacing: 10,
    },
    created(s) {
      s.moveToIdx(5, true, animation);
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
  });

  const getSlides = () => {
    if (typeof window === "undefined") return 5;

    if (window.innerWidth >= 1650) return 5;
    if (window.innerWidth >= 1200) return 4;
    if (window.innerWidth >= 900) return 3;
    if (window.innerWidth >= 768) return 2;
    if (window.innerWidth >= 400) return 1.5;
    return 1;
  };

  useEffect(() => {
    setSlides(getSlides());
    window.addEventListener("resize", () => setSlides(getSlides()));

    return () =>
      window.removeEventListener("resize", () => setSlides(getSlides()));
  }, []);

  return (
    <div className={`${className}`}>
      <div
        ref={sliderRef}
        className="keen-slider rotate-[-4deg] shadow-effect-2"
      >
        {creatorsList?.map((creator, idx) => (
          <div className="keen-slider__slide py-5 md:py-10" key={idx}>
            <CreatorCard creator={creator} idx={idx} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CreatorsSlider;
