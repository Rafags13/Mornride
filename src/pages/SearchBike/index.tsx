import { View, Text, TextInput, FlatList, TouchableOpacity, BackHandler, Keyboard } from 'react-native'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import Background from '../../components/Background'
import { globalStyles } from '../../util/styles/global'
// import BikeProfiles from '../../util/data/database'
import BikeCard from '../../components/BikeCard'
import Feather from '@expo/vector-icons/Feather';
import styles from './style'
import AutoComplete, { AutoCompleteItem } from '../../components/AutoComplete'
import { CommonActions, useIsFocused, useNavigation } from '@react-navigation/native'
import { useMutation, useQuery } from '@tanstack/react-query'
import { getData } from '../../services/apiRequests'

export default function SearchBike() {
    const [search, setSearch] = useState('');
    let inputRef = useRef<any>(null);
    const isFocused = useIsFocused();
    const { data } = useQuery<string[]>({
        queryKey: ['labels'], queryFn: async () => {
            const response = await getData('Bike/Names');
            return response.data
        }
    });

    const { data: mutateData, mutate } = useMutation({
        mutationFn: async (item: string) => {
            const response = await getData(`Bike/ByName/${item}`);
            setSearch('');
            return response.data;
        }
    });

    const autoCompleteItems = search.length > 0 ? data?.filter(item => item.toLowerCase().includes(search.toLowerCase())) : data;

    const getCurrentSelectSearch = useCallback((item: AutoCompleteItem) => {
        mutate(item);
    }, []);

    useEffect(() => {
        if (isFocused) {
            inputRef.current?.focus();
            return;
        }
    }, [isFocused]);


    return (
        <Background>
            <Text style={globalStyles.bigTitle}>Search</Text>

            <View style={styles.inputContainer}>
                <TextInput
                    style={{ padding: 10, width: search.length > 0 ? '90%' : '100%' }}
                    onChangeText={setSearch}
                    ref={ref => inputRef.current = ref}
                    value={search}
                    placeholder='Put your bike here...'
                />

                {search.length > 0 && (
                    <TouchableOpacity onPressOut={() => { setSearch('') }}>
                        <Feather name="x" size={15} color={"black"} style={{ padding: 5 }} />
                    </TouchableOpacity>
                )}
            </View>
            <View>


                {search.length > 0 && (
                    <AutoComplete onSelectItem={getCurrentSelectSearch} items={autoCompleteItems || []} />
                )}

                <FlatList
                    data={mutateData}
                    renderItem={({ item }) => (<BikeCard key={item.id} bike={item} />)}
                    keyExtractor={(bike) => bike.title}
                    contentContainerStyle={{ gap: 20, marginTop: 15 }}
                    showsVerticalScrollIndicator={false}
                />

                {
                    (mutateData?.length === 0 && search.length > 0) && (
                        <Text style={globalStyles.warning}>
                            The bike that you try to find is not avaliable yet..
                            We promise that we'll send to you when it happen.
                        </Text>
                    )
                }
            </View>

        </Background >
    )
}