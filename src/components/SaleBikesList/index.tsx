import React, { useState } from 'react'
import BikeCard from '../BikeCard'
import { FlatList } from 'react-native'
import { BikeCardsDto } from '../../util/model/BikeCardsDto'

type Props = {
    bikeCards: BikeCardsDto[]
}

export default function SaleBikesList({ bikeCards }: Props) {

    return (
        <FlatList
            data={bikeCards}
            style={{ marginVertical: 20 }}
            contentContainerStyle={{
                gap: 20
            }}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({ item, index }) => {
                return (
                    <BikeCard key={item.id} bike={item} />
                )
            }}
        />

    )
}
