import { ReactNode, memo } from 'react'
import { View, Text, TouchableOpacity, TouchableOpacityProps } from 'react-native'
import styles from './style'

interface Props extends TouchableOpacityProps {
    children: ReactNode,
    isSelected: boolean
}

const DisplayTouchable = (function DisplayTouchable({ children, isSelected, ...props }: Props) {
    return (
        <TouchableOpacity activeOpacity={0.5} style={[styles.imageSelector, { borderColor: isSelected ? '#AFD471' : 'transparent' }]} {...props} >
            {children}
        </TouchableOpacity>
    )
});

export default memo(DisplayTouchable, (prev, next) => prev.isSelected === next.isSelected)