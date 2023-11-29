import { View, Text } from 'react-native'
import React from 'react'
import Button from '../../Button'
import { useNavigation } from '@react-navigation/native';
import { globalStyles } from '../../../util/styles/global';

export default function BannerButton({ collection }: { collection: string }) {
  const { navigate } = useNavigation<any>();
  return (
    <Button onClick={() => {
      navigate('collection', { collection: collection })
    }} typeOfButton={"info"} >
      <Text style={globalStyles.commonText}>Lets See</Text>
    </Button>
  )
}