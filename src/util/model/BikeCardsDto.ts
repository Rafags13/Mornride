import { BikeImageByColorDto } from "./dto/BikeImageByColorDto"

export type BikeCardsDto = {
    id: number,
    imagesFromBikeByColor: BikeImageByColorDto[],
    title: string,
    stock: number,
    avaliableColors: string[],
    categoryNames: string[],
    price: number
}