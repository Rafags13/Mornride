import { View, Image, Text } from "react-native";
import { styles } from "./style";
import { ReactNode } from "react";

type Props = {
    tintColor?: string | undefined,
    backgroundColor?: string
}

export default function Header({ tintColor = 'white', backgroundColor = 'black' }: Props) {
    return (
        <View style={[styles.container, { backgroundColor }]}>
            <Image style={{ width: 30, height: 30 }} source={require('../../../assets/bicycle-wheel.png')} />
            <Text style={{ color: tintColor, fontWeight: '500', fontSize: 18 }}>MORNRIDE</Text>
        </View>
    )
}