import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import styles from './style'

export default function RadioButton({ selected = false }: { selected?: boolean, setSelected?: (selected: boolean) => void }) {
  return (
    <View style={styles.container}
    >
      {selected ?
        (
          <View style={styles.selectedCenterBall} />
        ) :
        null
      }
    </View>
  )
}