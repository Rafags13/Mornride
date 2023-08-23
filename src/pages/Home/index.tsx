import { TouchableOpacity, View, Text, ScrollView } from "react-native";

import ImageSlider from "../../components/ImageSlider";
import Button from "../../components/Button";
import FilterButton, { FilterProps } from "../../components/FilterButton";
import ListFilterButton from "../../components/ListFilterButton";

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
    return (
        <ScrollView style={{ backgroundColor: 'white' }}>
            <ImageSlider images={images} />

            <ListFilterButton filters={labelsFilter} />
        </ScrollView >
    )
}