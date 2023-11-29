import { View, Text } from 'react-native'
import React, { useCallback, useState } from 'react'
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import RadioButton from '../../components/RadioButton';
import AddressCard, { AddressCardProps } from '../../components/AddressCard';
import { globalStyles } from '../../util/styles/global';
import Button from '../../components/Button';
import { useAppDispatch, useAppSelector } from '../../apps/hooks';
import { addSelectedAddress } from '../../features/PurchaseBikes/PurchaseBikesSlide';

export default function SelectAddress() {
  const { navigate } = useNavigation<any>();
  const { addresses, selectAddress } = useAppSelector((state) => state.purchaseBikes.currentBought);
  const dispatch = useAppDispatch();

  const setSelectedIndex = useCallback((zipCode: string) => {
    dispatch(addSelectedAddress(zipCode));
  }, []);

  return (
    <View style={{ marginTop: 20, gap: 25 }}>
      <Text style={[globalStyles.bigTitle, { marginLeft: 15 }]}>Select an address</Text>
      <View style={{ gap: 15, alignItems: 'center' }}>
        {addresses.map((address) => (
          <AddressCard key={address.zipCode} selected={address.zipCode === selectAddress.zipCode} select={(zipCode: string) => {
            setSelectedIndex(zipCode);
          }} {...address} />
        ))}

        <Button onClick={() => {
          navigate('finishPurchase');
        }}
          style={{ width: '90%', alignSelf: 'center' }}
        >
          <Text style={globalStyles.commonText}>Continue</Text>
        </Button>
      </View>
    </View>
  )
}