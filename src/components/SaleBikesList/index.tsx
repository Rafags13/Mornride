import React, { useState } from 'react'
import { CardProps } from '../../util/model/CardProps'
import BikeCard from '../BikeCard'
import FavoriteButton from '../FavoriteButton'
import BikeImage from '../BikeImage'
import { FlatList, ImageSourcePropType, Text } from 'react-native'
import AvaliableColors from '../AvaliableColors'
import { globalStyles } from '../../util/styles/global'
import { BikeCardsDto } from '../../util/model/BikeCardsDto'
import DisplayTouchable from '../DisplayTouchable'
import DisplayImage from '../DisplayImage'
import { useNavigation } from '@react-navigation/native'

type Props = {
    bikeCards: BikeCardsDto[]
}

export default function SaleBikesList({ bikeCards }: Props) {
    const [current, setCurrent] = useState(bikeCards);
    const navigator = useNavigation<any>();

    return (
        <FlatList
            data={current}
            style={{ marginVertical: 20 }}
            contentContainerStyle={{
                gap: 20
            }}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({ item, index }) => {
                return (
                    <BikeCard bike={item} />
                )
            }}
        />

    )
}
