import React from "react";
// Interface
interface SliderLinesProps {
  className?: string;
  length: number;
  activeIdx: number;
  onClick: (newActiveIdx: number) => void;
}
const SliderLines = ({
  className = "",
  length,
  activeIdx,
  onClick,
}: SliderLinesProps) => {
  return (
    <div
      className={`flex overflow-x-scroll scrollbar-hide items-center space-x-3 justify-center ${className}`}
    >
      {Array.from({ length })?.map((_, idx) => (
        <button
          key={idx}
          onClick={() => {
            onClick(idx);
          }}
          type="button"
          className="p-1"
          title={`Slide ${idx + 1}`}
        >
          <div
            className={`transition-all duration-300 ease-in-out rounded-[3rem] ${
              activeIdx === idx
                ? "bg-sliderActiveLineBG py-[2px] sm:py-[3px] min-w-[45px] sm:min-w-[85px]"
                : "py-[1px] sm:py-[2px] min-w-[20px] sm:min-w-[40px] bg-sliderLineBG"
            }`}
          ></div>
        </button>
      ))}
    </div>
  );
};

export default SliderLines;
