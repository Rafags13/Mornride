import Feather from '@expo/vector-icons/Feather';
import Ionicons from '@expo/vector-icons/Ionicons';
import {
    AnimatedTabBarNavigator,
    DotSize,
    TabElementDisplayOptions,
    IAppearanceOptions
} from 'react-native-animated-nav-tab-bar';
import Home from '../pages/Home';
import BikeSpecification from '../pages/BikeSpecifications';

const Tab = AnimatedTabBarNavigator();

export default function BikeTab() {
    return (
        <Tab.Navigator
            tabBarOptions={{
                activeTintColor: '#0f0f0f',
                inactiveTintColor: 'black',
                activeBackgroundColor: '#C1F376',
            }}
            appearance={{
                shadow: true,
                floating: true,
                whenActiveShow: TabElementDisplayOptions.BOTH,
                dotSize: DotSize.SMALL,
                tabBarBackground: 'black',
            }}
            screenOptions={{
                headerShown: true
            }}
        >
            <Tab.Screen
                name="home"
                component={Home}
                options={{
                    tabBarIcon: ({ focused, color, size }: { focused: boolean, color: string, size: number }) => (
                        <Ionicons
                            name="home"
                            size={size ? size : 24}
                            color={focused ? color : 'white'}
                        />
                    ),
                    title: 'Home'
                }}

            />

            {/* <Tab.Screen
                name="bikeSpecifications"
                component={BikeSpecification}
                options={{
                    tabBarIcon: (focused, color, size) => (
                        <MaterialIcons
                            name="pedal-bike"
                            size={size ? size : 24}
                            color={focused ? color : "#222222"}
                            focused={focused}
                        />
                    )
                }}
            /> */}
        </Tab.Navigator>
    )
}