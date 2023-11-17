import { useCallback, useEffect, useState } from "react";
import { View, Text, ScrollView, FlatList } from "react-native";
import {
    set
} from 'date-fns';

import ImageSlider from "../../components/ImageSlider";
import ListFilterButton from "../../components/ListFilterButton";
import ClockSale from "../../components/ClockSale";
import Link from "../../components/Link";
import SaleBikesList from "../../components/SaleBikesList";

import { globalStyles } from "../../util/styles/global";
import { Skeleton } from "moti/skeleton";
import { getData } from "../../services/apiRequests";
import { useQuery } from "@tanstack/react-query";
import { HomeUserInformationsDto } from "../../util/model/dto/HomeUserInformationsDto";
import { Banner } from "../../components/Banner";
import { useNavigation } from "@react-navigation/native";

function SkeletonHome() {
    return (
        <Skeleton.Group show>
            <View style={{ gap: 15 }}>
                <Skeleton height={200} width={'100%'} radius={20} colorMode="light" />

                <Skeleton width={'100%'} colorMode="light" height={40} />

                <Skeleton width={150} colorMode="light" />

                <Skeleton width={'100%'} colorMode="light" height={40} />

                <View style={{ flexDirection: 'row', gap: 20, marginVertical: 20 }}>
                    <View style={{ width: '60%', gap: 5 }}>
                        <Skeleton height={200} colorMode="light" width={'100%'} />

                        <Skeleton width={150} colorMode="light" />

                        <Skeleton height={50} colorMode="light" width={'100%'} />
                    </View>
                    <View style={{ width: '60%', gap: 5 }}>
                        <Skeleton height={200} colorMode="light" width={'100%'} />

                        <Skeleton width={150} colorMode="light" />

                        <Skeleton height={50} colorMode="light" width={'100%'} />
                    </View>
                </View>

            </View>
        </Skeleton.Group>
    )
}

export default function Home() {
    const [filter, setFilter] = useState<string>('all');
    const { data, isLoading } = useQuery<HomeUserInformationsDto>({
        queryKey: ['GetBikesSale'], queryFn: async () => {
            const response = await getData('User');

            return response.data;
        }
    });
    const { navigate } = useNavigation<any>();

    const bikesFiltered = filter !== 'all' ? data?.bikes.filter(bike => bike.categoryNames.find(category => category === filter)) : data?.bikes;

    return (
        <ScrollView style={{ backgroundColor: 'white', padding: 10 }}>
            {isLoading ? (
                <>
                    <SkeletonHome />
                </>
            ) : (
                <>
                    <ImageSlider images={data!.banners} />

                    <ListFilterButton filters={data!.categories} onChangeFilter={(filter) => {
                        setFilter(filter);
                    }} />

                    <Text style={globalStyles.title}>Flash sale</Text>

                    <View style={{ flexDirection: 'row', gap: 15, marginTop: 5, alignItems: 'center' }}>
                        <Text style={{ color: 'grey', fontSize: 13, }}>End of time</Text>

                        <ClockSale timePromotion={set(new Date(), { hours: 10, minutes: 0, seconds: 0 })} />

                        <Link label={"See all"} onClick={() => { }} style={{ marginLeft: 'auto' }} />
                    </View>

                    {bikesFiltered && (
                        <SaleBikesList bikeCards={bikesFiltered} />
                    )}

                    <View style={{ flexDirection: 'row', gap: 15, marginVertical: 10, alignItems: 'center' }}>
                        <Text style={globalStyles.title}>Collection</Text>

                        <Link label={"See all"} onClick={() => { }} style={{ marginLeft: 'auto' }} />
                    </View>

                    {/* <ImageBanner
                        source={data!.banners[0].imageUrl}
                        description={'See our new stock of mountain bikes and ride it!'}
                    /> */}

                    <Banner.TouchableView onClick={() => {
                        navigate('collection', { collection: data?.banners[0].collection })
                    }}>
                        <Banner.View source={data!.banners[0].imageUrl} styles={{ width: '100%' }}>
                            <Banner.Text description={data!.banners[0].description} isDivided={false} />
                        </Banner.View>
                    </Banner.TouchableView>

                    <View style={{ marginVertical: 50 }} />
                </>
            )}

        </ScrollView >
    )
}
