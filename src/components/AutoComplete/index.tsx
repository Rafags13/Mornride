import { View, Text, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import React from 'react';
import styles from './style';

export type AutoCompleteItem = string

type AutoCompleteProps = {
  onSelectItem: (item: AutoCompleteItem) => void,
  items: AutoCompleteItem[]
}

export default function AutoComplete({ items, onSelectItem }: AutoCompleteProps) {
  return (
    <View style={{ position: 'absolute', zIndex: 1, width: '100%' }}>
      {items.map((label) => (
        <TouchableWithoutFeedback onPress={() => onSelectItem(label)} key={label}>
          <View style={styles.item}>
            <Text style={styles.text}>{label}</Text>
          </View>
        </TouchableWithoutFeedback>
      ))}
    </View>
  )
}