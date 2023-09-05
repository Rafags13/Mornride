import { Text } from 'react-native'

import styles from "./style";

type Props = {
    stock: number
}

export default function StockLeftText({ stock }: Props) {
    return (
        <Text style={styles.text}>
            {stock} stock bicycle left
        </Text>
    )
}