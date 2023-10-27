import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native'
import { globalStyles } from '../../util/styles/global'
import styles from './style'
import SaleBikesList from '../../components/SaleBikesList';

import BikeProfiles from "../../util/data/database";
import { Bike } from '../../components/Bike'
import Link from '../../components/Link'
import Loader from '../../components/Loader'

export default function Profile() {
    const lastBoughtBike = BikeProfiles[0];
    return (
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>

            <View style={{ alignItems: 'center' }}>
                <Loader isLoading colorMode='light' height={100} width={100} radius={100}>
                    <Image
                        source={require('../../../assets/profile-picture.jpeg')}
                        style={styles.imageProfile}
                    />
                </Loader>
                <View style={{ alignItems: 'center', gap: 10, marginVertical: 20 }}>
                    <Loader isLoading colorMode='light' width={200}>
                        <Text style={globalStyles.bigTitle}>Rafael Veiga</Text>
                    </Loader>
                    <Loader isLoading colorMode='light' width={150}>
                        <Text style={globalStyles.title}>User by: <Text style={styles.userByText}>3 years.</Text></Text>
                    </Loader>
                </View>

                <Loader isLoading colorMode='light' width={100}>
                    <Text style={styles.premiumText}>Premium</Text>
                </Loader>

            </View>

            <View style={{ marginTop: 15, gap: 15 }}>
                <Loader isLoading colorMode='light' width={150}>
                    <Text style={globalStyles.title}>Last Seen Bikes</Text>
                </Loader>
                <Loader isLoading colorMode='light'>
                    <SaleBikesList bikeCards={BikeProfiles} />
                </Loader>
            </View>

            <View style={styles.lastBoughtContainer}>
                <Loader isLoading colorMode='light'>
                    <View style={{ alignItems: 'center', flexDirection: 'row', width: '100%' }}>
                        <Text style={globalStyles.title}>Your Last Bought</Text>
                        <Link label={"Details"} onClick={() => { }} style={{ marginLeft: 'auto' }} />
                    </View>
                </Loader>

                <Loader isLoading colorMode='light'>
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
                </Loader>
            </View>



        </ScrollView>
    )
}