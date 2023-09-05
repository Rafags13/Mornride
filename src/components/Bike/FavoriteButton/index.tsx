import { StyleProp, TouchableOpacity, ViewStyle } from "react-native";
import styles from "./style";
import AntDesign from '@expo/vector-icons/AntDesign';
import { useState } from "react";

type Props = {
    containerStyle?: StyleProp<ViewStyle>,
    setIsFavorited: (favorited: boolean) => void,
}

export default function FavoriteButton({ containerStyle, setIsFavorited }: Props) {
    const [isFavorited, setFavorited] = useState(false);

    function onToggleFavorited() {
        setFavorited(!isFavorited);
        setIsFavorited(!isFavorited);
    }

    return (
        <TouchableOpacity style={[styles.buttonContainer, containerStyle]} onPress={() => { setFavorited(!isFavorited) }}>
            {isFavorited ?
                <AntDesign name="heart" size={13} color='red' /> :
                <AntDesign name="hearto" size={13} color='black' />
            }
        </TouchableOpacity>
    )
}