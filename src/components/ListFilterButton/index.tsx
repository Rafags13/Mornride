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
    const flatlistRef = useRef<FlatList<FilterProps>>(null);

    const setActivated = (name: string) => {
        onChangeFilter(name);
        const currentIndex = filters.findIndex(filter => filter.name === name);
        setCurrentIndexActivated(currentIndex);
        flatlistRef.current?.scrollToIndex({ animated: true, index: currentIndex, viewPosition: 0.5 });
    };

    return (
        <FlatList
            data={filters}
            horizontal
            contentContainerStyle={styles.contentContainer}
            ref={flatlistRef}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item, index }) => {
                return (
                    <FilterButton
                        key={item.name}
                        displayName={item.displayName}
                        name={item.name}
                        activated={currentIndexActivated === index}
                        setActivated={setActivated}
                    />

                )
            }}
        />
    )
})

export default memo(ListFilterButton)