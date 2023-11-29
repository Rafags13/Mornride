import { BikeCardsDto } from "../BikeCardsDto";
import { BikeCartDto } from "./BikeCartDto";

export type UserProfileDto = {
  name: string;
  yearsFromContribute: number,
  isPremiumMember: boolean;
  lastSeenBikes: BikeCardsDto[],
  lastPurchaseBike: BikeCartDto
};