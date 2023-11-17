import { RouteProp, useRoute } from "@react-navigation/native";
import { View, Text, ScrollView } from "react-native";
import { capitalizeFirstLetter } from "../../util/functions";
import { globalStyles } from "../../util/styles/global";
import BikeCard from "../../components/BikeCard";
import { useQuery } from "@tanstack/react-query";
import { getData } from "../../services/apiRequests";
import { HomeBikeDto } from "../../util/model/dto/HomeBikeDto";

type ListBikeCollectionProps = HomeBikeDto[];


export default function Collection() {
  const { params: { collection } } = useRoute<RouteProp<{ params: { collection: string } }, 'params'>>();
  const { data, isLoading, isError } = useQuery<ListBikeCollectionProps>({
    queryKey: [collection], queryFn: async () => {
      const response = await getData(`Bike/${collection}`);
      return response.data;
    }
  });

  if (isError) {
    return (
      <View>
        <Text>Não foi possível carregar os dados.</Text>
      </View>
    )
  }

  return (
    <ScrollView style={{ padding: 10 }}>
      <Text style={globalStyles.bigTitle}>
        {capitalizeFirstLetter(collection)} Bikes
      </Text>
      {isLoading ? (<></>) : (
        <View style={{ gap: 25, marginVertical: 15 }}>
          {data?.map(bikeProfile => (
            <BikeCard key={bikeProfile.id} bike={bikeProfile} />
          ))}
        </View>
      )}


    </ScrollView>
  )
}