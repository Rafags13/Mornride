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
import DisplayTouchable from "../../components/DisplayTouchable";
import DisplayImage from "../../components/DisplayImage";
import BuyMenu from "../../components/BuyMenu";
import Button from "../../components/Button";

export default function BikeSpecification() {
    const { params } = useRoute<RouteProp<{ params: { bikeId: number } }, 'params'>>();
    const CurrentBike = BikeProfiles.find((value) => value.id === params.bikeId);
    const [currentBikeImages, setCurrentBikeImages] = useState(CurrentBike?.bikes.at(0));
    const [currentDisplayPhoto, setCurrentDisplayPhoto] = useState(currentBikeImages?.images.at(0));

    function onCurrentColor(color: string) {
        const newBikes = CurrentBike?.bikes?.find(bike => bike.colorHex === color);
        setCurrentDisplayPhoto(newBikes?.images[0])
        setCurrentBikeImages(newBikes);
    }

    return (
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
            <DisplayImage>
                <BikeImage source={currentDisplayPhoto} height={300} />
            </DisplayImage>

            <View style={styles.imageSelectorContainer}>
                {currentBikeImages?.images?.map((bike) => (
                    <DisplayTouchable
                        key={bike}
                        isSelected={bike === currentDisplayPhoto}
                        onPress={() => { setCurrentDisplayPhoto(bike) }}
                    >
                        <DisplayImage>
                            <BikeImage source={bike} height={70} />
                        </DisplayImage>
                    </DisplayTouchable>
                )
                )}
            </View>

            <View style={styles.titleContainer}>
                <Text style={styles.title}>{CurrentBike?.title}</Text>

                <FavoriteButton containerStyle={styles.heartBackground} />
            </View>

            <View style={styles.rowLine}>
                <View style={styles.avaliationSection}>
                    <Entypo name="star" color="#F19818" size={24} style={{ marginRight: 10 }} />

                    <Text style={styles.rankText}>{CurrentBike?.rankAverage}</Text>
                    <Text style={[globalStyles.commonText, { marginLeft: 5 }]}>({CurrentBike?.reviewCount} reviews)</Text>
                </View>
                <View style={styles.avaliationSection}>
                    <Text style={styles.rankText}>{CurrentBike?.stock}</Text>
                    <Text style={[globalStyles.commonText, { marginLeft: 5 }]}>stocks</Text>
                </View>
            </View>

            <View style={styles.rowLine}>
                <Text style={globalStyles.title}>Color</Text>

                <AvaliableColors colors={CurrentBike?.avaliableColors as string[]} setCurrentColor={onCurrentColor} />
            </View>

            <View style={styles.rowLine}>
                <Text style={globalStyles.title}>Category</Text>
                <Text style={styles.rankText}>{convertCaterogiesToLabel(CurrentBike?.categories as string[])}</Text>
            </View>

            <Text style={[globalStyles.title, { marginVertical: 15 }]}>Product overview</Text>

            <Text style={styles.rankText}>{CurrentBike?.description}</Text>

            <BuyMenu price={CurrentBike?.price as number}>
                <>
                    <Button onClick={() => { }} label={"Quantidade"} textStyle={{ fontSize: 12 }} />
                    <Button onClick={() => { }} label={"Buy Now"} textStyle={{ fontSize: 12 }} />
                </>
            </BuyMenu>
        </ScrollView>
    )
}