import { Dimensions, StyleSheet } from 'react-native'

const width = Dimensions.get('window').width;
const size = width * 0.8;

const styles = (isFirstItem: boolean, isLastItem: boolean) => StyleSheet.create({
    imageCardContainer: {
        marginLeft: isFirstItem ? 10 : 0,
        marginRight: isLastItem ? 10 : 0,
        width: size,
        borderRadius: 20,
        height: 200,
        backgroundColor: '#010101',
    },
    imageContentContainer: {
        flex: 1,
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        padding: 10,
        gap: 10,
        flexDirection: 'row',
    },
    description: {
        width: (size / 2),
        color: 'white',
        fontWeight: '700',
        fontStyle: 'italic',
        fontSize: 18
    }
})

export default styles;