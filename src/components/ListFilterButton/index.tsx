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
    // TODO Solve the bug with rerender in this component

    return (
        <FlatList
            data={filters}
            horizontal
            initialScrollIndex={currentIndexActivated}
            contentContainerStyle={styles.contentContainer}
            ref={flatlistRef}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item, index }) => {
                return (
                    <FilterButton
                        key={index}
                        displayName={item.displayName}
                        name={item.name}
                        activated={currentIndexActivated === index}
                        setActivated={() => {
                            setCurrentIndexActivated(index);
                            flatlistRef.current?.scrollToIndex({ animated: true, index: index, viewPosition: 0.5 });
                            onChangeFilter(item.name);
                        }}
                    />
                )
            }}
            keyExtractor={(filter) => filter.option}
        />
    )
})

export default memo(ListFilterButton, ((prev, next) => prev.filters === next.filters))