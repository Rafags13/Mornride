import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    currentPaginationIndexContainer: {
        position: 'absolute',
        flexDirection: 'row',
        marginLeft: 10,
        gap: 10,
        backgroundColor: 'white',
        zIndex: 2,
        alignSelf: 'center',
        paddingHorizontal: 15,
        paddingBottom: 10,
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50
    },
    defaultImageIndex: {
        width: 25,
        borderRadius: 50,
        height: 7
    }
})

export default styles;