import { View, Text, ImageBackground, ImageSourcePropType, useWindowDimensions, TouchableOpacity } from 'react-native'
import React, { ReactNode } from 'react'
import styles from './style'

type Props = {
    source: ImageSourcePropType,
    description: string,
    button?: ReactNode,
    isFirstItem?: boolean,
    isLastItem?: boolean,
}

export default function ImageBanner({ source, description, button, isFirstItem = false, isLastItem = false }: Props) {
    const style = styles(isFirstItem, isLastItem)

    if (!button) {
        return (
            <TouchableOpacity style={{ flex: 1, height: 200 }}>
                <ImageBackground
                    source={source}
                    style={[style.imageCardContainer, { width: '100%' }]}
                    imageStyle={{ opacity: 0.75, borderRadius: 20, }}
                >
                    <View style={[style.imageContentContainer, , { width: '100%' }]}>
                        <Text style={[style.description, { width: '100%' }]}>{description}</Text>
                    </View>
                </ImageBackground>
            </TouchableOpacity>
        )
    }

    return (
        <ImageBackground
            source={source}
            style={style.imageCardContainer}

            imageStyle={{ opacity: 0.75, borderRadius: 20, }}
        >
            <View style={style.imageContentContainer}>
                <Text style={style.description}>{description}</Text>
                {button}
            </View>

        </ImageBackground>
    )
}