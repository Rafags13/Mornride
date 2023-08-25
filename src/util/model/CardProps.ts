import { ImageSourcePropType } from "react-native"

export type CardProps = {
    imageUrl: ImageSourcePropType,
    titleLabel: string,
    avaliableColors: string[],
    amountOnStock?: number,
    price: number
}