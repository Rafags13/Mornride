import { DimensionValue, Image, ImageSourcePropType } from 'react-native'
import styles from './style'

type Props = {
    source: ImageSourcePropType,
    height?: DimensionValue | undefined
}

export default function BikeImage({ source, height = 140 }: Props) {
    return (
        <Image style={[styles.image, { height }]} source={source} />
    )
}