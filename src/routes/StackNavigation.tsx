import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../pages/Home";
import OnBoard from "../pages/OnBoard";
import Header from "../components/Header";

const Stack = createNativeStackNavigator();

export default function StackNavigation() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="onBoard" component={OnBoard} options={{
                headerStyle: {
                    backgroundColor: '#161616'
                },
                headerTitleAlign: 'center',
                headerTitle: (props) => (<Header {...props} />)
            }} />
            <Stack.Screen
                name="home"
                component={Home}
            />
        </Stack.Navigator>
    )
}