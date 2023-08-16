import { View, Image, Text } from "react-native";
import { styles } from "./style";

export default function Header() {
    return (
        <View style={styles.container} >
            <Image style={{ width: 30, height: 30 }} source={require('../../../assets/bicycle-wheel.png')} />
            <Text style={{ color: 'white', fontWeight: '900' }}>MORNRIDE</Text>
        </View>
    )
}