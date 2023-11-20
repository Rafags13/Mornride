import { ReactNode, memo } from 'react'
import { View, Text, TouchableOpacity, TouchableOpacityProps } from 'react-native'
import styles from './style'

interface Props extends TouchableOpacityProps {
    children: ReactNode,
    isSelected?: boolean,
    hasBorder?: boolean
}

export default function DisplayTouchable({ children, isSelected = false, hasBorder = false, ...props }: Props) {
    return (
        <TouchableOpacity activeOpacity={0.5} style={[styles.imageSelector, { borderColor: isSelected && hasBorder ? '#AFD471' : 'transparent', width: hasBorder ? '20%' : '100%' }]} {...props} >
            {children}
        </TouchableOpacity>
    )
}
