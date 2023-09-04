import { View, Text } from 'react-native'
import React, { useState } from 'react'
import styles from './style'
import Button from '../Button'
import { globalStyles } from '../../util/styles/global'

type Props = {
    counter: number,
    onPurchaseRemoveInCounter: () => void,
    onPurchaseAddInCounter: () => void,
}

export default function CounterButton({ counter, onPurchaseRemoveInCounter, onPurchaseAddInCounter }: Props) {

    return (
        <View style={styles.buttonCounterContainer}>
            <Button
                onClick={onPurchaseRemoveInCounter}
                typeOfButton="empty"
                disabled={counter === 0}
            >
                <Text style={globalStyles.commonText}>-</Text>
            </Button>

            <Text style={[globalStyles.commonText, { fontSize: 12 }]}>{counter}</Text>

            <Button
                onClick={onPurchaseAddInCounter}
                typeOfButton="empty"
            >
                <Text style={globalStyles.commonText}>+</Text>
            </Button>
        </View>
    )
}