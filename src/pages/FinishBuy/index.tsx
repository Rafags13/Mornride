import { View, Text } from 'react-native'
import React from 'react'
import { useAppSelector } from '../../apps/hooks'

export default function FinishBuy() {
  const { ids } = useAppSelector((state) => state.purchaseBikes.currentBought);
  console.log(ids);
  return (
    <View>

    </View>
  )
}