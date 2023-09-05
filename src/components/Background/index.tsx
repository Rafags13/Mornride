import { View, Text, ViewProps, StyleProp, ViewStyle } from 'react-native'
import React, { ReactNode } from 'react'

type PropsWithoutDefaultStyle = Omit<ViewProps, 'style'>;

interface Props extends PropsWithoutDefaultStyle {
    children: ReactNode,
    style?: StyleProp<ViewStyle>
}

export default function Background({ children, style, ...props }: Props) {
    return (
        <View style={[{ padding: 20, marginTop: 30, }, style]} {...props}>
            {children}
        </View>
    )
}