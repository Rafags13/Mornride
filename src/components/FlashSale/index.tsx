import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { HomeCategoryDto } from '../../util/model/dto/HomeCategoryDto'
import ListFilterButton from '../ListFilterButton';
import { globalStyles } from '../../util/styles/global';
import { set } from 'date-fns';
import ClockSale from '../ClockSale';
import SaleBikesList from '../SaleBikesList';
import Link from '../Link';
import { BikeCardsDto } from '../../util/model/BikeCardsDto';

export default function FlashSale({ categories, bikes }: { categories: HomeCategoryDto[], bikes: BikeCardsDto[] }) {
  const [filter, setFilter] = useState<string>('all');
  const bikesFiltered = filter !== 'all' ? bikes.filter(bike => bike.categoryNames.find(category => category === filter)) : bikes;

  return (
    <>
      <ListFilterButton filters={categories} onChangeFilter={(filter: string) => {
        setFilter(filter);
      }} />

      <Text style={globalStyles.title}>Flash sale</Text>

      <View style={{ flexDirection: 'row', gap: 15, marginTop: 5, alignItems: 'center' }}>
        <Text style={{ color: 'grey', fontSize: 13, }}>End of time</Text>

        <ClockSale timePromotion={set(new Date(), { hours: 10, minutes: 0, seconds: 0 })} />

        <Link label={"See all"} onClick={() => { }} style={{ marginLeft: 'auto' }} />
      </View>

      <SaleBikesList bikeCards={bikesFiltered} />

    </>
  )
}