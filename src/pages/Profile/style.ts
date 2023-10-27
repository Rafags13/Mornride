import {StyleSheet} from 'react-native'
import { globalStyles } from '../../util/styles/global';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingVertical: 50,
    paddingHorizontal: 20
  },
  imageProfile: {
    borderRadius: 100,
    height: 100,
    width: 100,
    alignSelf: 'center'
  },
  userByText: {
    ...globalStyles.commonText,
    color: '#008000'
  },
  premiumText: {
    ...globalStyles.title,
    color: '#E7A33E',
    alignSelf: 'center',
    paddingVertical: 20,
  },
  lastBoughtContainer: {
    gap: 20,
    marginBottom: 130 
  },
})

export default styles;