import { StyleSheet } from 'react-native'

const common = StyleSheet.create({
    button: {
        padding: 15,
        borderRadius: 20,
        alignItems: 'center',
        height: 50
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
    buttonText: {
        color: 'black',
        fontWeight: '700'
    }
})

export default styles;