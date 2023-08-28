import { RouteProp, useRoute } from "@react-navigation/native";
import { View, Text, ScrollView, Image, TouchableOpacity, FlatList } from "react-native";
import BikeImage from "../../components/BikeImage";
import { useEffect, useState } from "react";
import BikeProfiles from "../../util/data/database";
import styles from "./style";

export default function BikeSpecification() {
    const { params } = useRoute<RouteProp<{ params: { bikeId: number } }, 'params'>>();
    const Profile = BikeProfiles.find((value) => value.id === params.bikeId);
    const [currentBike, setCurrentBike] = useState(Profile?.bikes.at(0));

    return (
        <ScrollView style={{ width: '100%' }}>
            <TouchableOpacity activeOpacity={0.5} style={styles.imageDisplayContainer}>
                <BikeImage source={currentBike} height={300} />
            </TouchableOpacity>

            <View style={styles.imageSelectorContainer}>
                {Profile?.bikes.map((bike) => (
                    <TouchableOpacity
                        activeOpacity={0.5}
                        style={[styles.imageSelector, { borderColor: currentBike === bike ? '#AFD471' : 'transparent' }]}
                        onPress={() => { setCurrentBike(bike) }}
                    >
                        <BikeImage source={bike} height={70} />
                    </TouchableOpacity>
                ))}
            </View>


        </ScrollView>
    )
}