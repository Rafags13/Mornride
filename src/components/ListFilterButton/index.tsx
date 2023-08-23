import { View, Text, FlatList } from 'react-native'
import React, { memo, useState } from 'react'
import FilterButton, { FilterProps } from '../FilterButton'

type Props = {
    filters: FilterProps[]
}

const ListFilterButton = (function ListFilterButton({ filters }: Props) {
    const [currentIndexActivated, setCurrentIndexActivated] = useState(0);

    return (
        <FlatList
            data={filters}
            horizontal
            contentContainerStyle={{ gap: 10 }}
            style={{ paddingVertical: 10, marginHorizontal: 20 }}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item, index }) => {
                return (
                    <FilterButton
                        key={index}
                        label={item.label}
                        option={item.option}
                        activated={currentIndexActivated === index}
                        setActivated={() => { setCurrentIndexActivated(index) }}
                    />
                )
            }}
            keyExtractor={(filter) => filter.option}
        />
    )
})

export default memo(ListFilterButton)