import { View, Text, Image, ScrollView } from 'react-native'
import { globalStyles } from '../../util/styles/global'
import styles from './style'
import SaleBikesList from '../../components/SaleBikesList';

import { Bike } from '../../components/Bike'
import Link from '../../components/Link'
import useFakeApiCallDelay from '../../hooks/useFakeApiCallDelay';
import { Skeleton } from 'moti/skeleton';

export default function Profile() {
    const { isLoading } = useFakeApiCallDelay(5000);
    // const lastBoughtBike = BikeProfiles[0];

    return (
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
            <Skeleton.Group show={isLoading}>
                <View style={{ alignItems: 'center' }}>
                    <Skeleton colorMode='light' height={100} width={100} radius={"round"}>
                        <Image
                            source={require('../../../assets/profile-picture.jpeg')}
                            style={styles.imageProfile}
                        />
                    </Skeleton>
                    <View style={{ alignItems: 'center', gap: 10, marginVertical: 20 }}>
                        <Skeleton colorMode='light' width={250}>
                            <Text style={styles.nameOfUser}>Rafael Veiga</Text>
                        </Skeleton>
                        <Skeleton colorMode='light' width={200}>
                            <Text style={styles.userByText}>User by: <Text style={styles.timeToUse}>3 years.</Text></Text>
                        </Skeleton>
                    </View>

                    <Skeleton colorMode='light' width={100}>
                        <Text style={styles.premiumText}>Premium</Text>
                    </Skeleton>

                </View>

                <View style={{ marginTop: 15, gap: 15 }}>
                    <Skeleton colorMode='light' width={150}>
                        <Text style={globalStyles.title}>Last Seen Bikes</Text>
                    </Skeleton>
                    {/* <Skeleton colorMode='light'>
                        <SaleBikesList bikeCards={BikeProfiles} />
                    </Skeleton> */}
                </View>

                <View style={styles.lastBoughtContainer}>
                    <Skeleton colorMode='light'>
                        <View style={{ alignItems: 'center', flexDirection: 'row', width: '100%' }}>
                            <Text style={globalStyles.title}>Your Last Bought</Text>
                            <Link label={"Details"} onClick={() => { }} style={{ marginLeft: 'auto' }} />
                        </View>
                    </Skeleton>

                    <Skeleton colorMode='light'>
                        <Bike.Root>
                            {/* <Bike.Display style={{ padding: 10 }}>
                                <Bike.Image source={require('../../../assets/bike3.png')} />
                            </Bike.Display> */}

                            {/* <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Bike.Title title={lastBoughtBike.title} />
                                <Text style={globalStyles.commonText}>(1)</Text>
                            </View>

                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Bike.Colors colors={[]} />
                                <Bike.Price price={lastBoughtBike.price} />
                            </View> */}
                        </Bike.Root>
                    </Skeleton>
                </View>
            </Skeleton.Group>


        </ScrollView>
    )
}