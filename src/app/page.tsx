// Next
import dynamic from "next/dynamic";
// Components
const Hero = dynamic(() => import("@/app/components/Hero"));
const ScrollSection = dynamic(() => import("@/app/components/ScrollSection"));
const Sponsors = dynamic(() => import("@/app/components/Sponsors"));
const Creators = dynamic(() => import("@/app/components/Creators"));
const Benefits = dynamic(() => import("@/app/components/Benefits"));
const HowItWorks = dynamic(() => import("@/app/components/HowItWorks"));
const SuccessStories = dynamic(() => import("@/app/components/SuccessStories"));
const TestimonialsSlider = dynamic(
  () => import("@/app/components/Sliders/TestimonialsSlider")
);
const SuccessStoryBanner = dynamic(
  () => import("@/app/components/Banners/SuccessStoryBanner")
);
const ExclusiveCommunity = dynamic(
  () => import("@/app/components/ExclusiveCommunity")
);
const RealResults = dynamic(() => import("@/app/components/RealResults"));
const Packages = dynamic(() => import("@/app/components/Packages"));
const AnimatedText = dynamic(() => import("@/app/components/AnimatedText"));
const FAQ = dynamic(() => import("@/app/components/FAQ"));
const Blog = dynamic(() => import("@/app/components/Blog"));
const Footer = dynamic(() => import("@/app/components/Footer"));

export default function Home() {
  return (
    <>
      <Hero />
      {/** First scroll section */}
      <ScrollSection className="pb-0 py-10 md:pb-20 md:py-24 -mt-10 z-50 !rounded-none">
        <Sponsors />
        <Creators />
        <Benefits />
      </ScrollSection>
      {/** Second section */}
      <HowItWorks />
      {/** Third scroll section */}
      <ScrollSection className=" py-10 md:py-20">
        <SuccessStories />
        <TestimonialsSlider />
        <SuccessStoryBanner className="mt-10" />
      </ScrollSection>
      {/** Fourth Section */}
      <ScrollSection className=" py-10 md:py-20">
        <ExclusiveCommunity />
      </ScrollSection>
      {/** Fifth section */}
      <ScrollSection className=" py-10 md:py-20">
        <RealResults />
      </ScrollSection>
      {/** Sixth section */}
      <ScrollSection className=" py-10 md:py-20">
        <Packages />
        <AnimatedText
          text={`JOIN ${process.env.NEXT_PUBLIC_NAME}`}
          className="my-20"
        />
        <FAQ />
      </ScrollSection>
      {/** Sevent-section  */}
      <ScrollSection className="pt-10 md:pt-20">
        <Blog />
        <Footer />
      </ScrollSection>
    </>
  );
}
