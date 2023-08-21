import { View } from "react-native";

import ImageSlider from "../../components/ImageSlider";

const images = [
    { image: require('../../../assets/mountain.jpg'), description: '' },
    { image: require('../../../assets/mountain2.jpg'), description: '' },
    { image: require('../../../assets/mountain3.jpg'), description: '' },
]

export default function Home() {
    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <ImageSlider images={images} />

        </View >
    )
}