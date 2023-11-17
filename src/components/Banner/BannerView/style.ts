import { Dimensions, StyleSheet } from 'react-native';

const width = Dimensions.get('window').width;
const size = width * 0.8;

const styles = StyleSheet.create({
   imageCardContainer: {
        width: size,
        borderRadius: 20,
        height: 200,
  },
   imageContentContainer: {
        flex: 1,
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        padding: 10,
        gap: 10,
        flexDirection: 'row',
    },
})

export default styles;