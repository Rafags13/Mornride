import { BikeImageDto } from "./BikeImageDto"

export type BikeCardsDto = {
    id: number,
    bikes: BikeImageDto[],
    title: string,
    description: string,
    stock: number,
    avaliableColors: string[],
    rankAverage: number,
    reviewCount: number,
    categories: string[],
    price: number,
    currentBikeImage: any
}