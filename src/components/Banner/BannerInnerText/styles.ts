import {Dimensions, StyleSheet} from 'react-native'

const width = Dimensions.get('window').width;
const size = width * 0.8;

const styles = StyleSheet.create({
   description: {
        width: (size / 2),
        color: 'white',
        fontWeight: '700',
        fontStyle: 'italic',
        fontSize: 18
    }
})

export default styles;