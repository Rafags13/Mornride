import React from 'react'
import { CardProps } from '../../util/model/CardProps'
import BikeCard from '../BikeCard'
import FavoriteButton from '../FavoriteButton'
import BikeImage from '../BikeImage'
import { FlatList, Text } from 'react-native'
import AvaliableColors from '../AvaliableColors'
import { globalStyles } from '../../util/styles/global'

type Props = {
    cards: CardProps[]
}

export default function SaleBikesList({ cards }: Props) {
    return (
        <FlatList
            data={cards}
            style={{ marginVertical: 20 }}
            contentContainerStyle={{
                gap: 20
            }}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({ item, index }) => (
                <BikeCard
                    favoriteButton={<FavoriteButton />}
                    bikeImage={<BikeImage source={item.imageUrl} />}
                    titleBike={<Text style={globalStyles.title}>{item.titleLabel}</Text>}
                    avaliableColors={<AvaliableColors colors={item.avaliableColors} />}
                    amountOnStock={item.amountOnStock}
                    price={item.price}
                    key={index}
                />
            )}
        />

    )
}
