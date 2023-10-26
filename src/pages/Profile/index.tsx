import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import Background from '../../components/Background'
import { globalStyles } from '../../util/styles/global'
import styles from './style'
import SaleBikesList from '../../components/SaleBikesList';
import FontAwesome from '@expo/vector-icons/FontAwesome';

import BikeProfiles from "../../util/data/database";
import { Bike } from '../../components/Bike'
import Link from '../../components/Link'

export default function Profile() {
    const lastBoughtBike = BikeProfiles[0];
    return (
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>

            <View >
                <Image
                    source={require('../../../assets/profile-picture.jpeg')}
                    style={styles.imageProfile}
                />
                <View style={{ marginTop: 20, alignItems: 'center' }}>

                    <Text style={globalStyles.bigTitle}>Rafael Veiga</Text>
                    <Text style={globalStyles.title}>User by: <Text style={styles.userByText}>3 years.</Text></Text>

                </View>

                <Text style={styles.premiumText}>Premium</Text>
            </View>

            <View >
                <Text style={globalStyles.title}>Last Seen Bikes</Text>
                <SaleBikesList bikeCards={BikeProfiles} />
            </View>

            <View style={styles.lastBoughtContainer}>
                <View style={{ alignItems: 'center', flexDirection: 'row' }}>
                    <Text style={globalStyles.title}>Your Last Bought</Text>
                    <Link label={"Details"} onClick={() => { }} style={{ marginLeft: 'auto' }} />
                </View>

                <Bike.Root>
                    <Bike.Display style={{ padding: 10 }}>
                        <Bike.Image source={require('../../../assets/bike3.png')} />
                    </Bike.Display>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Bike.Title title={lastBoughtBike.title} />
                        <Text style={globalStyles.commonText}>(1)</Text>
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Bike.Colors colors={[]} />
                        <Bike.Price price={lastBoughtBike.price} />
                    </View>
                </Bike.Root>
            </View>



        </ScrollView>
    )
}