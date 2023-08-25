import 'react-native-reanimated'
import 'react-native-gesture-handler'
import StackNavigation from './src/routes/StackNavigation';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <NavigationContainer>
      <StackNavigation />
      <StatusBar style='auto' />
    </NavigationContainer>
  );
}
