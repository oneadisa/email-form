import { ImageSourcePropType } from "react-native";

export interface SlideItem {
  id: number;
  description: string;
  image: ImageSourcePropType;
}

export const slides: SlideItem[] = [
    {
      id: 1,
      description: "Trusted by millions of people, part of one part",
      image: require("@/assets/images/onboarding/trust.png"), 
    },
    {
      id: 2,
      description: "Spend money abroad, and track your expense",
      image: require("@/assets/images/onboarding/send-money-abroad.png"),
    },
    {
      id: 3,
      description: "Receive Money From Anywhere In The World",
      image: require("@/assets/images/onboarding/receive-money.png"),
    },
  ];
  

  