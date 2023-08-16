import { View, Image, Text } from "react-native";
import { styles } from "./style";
import { ReactNode } from "react";

type Props = {
    children: ReactNode
}

export default function Header({ children, ...props }: Props) {
    return (
        <View style={styles.container} {...props}>
            <Image style={{ width: 30, height: 30 }} source={require('../../../assets/bicycle-wheel.png')} />
            <Text style={{ color: 'white', fontWeight: '900' }}>MORNRIDE</Text>
        </View>
    )
}