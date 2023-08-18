import { TouchableOpacity, Text } from "react-native";
import styles from "./style";

type Props = {
    onClick: () => void
}

export default function Button({ onClick }: Props) {
    return (
        <TouchableOpacity
            activeOpacity={0.5}
            style={styles.buttonContainer}
            onPress={onClick}
        >
            <Text style={styles.buttonText}>Get started</Text>
        </TouchableOpacity>
    )
}