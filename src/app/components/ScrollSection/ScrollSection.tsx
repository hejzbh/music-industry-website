import React from "react";
// Interface
interface ScrollSectionProps {
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
}
const ScrollSection = ({
  className = "",
  style = {},
  children,
}: ScrollSectionProps) => {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="500"
      data-aos-offset="300"
      data-aos-once="true"
      style={{
        ...style,
      }}
      className={`px-2 relative md:px-0 !rounded-t-[3rem] overflow-x-hidden border-t-[1px] border-white/30 ${className}`}
    >
      {children}
    </div>
  );
};

export default ScrollSection;
