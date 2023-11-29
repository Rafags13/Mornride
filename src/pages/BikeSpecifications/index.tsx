import { RouteProp, useRoute } from "@react-navigation/native";
import { View, Text, ScrollView } from "react-native";
import { useCallback, useState } from "react";
import styles from "./style";
import { globalStyles } from "../../util/styles/global";
import { convertCaterogiesToLabel, convertNumberFromTwoDecimals } from "../../util/functions";
import BuyMenu from "../../components/BuyMenu";
import { Bike } from "../../components/Bike";
import { useAppDispatch, useAppSelector } from "../../apps/hooks";
import { FavoriteBikesProps, addFromFavorite, removeFromFavorite } from "../../features/FavoriteBikes/FavoriteBikesSlice";
import { Skeleton } from "moti/skeleton";
import { useQuery } from "@tanstack/react-query";
import { BikeProfileDto } from "../../util/model/dto/BikeProfileDto";
import { getData } from "../../services/apiRequests";
import { PositionOfBike } from "../../util/model/enum/PositionOfBike";
import DisplayBikePanel from "../../components/DisplayBikePanel";
import { BikeImagesProfileDto } from "../../util/model/dto/BikeImagesProfileDto";

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
    const { params: { bikeId } } = useRoute<RouteProp<{ params: { bikeId: number } }, 'params'>>();

    const [currentImages, setCurrentImages] = useState<BikeImagesProfileDto[]>([]);
    const { data, isLoading } = useQuery<BikeProfileDto>({
        queryKey: [bikeId], queryFn: async () => {
            const response = await getData(`Bike/Profile/${bikeId}`);
            const data = response.data as BikeProfileDto;
            setCurrentImages(data.images[0].bikeImages);
            return data;
        }
    });

    const bikeDisplayedIsFavorited = useAppSelector((state) => state.favoriteBikes.bikes.find(x => x.id === bikeId) !== undefined);
    const dispatch = useAppDispatch();

    const onCurrentColor = (color: string) => {

        const currentImagesFromColor = data?.images.find(imageByColor => imageByColor.hexColor === color)?.bikeImages;
        if (!currentImagesFromColor) return;

        setCurrentImages(currentImagesFromColor);
    };

    return (
        <View style={{ flex: 1, paddingHorizontal: 20, backgroundColor: 'white' }}>
            {isLoading ? (
                <BikeSkeleton />
            ) : (
                <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
                    {currentImages.length > 0 && (
                        <DisplayBikePanel images={currentImages} />
                    )}

                    <View style={styles.titleContainer}>
                        <Bike.Title title={data?.title || ''} size="large" />

                        <Bike.Favorite isFavorited={bikeDisplayedIsFavorited} containerStyle={styles.heartBackground} setIsFavorited={(favorite) => {
                            if (favorite) {
                                var bikeToFavorite: FavoriteBikesProps = {
                                    id: bikeId,
                                    title: data?.title ?? "",
                                    currentBikeImageUrl: data?.images[0].bikeImages[0].imageUrl ?? "",
                                    stock: data?.stock ?? 0,
                                    price: data?.price ?? 0
                                }
                                dispatch(addFromFavorite(bikeToFavorite));
                                return;
                            }

                            dispatch(removeFromFavorite(bikeId));
                        }} />
                    </View>

                    <View style={styles.rowLine}>
                        {/* <View style={styles.avaliationSection}>
                            <Entypo name="star" color="#F19818" size={24} style={{ marginRight: 10 }} />

                            <Text style={styles.rankText}>{CurrentBike?.rankAverage}</Text>
                            <Text style={[globalStyles.commonText, { marginLeft: 5 }]}>({CurrentBike?.reviewCount} reviews)</Text>
                        </View> */}
                        {/* Funcionality not implemented yet. */}
                        <View style={styles.avaliationSection}>
                            <Text style={styles.rankText}>{data?.stock}</Text>
                            <Text style={[globalStyles.commonText, { marginLeft: 5 }]}>stocks</Text>
                        </View>
                    </View>

                    <View style={styles.rowLine}>
                        <Text style={globalStyles.title}>Color</Text>

                        <Bike.Colors colors={data?.avaliableColors ?? []} setCurrentColor={onCurrentColor} />
                    </View>

                    <View style={styles.rowLine}>
                        <Text style={globalStyles.title}>Category</Text>
                        <Text style={styles.rankText}>{convertCaterogiesToLabel(data?.categories ?? [])}</Text>
                    </View>

                    <Text style={[globalStyles.title, { marginVertical: 15 }]}>Product overview</Text>

                    <Text style={styles.rankText}>{data?.description}</Text>

                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10, marginVertical: 15 }}>
                        <Text style={globalStyles.title}>
                            Final Price:
                        </Text>
                        <Text style={globalStyles.commonText}>
                            R$ {convertNumberFromTwoDecimals(data?.price ?? 0.00)}
                        </Text>
                    </View>
                </ScrollView>
            )}

            <BuyMenu bikeId={bikeId} />
        </View >
    )
}