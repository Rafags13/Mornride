import { View, Text, StyleProp, ViewStyle } from 'react-native'
import React, { useCallback, useState } from 'react'
import { globalStyles } from '../../util/styles/global'
import styles from './style'
import Button from '../Button'
import CounterButton from '../CounterButton'
import { addFromCart } from '../../features/Cart/CartSlice'
import { useAppDispatch } from '../../apps/hooks';
import { Snackbar } from 'react-native-paper';

type Props = {
    style?: StyleProp<ViewStyle>,
    bikeId: number
}

export default function BuyMenu({ style, bikeId }: Props) {
    const [counter, setCounter] = useState<number>(1);
    const [visible, setVisible] = React.useState(false);
    const dispatch = useAppDispatch();

    const onPurchaseRemoveInCounter = useCallback(() => {
        setCounter(purchaseCounter => purchaseCounter - 1);
    }, []);

    const onPurchaseAddInCounter = useCallback(() => {
        setCounter(purchaseCounter => purchaseCounter + 1);
    }, []);

    const onAddToCart = () => {
        setVisible(true);

        if (counter > 0) {
            dispatch(addFromCart({ bikeId, counting: counter }));
        }
    };

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
            <Snackbar
                visible={visible}
                onDismiss={() => { setVisible(false) }}
                duration={1000}
                style={{ backgroundColor: counter === 0 ? 'red' : 'green' }}
            >
                {counter === 0 ? 'Select at least 1 bike' : 'Added to cart'}
            </Snackbar>
        </View >
    )
}