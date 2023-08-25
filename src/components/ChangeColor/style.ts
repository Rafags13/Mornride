import { StyleSheet } from 'react-native'

const CIRCLE_SIZE = 20;

const styles = (circleColor = '') => StyleSheet.create({
    colorCircle: {
        height: CIRCLE_SIZE,
        width: CIRCLE_SIZE,
        backgroundColor: circleColor,
        borderRadius: 50,
    }
})

export default styles;