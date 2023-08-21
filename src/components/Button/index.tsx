import { TouchableOpacity, Text } from "react-native";
import styles from "./style";

type Props = {
    onClick: () => void,
    label: string,
    typeOfButton?: 'default' | 'info',
}

export default function Button({ onClick, label, typeOfButton = 'default' }: Props) {

    const ButtonTypes = {
        default: styles.default,
        info: styles.info
    }

    return (
        <TouchableOpacity
            activeOpacity={0.5}
            style={ButtonTypes[typeOfButton]}
            onPress={onClick}
        >
            <Text style={styles.buttonText}>{label}</Text>
        </TouchableOpacity>
    )
}