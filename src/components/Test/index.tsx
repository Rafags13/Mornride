import { View, Text } from 'react-native'
import React, { memo } from 'react'

const Test = (function Test() {
  return (
    <View>
      <Text>Test</Text>
    </View>
  )
})

export default memo(Test);