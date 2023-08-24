import { MotiView } from "moti"
import { useState } from "react";
import { ImageBackground, NativeScrollEvent, NativeSyntheticEvent, View, useWindowDimensions, Text } from "react-native"
import Animated, { useAnimatedScrollHandler, useSharedValue } from "react-native-reanimated";
import styles from "./style";

type Props = {
    images: any[],
}

const { ScrollView } = Animated;

export default function ImageSlider({ images }: Props) {
    const { width } = useWindowDimensions();
    const size = width * 0.8;
    const x = useSharedValue(0);
    const [currentIndex, setCurrentIndex] = useState(0);

    const onScroll = useAnimatedScrollHandler({
        onScroll: event => {
            x.value = event.contentOffset.x;
        }
    })
    function getCurrentIndex(event: NativeSyntheticEvent<NativeScrollEvent>) {
        const index = Math.round(event.nativeEvent.contentOffset.x / width);
        if (index !== currentIndex)
            setCurrentIndex(index)
    }
    return (
        <View>

            <View style={styles.currentPaginationIndexContainer}>

                <MotiView animate={{
                    backgroundColor: currentIndex === 0 ? '#333333' : '#C4C4C4',
                    opacity: currentIndex === 0 ? 1 : 0.5
                }}
                    style={styles.defaultImageIndex} />
                <MotiView
                    animate={{
                        backgroundColor: currentIndex === 1 ? '#333333' : '#C4C4C4',
                        opacity: currentIndex === 1 ? 1 : 0.5
                    }}
                    style={styles.defaultImageIndex} />
                <MotiView
                    animate={{
                        backgroundColor: currentIndex === 2 ? '#333333' : '#C4C4C4',
                        opacity: currentIndex === 2 ? 1 : 0.5
                    }}
                    style={styles.defaultImageIndex} />
            </View>

            <ScrollView
                horizontal
                bounces={false}
                showsHorizontalScrollIndicator={false}
                snapToInterval={size}
                scrollEventThrottle={18}
                contentContainerStyle={{ gap: 20 }}
                onScroll={onScroll}
                onMomentumScrollEnd={getCurrentIndex}
                style={{ height: 200 }}>
                {
                    images.map((image, key) => {

                        return (
                            <ImageBackground
                                source={image.image}
                                key={key}
                                style={{
                                    marginLeft: key === 0 ? 10 : 0,
                                    marginRight: key === images.length - 1 ? 10 : 0,
                                    width: size,
                                    borderRadius: 20,
                                    height: 200,
                                    backgroundColor: '#010101',
                                }}

                                imageStyle={{ opacity: 0.75, borderRadius: 20, }}
                            >
                                <View style={{ flex: 1, alignItems: 'flex-end', justifyContent: 'space-between', padding: 10, gap: 10, flexDirection: 'row', }}>
                                    <Text style={{ width: (size / 2), color: 'white', fontWeight: '700', fontStyle: 'italic', fontSize: 18 }}>{image.description}</Text>
                                    {image.button}
                                </View>
                            </ImageBackground>
                        )
                    }
                    )
                }
            </ScrollView>
        </View >
    )
}