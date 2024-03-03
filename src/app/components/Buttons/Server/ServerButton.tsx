import React from "react";
// Next
import Link from "next/link";
import Image from "next/image";
// Font
// Interface
interface ServerButtonProps {
  className?: string;
  title: string;
  iconPath?: string;
  onlyIcon?: boolean;
  titleClassName?: string;
  style?: React.CSSProperties;
  iconClassName?: string;
  background: "red" | "black";
  titleStyle?: React.CSSProperties;
  href?: string;
  addReflectionBelow?: boolean;
  insideClassName?: string;
}

const ServerButton = ({
  className = "",
  title = "",
  iconPath,
  href,
  onlyIcon,
  titleStyle = {},
  titleClassName = "",
  iconClassName = "",
  style = {},
  background = "red",
  addReflectionBelow,
  insideClassName = "",
}: ServerButtonProps) => {
  if (href) {
    return (
      <Link style={style} className={`${className}`} href={href} title={title}>
        {/** If we want to render Icon without text */}
        {onlyIcon && iconPath && (
          // <Icon className={`${iconClassName}  text-[26px]`} />
          // <img src={Icon} alt="" className="" />
          <Image
            loading="eager"
            alt={process.env.NEXT_PUBLIC_ALT_IMAGE as string}
            width={25}
            height={20}
            src={iconPath}
            className={` ${iconClassName}`}
          />
        )}
        {/** If we want to render a text without icon */}
        {!onlyIcon && !iconPath && (
          <span
            className={`${titleClassName} text-[17px] sm:text-sm text-white`}
          >
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
              className={` ${iconClassName}`}
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
        className={`group overflow-hidden  ${
          addReflectionBelow && "reflectionBTN"
        } p-[1.5px] relative  z-[1] rounded-[4rem]   ${className}`}
        title={title}
      >
        <div className="absolute top-0 left-0 w-full z-[-1]  h-full btnLinearBorder"></div>
        <div
          className={`reflection-effect  ${
            background === "red" ? "redBTN" : "blackBTN"
          }  px-8 py-4 ${insideClassName} ${
            iconPath &&
            title &&
            !onlyIcon &&
            "flex items-center justify-center rounded-[4rem] space-x-2"
          }`}
        >
          {/** If we want to render Icon without text */}
          {onlyIcon && iconPath && (
            // <Icon
            //   className={`${iconClassName} group-hover:text-main text-[26px] transition-colors duration-500 ease-in-out`}
            // />
            <Image
              loading="eager"
              alt={process.env.NEXT_PUBLIC_ALT_IMAGE as string}
              width={25}
              height={20}
              src={iconPath}
              className={` ${iconClassName}`}
            />
          )}
          {/** If we want to render a text without icon */}
          {!onlyIcon && !iconPath && (
            <span
              style={titleStyle}
              className={`${titleClassName} text-[14px] sm:text-[16px] text-white drop-shadow-sm group-hover:text-main  transition-colors duration-500 ease-in-out`}
            >
              {title}
            </span>
          )}
          {/** If we want to render text & icon */}
          {iconPath && title && !onlyIcon && (
            <>
              <span
                style={titleStyle}
                className={`${titleClassName} text-[14px] sm:text-[16px] text-white drop-shadow-sm group-hover:text-main  transition-colors duration-500 ease-in-out`}
              >
                {title}
              </span>
              {/* <Icon
                className={`${iconClassName} text-[18px] text-white drop-shadow-sm group-hover:text-main transition-colors duration-500 ease-in-out`}
              /> */}
              <Image
                loading="eager"
                alt={process.env.NEXT_PUBLIC_ALT_IMAGE as string}
                width={25}
                height={20}
                src={iconPath}
                className={` ${iconClassName}`}
              />
            </>
          )}
        </div>
      </button>
    );
  }
};

export default ServerButton;
