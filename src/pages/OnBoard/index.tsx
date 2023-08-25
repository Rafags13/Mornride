import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "./style";
import Header from "../../components/Header";
import { useNavigation } from "@react-navigation/native";
import Button from "../../components/Button";

export default function OnBoard() {
    const navigation = useNavigation<any>();
    function onNavigateToHome() {
        navigation.navigate('bikeTab');
    }

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
                <Button onClick={onNavigateToHome} label={"Get started"} />
            </View>
        </View>
    )
}