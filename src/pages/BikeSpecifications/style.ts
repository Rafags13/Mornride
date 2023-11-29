import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: 'white',
        marginBottom: 70,
    },
    imageSelectorContainer: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        marginVertical: 20
    },
    titleContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    heartBackground: {
        backgroundColor: 'rgba(195,195,195,0.25)'
    },
    avaliationSection: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    rankText: {
        color: '#c4c4c4',
        fontWeight: '500',
    },
    rowLine: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 15
    },
    buttonsContainer: {
        flexDirection: 'row',
        gap: 10
    },
    buttonCounterContainer: {
        backgroundColor: "#c1f376",
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5,
        borderRadius: 20
    },
})

export default styles;
