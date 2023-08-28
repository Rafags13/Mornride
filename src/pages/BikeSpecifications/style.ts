import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    imageDisplayContainer: {
        marginHorizontal: 20,
        backgroundColor: 'rgba(195, 195, 195, 0.25)',
        borderRadius: 20
    },
    imageSelectorContainer: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        marginVertical: 20
    },
    imageSelector: {
        backgroundColor: 'rgba(195, 195, 195, 0.25)',
        borderWidth: 3,
        borderRadius: 20,
        width: '20%',
        padding: 5,
    }
})

export default styles;