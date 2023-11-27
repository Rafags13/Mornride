import { TouchableOpacity, Text, TouchableOpacityProps, StyleProp, TextStyle, ViewStyle } from "react-native";
import styles from "./style";
import { ReactNode } from "react";

export type ButtonType = 'default' | 'info' | 'empty';
export interface ButtonProps extends Omit<TouchableOpacityProps, 'style'> {
    onClick: () => void,
    typeOfButton?: ButtonType,
    children: ReactNode,
    disabled?: boolean,
    style?: StyleProp<ViewStyle>
}

export default function Button({ onClick, typeOfButton = 'default', disabled = false, children, style, ...props }: ButtonProps) {
    return (
        <TouchableOpacity
            activeOpacity={0.5}
            style={[styles[typeOfButton], style]}
            onPress={onClick}
            disabled={disabled}
            {...props}
        >
            {children}
        </TouchableOpacity>
    )
}