import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    filterButtonContainer: {
        paddingVertical: 7,
        paddingHorizontal: 15,
        borderRadius: 50,
        alignSelf: 'flex-start',
    },
    activated: {
        backgroundColor: '#303030',
    },
    inactivated: {
        backgroundColor: '#F3F3F3'
    },
})

export default styles;