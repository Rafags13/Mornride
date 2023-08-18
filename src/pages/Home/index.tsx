import { View, Text, ImageBackground, ScrollView, Dimensions, useWindowDimensions } from "react-native";

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height / 100 * 20;

import Animated, { useSharedValue, useAnimatedStyle, useAnimatedScrollHandler, interpolate } from "react-native-reanimated";

const images = [
    { image: require('../../../assets/mountain.jpg') },
    { image: require('../../../assets/mountain2.jpg') },
    { image: require('../../../assets/mountain3.jpg') },
]

export default function Home() {
    const { width } = useWindowDimensions();
    const size = width * 0.8;
    const x = useSharedValue(0);

    const onScroll = useAnimatedScrollHandler({
        onScroll: event => {
            x.value = event.contentOffset.x;
        }
    })

    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>

            <Animated.ScrollView
                horizontal
                bounces={false}
                showsHorizontalScrollIndicator={false}
                snapToInterval={size}
                onScroll={onScroll}
                style={{ height: 200 }}>
                {
                    images.map((image, key) => {
                        const itemIsInHalfOfList = key != 0 && key !== images.length - 1;
                        const test = (width - size) / 2;

                        return (
                            <ImageBackground
                                source={image.image}
                                key={key}
                                style={{
                                    marginLeft: key === 0 ? 20 : 10,
                                    marginRight: key === images.length - 1 ? 20 : 10,
                                    width: size,
                                    height: 200,
                                    backgroundColor: '#010101'
                                }}

                                imageStyle={{ opacity: 0.75 }}
                            >
                                <Text>hellow</Text>
                            </ImageBackground>
                        )
                    }
                    )
                }
            </Animated.ScrollView>

        </View >
    )
}