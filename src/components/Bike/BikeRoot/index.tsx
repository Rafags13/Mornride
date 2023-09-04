import { View, Text } from 'react-native'
import React, { ReactNode } from 'react'
import styles from './style'

type Props = {
    children: ReactNode
}

export default function BikeRoot({ children }: Props) {
    return (
        <View style={styles.container}>
            {children}
        </View>
    )
}