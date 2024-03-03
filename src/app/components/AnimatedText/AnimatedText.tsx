import React from "react";

// Interface
interface AnimatedTextProps {
  className?: string;
  text: string;
}

const AnimatedText = ({
  className = "",
  text = process.env.NEXT_PUBLIC_NAME as string,
}: AnimatedTextProps) => {
  return (
    <div className={`scroll ${className}`}>
      <div className="z-[2] ">
        <h2 className="opacity-30 text-[#121212] uppercase animated-outline-text whitespace-nowrap mt-0  text-[7rem] md:text-[16rem]  pl-10 font-bold">
          {text}
        </h2>
      </div>
      <div className="z-[2]">
        <h2 className="opacity-30 text-[#121212] uppercase animated-outline-text whitespace-nowrap mt-0  text-[7em] md:text-[16rem]   font-bold">
          {text}
        </h2>
      </div>
    </div>
  );
};

export default AnimatedText;
