import { FlatList } from 'react-native'
import React, { memo, useRef, useState } from 'react'
import FilterButton, { FilterProps } from '../FilterButton'
import styles from './style'

type Props = {
    filters: FilterProps[],
    onChangeFilter: (filter: string) => void,
}

const ListFilterButton = (function ListFilterButton({ filters, onChangeFilter }: Props) {
    const [currentIndexActivated, setCurrentIndexActivated] = useState(0);
    const flatlistRef = useRef<FlatList>(null);

    return (
        <FlatList
            data={filters}
            horizontal
            initialScrollIndex={currentIndexActivated}
            contentContainerStyle={styles.contentContainer}
            style={styles.flatlist}
            ref={flatlistRef}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item, index }) => {
                return (
                    <FilterButton
                        key={index}
                        label={item.label}
                        option={item.option}
                        activated={currentIndexActivated === index}
                        setActivated={() => {
                            setCurrentIndexActivated(index);
                            flatlistRef.current?.scrollToIndex({ animated: true, index: index, viewPosition: 0.5 });
                            onChangeFilter(item.option);
                        }}
                    />
                )
            }}
            keyExtractor={(filter) => filter.option}
        />
    )
})

export default memo(ListFilterButton)