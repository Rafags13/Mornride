import { RouteProp, useRoute } from "@react-navigation/native";
import { View, Text, ScrollView } from "react-native";
import { useCallback, useState } from "react";
import BikeProfiles from "../../util/data/database";
import styles from "./style";
import { globalStyles } from "../../util/styles/global";
import Entypo from '@expo/vector-icons/Entypo';
import { convertCaterogiesToLabel, convertNumberFromTwoDecimals } from "../../util/functions";
import BuyMenu from "../../components/BuyMenu";
import { Bike } from "../../components/Bike";

export default function BikeSpecification() {
    const { params } = useRoute<RouteProp<{ params: { bikeId: number } }, 'params'>>();
    const CurrentBike = BikeProfiles.find((value) => value.id === params.bikeId);
    const [currentBikeImages, setCurrentBikeImages] = useState(CurrentBike?.bikes.at(0));
    const [currentDisplayPhoto, setCurrentDisplayPhoto] = useState(currentBikeImages?.images[0]);

    const onCurrentColor = useCallback((color: string) => {
        const newBikes = CurrentBike?.bikes?.find(bike => bike.colorHex === color);
        setCurrentDisplayPhoto(newBikes?.images[0])
        setCurrentBikeImages(newBikes);
    }, []);

    return (
        <View style={{ flex: 1 }}>
            <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
                <Bike.Display>
                    <Bike.Image source={currentDisplayPhoto} height={300} />
                </Bike.Display>

                <View style={styles.imageSelectorContainer}>
                    {currentBikeImages?.images?.map((bike) => (
                        <Bike.Touchable
                            key={bike}
                            isSelected={bike === currentDisplayPhoto}
                            hasBorder
                            onPress={() => { setCurrentDisplayPhoto(bike) }}
                        >
                            <Bike.Display>
                                <Bike.Image source={bike} height={70} />
                            </Bike.Display>
                        </Bike.Touchable>
                    )
                    )}
                </View>

                <View style={styles.titleContainer}>
                    <Bike.Title title={CurrentBike?.title || ''} size="large" />

                    <Bike.Favorite containerStyle={styles.heartBackground} setIsFavorited={() => { }} />
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

                    <Bike.Colors colors={CurrentBike?.avaliableColors as string[]} setCurrentColor={onCurrentColor} />
                </View>

                <View style={styles.rowLine}>
                    <Text style={globalStyles.title}>Category</Text>
                    <Text style={styles.rankText}>{convertCaterogiesToLabel(CurrentBike?.categories as string[])}</Text>
                </View>

                <Text style={[globalStyles.title, { marginVertical: 15 }]}>Product overview</Text>

                <Text style={styles.rankText}>{CurrentBike?.description}</Text>

                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10, marginVertical: 15 }}>
                    <Text style={globalStyles.title}>
                        Final Price:
                    </Text>
                    <Text style={globalStyles.commonText}>
                        R$ {convertNumberFromTwoDecimals(CurrentBike?.price as number)}
                    </Text>
                </View>
                <View style={{ marginTop: 70 }} />
            </ScrollView>

            <BuyMenu bikeId={CurrentBike?.id as number} />
        </View >
    )
}