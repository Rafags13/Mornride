import { View, Text, TouchableOpacity } from 'react-native';

import AntDesign from '@expo/vector-icons/AntDesign';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import styles from './style';
import { useNavigation } from '@react-navigation/native';

type Props = {
    title: string
}

export default function BackHeader({ title }: Props) {
    const navigation = useNavigation<any>();

    return (
        <View style={styles.headerContainer}>
            <TouchableOpacity activeOpacity={0.25} style={styles.backButtonContainer} onPress={() => { navigation.goBack() }}>
                <AntDesign name="arrowleft" color="white" size={18} />
            </TouchableOpacity>

            <Text style={styles.headerTitle} >{title}</Text>

            <TouchableOpacity style={styles.optionsButton}>
                <SimpleLineIcons name="options" color="black" size={18} />
            </TouchableOpacity>
        </View>
    )
}