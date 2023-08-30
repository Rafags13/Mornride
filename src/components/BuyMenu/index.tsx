import { View, Text } from 'react-native'
import React, { ReactNode } from 'react'
import { globalStyles } from '../../util/styles/global'
import styles from './style'
import { convertNumberFromTwoDecimals } from '../../util/functions'

type Props = {
    children: ReactNode,
    price: number,
}

export default function BuyMenu({ children, price }: Props) {
    return (
        <View style={styles.container}>
            <Text style={{ color: 'white', fontSize: 16 }}> R$ {convertNumberFromTwoDecimals(price)}</Text>
            {children}
        </View>
    )
}