import { ImageSourcePropType } from "react-native"
import { BikeImageDto } from "./BikeImageDto"

export type CardProps = {
    id: number,
    imageUrl: ImageSourcePropType,
    bikes: BikeImageDto[],
    titleLabel: string,
    avaliableColors: string[],
    amountOnStock?: number,
    counting: number,
    price: number
}