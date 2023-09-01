import { View, StyleProp, ViewStyle } from 'react-native'
import React, { ReactNode } from 'react'
import styles from './style'

interface Props {
    children: ReactNode,
    style?: StyleProp<ViewStyle>
}

export default function DisplayImage({ children, style }: Props) {
    return (
        <View style={[styles.imageDisplayContainer, style]}>
            {children}
        </View>
    )
}