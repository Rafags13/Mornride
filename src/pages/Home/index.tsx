import { View } from "react-native";

import ImageSlider from "../../components/ImageSlider";
import Button from "../../components/Button";

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

export default function Home() {
    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <ImageSlider images={images} />

        </View >
    )
}