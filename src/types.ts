export interface Sponsor {
  imageSRC: string;
  title: string;
}

export interface Creator {
  name: string;
  imageSRC: string;
  charachterImageSRC?: string;
}

export interface Benefit {
  title: string;
  subtitle: string;
  description: string;
  videoSRC: string;
}

export interface HowItWork {
  title: string;
  description: string;
  list: string[];
  imageSRC: string;
}

export interface SuccessStory {
  imageSRCS: string[];
}

export interface Testimonial {
  imageSRC: string;
  title: string;
  description: string;
  customerDescription: string;
  stats: {
    value: string;
    name: string;
  }[];
}

export interface PackageType {
  title: string;
  isBestValue?: boolean;
  price: number;
  pricePer: "hour" | "day" | "month" | "year";
  discount?: string;
  btnTitle: string;
  guaranteForMoneyBackInDays: number;
}

export interface Question {
  question: string;
  answer: string;
}

export interface Blog {
  imageSRC: string;
  title: string;
  created: string;
  description: string;
}
