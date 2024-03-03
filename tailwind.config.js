/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: "1.5rem",
        sm: "2rem",
        md: "4.5rem",
        lg: "6rem",
        xl: "8rem",
        "2xl": "10rem",
      },
    },
    extend: {
      screens: {
        xss: "300px",
        xs: "370px",
        preSM: "450px",
        smallSM: "510px",
        slideTrack: "890px",
        sm: "640px",
        // => @media (min-width: 640px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }
        bigMD: "850px",
        lg: "1024px",
        // => @media (min-width: 1024px) { ... }
        lg2x: "1150px",
        xl: "1280px",
        // => @media (min-width: 1280px) { ... }
        "1xl": "1320px",
        "1.2xl": "1420px",
        "1.5xl": "1450px",
        "2xl": "1536px",
        // => @media (min-width: 1536px) { ... }
        "3xl": "1700px",
      },
      boxShadow: {
        package: "-5px 0px 120px 0px rgba(213,164,107,0.25)",
      },
      brightness: {
        test: "0.3",
      },
      colors: {
        main: "#CE2029",
        heroTagline: "#9EA5AB",
        creatorsBottomText: "#9EA5AB",
        linkHover: "#CD2525",
        sectionDescription: "#9EA5AB",
        benefitDescription: "#9EA5AB",
        sliderLineBG: "#99A0A5",
        sliderActiveLineBG: "#CD2525",
        footerText: "#9EA5AB",
        testimonialStatsName: "#9EA5AB",
        blogDate: "#9EA5AB",
        faqAnswer: "#9EA5AB",
        socialMediaBG: "#E0E0E0",
        howItWorkList: "#9EA5AB",
        howItWorksLineBG: "#A00505",
        blogBTN: "#CC1111",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
