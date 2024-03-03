import React from "react";
// Next
import Link from "next/link";
// Const
import { footerLinks } from "@/utils/const";
// Interface
interface FooterLinksProps {
  className?: string;
}

const FooterLinks = ({ className = "" }: FooterLinksProps) => {
  return (
    <ul
      className={`flex items-center space-x-2 md:space-x-6 justify-center ${className}`}
    >
      {footerLinks?.map((link, idx) => (
        <li key={idx}>
          {link === "line" ? (
            <span className="font-semibold text-[15px] text-footerText/20">
              /
            </span>
          ) : (
            <Link
              className="uppercase text-[14px] md:text-[15px] xl:text-[16px] md:font-semibold tracking-wider text-footerText transition-all duration-300 ease-in-out hover:text-linkHover"
              href={link.href}
              title={link.name}
            >
              {link.name}
            </Link>
          )}
        </li>
      ))}
    </ul>
  );
};

export default FooterLinks;
