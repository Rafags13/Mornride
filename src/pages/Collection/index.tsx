import { RouteProp, useRoute } from "@react-navigation/native";
import { View, Text, ScrollView } from "react-native";
import { capitalizeFirstLetter } from "../../util/functions";
import { globalStyles } from "../../util/styles/global";
import BikeCard from "../../components/BikeCard";
import BikeProfiles from "../../util/data/database";

export default function Collection() {
  const { params } = useRoute<RouteProp<{ params: { collection: string } }, 'params'>>();
  const bikesFiltered = BikeProfiles.filter(profiles => profiles.categories.find(category => category === params.collection));

  return (
    <ScrollView style={{ padding: 10, marginTop: 20 }}>
      <Text style={globalStyles.title}>
        {capitalizeFirstLetter(params.collection)} Bikes
      </Text>

      <View style={{ gap: 25, marginTop: 15 }}>
        {bikesFiltered.map(bikeProfile => (
          <BikeCard key={bikeProfile.id} bike={bikeProfile} />
        ))}
      </View>

    </ScrollView>
  )
}