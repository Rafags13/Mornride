import { View, Text, TouchableOpacity } from 'react-native'
import React, { useCallback, useState } from 'react'
import RadioButton from '../RadioButton'
import styles from './style';
import { globalStyles } from '../../util/styles/global';

export type AddressCardProps = {
  street: string,
  neighborhood: string,
  zipCode: string,
  selected?: boolean,
  select?: (zipCode: string) => void
}

export default function AddressCard({ street, neighborhood, zipCode, selected = false, select = () => { } }: AddressCardProps) {
  const style = styles(selected);

  return (
    <TouchableOpacity style={style.container}
      onPress={() => { select(zipCode); }}
    >
      <RadioButton selected={selected} />
      <View>
        <Text style={globalStyles.commonText}>{street}</Text>
        <Text style={globalStyles.commonText}>{neighborhood}</Text>
        <Text style={globalStyles.commonText}>{zipCode}</Text>
      </View>
    </TouchableOpacity>
  )
}