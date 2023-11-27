import { View, Text, StyleProp, ViewStyle } from 'react-native'
import React, { useCallback, useState } from 'react'
import { globalStyles } from '../../util/styles/global'
import styles from './style'
import Button from '../Button'
import CounterButton from '../CounterButton'
import { Snackbar } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native'
import { postData } from '../../services/apiRequests'
import { useAppDispatch } from '../../apps/hooks'
import { addBikeIds } from '../../features/PurchaseBikes/PurchaseBikesSlide'

type Props = {
    style?: StyleProp<ViewStyle>,
    bikeId: number
}

export default function BuyMenu({ style, bikeId }: Props) {
    const [counter, setCounter] = useState<number>(1);
    const [visible, setVisible] = React.useState(false);
    const dispatch = useAppDispatch();
    const counterHasZeroInCount = counter === 0;
    const navigator = useNavigation<any>();

    const onPurchaseRemoveInCounter = () => {
        setCounter(purchaseCounter => purchaseCounter - 1);
    };

    const onPurchaseAddInCounter = () => {
        setCounter(purchaseCounter => purchaseCounter + 1);
    };

    const onAddToCart = async () => {
        setVisible(true);

        if (counter > 0) {
            var addBike = {
                bikeId,
                amount: counter,
            }
            await postData('/Cart', addBike);
        }
    };

    const onBuyNow = () => {
        dispatch(addBikeIds([bikeId]));
        navigator.navigate('finishPurchase', { bikeId, amount: counter });
    };

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
                style={{ backgroundColor: counterHasZeroInCount ? 'red' : '#c1f376' }}

                action={{
                    label: counterHasZeroInCount ? 'Close' : 'See',
                    onPress: () => {
                        if (counterHasZeroInCount) return;

                        navigator.navigate('cart')
                    },
                    textColor: counterHasZeroInCount ? 'white' : 'black'
                }}
            >
                <Text style={{ color: counterHasZeroInCount ? 'white' : 'black' }}>{counterHasZeroInCount ? 'Select at least 1 bike' : 'Added to cart'}</Text>
            </Snackbar>
        </View >
    )
}