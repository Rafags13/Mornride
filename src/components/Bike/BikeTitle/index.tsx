import { Text } from "react-native"
import { globalStyles } from "../../../util/styles/global"
import styles from "./style"

type Props = {
    size?: 'small' | 'medium' | 'large',
    title: string,
}

export default function BikeTitle({ size = 'small', title }: Props) {
    return (
        <Text style={styles[size]}>{title}</Text>
    )
}