import React from "react";
// Next
import dynamic from "next/dynamic";
// CONTENT
import { BLOG_TITLE, BLOG_PARAGRAPH } from "@/utils/content";
// CONST
import {
  MAIN_SECTION_PARAGRAPH_AOS_ANIMATION,
  MAIN_SECTION_PARAGRAPH_AOS_DELAY,
} from "@/utils/const";
// Components
const SectionTitle = dynamic(() => import("@/app/components/SectionTitle"));
const BlogSlider = dynamic(() => import("@/app/components/Sliders/BlogSlider"));
// Interface
interface BlogProps {
  className?: string;
}
const Blog = ({ className = "" }: BlogProps) => {
  return (
    <div className={`overflow-hidden  ${className}`}>
      {/** Title & Pagaraph */}
      <div className="container mx-auto text-center">
        <SectionTitle title={BLOG_TITLE} description={BLOG_PARAGRAPH} />
      </div>
      {/** Slider */}
      <div data-aos="fade-up" data-aos-delay="200" data-aos-duration="500">
        <BlogSlider className="mt-10 px-2 xl:px-20" />
      </div>
    </div>
  );
};

export default Blog;
