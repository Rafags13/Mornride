import { View, Text } from 'react-native'
import React from 'react'
import ChangeColor from '../ChangeColor'

type Props = {
    colors: string[]
}

export default function AvaliableColors({ colors }: Props) {
    return (
        <View style={{ gap: 5, flexDirection: 'row' }}>
            {colors.map((color, key) => (
                <ChangeColor key={key} color={color} />
            ))}
        </View>
    )
}