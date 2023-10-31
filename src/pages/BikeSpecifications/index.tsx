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
import { useAppDispatch, useAppSelector } from "../../apps/hooks";
import { addFromFavorite, removeFromFavorite } from "../../features/FavoriteBikes/FavoriteBikesSlice";
import { Skeleton } from "moti/skeleton";
import useFakeApiCallDelay from "../../hooks/useFakeApiCallDelay";

function BikeSkeleton() {
    return (
        <Skeleton.Group show={true}>
            <View style={{ gap: 20 }}>
                <Skeleton colorMode="light" height={300} width={'100%'} />

                <Skeleton colorMode="light" height={40} width={'100%'} />

                <Skeleton colorMode="light" width={'100%'} />

                <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                    <Skeleton colorMode="light" width={100} />
                    <Skeleton colorMode="light" width={70} />
                </View>

                <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                    <Skeleton colorMode="light" width={50} />
                    <Skeleton colorMode="light" width={50} />
                </View>

                <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                    <Skeleton colorMode="light" width={70} />
                    <Skeleton colorMode="light" width={200} />
                </View>

                <Skeleton colorMode="light" width={'100%'} />
            </View>

        </Skeleton.Group>
    )
}

export default function BikeSpecification() {
    const { params } = useRoute<RouteProp<{ params: { bikeId: number } }, 'params'>>();
    const CurrentBike = BikeProfiles.find((value) => value.id === params.bikeId);
    const [currentBikeImages, setCurrentBikeImages] = useState(CurrentBike?.bikes.at(0));
    const [currentDisplayPhoto, setCurrentDisplayPhoto] = useState(currentBikeImages?.images[0]);
    const bikeDisplayedIsFavorited = useAppSelector((state) => state.favoriteBikes.bikes.find(x => x.id === params.bikeId) !== undefined);
    const dispatch = useAppDispatch();
    const { isLoading } = useFakeApiCallDelay(5000);

    const onCurrentColor = useCallback((color: string) => {
        const newBikes = CurrentBike?.bikes?.find(bike => bike.colorHex === color);
        setCurrentDisplayPhoto(newBikes?.images[0])
        setCurrentBikeImages(newBikes);
    }, []);

    return (
        <View style={{ flex: 1, paddingHorizontal: 20, backgroundColor: 'white' }}>
            {isLoading ? (
                <BikeSkeleton />
            ) : (
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

                        <Bike.Favorite isFavorited={bikeDisplayedIsFavorited} containerStyle={styles.heartBackground} setIsFavorited={(favorite) => {
                            if (favorite) {
                                dispatch(addFromFavorite(params.bikeId));
                                return;
                            }

                            dispatch(removeFromFavorite(params.bikeId));
                        }} />
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
            )}


            <BuyMenu bikeId={CurrentBike?.id as number} />
        </View >
    )
}