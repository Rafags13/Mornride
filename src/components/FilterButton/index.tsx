import { View, Text, TouchableOpacity } from 'react-native'
import styles from './style'
import { memo } from 'react'

export type FilterProps = {
    label: string,
    option: string,
    activated?: boolean,
    setActivated?: () => void
}

const FilterButton = ({ label, option, activated = false, setActivated = () => { } }: FilterProps) => {
    function onSendEventByFilter() {
        setActivated();
        // TODO: Logic here
    }
    return (
        <TouchableOpacity style={[styles.filterButtonContainer, activated ? styles.activated : styles.inactivated]}
            onPress={onSendEventByFilter}
        >
            < Text style={{ color: activated ? 'white' : 'black' }}>{label}</Text>
        </TouchableOpacity >
    )
}

export default memo(FilterButton, ((prev, next) => prev.activated === next.activated))