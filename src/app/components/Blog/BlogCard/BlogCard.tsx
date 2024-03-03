import React from "react";
// Next
import Image from "next/image";
// TS
import { Blog } from "@/types";
// Icons
import { IoMdArrowForward } from "react-icons/io";
// Interface
interface BlogCardProps {
  className?: string;
  blog: Blog;
}
const BlogCard = ({ className = "", blog }: BlogCardProps) => {
  return (
    <div className={` ${className} max-w-[438px]`}>
      {/** Blog Image */}
      <div className="relative p-[1px] z-[1] ">
        {/** Linear gradient border */}
        <div className="absolute inset-0  z-[-1] rounded-3xl linear-border h-full overflow-hidden">
          <div className=" bg-benefit h-[100%] rounded-[20px] absolute w-full"></div>
        </div>
        <Image
          loading="lazy"
          src={blog.imageSRC}
          width={550}
          height={400}
          alt={process.env.NEXT_PUBLIC_ALT_IMAGE as string}
          quality={80}
          className="w-full h-full min-h-[300px] max-h-[300px]  rounded-3xl object-cover"
          objectFit="cover"
        />
      </div>
      {/** Content */}
      <div className="text-center md:text-left">
        {/** Date */}
        <p className="text-blogDate tracking-wide font-semibold text-[14px] md:text-[16px] mt-7">
          {blog.created}
        </p>
        {/** Title */}
        <h2 className="my-4 text-white drop-shadow-md text-[17px] sm:text-[18px] md:text-[20px]">
          {blog.title}
        </h2>
        {/** BTN */}
        <button
          title="Read More"
          className="uppercase group relative text-[16px] md:text-[20px] tracking-wider text-blogBTN font-semibold flex items-center mx-auto md:mx-0"
        >
          Read More{" "}
          <IoMdArrowForward className="drop-shadow-md ml-2 text-[25px]" />
          {/** Line on hoveer */}
          <div className="absolute bottom-[-5px] left-0 w-full max-w-0 transition-all duration-300 ease-in-out bg-blogBTN h-[2px] rounded-3xl group-hover:max-w-full"></div>
        </button>
      </div>
    </div>
  );
};

export default BlogCard;
