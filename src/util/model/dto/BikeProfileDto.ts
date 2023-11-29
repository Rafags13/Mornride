import { BikeImagesByColorDto } from "./BikeImagesByColorDto"

export type BikeProfileDto = {
  images: BikeImagesByColorDto[],
  title: string
  stock: number
  categories: string[]
  avaliableColors: string[]
  description: string
  price: number
}