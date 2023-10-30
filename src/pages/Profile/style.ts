import {StyleSheet} from 'react-native'
import { globalStyles } from '../../util/styles/global';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingVertical: 50,
    paddingHorizontal: 20,
  },
  imageProfile: {
    borderRadius: 100,
    height: 100,
    width: 100
  },
  nameOfUser: {
    ...globalStyles.bigTitle,
    alignSelf: 'center'
  },
  userByText: {
    ...globalStyles.title,
    alignSelf: 'center'
  },
  timeToUse: {
    ...globalStyles.commonText,
    color: '#008000'
  },
  premiumText: {
    ...globalStyles.title,
    color: '#E7A33E',
    alignSelf: 'center',
  },
  lastBoughtContainer: {
    marginTop: 15,
    gap: 20,
    marginBottom: 130 
  },
})

export default styles;