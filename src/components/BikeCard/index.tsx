import { View, Text } from "react-native";
import styles from "./style";
import { useNavigation } from "@react-navigation/native";
import { convertNumberFromTwoDecimals } from "../../util/functions";
import AvaliableColors from "../AvaliableColors";
import { BikeCardsDto } from "../../util/model/BikeCardsDto";
import { globalStyles } from "../../util/styles/global";
import DisplayTouchable from "../DisplayTouchable";
import FavoriteButton from "../FavoriteButton";
import BikeImage from "../BikeImage";
import { useState } from "react";
import DisplayImage from "../DisplayImage";

type Props = {
    bike: BikeCardsDto
}

export default function BikeCard({ bike }: Props) {
    const [currentPhoto, setCurrentPhoto] = useState(bike.bikes[0].images[0]);

    const navigation = useNavigation<any>();

    function onRedirectToBikeSpecification() {
        navigation.navigate('bikeSpecification', { bikeId: bike.id })
    }

    function setCurrentImageByColor(color: string) {
        const current = bike.bikes.find(bike => bike.colorHex === color);
        setCurrentPhoto(current?.images[0]);
    }

    return (
        <View style={{ gap: 10, width: 200 }}>
            <DisplayTouchable style={{ width: 200, gap: 5 }} onPress={onRedirectToBikeSpecification}>
                <DisplayImage style={{ padding: 5 }}>
                    <FavoriteButton />
                    <BikeImage source={currentPhoto} height={140} />
                </DisplayImage>

                {bike.stock > 0 && (
                    <Text style={styles.amountOnStockText}>
                        {bike.stock} stock bicycle left
                    </Text>
                )}
                <Text style={globalStyles.title}>{bike.title}</Text>
            </DisplayTouchable>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <AvaliableColors
                    colors={bike.avaliableColors}
                    setCurrentColor={(color) => { setCurrentImageByColor(color) }}
                />
                <Text style={{ color: '#666', fontWeight: '700' }}>
                    {`R$ ${convertNumberFromTwoDecimals(bike.price)}`}
                </Text>
            </View>
        </View>
    )
}