import { createNativeStackNavigator } from "@react-navigation/native-stack";
import OnBoard from "../pages/OnBoard";
import Header from "../components/Header";
import BikeSpecification from "../pages/BikeSpecifications";
import BikeTab from "./BikeTab";
import BackHeader from "../components/BackHeader";
import Collection from "../pages/Collection";
import SelectAddress from "../pages/SelectAddress";
import FinishBuy from "../pages/FinishBuy";

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
            <Stack.Screen
                name="collection"
                component={Collection}
                options={{
                    headerBackVisible: false,
                    headerShadowVisible: false,
                    header: (props) => (<BackHeader title={"COLLECTION"} />)
                }}
            />
            <Stack.Screen
                name="addressSelection"
                component={SelectAddress}
                options={{
                    headerBackVisible: false,
                    headerShadowVisible: false,
                    header: (props) => (<BackHeader title={"ADDRESS"} />)
                }}
            />
            <Stack.Screen
                name="finishPurchase"
                component={FinishBuy}
                options={{
                    headerBackVisible: false,
                    headerShadowVisible: false,
                    header: (props) => (<BackHeader title={"CONFIRM"} />)
                }}
            />
        </Stack.Navigator>
    )
}