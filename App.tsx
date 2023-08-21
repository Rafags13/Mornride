import 'react-native-reanimated'
import 'react-native-gesture-handler'
import StackNavigation from './src/routes/StackNavigation';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <NavigationContainer>
      <StackNavigation />
    </NavigationContainer>
  );
}
