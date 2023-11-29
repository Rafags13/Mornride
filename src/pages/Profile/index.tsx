import { View, Text, Image, ScrollView } from 'react-native'
import { globalStyles } from '../../util/styles/global'
import styles from './style'
import SaleBikesList from '../../components/SaleBikesList';

import { Bike } from '../../components/Bike'
import Link from '../../components/Link'
import useFakeApiCallDelay from '../../hooks/useFakeApiCallDelay';
import { Skeleton } from 'moti/skeleton';
import React from 'react';
import { UserProfileDto } from '../../util/model/dto/UserProfileDto';
import { useQuery } from '@tanstack/react-query';
import { getData } from '../../services/apiRequests';

export default function Profile() {
    const { data, isLoading } = useQuery<UserProfileDto>({
        queryKey: ['profile'], queryFn: async () => {
            const response = await getData("/User/Profile");

            return response.data;
        }
    });


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
                            <Text style={styles.nameOfUser}>{data?.name}</Text>
                        </Skeleton>
                        <Skeleton colorMode='light' width={200}>
                            <Text style={styles.userByText}>User by: <Text style={styles.timeToUse}>{data?.yearsFromContribute} years.</Text></Text>
                        </Skeleton>
                    </View>

                    <Skeleton colorMode='light' width={100}>
                        <Text style={styles.premiumText}>{data?.isPremiumMember ? 'premium' : ''}</Text>
                    </Skeleton>

                </View>

                <View style={{ marginTop: 15, gap: 15 }}>
                    <Skeleton colorMode='light' width={150}>
                        <Text style={globalStyles.title}>Last Seen Bikes</Text>
                    </Skeleton>
                    <Skeleton colorMode='light'>
                        {data?.lastSeenBikes && (
                            <SaleBikesList bikeCards={data?.lastSeenBikes} />
                        )}
                    </Skeleton>
                </View>

                <View style={styles.lastBoughtContainer}>
                    <Skeleton colorMode='light'>
                        <View style={{ alignItems: 'center', flexDirection: 'row', width: '100%' }}>
                            <Text style={globalStyles.title}>Your Last Bought</Text>
                            <Link label={"Details"} onClick={() => { }} style={{ marginLeft: 'auto' }} />
                        </View>
                    </Skeleton>

                    <Skeleton colorMode='light'>
                        {data?.lastPurchaseBike && (
                            <Bike.Root>
                                <Bike.Display style={{ padding: 10 }}>
                                    <Bike.Image source={data?.lastPurchaseBike.imageUrl} />
                                </Bike.Display>

                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <Bike.Title title={data?.lastPurchaseBike.title} />
                                    <Text style={globalStyles.commonText}>({data?.lastPurchaseBike.amount})</Text>
                                </View>

                                <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                                    <Bike.Price price={data?.lastPurchaseBike.price} />
                                </View>
                            </Bike.Root>
                        )}
                    </Skeleton>
                </View>
            </Skeleton.Group>


        </ScrollView>
    )
}