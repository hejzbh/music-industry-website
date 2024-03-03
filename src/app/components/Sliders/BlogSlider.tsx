"use client";
import React, { useEffect, useState } from "react";
// Next
import dynamic from "next/dynamic";
// NPM
import { useKeenSlider } from "keen-slider/react";
// Const
import { blogCards } from "@/utils/const";
// Components
const BlogCard = dynamic(() => import("@/app/components/Blog/BlogCard"));
// Interface
interface BlogSliderProps {
  className?: string;
}
const BlogSlider = ({ className = "" }: BlogSliderProps) => {
  const [slides, setSlides] = useState(1);
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 1,
    mode: "snap",
    renderMode: "performance",
    created() {
      instanceRef.current?.moveToIdx(1);
    },

    slides: {
      origin: "center",

      perView: slides,
      spacing: 40,
    },
  });
  function getSlides() {
    if (typeof window === "undefined") return 3;

    if (window?.innerWidth >= 1500) return 3.9;
    if (window?.innerWidth >= 1370) return 3;
    if (window?.innerWidth >= 1000) return 2.5;
    if (window?.innerWidth >= 850) return 2.2;
    return 2.2;
  }

  useEffect(() => {
    setSlides(getSlides());
    window.addEventListener("resize", () => setSlides(getSlides()));

    return () =>
      window.removeEventListener("resize", () => setSlides(getSlides()));
  }, []);

  return (
    <div className={`${className}`}>
      {/** Mobile slider */}
      <div className="flex md:hidden mb-10 space-x-6 pb-6 overflow-x-scroll">
        {[...blogCards]?.map((blog, idx) => (
          <div
            className="pt-10 min-w-[280px] xs:min-w-[360px] preSM:min-w-[440px]"
            key={idx}
          >
            <BlogCard blog={blog} />
          </div>
        ))}
      </div>
      {/** Desktop slider */}
      <div className="md:block hidden">
        <div
          ref={sliderRef}
          style={{ scrollBehavior: "smooth" }}
          className="keen-slider shadow-effect-2-md"
        >
          {blogCards.map((blog, idx) => (
            <div className="keen-slider__slide pt-10 h-full pb-10" key={idx}>
              <BlogCard blog={blog} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogSlider;
