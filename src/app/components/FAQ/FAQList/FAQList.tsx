import React from "react";
// Next
import dynamic from "next/dynamic";
// Const
import { questions } from "@/utils/const";
// Components
const FAQCard = dynamic(() => import("../FAQCard"));
// Interface
interface FAQListProps {
  className?: string;
}
const FAQList = ({ className = "" }: FAQListProps) => {
  return (
    <ul className={`space-y-6 ${className}`}>
      {questions?.map((question, idx) => (
        <FAQCard key={idx} questionData={question} />
      ))}
    </ul>
  );
};

export default FAQList;
