import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import Feather from '@expo/vector-icons/Feather';
import { addSeconds, format } from 'date-fns';
import { useInterval } from '../../hooks/useInterval';
import styles from './style';

type Props = {
    timePromotion: Date
}

export default function ClockSale({ timePromotion }: Props) {
    const [currentData, setCurrentData] = useState(timePromotion);
    useInterval(() => {
        setCurrentData(addSeconds(currentData, -1));
    }, 1000);

    return (
        <View style={styles.clockContainer}>
            <Feather name="clock" color={styles.colorText.color} size={16} />
            <Text style={styles.colorText}>{format(currentData, 'HH:mm:ss')}</Text>
        </View>
    )
}