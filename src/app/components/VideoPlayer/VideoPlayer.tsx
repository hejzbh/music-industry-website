"use client";
import React, { useEffect, useRef, useState } from "react";
// Next
import dynamic from "next/dynamic";
import Image from "next/image";
// Components
const Button = dynamic(() => import("@/app/components/Buttons/Client"));
// Interface
interface VideoPlayerProps {
  className?: string;
  videoClassName?: string;
  videoSRC: string;
  imageSRC?: string;
}

const VideoPlayer = ({
  className = "",
  videoSRC,
  videoClassName = "",
  imageSRC,
}: VideoPlayerProps) => {
  const [isVideoPlaying, setIsVideoPlaying] = useState<boolean>();

  const videoREF = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (!videoREF?.current) return;

    function handlePause() {
      if (!videoREF?.current?.seeking) {
        setIsVideoPlaying(false);
      }
    }

    function handlePlay() {
      setIsVideoPlaying(true);
    }

    videoREF.current.addEventListener("pause", handlePause);
    videoREF?.current?.addEventListener("play", handlePlay);

    return () => {
      videoREF?.current?.removeEventListener("pause", handlePause);
      videoREF?.current?.removeEventListener("play", handlePlay);
    };
  }, []);

  return (
    <div className={`!p-[1.5px] !z-[1] ${className} `}>
      {/** Show image until user play video, because video take to long to load. */}
      {imageSRC && !isVideoPlaying && (
        <Image
          loading="eager"
          src={imageSRC}
          fill
          objectFit="cover"
          alt="Tuffex"
          className="z-[1] image-dark rounded-[20px]"
        />
      )}
      <video
        preload="auto"
        ref={videoREF}
        controls={isVideoPlaying}
        className={`${videoClassName} ${!isVideoPlaying && "image-dark"}`}
        width={"100%"}
        height={"100%"}
      >
        <source src={videoSRC} type="video/mp4" />
      </video>
      {/** Linear gradient border */}
      <div className="absolute inset-0  z-[-1] rounded-[20px] linear-border h-full overflow-hidden">
        <div className=" bg-benefit h-[100%] rounded-[20px] absolute w-full"></div>
      </div>
      {/** BTN PLAY */}

      {!isVideoPlaying && (
        <Button
          onClick={() => {
            videoREF?.current?.play();
            setIsVideoPlaying(!videoREF?.current?.paused);
          }}
          className={`group absolute !p-5 !z-[10] top-[50%] left-[50%] iconPlay  translate-x-[-50%] translate-y-[-50%] !rounded-full flex items-center jusitfy-center  hover:!bg-none border-2 transition-all border-transparent hover:!border-red-600`}
          onlyIcon
          style={{
            background:
              "linear-gradient(90deg, rgba(204,17,17,1) 46%, rgba(160,5,5,1) 100%)",
          }}
          title="Play"
          iconClassName="!text-white !drop-shadow-md "
          // Icon={FaPlay}
          iconPath="/images/play.svg"
        />
      )}
    </div>
  );
};

export default VideoPlayer;
