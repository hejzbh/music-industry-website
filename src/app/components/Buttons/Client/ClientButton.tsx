"use client";
import React from "react";
// Next
import Link from "next/link";
import Image from "next/image";
// Font
// Interface
interface ClientButtonProps {
  className?: string;
  title: string;
  iconPath?: string;
  onClick?: () => void;
  style?: React.CSSProperties;
  onlyIcon?: boolean;
  titleClassName?: string;
  iconClassName?: string;
  href?: string;
}

const ClientButton = ({
  className = "",
  title = "",
  onClick = () => {},
  iconPath,
  href,
  onlyIcon,
  titleClassName = "",
  iconClassName = "",
  style = {},
}: ClientButtonProps) => {
  if (href) {
    return (
      <Link className={`${className}`} href={href} title={title}>
        {/** If we want to render iconPath without text */}
        {onlyIcon && iconPath && (
          // <Icon className={`${iconClassName}  text-[26px]`} />
          <Image
            loading="eager"
            alt={process.env.NEXT_PUBLIC_ALT_IMAGE as string}
            width={25}
            height={20}
            src={iconPath}
            className={`!h-[27px] ${iconClassName}`}
          />
        )}
        {/** If we want to render a text without icon */}
        {!onlyIcon && !iconPath && (
          <span className={`${titleClassName} text-[17px] sm:text-sm `}>
            {title}
          </span>
        )}
        {/** If we want to render text & icon */}
        {iconPath && title && !onlyIcon && (
          <>
            <span className={`${titleClassName} text-[17px] sm:text-sm`}>
              {title}
            </span>
            {/* <Icon className={`${iconClassName} text-[26px]`} /> */}
            <Image
              loading="eager"
              alt={process.env.NEXT_PUBLIC_ALT_IMAGE as string}
              width={25}
              height={20}
              src={iconPath}
              className={`!h-[27px] ${iconClassName}`}
            />
          </>
        )}
      </Link>
    );
  } else {
    return (
      <button
        style={{
          boxShadow: "0 4px 120px 0 rgba(213, 164, 107, 0.3)",
          ...style,
        }}
        className={`p-1 sm:p-3 px-3 sm:px-6 rounded-xl shadow-md bg-secondMain text-white text-[18px] transition-all duration-300 ease-in-out group ${className} ${
          iconPath && title && !onlyIcon && "flex items-center space-x-2"
        }`}
        title={title}
        onClick={onClick}
      >
        {/** If we want to render Icon without text */}
        {onlyIcon && iconPath && (
          // <Icon className={`${iconClassName}  text-[26px]`} />
          <Image
            loading="eager"
            alt={process.env.NEXT_PUBLIC_ALT_IMAGE as string}
            width={25}
            height={20}
            src={iconPath}
            className={`!h-[27px] ${iconClassName}`}
          />
        )}
        {/** If we want to render a text without icon */}
        {!onlyIcon && !iconPath && (
          <span className={`${titleClassName} text-[13px] sm:text-[16px] `}>
            {title}
          </span>
        )}
        {/** If we want to render text & icon */}
        {iconPath && title && !onlyIcon && (
          <>
            <span className={`${titleClassName} text-[13px] sm:text-[16px] `}>
              {title}
            </span>
            <Image
              loading="eager"
              alt={process.env.NEXT_PUBLIC_ALT_IMAGE as string}
              width={25}
              height={20}
              src={iconPath}
              className={`!h-[27px] ${iconClassName}`}
            />
            {/* <iconPath
              className={`${iconClassName} text-[14px] sm:text-[18px]`}
            /> */}
          </>
        )}
      </button>
    );
  }
};

export default ClientButton;
