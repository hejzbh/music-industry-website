"use client";
import React, { useEffect, useState } from "react";
// Next
import dynamic from "next/dynamic";
// NPM
import { useKeenSlider } from "keen-slider/react";
// Const
import { successStoriesList } from "@/utils/const";
// Components
const SuccessStory = dynamic(
  () => import("@/app/components/SuccessStories/SuccessStory")
);
// Interface
interface SuccessStoriesSliderProps {
  className?: string;
}
// Animation
const animation = { duration: 25000, easing: (t: number) => t };

const SuccessStoriesSlider = ({
  className = "",
}: SuccessStoriesSliderProps) => {
  const [slides, setSlides] = useState(1);
  const [sliderRef, instanceRef] = useKeenSlider({
    renderMode: "performance",
    mode: "free",

    loop: true,
    slides: {
      perView: slides,
      origin: "center",
      spacing: 30,
    },
    created() {
      instanceRef.current?.moveToIdx(2);
    },
    // commented for latest update
    // created(s) {
    //   s.moveToIdx(5, true, animation);
    // },
    // updated(s) {
    //   s.moveToIdx(s.track.details.abs + 5, true, animation);
    // },
    // animationEnded(s) {
    //   s.moveToIdx(s.track.details.abs + 5, true, animation);
    // },
  });

  function getSlides() {
    if (typeof window === "undefined") return 5;

    if (window?.innerWidth >= 1700) return 6;
    if (window?.innerWidth >= 1500) return 6;
    if (window?.innerWidth >= 1000) return 5;
    if (window?.innerWidth >= 500) return 2;
    if (window?.innerWidth >= 300) return 1.3;
    return 1.1;
  }

  useEffect(() => {
    setSlides(getSlides());
    window.addEventListener("resize", () => setSlides(getSlides()));

    return () =>
      window.removeEventListener("resize", () => setSlides(getSlides()));
  }, []);

  return (
    <div className={`${className}`}>
      <div ref={sliderRef} className="keen-slider shadow-effect-2">
        {successStoriesList?.map((creator, idx) => (
          <div className="keen-slider__slide py-5 md:py-10" key={idx}>
            <SuccessStory story={creator} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SuccessStoriesSlider;
