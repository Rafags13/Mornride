import React, { useCallback, useRef, useState } from 'react'
import BikeCard from '../BikeCard'
import { FlatList, ScrollView, Text, View, ViewToken, ViewabilityConfig, VirtualizedList } from 'react-native'
import { BikeCardsDto } from '../../util/model/BikeCardsDto'
import { globalStyles } from '../../util/styles/global'

type Props = {
    bikeCards: BikeCardsDto[]
}

export default function SaleBikesList({ bikeCards }: Props) {
    const flatlistReference = useRef<FlatList<BikeCardsDto>>(null);

    function enableScrollWhenListCanScroll() {
        return bikeCards.length > 1;
        // Implementation for a possible bug that allows scrolling
        // the list when has just 1 item
    }

    return (
        <FlatList
            data={bikeCards}
            ref={flatlistReference}
            style={{ marginVertical: 20 }}
            contentOffset={{ x: 0, y: 0 }}
            scrollEnabled={enableScrollWhenListCanScroll()}
            onEndReached={(info: any) => {
                if (info.distanceFromEnd >= 0 && bikeCards.length === 1) {
                    flatlistReference.current?.scrollToOffset({ animated: true, offset: 0 });
                }
            }}
            contentContainerStyle={{
                gap: 20
            }}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({ item, index }: { item: BikeCardsDto, index: number }) => {
                return (
                    <BikeCard key={item.id} bike={item} />
                )
            }}
        />
    )
}
