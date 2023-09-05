import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 30,
        padding: 20,
    },
    backButtonContainer: {
        backgroundColor: '#191919',
        borderRadius: 50,
        padding: 10,
        zIndex: 2,
    },
    headerTitle: {
        fontSize: 26,
        fontWeight: '900',
        color: 'black',
        margin: 'auto',
        letterSpacing: -2,
    },
    optionsButton: {
        padding: 10
    }
})

export default styles;