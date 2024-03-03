import {
  Benefit,
  Blog,
  Creator,
  HowItWork,
  PackageType,
  Question,
  Sponsor,
  SuccessStory,
  Testimonial,
} from "@/types";
import { FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";

// ANIMATIONS
export const MAIN_SECTION_TITLE_AOS_ANIMATION = "fade-in";
export const MAIN_SECTION_TITLE_AOS_DELAY = "250";

export const MAIN_SECTION_PARAGRAPH_AOS_ANIMATION = "fade-in";
export const MAIN_SECTION_PARAGRAPH_AOS_DELAY = "300";

export const CHILDREN_SECTION_AOS_ANIMATION = "fade-in";
export const CHILDREN_SECTION_AOS_DELAY = 0;

// Sponsors
export const sponsorsList: Sponsor[] = [
  {
    imageSRC: "/images/sponsors/forbes.webp",
    title: "Forbes",
  },
  {
    imageSRC: "/images/sponsors/billboard.webp",
    title: "Billboard",
  },
  {
    imageSRC: "/images/sponsors/meta.webp",
    title: "Meta",
  },
  {
    imageSRC: "/images/sponsors/nike.webp",
    title: "Nike",
  },
];

// Creators
export const creatorsList: Creator[] = [
  {
    name: "Creator 1",
    imageSRC: "/images/creators/creator2-full.webp",
    charachterImageSRC: "/images/creators/creator2-charachter.webp",
  },
  {
    name: "Creator 2",
    imageSRC: "/images/creators/creator3-full.webp",
    charachterImageSRC: "/images/creators/creator3-charachter.webp",
  },
  {
    name: "Creator 3",
    imageSRC: "/images/creators/creator2-full.webp",
    charachterImageSRC: "/images/creators/creator2-charachter.webp",
  },
  {
    name: "Creator 4",
    imageSRC: "/images/creators/creator1-full.webp",
    charachterImageSRC: "/images/creators/creator1-charachter.webp",
  },
  {
    name: "Creator 5",
    imageSRC: "/images/creators/creator2-full.webp",
    charachterImageSRC: "/images/creators/creator2-charachter.webp",
  },
  {
    name: "Creator 6",
    imageSRC: "/images/creators/creator3-full.webp",
    charachterImageSRC: "/images/creators/creator3-charachter.webp",
  },
  {
    name: "Creator 7",
    imageSRC: "/images/creators/creator1-full.webp",
    charachterImageSRC: "/images/creators/creator1-charachter.webp",
  },
];

// BENEFITS
export const benefitsList: Benefit[] = [
  {
    title: "Exclusive Networking Opportunities",
    subtitle: "Gain access to a curated community of music industry elites",
    description:
      "<b>From established artists to emerging talents,</b> Tuffex opens doors to forge meaningful relationships that propel your career forward.",
    videoSRC: "/videos/rapper1.mp4",
  },
  {
    title: "Insider Insights and Resources",
    subtitle:
      "Stay ahead of industry trends with privileged access to cutting-edge research, market analyses, and expert advice.",
    description:
      "<bTuffex equips members with the knowledge and tools needed to navigate the ever-evolving landscape of the music business,</b> ensuring strategic decision-making and sustained success.",
    videoSRC: "/videos/rapper2.mp4",
  },
  {
    title: "Promotional Support and Exposure",
    subtitle:
      "Amplify your presence and reach with tailored promotional campaigns and exposure through Tuffex's extensive network.",
    description:
      "<bWhether it's showcasing your latest releases or highlighting your achievements, </b> our platform provides a spotlight to elevate your profile and attract new opportunities.",
    videoSRC: "/videos/rapper3.mp4",
  },
  {
    title: "Professional Development Workshops",
    subtitle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris non orci.",
    description:
      "<b>Mauris ligula ipsum, pharetra a magna ac, ultrices vulputate arcu.</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut tortor id felis semper maximus non in est.",
    videoSRC: "/videos/rapper4.mp4",
  },
  {
    title: "Access to Premium Events and Showcases",
    subtitle:
      "Experience VIP treatment at top-tier industry events, festivals, and showcases reserved for Tuffex members.",
    description:
      "<b>Rub shoulders with industry heavyweights, attend exclusive performances, </b> and gain insights from panel discussions and keynote speakers, all while enjoying unparalleled networking opportunities in prestigious settings.",
    videoSRC: "/videos/rapper5.mp4",
  },
  {
    title: "Strategic Partnerships and Sponsorships",
    subtitle:
      "Unlock lucrative partnership opportunities and sponsorship deals through Tuffex's extensive network of brands and companies.",
    description:
      "<b>Whether it's securing endorsements, licensing agreements, or brand collaborations, </b> , our platform facilitates mutually beneficial partnerships that drive revenue growth and expand your brand's reach.",
    videoSRC: "/videos/rapper6.mp4",
  },
];

// How it works
export const howItWorksList: HowItWork[] = [
  {
    title: "Connect with Fellow Artists",
    description:
      "Tuffex promotes a thriving rap community where artists can connect and collaborate.",
    list: [
      "Find opportunities for collaboration",
      "Build professional relationships",
      "Cross promote your social media",
    ],
    imageSRC: "/images/how-it-works/1.webp",
  },
  {
    title: "All the Help You Need, All in One Place",
    description:
      "Tuffex gives artists the latest strategies and insights on how to succeed in the industry.",
    list: [
      "Connect with top class producers",
      "Find photographers and music video",
      "Talk to industry professionals",
    ],
    imageSRC: "/images/how-it-works/2.webp",
  },
  {
    title: "Master the Game with Exclusive Strategies",
    description:
      "Tuffex connects artists with professionals and creates a network beyond music.",
    list: [
      "Learn music marketing secrets",
      "Stay on top of the latest trends",
      "Get the right mentorship",
    ],
    imageSRC: "/images/how-it-works/3.webp",
  },
  {
    title: "Resources to Boost Your Music",
    description:
      "Tuffex members gain exclusive access to personalized resources and networking.",
    list: [
      "Get access to tested PR services",
      "Distribute your campaigns on 100s of channels",
      "Grow your social media presence efficiently",
    ],
    imageSRC: "/images/how-it-works/4.webp",
  },
];

// SUCCESS STORIES
export const successStoriesList: SuccessStory[] = [
  {
    imageSRCS: [
      "/images/success-stories/chat1.jpg",
      "/images/success-stories/chat2.jpg",
      "/images/success-stories/chat1.jpg",
    ],
  },
  {
    imageSRCS: [
      "/images/success-stories/chat2.jpg",
      "/images/success-stories/chat2.jpg",
    ],
  },
  {
    imageSRCS: [
      "/images/success-stories/chat2.jpg",
      "/images/success-stories/chat1.jpg",
      "/images/success-stories/chat1.jpg",
    ],
  },
  {
    imageSRCS: [
      "/images/success-stories/chat1.jpg",
      "/images/success-stories/chat2.jpg",
      "/images/success-stories/chat1.jpg",
    ],
  },
  {
    imageSRCS: [
      "/images/success-stories/chat2.jpg",
      "/images/success-stories/chat2.jpg",
    ],
  },
  {
    imageSRCS: [
      "/images/success-stories/chat2.jpg",
      "/images/success-stories/chat1.jpg",
      "/images/success-stories/chat1.jpg",
    ],
  },
];

// TESTIMONIALS
export const testimoanialsList: Testimonial[] = [
  {
    imageSRC: "/images/testimonial.webp",
    title: "John Smith",
    description:
      "“Tuffex has been instrumental in connecting us with top-tier talent and industry insiders. Their network is unparalleled, and their dedication to fostering meaningful connections is evident. Thanks to Tuffex, we've discovered new opportunities and expanded our roster exponentially. ”",
    customerDescription: "<b>John Smith</b>, CEO of Harmony Records",
    stats: [
      { name: "Streams", value: "+300,000" },
      { name: "Revenuse", value: "+$27,346" },
      { name: "Collabs", value: "+222" },
    ],
  },
  {
    imageSRC: "/images/testimonial.webp",
    title: "Emily Johnson",
    description:
      "“Joining Tuffex was a game-changer for our label. The platform provided us with direct access to some of the most influential figures in the music industry. Through Tuffex, we've secured collaborations, negotiated deals, and gained invaluable insights that have significantly impacted our success.”",
    customerDescription:
      "<b>Emily Johnson</b>, A&R Manager at Melodic Productions",
    stats: [
      { name: "Streams", value: "+33,000" },
      { name: "Revenuse", value: "+$5,000" },
      { name: "Collabs", value: "+55" },
    ],
  },
  {
    imageSRC: "/images/testimonial.webp",
    title: "David Thompson",
    description:
      "“As an artist manager, Tuffex has been an invaluable resource for me and my clients. The platform has facilitated connections with key decision-makers, leading to lucrative partnerships and increased visibility. Tuffex truly understands the needs of the music industry and delivers results. ”",
    customerDescription:
      "<b>David Thompson</b>,  Artist Manager at Sonic Strategies",
    stats: [
      { name: "Streams", value: "+400,000" },
      { name: "Revenuse", value: "+$32,000" },
      { name: "Collabs", value: "+45" },
    ],
  },
  {
    imageSRC: "/images/testimonial.webp",
    title: "Sarah Lee",
    description:
      "“Working with Tuffex has been a refreshing experience. Their platform provides a streamlined approach to networking, allowing us to connect with relevant industry professionals effortlessly. Tuffex has helped us stay ahead of trends and establish meaningful relationships that have positively impacted our marketing strategies.”",
    customerDescription:
      "<b>Sarah Lee</b>, Marketing Director at Rhythmic Entertainment",
    stats: [
      { name: "Streams", value: "+300,000" },
      { name: "Revenuse", value: "+$62,000" },
      { name: "Collabs", value: "+22" },
    ],
  },
];

// EXCLUSIVE CONTENT
export const exclusiveCommunityList: string[] = [
  "<b>Access,</b>to premium networking events",
  "<b>Exclusive</b>  workshops and masterclasses",
  "<b> Special discounts</b> on industry-related products and services",
];

// PACKAGES
export const packagesList: PackageType[] = [
  {
    title: "Monthly Membership",
    price: 29.99,
    pricePer: "month",
    btnTitle: "Select plan",
    guaranteForMoneyBackInDays: 7,
  },
  {
    title: "YEARLY Membership",
    price: 14.99,
    pricePer: "month",
    btnTitle: "Select plan",
    guaranteForMoneyBackInDays: 7,
    isBestValue: true,
    discount: "50",
  },
];

// FAQ
export const questions: Question[] = [
  {
    question: "What is Tuffex?",
    answer:
      "<b>Tuffex is an exclusive platform that brings together key players in the music industry</b> for networking, collaboration, and access to specialized resources.",
  },
  {
    question: "How can I use Tuffex for my career in the music industry?",
    answer:
      "<b>Through Tuffex, you can connect with industry influencers,</b> explore new collaboration opportunities, access career development resources, and promote your work.",
  },
  {
    question: " How can I become a member of Tuffex?",
    answer:
      "<b>LYou can apply for membership on the Tuffex platform</b> through their official website and follow the steps for registration.",
  },
  {
    question: "How does Tuffex support independent artists?",
    answer:
      "Tuffex provides a platform for independent artists to connect with relevant experts, distributors, and collaborators to expand their influence and achieve greater",
  },
  {
    question: "How can I get more information about Tuffex?",
    answer:
      "For more information about <b>Tuffex</b>, you can visit their website, follow them on social media, or contact their support team via email.",
  },
];

// BLOGS
export const blogCards: Blog[] = [
  {
    imageSRC: "/images/blogs/blog1.webp",
    title: " Exploring the Breakthroughs  in the Music Scene",
    description: "",
    created: "21.12.2023",
  },
  {
    imageSRC: "/images/blogs/blog2.webp",
    title: "Reflecting on the Success Stories in Tuffex Music",
    description: "",
    created: "22.12.2023",
  },
  {
    imageSRC: "/images/blogs/blog3.webp",
    title: "Capturing the Victories of Tuffex in the Music Realm",
    description: "",
    created: "24.12.2023",
  },
];

// FOOTER
export const footerLinks: ({ name: string; href: string } | "line")[] = [
  { name: "Privacy policy", href: "/" },
  "line",
  { name: "Terms of service", href: "/" },
];

// SOCIAL MEDIA
export const socialMediaLinks: { title: string; href: string; Icon: any }[] = [
  { title: "Instagram", href: "https://instagram.com", Icon: FaInstagram },
  { title: "Facebook", href: "https://facebook.com", Icon: FaFacebook },
  { title: "Youtube", href: "https://youtube.com", Icon: FaYoutube },
];
