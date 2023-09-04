import { StyleSheet, Dimensions } from 'react-native'

const height = Dimensions.get('screen').height * 0.01;

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        width: '100%',
        alignItems: 'center',
        alignSelf: 'center',
        backgroundColor: '#101010',
        justifyContent: 'space-between',
        flexDirection: 'row',
        padding: 10,
        borderRadius: 50,
        bottom: height
    }
})

export default styles;