import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './style'

type Props = {
  color: string
}

export default function ChangeColor({ color }: Props) {
  const style = styles(color);
  return (
    <View style={style.colorCircle} />
  )
}