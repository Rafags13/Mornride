import { View, Text, ScrollView, Dimensions } from 'react-native'
import React from 'react'
import { globalStyles } from '../../util/styles/global'
import { useAppSelector } from '../../apps/hooks'
import { Bike } from '../../components/Bike'
import Button from '../../components/Button'

const { Root, Touchable, Display, Image, Favorite, Colors, Title, Price } = Bike;

const height = Dimensions.get('screen').height * 0.70;

export default function Cart() {
  const bikes = useAppSelector((state) => state.bikes.bikes)
  return (
    <View style={{ padding: 20, marginTop: 30, gap: 10 }}>
      <Text style={globalStyles.bigTitle}>Carrinho</Text>
      <ScrollView style={{ height: height, }}>
        <View style={{ gap: 15, }}>
          {bikes.map((bike) => (
            <Root key={bike.id}>
              <Display style={{ padding: 5 }}>
                <Favorite setIsFavorited={(favorited: boolean) => { }} />
                <Image source={bike.imageUrl} />
              </Display>

              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Title title={bike.titleLabel} />
                <Text style={globalStyles.commonText}>({bike.counting})</Text>
              </View>

              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Colors colors={bike.avaliableColors} />
                <Price price={bike.price} />
              </View>

            </Root>
          ))}
        </View>
      </ScrollView>

      <Button onClick={() => { }}>
        <Text>Finish Buy</Text>
      </Button>
    </View>
  )
}