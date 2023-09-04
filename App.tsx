import 'react-native-reanimated'
import 'react-native-gesture-handler'
import StackNavigation from './src/routes/StackNavigation';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { Provider } from 'react-redux';
import { store } from './src/apps/store';

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <StackNavigation />
        <StatusBar style='auto' />
      </Provider>
    </NavigationContainer>
  );
}
