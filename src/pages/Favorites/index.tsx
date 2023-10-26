import { View, Text } from 'react-native'
import React from 'react'
import Background from '../../components/Background'
import { globalStyles } from '../../util/styles/global'
import { useAppSelector } from '../../apps/hooks'
import FavoriteBikeList from '../../components/FavoriteBikeList'

export default function Favorites() {
    const bikes = useAppSelector((state) => state.favoriteBikes.bikes)

    return (
        <Background style={{ gap: 20 }}>
            <Text style={globalStyles.bigTitle}>My Favorites</Text>

            {bikes.length === 0 ? (
                <Text style={globalStyles.commonText}>Nobody to see here...</Text>
            ) :
                (
                    <FavoriteBikeList bikes={bikes} />
                )}

        </Background>
    )
}