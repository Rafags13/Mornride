import { HomeBannerDto } from "./HomeBannerDto"
import { HomeBikeDto } from "./HomeBikeDto"
import { HomeCategoryDto } from "./HomeCategoryDto"

export type HomeUserInformationsDto = {
  banners: HomeBannerDto[]
  bikes: HomeBikeDto[]
  categories: HomeCategoryDto[]
}