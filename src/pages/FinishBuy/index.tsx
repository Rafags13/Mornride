import { View, Text, ScrollView, Dimensions } from 'react-native'
import React, { useState } from 'react'
import { useAppSelector } from '../../apps/hooks'
import { useQuery } from '@tanstack/react-query';
import { getData } from '../../services/apiRequests';
import { BikeCartDto } from '../../util/model/dto/BikeCartDto';
import { Bike } from '../../components/Bike';
import { globalStyles } from '../../util/styles/global';
import Button from '../../components/Button';
import { convertNumberFromTwoDecimals } from '../../util/functions';
import { Snackbar } from 'react-native-paper';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';

const { Root, Display, Image, Colors, Title, Price } = Bike;

const height = Dimensions.get('window').height * 0.5;

export default function FinishBuy() {
  const { params } = useRoute<RouteProp<{ params: { bikeId: number, amount: number } }, 'params'>>();
  const { ids } = useAppSelector((state) => state.purchaseBikes.currentBought);
  const { navigate } = useNavigation<any>();
  const [visible, setVisible] = useState(false);
  const { data, isLoading } = useQuery<BikeCartDto[] | BikeCartDto>({
    queryKey: [ids, params?.amount], queryFn: async () => {
      var correctPath = params?.bikeId ? '/Bike/BuyNow' : '/Cart/ByIds';
      var correctParams = params?.bikeId ? { bikeId: params?.bikeId, amount: params?.amount } : { ids };
      const response = await getData(correctPath, correctParams);
      return response.data;
    }
  });

  if (isLoading) {
    return (<></>)
  }

  return (
    <View style={{ flex: 1, gap: 15, marginBottom: 20 }} >

      <ScrollView style={{ padding: 20 }} contentContainerStyle={{ gap: 20 }}>
        {Array.isArray(data) ? (
          data?.map(({ id, imageUrl, amount, avaliableColors, price, title }) => (
            <Root key={id}>
              <Display style={{ padding: 5 }}>
                {/* <TouchableOpacity onPress={() => { dispatch(removeFromCart(bike.id)) }} style={{ alignSelf: 'flex-end', margin: 10 }}>
                  <FontAwesome name="trash-o" size={24} color='black' />
                </TouchableOpacity> */}
                <Image source={imageUrl} />
              </Display>

              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Title title={title} />
                <Text style={globalStyles.commonText}>({amount})</Text>
              </View>

              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Colors colors={avaliableColors} />
                <Price price={price} />
              </View>
            </Root>))
        ) : (
          <Root key={data?.id}>
            <Display style={{ padding: 5 }}>
              {/* <TouchableOpacity onPress={() => { dispatch(removeFromCart(bike.id)) }} style={{ alignSelf: 'flex-end', margin: 10 }}>
                  <FontAwesome name="trash-o" size={24} color='black' />
                </TouchableOpacity> */}
              <Image source={data?.imageUrl ?? ""} />
            </Display>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Title title={data?.title ?? ""} />
              <Text style={globalStyles.commonText}>({data?.amount})</Text>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Colors colors={data?.avaliableColors ?? []} />
              <Price price={data?.price ?? 0} />
            </View>
          </Root>
        )

        }

      </ScrollView>
      <Text style={[globalStyles.title, { marginLeft: 20 }]}>
        Final Price: R$
        {Array.isArray(data) ? convertNumberFromTwoDecimals(data?.reduce((accumulator, currentValue) => accumulator + (currentValue.price * currentValue.amount), 0) ?? 0) :
          convertNumberFromTwoDecimals(((data?.price ?? 0) * (data?.amount ?? 0)))
        }
      </Text>

      <Button style={{ width: '90%', alignSelf: 'center' }} onClick={() => { setVisible(true) }}>
        <Text>Finish Buy</Text>
      </Button>

      <Snackbar
        visible={visible}
        onDismiss={() => setVisible(false)}
        action={{
          label: 'Ok',
          onPress: () => {
            navigate('bikeTab', { screen: 'homeNavigation' });
          },
        }}>
        Finished purchase!
      </Snackbar>
    </View >
  )
}