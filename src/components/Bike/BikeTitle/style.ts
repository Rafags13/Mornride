import { StyleSheet } from 'react-native'
import { globalStyles } from '../../../util/styles/global';

const styles = StyleSheet.create({
    small: {
        ...globalStyles.title
    },
    medium: {

    },
    large: {
        ...globalStyles.title,
        fontSize: 22

    }
})

export default styles;