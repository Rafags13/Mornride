import { View, Text } from 'react-native'
import React from 'react'
import styles from './styles'

export default function BannerInnerText({ description, isDivided = true }: { description: string, isDivided?: boolean }) {
  return (
    <Text style={[styles.description, !isDivided ? { width: '100%' } : {}]}>{description}</Text>

  )
}