import { View, Text, StyleProp, ViewStyle } from 'react-native'
import React, { useCallback, useState } from 'react'
import { globalStyles } from '../../util/styles/global'
import styles from './style'
import Button from '../Button'
import CounterButton from '../CounterButton'
import { Snackbar } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native'
import { BikeCartDto } from '../../util/model/dto/BikeCartDto'
import { postData } from '../../services/apiRequests'

type Props = {
    style?: StyleProp<ViewStyle>,
    bikeId: number
}

export default function BuyMenu({ style, bikeId }: Props) {
    const [counter, setCounter] = useState<number>(1);
    const [visible, setVisible] = React.useState(false);
    const counterHasZeroInCount = counter === 0;
    const navigator = useNavigation<any>();

    const onPurchaseRemoveInCounter = useCallback(() => {
        setCounter(purchaseCounter => purchaseCounter - 1);
    }, []);

    const onPurchaseAddInCounter = useCallback(() => {
        setCounter(purchaseCounter => purchaseCounter + 1);
    }, []);

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