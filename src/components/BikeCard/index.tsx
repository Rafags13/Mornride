import { View, Text } from "react-native";
import styles from "./style";
import { useNavigation } from "@react-navigation/native";
import { convertNumberFromTwoDecimals } from "../../util/functions";
import { BikeCardsDto } from "../../util/model/BikeCardsDto";
import { useState } from "react";
import { Bike } from "../Bike";
import { FavoriteBikesProps, addFromFavorite, removeFromFavorite } from '../../features/FavoriteBikes/FavoriteBikesSlice';
import { useAppDispatch, useAppSelector } from "../../apps/hooks";

type Props = {
    bike: BikeCardsDto
}

export default function BikeCard({ bike }: Props) {
    const bikeDisplayedIsFavorited = useAppSelector((state) => state.favoriteBikes.bikes.find(x => x.id === bike.id) !== undefined);
    const [currentUrlPhotoByColor, setCurrentUrlPhotoByColor] = useState<string>(bike.imagesFromBikeByColor[0].imageUrl);
    const dispatch = useAppDispatch();

    const navigation = useNavigation<any>();

    function onRedirectToBikeSpecification() {
        navigation.navigate('bikeSpecification', { bikeId: bike.id })
    }

    function setCurrentImageByColor(color: string) {
        if (color === currentUrlPhotoByColor) return;

        const currentImage = bike.imagesFromBikeByColor.find(image => image.hexColor === color)?.imageUrl;

        if (currentImage) {
            setCurrentUrlPhotoByColor(currentImage);
        }
    }

    return (
        <Bike.Root>
            <Bike.Touchable style={styles.cardContainer} onPress={onRedirectToBikeSpecification}>
                <Bike.Display style={{ padding: 5 }}>
                    <Bike.Favorite isFavorited={bikeDisplayedIsFavorited} setIsFavorited={(favorited) => {
                        if (favorited) {
                            var bikeToFavorite: FavoriteBikesProps = {
                                id: bike.id,
                                title: bike.title,
                                currentBikeImageUrl: currentUrlPhotoByColor,
                                stock: bike.stock,
                                price: bike.price
                            }

                            dispatch(addFromFavorite(bikeToFavorite));
                            return;
                        }

                        dispatch(removeFromFavorite(bike.id));
                    }} />
                    <Bike.Image source={currentUrlPhotoByColor} />
                </Bike.Display>

                <Bike.Stock stock={bike.stock} />
                <Bike.Title title={bike.title} />
            </Bike.Touchable>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Bike.Colors
                    colors={bike.avaliableColors}
                    setCurrentColor={setCurrentImageByColor}
                // TODO: implement this when add another bike with same color
                />
                <Text style={{ color: '#666', fontWeight: '700' }}>
                    {`R$ ${convertNumberFromTwoDecimals(bike.price)}`}
                </Text>
            </View>
        </Bike.Root>
    )
}