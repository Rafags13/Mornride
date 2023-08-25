import { Image, ImageSourcePropType } from 'react-native'
import styles from './style'

type Props = {
    source: ImageSourcePropType,
}

export default function BikeImage({ source }: Props) {
    return (
        <Image style={styles.image} source={source} />
    )
}