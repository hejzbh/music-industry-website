"use client";
// React
import { useLayoutEffect } from "react";
// AOS
import AOS from "aos";
import "aos/dist/aos.css"; // DON'T FORGET IMPORTING "aos.css"

export default function AOSINIT() {
  useLayoutEffect(() => {
    AOS.init({ once: false, offset: 0 });
  }, []);
  // ...
  return <></>;
}
