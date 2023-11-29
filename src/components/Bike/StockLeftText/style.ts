import { StyleSheet } from 'react-native'

const text = StyleSheet.create({
    text: {
        fontSize: 12,
        fontWeight: '500',
    }
})

const styles = StyleSheet.create({
    textUnderTen: {
        ...text.text,
        color: 'red',
    },
    textHigherTen: {
        ...text.text,
        
        color: 'black'
    }
})

export default styles;