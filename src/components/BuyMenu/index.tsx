import { View, Text, StyleProp, ViewStyle } from 'react-native'
import React, { ReactNode } from 'react'
import { globalStyles } from '../../util/styles/global'
import styles from './style'
import { convertNumberFromTwoDecimals } from '../../util/functions'

type Props = {
    children: ReactNode,
    price: number,
    style?: StyleProp<ViewStyle>
}

export default function BuyMenu({ children, price, style }: Props) {
    return (
        <View style={[styles.container, style]}>
            <Text style={{ color: 'white', fontSize: 16 }}> R$ {convertNumberFromTwoDecimals(price)}</Text>
            {children}
        </View>
    )
}