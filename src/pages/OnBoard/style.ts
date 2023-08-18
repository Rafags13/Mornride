import { StyleSheet, Dimensions } from 'react-native'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 20,
        backgroundColor: '#161616',
    },
    title: {
        position: 'absolute',
        color: 'white',
        zIndex: 1,
        fontSize: 50,
        textAlign: 'center',
        fontStyle: "italic",
        fontWeight: "900",
        alignSelf: 'center'
    },
    onBoardBicycleImage: {
        marginTop: 90,
        width: windowWidth - 10,
        left: 70,
        height: windowWidth - 10,
        zIndex: 2,
    },
    buttonJoin: {
        backgroundColor: '#c1f376',
        padding: 15,
        borderRadius: 20,
        alignItems: 'center'
    },
    buttonText: {
        color: 'black',
        fontWeight: '700'
    }
});

export default styles