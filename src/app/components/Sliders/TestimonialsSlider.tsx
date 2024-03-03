"use client";
import React, { useEffect, useState } from "react";
// Next
import dynamic from "next/dynamic";
// NPM
import { useKeenSlider } from "keen-slider/react";
// Const
import { testimoanialsList } from "@/utils/const";
// Components
const SliderLines = dynamic(() => import("./SliderLines"));
const TestimonialCard = dynamic(
  () => import("@/app/components/TestimonialCard")
);
// Interface
interface TestimonialsSliderProps {
  className?: string;
}
let changingSlideTimeout: any = null;

const TestimonialsSlider = ({ className = "" }: TestimonialsSliderProps) => {
  const [currentSlide, setCurrentSlide] = useState<number>(2);
  const [slides, setSlides] = useState(1);
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 1,
    renderMode: "performance",
    loop: true,
    slideChanged(slider) {
      if (changingSlideTimeout) {
        clearTimeout(changingSlideTimeout);
      }
      changingSlideTimeout = setTimeout(() => {
        setCurrentSlide(slider.track.details.rel);
      }, 15);
    },
    created() {
      instanceRef.current?.moveToIdx(2);
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
    if (typeof window === "undefined") return 2;

    if (window?.innerWidth >= 1500) return 2;
    if (window?.innerWidth >= 1370) return 1.55;
    if (window?.innerWidth >= 1024) return 1.3;
    if (window?.innerWidth >= 820) return 1.1;

    return 1.05;
  }

  useEffect(() => {
    setSlides(getSlides());
    window.addEventListener("resize", () => setSlides(getSlides()));

    return () =>
      window.removeEventListener("resize", () => setSlides(getSlides()));
  }, []);
  return (
    <div
      data-aos="fade-up"
      data-aos-delay="200"
      data-aos-duration="500"
      className={`${className}`}
    >
      {/** Mobile slider */}
      <div className="flex md:hidden mb-10 space-x-5 pb-3 overflow-x-scroll">
        {testimoanialsList?.map((testimonial, idx) => (
          <div
            className="pt-10 min-w-[270px] xs:min-w-[330px] preSM:min-w-[460px]"
            key={idx}
          >
            <TestimonialCard testimonial={testimonial} />
          </div>
        ))}
      </div>{" "}
      {/** Desktop Slider  */}
      <div className="hidden md:block">
        <div
          ref={sliderRef}
          style={{ scrollBehavior: "smooth" }}
          className="keen-slider shadow-effect-on-md"
        >
          {testimoanialsList?.map((testimonial, idx) => (
            <div className="keen-slider__slide pt-10" key={idx}>
              <TestimonialCard
                testimonial={testimonial}
                onClick={() => {
                  idx !== currentSlide && instanceRef.current?.moveToIdx(idx);
                }}
              />
            </div>
          ))}
        </div>
      </div>
      {/** Slider lines (navigator between slides) */}
      <div className="hidden md:block z-[10] relative mt-10">
        <SliderLines
          className=" min-h-[4em] !items-start  "
          length={testimoanialsList?.length}
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

export default TestimonialsSlider;
