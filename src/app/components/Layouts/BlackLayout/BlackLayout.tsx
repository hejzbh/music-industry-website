import React from "react";
// Interface
interface BlackLayoutProps {
  className?: string;
}
const BlackLayout = ({ className = "" }: BlackLayoutProps) => {
  return (
    <div
      className={`absolute top-0 left-0 w-full h-full bg-black/40 ${className}`}
    ></div>
  );
};

export default BlackLayout;
