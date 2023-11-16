import { Text } from 'react-native'

import styles from "./style";

type Props = {
    stock: number
}

export default function StockLeftText({ stock }: Props) {
    return (
        <Text style={stock > 10 ? styles.textHigherTen : styles.textUnderTen}>
            {stock} on stock bicycle left
        </Text>
    )
}