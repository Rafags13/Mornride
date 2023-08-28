import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import Home from '../pages/Home';
import BikeSpecification from '../pages/BikeSpecifications';
import Header from '../components/Header';
import BackHeader from '../components/BackHeader';
import { useNavigation } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

export default function HomeNavigation() {
    const navigator = useNavigation<any>();

    return (
        <Stack.Navigator
            initialRouteName='home'
        >
            <Stack.Screen
                name="home"
                component={Home}
                options={{
                    headerBackVisible: false,
                    headerTitleAlign: 'center',
                    headerShadowVisible: false,
                    headerTitle: (props) => (<Header tintColor={props.tintColor} />),
                }}
            />
            <Stack.Screen
                name="bikeSpecification"
                component={BikeSpecification}
                options={{
                    headerBackVisible: false,
                    headerShadowVisible: false,
                    header: (props) => (
                        <BackHeader title={'PRODUCT DETAIL'} />
                    ),
                }}
            />
        </Stack.Navigator>
    )
}
