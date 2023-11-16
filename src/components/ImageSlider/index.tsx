import { MotiView } from "moti"
import { useState } from "react";
import { NativeScrollEvent, NativeSyntheticEvent, View, useWindowDimensions, Text } from "react-native"
import Animated, { useAnimatedScrollHandler, useSharedValue } from "react-native-reanimated";
import styles from "./style";
import ImageBanner from "../ImageBanner";
import { ImageProps } from "../../util/model/ImageProps";
import Button from "../Button";
import { globalStyles } from "../../util/styles/global";
import { useNavigation } from "@react-navigation/native";

type Props = {
    images: ImageProps[],
}

const { ScrollView } = Animated;

export default function ImageSlider({ images }: Props) {
    const { width } = useWindowDimensions();
    const size = width * 0.8;
    const x = useSharedValue(0);
    const [currentIndex, setCurrentIndex] = useState(0);
    const navigator = useNavigation<any>();

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
                        const isFirstItem = key === 0
                        const isLastItem = key === images.length - 1
                        return (
                            <ImageBanner
                                key={key}
                                source={image.imageUrl}
                                description={image.description}
                                button={
                                    <Button onClick={() => {
                                        navigator.navigate('collection', { collection: image.collection })
                                    }} typeOfButton={"info"} >
                                        <Text style={globalStyles.commonText}>Lets See</Text>
                                    </Button>
                                }
                                isFirstItem={isFirstItem}
                                isLastItem={isLastItem}
                            />
                        )
                    }
                    )
                }
            </ScrollView>
        </View >
    )
}