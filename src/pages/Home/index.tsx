import { View, Text, ScrollView, ImageBackground, Image, TouchableOpacity, ImageSourcePropType } from "react-native";

import ImageSlider from "../../components/ImageSlider";
import Button from "../../components/Button";
import { FilterProps } from "../../components/FilterButton";
import ListFilterButton from "../../components/ListFilterButton";
import { globalStyles } from "../../util/styles/global";

import {
    setHours,
    setMinutes,
    setSeconds,
    set
} from 'date-fns';
import ClockSale from "../../components/ClockSale";
import Link from "../../components/Link";
import { useNavigation } from "@react-navigation/native";
import BikeCard from "../../components/BikeCard";
import FavoriteButton from "../../components/FavoriteButton";
import BikeImage from "../../components/BikeImage";
import AvaliableColors from "../../components/AvaliableColors";
import { CardProps } from "../../util/model/CardProps";
import SaleBikesList from "../../components/SaleBikesList";

const avaliableBikes: CardProps[] = [
    {
        imageUrl: require('../../../assets/bike1.png'),
        titleLabel: 'TDR 3.000 - Mountain Bike',
        avaliableColors: ['#FE0000', '#2071AF'],
        price: 1300.90,
        amountOnStock: 8,
    },
    {
        imageUrl: require('../../../assets/bike2.png'),
        titleLabel: 'Tuskar Elim - E - Series Bike',
        avaliableColors: ['#7CC3BB', '#f0f0f0'],
        price: 1485.90,
        amountOnStock: 4,
    }
]

const images = [
    {
        image: require('../../../assets/mountain2.jpg'),
        description: 'ARE YOU PREPARED TO ADVENTURE WITH SUPER BIKES?',
        button: <Button onClick={() => { }} label={"Discover now"} typeOfButton="info" />
    },
    {
        image: require('../../../assets/mountain.jpg'),
        description: 'ITS CLIMBING AND GOING DOWN STEEP TRAILS OR JUMPING HIGH AT BIKE PARKS',
        button: <Button onClick={() => { }} label={"Shop now"} />
    },
    {
        image: require('../../../assets/mountain3.jpg'),
        description: 'OUR BIKES ARE BUILT FROM YOUR MOUNTAIN ADVENTURES!',
        button: <Button onClick={() => { }} label={"See now"} typeOfButton="info" />
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
    const navigator = useNavigation<any>();

    return (
        <ScrollView style={{ backgroundColor: 'white', padding: 10 }}>
            <ImageSlider images={images} />

            <ListFilterButton filters={labelsFilter} />

            <Text style={globalStyles.title}>Flash sale</Text>

            <View style={{ flexDirection: 'row', gap: 15, marginTop: 5, alignItems: 'center' }}>
                <Text style={{ color: 'grey', fontSize: 13, }}>End of time</Text>

                <ClockSale timePromotion={set(new Date(), { hours: 10, minutes: 0, seconds: 0 })} />

                <Link label={"See all"} onClick={() => { }} style={{ marginLeft: 'auto' }} />
            </View>

            <SaleBikesList cards={avaliableBikes} />
        </ScrollView >
    )
}