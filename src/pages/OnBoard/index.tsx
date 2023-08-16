import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "./style";
import Header from "../../components/Header";

export default function OnBoard() {
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.title}>KEEP HEALTHY, RIDE EVERYDAY</Text>
                <Image
                    style={styles.onBoardBicycleImage}
                    source={require('../../../assets/on-board-bicycle.png')} />
            </View>
            <View style={{ gap: 20 }}>
                <Text style={{ color: 'white' }}>
                    Keep healthy ride everyday everywhere with Mornride Bike product.
                    Login and get some produt of Mornride!
                </Text>
                <TouchableOpacity
                    activeOpacity={0.5}
                    style={styles.buttonJoin}>
                    <Text style={styles.buttonText}>Get started</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}