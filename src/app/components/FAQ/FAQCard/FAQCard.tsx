"use client";
import React, { useState } from "react";
// NPM
import { Collapse } from "react-collapse";
// TS
import { Question } from "@/types";
// Icons
import { MdArrowBackIosNew } from "react-icons/md";
import { boldMarkedText } from "@/utils/helpers";
// Interface
interface FAQCardProps {
  className?: string;
  questionData: Question;
}
const FAQCard = ({ questionData, className = "" }: FAQCardProps) => {
  const [showAnswer, setShowAnswer] = useState<boolean>(false);

  return (
    <li
      onClick={() => setShowAnswer((show: boolean) => !show)}
      className={`rounded-xl z-[1] cursor-pointer  p-[1px] relative ${className}`}
    >
      {/** Linear gradient border */}
      <div className="absolute inset-0 p-[1px] z-[-1] rounded-xl linear-border h-full overflow-hidden">
        <div className=" bg-benefit h-[100%] rounded-xl absolute w-full"></div>
      </div>
      {/** Inner */}
      <div
        style={{
          background:
            "linear-gradient(180deg, rgba(29,29,29,1) 35%,  rgba(18,18,18,0.9556197478991597) 100%)",
        }}
        className="rounded-xl p-7"
      >
        {/** Question & Arrow */}
        <div className="flex items-center justify-between">
          {/** Question */}
          <h3 className="text-white drop-shadow-md text-[17px] sm:text-[18px] md:text-[19px] lg:text-[20px]">
            {questionData?.question}
          </h3>
          {/** BTN */}
          <button
            type="button"
            title={showAnswer ? "Hide answer" : "Show answer"}
            className=" rounded-full relative p-[2px] z-[1]"
            style={{
              boxShadow: "3px 7px 15px -2px rgba(212,38,38,0.2)",
            }}
          >
            {/** Linear gradient border */}
            <div className="absolute inset-0 p-[1px] z-[-1] rounded-full linear-border h-full overflow-hidden">
              <div className=" bg-benefit h-[100%] rounded-full  absolute w-full"></div>
            </div>
            {/** Inner */}
            <div
              style={{
                background:
                  "linear-gradient(135deg, rgba(29,29,29,1) 48%, rgba(18,18,18,1) 100%)",
              }}
              className="flex items-center p-2 rounded-full  justify-center"
            >
              <MdArrowBackIosNew
                className={`text-white text-[20px] drop-shadow-md transition-all duration-300 ease-in-out ${
                  showAnswer ? "rotate-90" : "rotate-[270deg]"
                }`}
              />
            </div>
          </button>
        </div>
        {/** Answer */}
        <Collapse isOpened={showAnswer}>
          <p
            className={`text-faqAnswer pt-8 text-[14px] md:text-[15px] lg:text-[16px]`}
          >
            {" "}
            {boldMarkedText({
              text: questionData?.answer,
              boldClassName: "text-white/70 font-semibold",
            })}
          </p>
        </Collapse>
      </div>
    </li>
  );
};

export default FAQCard;
