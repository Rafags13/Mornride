import { RouteProp, useRoute } from "@react-navigation/native";
import { View, Text } from "react-native";

export default function BikeSpecification() {
    const { params } = useRoute<RouteProp<{ params: { bikeId: number } }, 'params'>>();
    return (
        <View><Text>Bike {params.bikeId}</Text></View>
    )
}