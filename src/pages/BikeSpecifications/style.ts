import { StyleSheet } from 'react-native'
import { globalStyles } from '../../util/styles/global';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        paddingHorizontal: 20,
        backgroundColor: 'white',
    },
    imageDisplayContainer: {
        backgroundColor: 'rgba(195, 195, 195, 0.25)',
        borderRadius: 20
    },
    imageSelectorContainer: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        marginVertical: 20
    },
    imageSelector: {
        backgroundColor: 'rgba(195, 195, 195, 0.25)',
        borderWidth: 3,
        borderRadius: 20,
        width: '20%',
        padding: 5,
    },
    titleContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    title: {
        ...globalStyles.title,
        fontSize: 22
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
