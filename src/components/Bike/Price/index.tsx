import { View, Text } from 'react-native'
import React from 'react'
import { convertNumberFromTwoDecimals } from '../../../util/functions'

export default function Price({ price }: { price: number }) {
  return (
    <Text style={{ color: '#666', fontWeight: '700' }}>
      {`R$ ${convertNumberFromTwoDecimals(price)}`}
    </Text>
  )
}