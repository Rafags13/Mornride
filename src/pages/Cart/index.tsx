import { View, Text, ScrollView, Dimensions } from 'react-native'
import { globalStyles } from '../../util/styles/global'
import { Bike } from '../../components/Bike'
import Button from '../../components/Button'
import { useMutation, useQuery } from '@tanstack/react-query';
import { BikeCartDto } from '../../util/model/dto/BikeCartDto';
import { getData } from '../../services/apiRequests';
import { useFocusEffect, useIsFocused, useNavigation } from '@react-navigation/native';
import { useCallback, useEffect } from 'react';
import { useAppDispatch } from '../../apps/hooks';
import { addBikeIds } from '../../features/PurchaseBikes/PurchaseBikesSlide';

const { Root, Display, Image, Colors, Title, Price } = Bike;

const height = Dimensions.get('screen').height * 0.65;
const tabSize = 60;

export default function Cart() {
  const navigator = useNavigation<any>();
  const dispatch = useAppDispatch();

  useEffect(() => {
    const focusListener = navigator.addListener('focus', () => {

      mutate();
    });
    return () => {
      navigator.removeListener('focus', focusListener);
    };
  }, []);

  const { data, isSuccess, mutate, isPending } = useMutation<BikeCartDto[]>({
    mutationFn: async () => {
      const response = await getData("/Cart");
      return response.data;
    }
  });

  return (
    <View style={{ flex: 1, padding: 20, marginTop: 30, gap: 10 }}>
      <Text style={globalStyles.bigTitle}>Cart</Text>
      {
        !(isSuccess) || isPending ? (<></>) :
          (<>
            <ScrollView style={{ height: height }}>
              <View style={{ gap: 15, }}>
                {data.length === 0 ? (
                  <Text style={globalStyles.commonText}>Nothing to see here..</Text>
                ) : (
                  data?.map((bike) => (
                    <Root key={bike.id}>
                      <Display style={{ padding: 5 }}>
                        {/* <TouchableOpacity onPress={() => { dispatch(removeFromCart(bike.id)) }} style={{ alignSelf: 'flex-end', margin: 10 }}>
                  <FontAwesome name="trash-o" size={24} color='black' />
                </TouchableOpacity> */}
                        <Image source={bike.imageUrl} />
                      </Display>

                      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Title title={bike.title} />
                        <Text style={globalStyles.commonText}>({bike.amount})</Text>
                      </View>

                      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Colors colors={bike.avaliableColors} />
                        <Price price={bike.price} />
                      </View>
                    </Root>
                  ))
                )}

              </View>
            </ScrollView>

            {data.length > 0 && (
              <View style={{ position: 'absolute', bottom: 0, width: '100%', alignSelf: 'center', marginBottom: tabSize + 30 }}>
                <Button onClick={() => {
                  const ids = data?.map((bike) => bike.id);
                  dispatch(addBikeIds(ids));
                  navigator.navigate('addressSelection', { ids });
                }}>
                  <Text>Finish Buy</Text>
                </Button>
              </View>
            )}
          </>
          )
      }

    </View>
  )
}