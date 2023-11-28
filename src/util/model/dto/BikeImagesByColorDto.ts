import { BikeImagesProfileDto } from "./BikeImagesProfileDto"

export type BikeImagesByColorDto = {
  hexColor: string
  bikeImages: BikeImagesProfileDto[]
}