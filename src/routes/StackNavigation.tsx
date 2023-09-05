import { createNativeStackNavigator } from "@react-navigation/native-stack";
import OnBoard from "../pages/OnBoard";
import Header from "../components/Header";
import BikeSpecification from "../pages/BikeSpecifications";
import BikeTab from "./BikeTab";
import BackHeader from "../components/BackHeader";

const Stack = createNativeStackNavigator();

export default function StackNavigation() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="onBoard" component={OnBoard} options={{
                headerStyle: {
                    backgroundColor: '#161616',
                },
                header: (props) => (<Header tintColor={'white'} backgroundColor='#161616' />)
            }} />
            <Stack.Screen
                name="bikeTab"
                component={BikeTab}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="bikeSpecification"
                component={BikeSpecification}
                options={{
                    headerBackVisible: false,
                    headerShadowVisible: false,
                    header: (props) => (<BackHeader title={"PRODUCT DETAIL"} />)
                }}
            />
        </Stack.Navigator>
    )
}