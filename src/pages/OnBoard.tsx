import { View, Text, Image, TouchableOpacity } from "react-native";
import { styles } from "../util/styles/global";
import Header from "../components/Header";

export default function OnBoard() {
    return (
        <View style={styles.container}>
            <Header />
            <View>
                <Text style={{
                    position: 'absolute',
                    color: 'white',
                    zIndex: 1,
                    fontSize: 50,
                    textAlign: 'center',
                    fontStyle: "italic",
                    fontWeight: "900",
                    alignSelf: 'center'
                }}>KEEP HEALTHY, RIDE EVERYDAY</Text>
                <Image style={{
                    marginTop: 90,
                    width: 500,
                    height: 500,
                    zIndex: 2,

                }} source={require('../../assets/on-board-bicycle.png')} />
            </View>
            <View style={{ gap: 20 }}>
                <Text style={{ color: 'white' }}>
                    Keep healthy ride everyday everywhere with Mornride Bike product.
                    Login and get some produt of Mornride!
                </Text>
                <TouchableOpacity
                    activeOpacity={0.5}
                    style={{ backgroundColor: '#c1f376', padding: 15, borderRadius: 20, alignItems: 'center' }}>
                    <Text style={{ color: 'black', fontWeight: '700' }}>Get started</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}