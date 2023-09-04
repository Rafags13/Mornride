import { TouchableOpacity, Text, TouchableOpacityProps, StyleProp, TextStyle } from "react-native";
import styles from "./style";
import { ReactNode } from "react";

export type ButtonType = 'default' | 'info' | 'empty';
export interface ButtonProps extends TouchableOpacityProps {
    onClick: () => void,
    typeOfButton?: ButtonType,
    children: ReactNode,
    disabled?: boolean
}

export default function Button({ onClick, typeOfButton = 'default', disabled = false, children, ...props }: ButtonProps) {
    return (
        <TouchableOpacity
            activeOpacity={0.5}
            style={[styles[typeOfButton]]}
            onPress={onClick}
            disabled={disabled}
            {...props}
        >
            {children}
        </TouchableOpacity>
    )
}