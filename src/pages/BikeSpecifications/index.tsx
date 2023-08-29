import { RouteProp, useRoute } from "@react-navigation/native";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import BikeImage from "../../components/BikeImage";
import { useEffect, useState } from "react";
import BikeProfiles from "../../util/data/database";
import styles from "./style";
import { globalStyles } from "../../util/styles/global";
import Entypo from '@expo/vector-icons/Entypo';
import FavoriteButton from "../../components/FavoriteButton";
import AvaliableColors from "../../components/AvaliableColors";
import { convertCaterogiesToLabel } from "../../util/functions";

export default function BikeSpecification() {
    const { params } = useRoute<RouteProp<{ params: { bikeId: number } }, 'params'>>();
    const Profile = BikeProfiles.find((value) => value.id === params.bikeId);
    const [currentColor, setCurrentColor] = useState(Profile?.avaliableColors.at(0) || '');
    const [currentBikes, setCurrentBikes] = useState(Profile?.bikes);
    const [currentBike, setCurrentBike] = useState(Profile?.bikes.at(0));
    const [currentDisplayPhoto, setCurrentDisplayPhoto] = useState(currentBike?.images.at(0));
    // TODO: Refactor and finish this (find new images and but then inside the assets folder)

    function onCurrentColor(color: string) {
        setCurrentColor(color);
        const newBikes = currentBikes?.find(bike => bike.colorHex === color);
        setCurrentDisplayPhoto(newBikes?.images[0])
        setCurrentBike(newBikes);
    }

    return (
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
            <TouchableOpacity activeOpacity={0.5} style={styles.imageDisplayContainer}>
                <BikeImage source={currentDisplayPhoto} height={300} />
            </TouchableOpacity>

            <View style={styles.imageSelectorContainer}>
                {currentBike?.images?.map((bike, index) => {
                    return (
                        <TouchableOpacity
                            key={index.toString()}
                            activeOpacity={0.5}
                            style={[styles.imageSelector, { borderColor: currentDisplayPhoto === bike ? '#AFD471' : 'transparent' }]}
                            onPress={() => { setCurrentDisplayPhoto(bike) }}
                        >
                            <BikeImage source={bike} height={70} />
                        </TouchableOpacity>
                    )
                })}
            </View>

            <View style={styles.titleContainer}>
                <Text style={styles.title}>{Profile?.title}</Text>

                <FavoriteButton containerStyle={styles.heartBackground} />
            </View>

            <View style={styles.rowLine}>
                <View style={styles.avaliationSection}>
                    <Entypo name="star" color="#F19818" size={24} style={{ marginRight: 10 }} />

                    <Text style={styles.rankText}>{Profile?.rankAverage}</Text>
                    <Text style={[globalStyles.commonText, { marginLeft: 5 }]}>({Profile?.reviewCount} reviews)</Text>
                </View>
                <View style={styles.avaliationSection}>
                    <Text style={styles.rankText}>{Profile?.stock}</Text>
                    <Text style={[globalStyles.commonText, { marginLeft: 5 }]}>stocks</Text>
                </View>
            </View>

            <View style={styles.rowLine}>
                <Text style={globalStyles.title}>Color</Text>

                <AvaliableColors colors={Profile?.avaliableColors as string[]} setCurrentColor={onCurrentColor} />
            </View>

            <View style={styles.rowLine}>
                <Text style={globalStyles.title}>Category</Text>
                <Text style={styles.rankText}>{convertCaterogiesToLabel(Profile?.categories as string[])}</Text>
            </View>

            <Text style={[globalStyles.title, { marginVertical: 15 }]}>Product overview</Text>

            <Text style={styles.rankText}>{Profile?.description}</Text>

        </ScrollView>
    )
}