"use client";
import React, { useEffect, useRef, useState } from "react";
// Next
import dynamic from "next/dynamic";
// Const
import { howItWorksList } from "@/utils/const";
// Components
const HowItWorksCard = dynamic(() => import("../HowItWorksCard"));
import {
  MotionValue,
  motion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { useKeenSlider } from "keen-slider/react";
// Interface
interface HowItWorksColumnsProps {
  className?: string;
  mainRef: any;
}

interface DotsProps {
  opacity: MotionValue<0 | 1>[];
}
const Dots = ({ opacity }: DotsProps) => {
  const [values] = useState([10, 35, 60, 85]);
  return (
    <>
      {Array(4)
        .fill(0)
        .map((_, i) => {
          return (
            <motion.div
              key={i}
              style={{ opacity: opacity[i], top: `${values[i]}%` }}
              className={`absolute  left-[47%] 1xl:left-[50%] translate-x-[-50%] hidden 1xl:flex items-center space-y-10 flex-col  z-50`}
            >
              {Array(4)
                .fill(0)
                .map((_, j) => {
                  return (
                    <a
                      key={j}
                      href={i !== j ? `/#how-it-works-${j}` : ""}
                      onClick={(e) => i === j && e.preventDefault()}
                      className={`${i === j && "cursor-auto"} w-[${
                        i === j ? "20px" : "12px"
                      }] h-[${
                        i === j ? "20px" : "12px"
                      }] rounded-full bg-howItWorksLineBG`}
                    ></a>
                  );
                })}
            </motion.div>
          );
        })}
    </>
  );
};

const HowItWorksColumns = ({
  className = "",
  mainRef,
}: HowItWorksColumnsProps) => {
  const { scrollYProgress } = useScroll({ target: mainRef });

  const test = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  const height = useTransform(test, (value) => `${value * 100}%`);
  const opacity = useTransform(test, (value) => (value * 100 > 10 ? 1 : 0));
  const opacitySecond = useTransform(test, (value) =>
    value * 100 > 37 ? 1 : 0
  );
  const opacityThird = useTransform(test, (value) =>
    value * 100 > 64 ? 1 : 0
  );
  const opacityForth = useTransform(test, (value) =>
    value * 100 > 89 ? 1 : 0
  );

  const [currentSlide, setCurrentSlide] = useState(0);

  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    mode: "snap",
    renderMode: "performance",
    slides: {
      origin: "center",

      perView: 1,
    },
  });

  const moveSlide = (idx: number) => {
    instanceRef.current?.moveToIdx(idx);
  };

  return (
    <div
      className={`space-y-20 md:space-y-16 lg:space-y-0 relative  ${className}`}
    >
      {/** List */}
      <div
        ref={sliderRef}
        style={{ scrollBehavior: "smooth" }}
        className="keen-slider  1xl:!hidden"
      >
        {howItWorksList?.map((card, idx) => (
          <HowItWorksCard
            move={moveSlide}
            idx={idx}
            key={idx}
            card={card}
            isReversed={idx % 2 !== 0}
            mobile={true}
          />
        ))}
      </div>

      <div className="relative hidden 1xl:block scroll-smooth">
        {howItWorksList?.map((card, idx) => (
          <HowItWorksCard
            idx={idx}
            key={idx}
            card={card}
            isReversed={idx % 2 !== 0}
            mobile={false}
          />
        ))}
        {/** Line between (this is absolute) OVU LINIUJ PRAVIS DA SE SAMA ŠIRI PREMA DOLE I GORE kao na videu */}
        <motion.div
          style={{ height: height }}
          className="absolute hidden 1xl:block 1xl:items-center top-0 left-[47%] 1xl:left-[50%] translate-x-[-50%]  bg-howItWorksLineBG w-[2px]  z-50 "
        ></motion.div>
        {/** Za ovo prvo */}
        <Dots opacity={[opacity, opacitySecond, opacityThird, opacityForth]} />
      </div>
    </div>
  );
};

export default HowItWorksColumns;
