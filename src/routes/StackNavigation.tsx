import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from '@react-navigation/native';
import { } from "@react-navigation/stack";
import Home from "../pages/Home";
import OnBoard from "../pages/OnBoard";

const Stack = createNativeStackNavigator();

export default function test() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="onBoard">
                <Stack.Screen name="onBoard" component={OnBoard} />
                <Stack.Screen name="home" component={Home} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}