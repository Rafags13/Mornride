import { View, Text, TouchableOpacity } from 'react-native'
import styles from './style'
import { memo } from 'react'

export type FilterProps = {
    displayName: string,
    name: string,
    activated?: boolean,
    setActivated?: (name: string) => void
}

const FilterButton = ({ name, displayName, activated = false, setActivated = () => { } }: FilterProps) => {
    function onSendEventByFilter() {
        setActivated(name);
    }

    return (
        <TouchableOpacity style={[styles.filterButtonContainer, activated ? styles.activated : styles.inactivated]}
            onPress={onSendEventByFilter}
        >
            < Text style={{ color: activated ? 'white' : 'black' }}>{displayName}</Text>
        </TouchableOpacity >
    )
}

export default memo(FilterButton, (prev, next) => prev.activated === next.activated)