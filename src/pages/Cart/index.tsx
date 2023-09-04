import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { globalStyles } from '../../util/styles/global'
import { useAppSelector } from '../../apps/hooks'
import { Bike } from '../../components/Bike'

const { Root, Touchable, Display, Image, Favorite, Colors, Title, Price } = Bike;

export default function Cart() {
  const bikes = useAppSelector((state) => state.bikes.bikes)
  return (
    <ScrollView style={{ marginTop: 30, padding: 20, }}>
      <Text style={globalStyles.title}>Carrinho</Text>
      {bikes.map((bike) => (
        <Root>
          <Display>
            <Favorite setIsFavorited={(favorited: boolean) => { }} />
            <Image source={bike.imageUrl} />
          </Display>

          <Title title={bike.titleLabel} />

          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Colors colors={bike.avaliableColors} />
            <Price price={bike.price} />
          </View>
        </Root>
      ))}
    </ScrollView>
  )
}