import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { FavoriteBikesProps } from '../../features/FavoriteBikes/FavoriteBikesSlice'
import BikeCard from '../BikeCard'
import { Bike } from '../Bike'
import { useNavigation } from '@react-navigation/native'
import { convertNumberFromTwoDecimals } from '../../util/functions'

type FavoriteBikeListProps = {
  bikes: FavoriteBikesProps[]
}

export default function FavoriteBikeList({ bikes }: FavoriteBikeListProps) {
  const navigator = useNavigation<any>();

  const redirectToFavoritedBike = (bikeId: number) => {
    navigator.navigate('bikeSpecification', { bikeId });
  }
  return (
    <FlatList
      data={bikes}
      renderItem={({ item: bike }) => (
        <Bike.Root>
          <Bike.Touchable style={{ gap: 5 }} onPress={() => { redirectToFavoritedBike(bike.id); }}>
            <Bike.Display style={{ padding: 5 }}>
              <Bike.Image source={bike.currentBikeImageUrl} />
            </Bike.Display>
            <Bike.Stock stock={bike.stock} />
            <View style={{ justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center' }}>
              <Bike.Title title={bike.title} />
              <Text style={{ color: '#666', fontWeight: '700' }}>
                {`R$ ${convertNumberFromTwoDecimals(bike.price)}`}
              </Text>
            </View>
          </Bike.Touchable>
        </Bike.Root>
      )}
      contentContainerStyle={{ gap: 10 }}
    />
  )
}