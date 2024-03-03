"use client";
import React, { useEffect, useState } from "react";
// Next
import dynamic from "next/dynamic";
// NPM
import { useKeenSlider } from "keen-slider/react";
// Const
import { benefitsList } from "@/utils/const";
// Components
const BenefitCard = dynamic(
  () => import("@/app/components/Benefits/BenefitCard")
);
const SliderLines = dynamic(() => import("./SliderLines"));
// Interface
interface BenefitsSliderProps {
  className?: string;
}

let changingSlideTimeout: any = null;

const BenefitsSlider = ({ className = "" }: BenefitsSliderProps) => {
  const [currentSlide, setCurrentSlide] = useState<number>(1);
  const [slides, setSlides] = useState(1);
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 1,
    loop: true,
    renderMode: "performance",
    slideChanged(slider) {
      if (changingSlideTimeout) {
        clearTimeout(changingSlideTimeout);
      }
      changingSlideTimeout = setTimeout(() => {
        setCurrentSlide(slider.track.details.rel);
      }, 15);
    },
    created() {
      instanceRef.current?.moveToIdx(1);
    },

    dragChecked(s) {
      console.log(s);
    },
    slides: {
      origin: "center",

      perView: slides,
      spacing: 20,
    },
  });

  function getSlides() {
    if (typeof window === "undefined") return 3;

    if (window?.innerWidth >= 1570) return 2.8;
    if (window?.innerWidth >= 1370) return 2.4;
    if (window?.innerWidth >= 1200) return 2.1;
    if (window?.innerWidth >= 950) return 1.8;
    if (window?.innerWidth >= 768) return 1.5;
    return 1;
  }

  useEffect(() => {
    setSlides(getSlides());
    window.addEventListener("resize", () => setSlides(getSlides()));

    return () =>
      window.removeEventListener("resize", () => setSlides(getSlides()));
  }, []);
  return (
    <div className={`${className}  `}>
      {/** Mobile slider */}
      <div className="flex md:hidden mb-10 space-x-6 pb-3 overflow-x-scroll">
        {benefitsList?.map((benefit, idx) => (
          <div
            className="pt-10 min-w-[250px] xss:min-w-[265px] xs:min-w-[340px] preSM:min-w-[390px]"
            key={idx}
          >
            <BenefitCard benefit={benefit} />
          </div>
        ))}
      </div>
      {/** Desktop Slider  */}
      <div className="hidden md:block">
        <div
          ref={sliderRef}
          style={{ scrollBehavior: "smooth" }}
          className="keen-slider shadow-effect-2-md min-h-[50em]"
        >
          {benefitsList?.map((benefit, idx) => (
            <div className="keen-slider__slide pt-10" key={idx}>
              <BenefitCard
                benefit={benefit}
                onClick={() => {
                  idx !== currentSlide && instanceRef.current?.moveToIdx(idx);
                }}
                isActiveInSlider={idx === currentSlide}
              />
            </div>
          ))}
        </div>
      </div>
      {/** Slider lines (navigator between slides) */}
      <div className="hidden md:block preSM:mt-[-50px] lg:mt-[-80px] z-[10] relative">
        <SliderLines
          className=" min-h-[4em] !items-start  "
          length={benefitsList?.length}
          activeIdx={currentSlide ?? 2}
          onClick={(newActiveIdx) =>
            newActiveIdx !== currentSlide &&
            instanceRef.current?.moveToIdx(newActiveIdx)
          }
        />
      </div>
    </div>
  );
};

export default BenefitsSlider;
