import { View, Text, TouchableOpacity, ImageBackground } from 'react-native'
import React, { ReactNode } from 'react'

export default function BannerTouchableView({ onClick, children }: { onClick: () => void, children: ReactNode }) {
  return (
    <TouchableOpacity style={{ flex: 1, height: 200 }} onPress={() => { onClick() }}>
      {children}
    </TouchableOpacity>
  )
}