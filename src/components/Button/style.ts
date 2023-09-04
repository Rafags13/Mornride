import { StyleSheet } from 'react-native'

const common = StyleSheet.create({
    button: {
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 15,
        paddingVertical: 10,
    }
})

const styles = StyleSheet.create({
    default: {
        backgroundColor: '#c1f376',
        ...common.button
    },
    info: {
        backgroundColor: 'white',
        ...common.button
    },
    empty: {
        backgroundColor: 'transparent',
        ...common.button,
    },
    buttonText: {
        color: 'black',
        fontWeight: '700'
    }
})

export default styles;