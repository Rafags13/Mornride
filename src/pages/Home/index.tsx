import { View, Text, ScrollView, FlatList } from "react-native";

import ImageSlider from "../../components/ImageSlider";
import { FilterProps } from "../../components/FilterButton";
import ListFilterButton from "../../components/ListFilterButton";
import { globalStyles } from "../../util/styles/global";

import {
    set
} from 'date-fns';
import ClockSale from "../../components/ClockSale";
import Link from "../../components/Link";
import SaleBikesList from "../../components/SaleBikesList";
import ImageBanner from "../../components/ImageBanner";
import { ImageProps } from "../../util/model/ImageProps";
import BikeProfiles from "../../util/data/database";
import { useCallback, useState } from "react";



const images: ImageProps[] = [
    {
        id: 1,
        image: require('../../../assets/mountain2.jpg'),
        description: 'ARE YOU PREPARED TO ADVENTURE WITH SUPER BIKES?',
        button: {
            label: 'Discover now',
            typeOfButton: "info",
            onClick: () => { }
        }
    },
    {
        id: 2,
        image: require('../../../assets/mountain.jpg'),
        description: 'ITS CLIMBING AND GOING DOWN STEEP TRAILS OR JUMPING HIGH AT BIKE PARKS',
        button: {
            label: 'Shop now',
            onClick: () => { }
        }
    },
    {
        id: 3,
        image: require('../../../assets/mountain3.jpg'),
        description: 'OUR BIKES ARE BUILT FROM YOUR MOUNTAIN ADVENTURES!',
        button: {
            label: 'See now',
            onClick: () => { }
        }
    },
]

const labelsFilter: FilterProps[] = [
    {
        label: 'All',
        option: ''
    },
    {
        label: 'E-Series',
        option: 'eletronic'
    },
    {
        label: 'Mountain Bike',
        option: 'mountain'
    },
    {
        label: 'Parts',
        option: 'parts'
    },
    {
        label: 'Ergonomic Bikes',
        option: 'ergonomic'
    },
    {
        label: 'Kids',
        option: 'kid'
    },
]

export default function Home() {
    const [bikes, setBikes] = useState(BikeProfiles);
    const filteredBikes = useCallback((filter: string) => {
        if (filter === '') {
            setBikes(BikeProfiles);
            return;
        }

        const filtered = BikeProfiles.filter(bike => bike.categories.find(category => category === filter));
        setBikes(filtered);
    }, []);

    return (
        <ScrollView style={{ backgroundColor: 'white', padding: 10 }}>
            <ImageSlider images={images} />

            <ListFilterButton filters={labelsFilter} onChangeFilter={filteredBikes} />

            <Text style={globalStyles.title}>Flash sale</Text>

            <View style={{ flexDirection: 'row', gap: 15, marginTop: 5, alignItems: 'center' }}>
                <Text style={{ color: 'grey', fontSize: 13, }}>End of time</Text>

                <ClockSale timePromotion={set(new Date(), { hours: 10, minutes: 0, seconds: 0 })} />

                <Link label={"See all"} onClick={() => { }} style={{ marginLeft: 'auto' }} />
            </View>

            <SaleBikesList bikeCards={bikes} />

            <View style={{ flexDirection: 'row', gap: 15, marginVertical: 10, alignItems: 'center' }}>
                <Text style={globalStyles.title}>Collection</Text>

                <Link label={"See all"} onClick={() => { }} style={{ marginLeft: 'auto' }} />
            </View>

            <ImageBanner
                source={require('../../../assets/mountain2.jpg')}
                description={'See our new stock of mountain bikes and ride it!'}
            />

            <View style={{ marginVertical: 50 }} />

        </ScrollView >
    )
}
