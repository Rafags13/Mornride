import { RouteProp, useRoute } from "@react-navigation/native";
import { View, Text, ScrollView } from "react-native";
import { useState } from "react";
import BikeProfiles from "../../util/data/database";
import styles from "./style";
import { globalStyles } from "../../util/styles/global";
import Entypo from '@expo/vector-icons/Entypo';
import { convertCaterogiesToLabel } from "../../util/functions";
import BuyMenu from "../../components/BuyMenu";
import Button from "../../components/Button";
import { Bike } from "../../components/Bike";

export default function BikeSpecification() {
    const { params } = useRoute<RouteProp<{ params: { bikeId: number } }, 'params'>>();
    const CurrentBike = BikeProfiles.find((value) => value.id === params.bikeId);
    const [currentBikeImages, setCurrentBikeImages] = useState(CurrentBike?.bikes.at(0));
    const [currentDisplayPhoto, setCurrentDisplayPhoto] = useState(currentBikeImages?.images[0]);
    const [purchaseCounter, setPurchaseCounter] = useState(10);

    function onCurrentColor(color: string) {
        const newBikes = CurrentBike?.bikes?.find(bike => bike.colorHex === color);
        setCurrentDisplayPhoto(newBikes?.images[0])
        setCurrentBikeImages(newBikes);
    }

    function onPurchaseRemoveInCounter() {
        setPurchaseCounter(purchaseCounter => purchaseCounter - 1);
    }

    function onPurchaseAddInCounter() {
        setPurchaseCounter(purchaseCounter => purchaseCounter + 1);
    }

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

                <View style={{ marginTop: 100 }} />
            </ScrollView>

            <BuyMenu price={CurrentBike?.price as number} style={{ width: '90%' }}>
                <View style={styles.buttonsContainer}>
                    <View style={styles.buttonCounterContainer}>
                        <Button
                            onClick={onPurchaseRemoveInCounter}
                            typeOfButton="empty"
                            disabled={purchaseCounter === 0}
                        >
                            <Text style={globalStyles.commonText}>-</Text>
                        </Button>

                        <Text style={[globalStyles.commonText, { fontSize: 12 }]}>{purchaseCounter}</Text>

                        <Button
                            onClick={onPurchaseAddInCounter}
                            typeOfButton="empty"
                        >
                            <Text style={globalStyles.commonText}>+</Text>
                        </Button>
                    </View>
                    <Button onClick={() => { }}>
                        <Text style={[globalStyles.commonText, { fontSize: 12 }]}>Buy Now</Text>
                    </Button>
                </View>
            </BuyMenu>
        </View>
    )
}