import { BikeCardsDto } from "../BikeCardsDto"
import { HomeBannerDto } from "./HomeBannerDto"
import { HomeCategoryDto } from "./HomeCategoryDto"

export type HomeUserInformationsDto = {
  banners: HomeBannerDto[]
  bikes: BikeCardsDto[]
  categories: HomeCategoryDto[]
}