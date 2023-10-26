import { StyleProp, TouchableOpacity, ViewStyle } from "react-native";
import styles from "./style";
import AntDesign from '@expo/vector-icons/AntDesign';

type Props = {
    containerStyle?: StyleProp<ViewStyle>,
    isFavorited?: boolean,
    setIsFavorited: (favorited: boolean) => void,
}

export default function FavoriteButton({ containerStyle, isFavorited = false, setIsFavorited }: Props) {

    return (
        <TouchableOpacity style={[styles.buttonContainer, containerStyle]} onPress={() => { setIsFavorited(!isFavorited) }}>
            {isFavorited ?
                <AntDesign name="heart" size={13} color='red' /> :
                <AntDesign name="hearto" size={13} color='black' />
            }
        </TouchableOpacity>
    )
}