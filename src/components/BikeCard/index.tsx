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
    const [currentPhoto, setCurrentPhoto] = useState(bike.bikes[0].images[0]);
    const bikeDisplayedIsFavorited = useAppSelector((state) => state.favoriteBikes.bikes.find(x => x.id === bike.id) !== undefined);
    const dispatch = useAppDispatch();

    const navigation = useNavigation<any>();

    function onRedirectToBikeSpecification() {
        navigation.navigate('bikeSpecification', { bikeId: bike.id })
    }

    function setCurrentImageByColor(color: string) {
        const current = bike.bikes.find(bike => bike.colorHex === color);
        setCurrentPhoto(current?.images[0]);
    }

    return (
        <Bike.Root>
            <Bike.Touchable style={styles.cardContainer} onPress={onRedirectToBikeSpecification}>
                <Bike.Display style={{ padding: 5 }}>
                    <Bike.Favorite isFavorited={bikeDisplayedIsFavorited} setIsFavorited={(favorited) => {
                        if (favorited) {
                            dispatch(addFromFavorite(bike.id));
                            return;
                        }

                        dispatch(removeFromFavorite(bike.id));
                    }} />
                    <Bike.Image source={currentPhoto} />
                </Bike.Display>

                <Bike.Stock stock={bike.stock} />
                <Bike.Title title={bike.title} />
            </Bike.Touchable>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Bike.Colors
                    colors={bike.avaliableColors}
                    setCurrentColor={(color) => { setCurrentImageByColor(color) }}
                />
                <Text style={{ color: '#666', fontWeight: '700' }}>
                    {`R$ ${convertNumberFromTwoDecimals(bike.price)}`}
                </Text>
            </View>
        </Bike.Root>
    )
}