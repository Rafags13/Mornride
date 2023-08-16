import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../pages/Home";
import OnBoard from "../pages/OnBoard";

const Stack = createNativeStackNavigator();

export default function StackNavigation() {
    return (
        <Stack.Navigator
            initialRouteName="onBoard"
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name="onBoard" component={OnBoard} />
            <Stack.Screen name="home" component={Home} />
        </Stack.Navigator>
    )
}