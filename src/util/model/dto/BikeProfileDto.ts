import { BikeImagesProfileDto } from "./BikeImagesProfileDto"

export type BikeProfileDto = {
  images: BikeImagesProfileDto[],
  title: string
  stock: number
  categories: string[]
  avaliableColors: string[]
  description: string
  price: number
}