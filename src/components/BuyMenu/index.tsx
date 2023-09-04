import { View, Text, StyleProp, ViewStyle } from 'react-native'
import React, { useCallback, useState } from 'react'
import { globalStyles } from '../../util/styles/global'
import styles from './style'
import Button from '../Button'
import CounterButton from '../CounterButton'
import { addFromCart } from '../../features/Cart/CartSlice'
import { useAppDispatch } from '../../apps/hooks'

type Props = {
    style?: StyleProp<ViewStyle>,
    bikeId: number
}

export default function BuyMenu({ style, bikeId }: Props) {
    const [counter, setCounter] = useState<number>(0);
    const dispatch = useAppDispatch()

    const onPurchaseRemoveInCounter = useCallback(() => {
        setCounter(purchaseCounter => purchaseCounter - 1);
    }, []);

    const onPurchaseAddInCounter = useCallback(() => {
        setCounter(purchaseCounter => purchaseCounter + 1);
    }, []);

    const onAddToCart = useCallback(() => {
        dispatch(addFromCart(bikeId))
    }, []);

    const onBuyNow = useCallback(() => {
        console.log(`Comprando a bike ${bikeId}`)
    }, []);

    return (
        <View style={[styles.container, style]}>
            <CounterButton
                counter={counter}
                onPurchaseRemoveInCounter={onPurchaseRemoveInCounter}
                onPurchaseAddInCounter={onPurchaseAddInCounter} />

            <Button onClick={onAddToCart}>
                <Text style={[globalStyles.commonText, { fontSize: 12 }]}>Add To Cart</Text>
            </Button>
            <Button onClick={onBuyNow}>
                <Text style={[globalStyles.commonText, { fontSize: 12 }]}>Buy Now</Text>
            </Button>
        </View>
    )
}