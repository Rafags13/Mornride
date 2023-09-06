import Feather from '@expo/vector-icons/Feather';
import Ionicons from '@expo/vector-icons/Ionicons';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import AntDesign from '@expo/vector-icons/AntDesign';
import Fontisto from '@expo/vector-icons/Fontisto';
import {
    AnimatedTabBarNavigator,
    DotSize,
    TabElementDisplayOptions
} from 'react-native-animated-nav-tab-bar';

import Cart from '../pages/Cart';
import HomeNavigation from './HomeNavigation';
import Favorites from '../pages/Favorites';
import Notifications from '../pages/Notifications';
import Profile from '../pages/Profile';
import SearchBike from '../pages/SearchBike';

const Tab = AnimatedTabBarNavigator();

const ICON_TAB_SIZE = 16;

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
                whenActiveShow: TabElementDisplayOptions.ICON_ONLY,
                dotSize: DotSize.SMALL,
                tabBarBackground: 'black',
            }}
            screenOptions={{
                headerShown: true
            }}
            initialRouteName='homeNavigation'
        >
            <Tab.Screen
                name="homeNavigation"
                component={HomeNavigation}
                options={() => ({
                    tabBarIcon: ({ focused, color }: { focused: boolean, color: string, size: number }) => (
                        <Ionicons
                            name="home"
                            size={ICON_TAB_SIZE}
                            color={focused ? color : 'white'}
                        />
                    ),
                    title: 'Home',
                })}


            />

            <Tab.Screen
                name="cart"
                component={Cart}
                options={{
                    tabBarIcon: ({ focused, color, size }: { focused: boolean, color: string, size: number }) => (
                        <SimpleLineIcons
                            name="bag"
                            size={ICON_TAB_SIZE}
                            color={focused ? color : "white"}
                            focused={focused}
                        />
                    ),
                    title: 'Cart'
                }}

            />

            <Tab.Screen
                name="search"
                component={SearchBike}
                options={{
                    tabBarIcon: ({ focused, color, size }: { focused: boolean, color: string, size: number }) => (
                        <Feather
                            name="search"
                            size={ICON_TAB_SIZE}
                            color={focused ? color : "white"}
                            focused={focused}
                        />
                    ),
                    title: 'Search'
                }}
            />

            <Tab.Screen
                name="favorites"
                component={Favorites}
                options={{

                    tabBarIcon: ({ focused, color, size }: { focused: boolean, color: string, size: number }) => (
                        <AntDesign
                            name="hearto"
                            size={ICON_TAB_SIZE}
                            color={focused ? color : "white"}
                            focused={focused}
                        />
                    ),
                    title: 'Favorite'
                }}
            />

            <Tab.Screen
                name="Notifications"
                component={Notifications}
                options={{
                    tabBarIcon: ({ focused, color, size }: { focused: boolean, color: string, size: number }) => (
                        <Fontisto
                            name="bell"
                            size={ICON_TAB_SIZE}
                            color={focused ? color : "white"}
                            focused={focused}
                        />
                    ),
                    title: 'Notify'
                }}
            />

            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                    tabBarIcon: ({ focused, color, size }: { focused: boolean, color: string, size: number }) => (
                        <Ionicons
                            name="person"
                            size={ICON_TAB_SIZE}
                            color={focused ? color : "white"}
                            focused={focused}
                        />
                    ),
                    title: 'profile'
                }}
            />


        </Tab.Navigator>
    )
}