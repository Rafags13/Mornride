import { TouchableOpacity, Image, ImageSourcePropType, View, Text } from "react-native";
import styles from "./style";
import { ReactNode } from "react";
import { useNavigation } from "@react-navigation/native";

type Props = {
    id: number,
    favoriteButton: ReactNode,
    bikeImage: ReactNode,
    titleBike?: ReactNode,
    avaliableColors: ReactNode,
    price: number,
    amountOnStock?: number,
}

export default function BikeCard({ favoriteButton, bikeImage, titleBike, amountOnStock = 0, avaliableColors, price, id, }: Props) {
    const navigation = useNavigation<any>();
    function onRedirectToBikeSpecification() {
        navigation.navigate('bikeSpecification', { bikeId: id })
    }

    return (
        <View style={{ gap: 10, width: 200 }}>
            <TouchableOpacity style={{ width: 200, gap: 5 }} activeOpacity={0.5} onPress={onRedirectToBikeSpecification}>
                <View style={styles.cardTouchableContainer} >
                    {favoriteButton}
                    {bikeImage}
                </View>
                {amountOnStock !== 0 && (
                    <Text style={styles.amountOnStockText}>
                        {amountOnStock} stock bike left
                    </Text>
                )}
                {titleBike}
            </TouchableOpacity>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                {avaliableColors}
                <Text style={{ color: '#666', fontWeight: '700' }}>
                    {`R$ ${price.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}`}
                </Text>
            </View>
        </View>
    )
}