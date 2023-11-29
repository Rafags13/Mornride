import {StyleSheet} from 'react-native'

const styles = (isSelectedToo?: boolean) => StyleSheet.create({
  container: {
     padding: 20,
      flexDirection: 'row',
      gap: 15,
      alignItems: 'center',
      backgroundColor: 'white',
      width: '90%',
      borderRadius: 10,
      borderColor: '#69C1D3',
      borderWidth: isSelectedToo ? 1 : 0,
   }
})

export default styles;