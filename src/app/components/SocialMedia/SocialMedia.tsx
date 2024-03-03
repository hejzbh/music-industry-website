import React from "react";
// Next
import Link from "next/link";
// Const
import { socialMediaLinks } from "@/utils/const";
// Interface
interface SocialMediaProps {
  className?: string;
}
const SocialMedia = ({ className = "" }: SocialMediaProps) => {
  return (
    <ul className={`flex items-center space-x-3 ${className}`}>
      {socialMediaLinks?.map((link, idx) => {
        const Icon = link.Icon;

        return (
          <li key={idx}>
            <Link
              className="p-[7px] xl:p-[10px] rounded-full block  bg-socialMediaBG transition-all duration-300 ease-in-out hover:bg-linkHover group"
              title={link.title}
              href={link.href}
            >
              <Icon className="drop-shadow-md text-black text-[24px] xl:text-[28px] transition-all duration-300 ease-in-out group-hover:text-white" />
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default SocialMedia;
