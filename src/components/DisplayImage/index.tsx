import { View, Text } from 'react-native'
import React, { ReactNode } from 'react'
import styles from './style'

type Props = {
    children: ReactNode
}

export default function DisplayImage({ children }: Props) {
    return (
        <View style={styles.imageDisplayContainer}>
            {children}
        </View>
    )
}