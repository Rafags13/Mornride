import { ImageSourcePropType } from "react-native"

export type CardProps = {
    id: number,
    imageUrl: ImageSourcePropType,
    titleLabel: string,
    avaliableColors: string[],
    amountOnStock?: number,
    price: number
}