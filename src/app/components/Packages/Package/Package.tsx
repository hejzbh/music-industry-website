import React from "react";
// Next
import dynamic from "next/dynamic";
// Icons
import { FaArrowRight } from "react-icons/fa";
// TS
import { PackageType } from "@/types";
// Components
const Button = dynamic(() => import("@/app/components/Buttons/Server"));
// Interface
interface PackageProps {
  className?: string;
  idx: number;
  package: PackageType;
}
const Package = ({
  className = "",
  package: packageItem,
  idx,
}: PackageProps) => {
  if (!packageItem) return null;

  return (
    <div
      data-aos="fade-in"
      style={{ boxShadow: "-5px 0px 120px 0 rgba(213, 164, 107, 0.25)" }}
      data-aos-once="true"
      data-aos-delay={idx * 250}
      className={`${
        packageItem?.isBestValue
          ? "animatedGradientRed"
          : "animatedGradientBlack"
      }  p-[1px] rounded-[20px] ${className}`}
    >
      {/** Inner */}
      <div
        style={{
          background: packageItem?.isBestValue
            ? "linear-gradient(180deg, rgba(204,17,17,1) 50%, rgba(160,5,5,1) 100%)"
            : "linear-gradient(180deg, rgba(18,18,18,1) 37%, rgba(29,29,29,1) 100%)",
        }}
        className={`p-10 package rounded-[20px] text-center`}
      >
        {/** Title */}
        <h2 className="gradient-text-4 max-w-full  mx-auto text-center uppercase font-semibold text-[30px] md:text-[31px] xl:text-[33px]">
          {packageItem?.title?.split(" ")[0]} <br />{" "}
          {packageItem?.title?.split(" ")?.slice(1)}
        </h2>
        {/** Line */}
        <div
          className="h-[1px] my-10  w-full rounded-3xl relative"
          style={{
            background: packageItem?.isBestValue
              ? "linear-gradient(90deg, rgba(209, 148, 75, .6) 49%, rgba(209,148,75,.3) 100%)"
              : "linear-gradient(90deg, rgba(255,255,255,0.2558998599439776) 30%, rgba(50,50,51,.1) 100%)",
          }}
        >
          {/* Best value ? */}
          {packageItem?.isBestValue && (
            <div
              style={{
                background:
                  "linear-gradient(139deg, rgba(255,255,255,1) 20%, rgba(209,148,75,1) 100%)",
              }}
              className="absolute top-[50%] left-[50%] rounded-3xl p-1 px-3 text-[#121212] font-semibold translate-y-[-50%] translate-x-[-50%]"
            >
              BEST VALUE
            </div>
          )}
        </div>
        {/** Price & Discount*/}
        <div className="text-center">
          {/** Price */}
          <h3 className="relative max-w-fit mx-auto text-white drop-shadow-md text-[35px]">
            <span className="absolute top-[-5px] left-[-17px] text-white/80 text-[22px]">
              $
            </span>
            {packageItem?.price?.toString()?.split(".")[0]}.
            <span className="text-[21px]">
              {packageItem?.price?.toString()?.split(".")[1]}
            </span>
            <span className="text-white/60 text-[21px]">
              {" "}
              / {packageItem?.pricePer}
            </span>
          </h3>
          {/*  Discount */}
          {packageItem?.discount && (
            <span
              style={{ letterSpacing: "2px" }}
              className="text-center text-[24px] uppercase gradient-text-4 font-semibold"
            >
              Save {packageItem?.discount} % !
            </span>
          )}
        </div>
        {/** Line */}
        <div
          className="h-[1px] my-10 opacity-60 w-full rounded-3xl relative"
          style={{
            background: packageItem?.isBestValue
              ? "linear-gradient(90deg, rgba(255,255,255,0.2511379551820728) 49%, rgba(209,148,75,1) 100%)"
              : "linear-gradient(90deg, rgba(255,255,255,0.3558998599439776) 30%, rgba(255,255,255,0.5558998599439776) 100%)",
          }}
        />{" "}
        {/** Button */}
        <Button
          background={packageItem?.isBestValue ? "black" : "red"}
          className="!mx-auto iconArrow"
          title={packageItem?.btnTitle}
          titleStyle={{
            letterSpacing: "2px",
            fontWeight: "700",
          }}
          titleClassName="uppercase"
          // Icon={FaArrowRight}
          iconClassName="!h-[20px]"
          iconPath="/images/arrow-right.svg"
        />
        {/** Paid */}
        <p className="text-white/60 text-center mt-10 text-[16px] md:text-[17px]">
          <span className="block mb-1">Paid monthly</span>
          {packageItem?.guaranteForMoneyBackInDays}-days money back guarentee.
        </p>
      </div>
    </div>
  );
};

export default Package;
