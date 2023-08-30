import { TouchableOpacity, Text, TouchableOpacityProps, StyleProp, TextStyle } from "react-native";
import styles from "./style";

export interface ButtonProps extends TouchableOpacityProps {
    onClick: () => void,
    label: string,
    typeOfButton?: 'default' | 'info',
    textStyle?: StyleProp<TextStyle>
}

export default function Button({ onClick, label, typeOfButton = 'default', textStyle, ...props }: ButtonProps) {

    const ButtonTypes = {
        default: styles.default,
        info: styles.info
    }

    return (
        <TouchableOpacity
            activeOpacity={0.5}
            style={ButtonTypes[typeOfButton]}
            onPress={onClick}
            {...props}
        >
            <Text style={[styles.buttonText, textStyle]}>{label}</Text>
        </TouchableOpacity>
    )
}