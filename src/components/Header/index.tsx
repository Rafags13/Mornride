import { View, Image, Text } from "react-native";
import { styles } from "./style";
import { ReactNode } from "react";

type Props = {
    tintColor: string | undefined
}

export default function Header({ tintColor }: Props) {
    return (
        <View style={styles.container}>
            <Image style={{ width: 30, height: 30 }} source={require('../../../assets/bicycle-wheel.png')} />
            <Text style={{ color: tintColor, fontWeight: '500', fontSize: 18 }}>MORNRIDE</Text>
        </View>
    )
}