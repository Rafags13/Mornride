import { View, Text, ScrollView, Dimensions, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { globalStyles } from '../../util/styles/global'
import { useAppDispatch, useAppSelector } from '../../apps/hooks'
import { Bike } from '../../components/Bike'
import Button from '../../components/Button'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { removeFromCart } from '../../features/Cart/CartSlice'

const { Root, Touchable, Display, Image, Colors, Title, Price } = Bike;

const height = Dimensions.get('screen').height * 0.70;

export default function Cart() {
  const bikes = useAppSelector((state) => state.bikes.bikes);

  const dispatch = useAppDispatch();
  return (
    <View style={{ padding: 20, marginTop: 30, gap: 10 }}>
      <Text style={globalStyles.bigTitle}>Cart</Text>

      {bikes.length === 0 && (
        <Text style={globalStyles.commonText}>Nobody to see here...</Text>
      )}

      <ScrollView style={{ height: height, }}>
        <View style={{ gap: 15, }}>
          {bikes.map((bike) => (
            <Root key={bike.id}>
              <Display style={{ padding: 5 }}>
                <TouchableOpacity onPress={() => { dispatch(removeFromCart(bike.id)) }} style={{ alignSelf: 'flex-end', margin: 10 }}>
                  <FontAwesome name="trash-o" size={24} color='black' />
                </TouchableOpacity>
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

      {bikes.length > 0 && (
        <Button onClick={() => { }}>
          <Text>Finish Buy</Text>
        </Button>
      )}
    </View>
  )
}