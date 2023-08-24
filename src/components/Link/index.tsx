import { TouchableOpacity, Text, StyleProp, ViewStyle } from "react-native";
import styles from "./style";

type Props = {
    label: string,
    onClick: () => void,
    style?: StyleProp<ViewStyle>
}

export default function Link({ label, onClick, style }: Props) {
    return (
        <TouchableOpacity onPress={onClick} style={style}>
            <Text style={styles.linkText}>{label}</Text>
        </TouchableOpacity>
    )
}