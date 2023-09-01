import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import ChangeColor from '../ChangeColor'

type Props = {
    colors: string[],
    setCurrentColor?: (color: string) => void,
}

export default function AvaliableColors({ colors, setCurrentColor = () => { } }: Props) {
    return (
        <View style={{ gap: 5, flexDirection: 'row' }} >
            {colors.map((color, key) => (
                <TouchableOpacity key={key} onPress={() => { setCurrentColor(color) }}>
                    <ChangeColor color={color} />
                </TouchableOpacity>
            ))}
        </View>
    )
}