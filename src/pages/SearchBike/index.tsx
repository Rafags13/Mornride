import { View, Text, TextInput, FlatList, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Background from '../../components/Background'
import { globalStyles } from '../../util/styles/global'
import BikeProfiles from '../../util/data/database'
import BikeCard from '../../components/BikeCard'
import Feather from '@expo/vector-icons/Feather';
import styles from './style'

export default function SearchBike() {
    const [search, setSearch] = useState('');

    const filteredBikes = search.length > 0 ?
        BikeProfiles.filter(bikes => bikes.title.toLowerCase().includes(search.toLowerCase()))
        : [];

    return (
        <Background>
            <Text style={globalStyles.bigTitle}>Search</Text>
            <View style={styles.inputContainer}>
                <TextInput
                    style={{ padding: 10, width: search.length > 0 ? '90%' : '100%' }}
                    onChangeText={setSearch}
                    value={search}
                    placeholder='Put your bike here...'
                />
                {search.length > 0 && (
                    <TouchableOpacity onPressOut={() => { setSearch('') }}>
                        <Feather name="x" size={15} color={"black"} style={{ padding: 5 }} />
                    </TouchableOpacity>
                )}
            </View>

            <FlatList
                data={filteredBikes}
                renderItem={({ item }) => (<BikeCard key={item.id} bike={item} />)}
                keyExtractor={(bike) => bike.title}
                contentContainerStyle={{ gap: 20 }}
                showsVerticalScrollIndicator={false}
            />

            {
                (filteredBikes.length === 0 && search.length > 0) && (
                    <Text style={globalStyles.warning}>
                        The bike that you try to find is not avaliable yet..
                        We promise that we'll send to you when it happen.
                    </Text>
                )
            }

        </Background >
    )
}