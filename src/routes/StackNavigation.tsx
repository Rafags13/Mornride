import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../pages/Home";
import OnBoard from "../pages/OnBoard";
import Header from "../components/Header";
import BikeSpecification from "../pages/BikeSpecifications";
import BikeTab from "./BikeTab";

const Stack = createNativeStackNavigator();

export default function StackNavigation() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="onBoard" component={OnBoard} options={{
                headerStyle: {
                    backgroundColor: '#161616',
                },
                headerTintColor: 'white',
                headerTitleAlign: 'center',
                headerTitle: (props) => (<Header tintColor={props.tintColor} />)
            }} />
            <Stack.Screen
                name="bikeTab"
                component={BikeTab}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    )
}