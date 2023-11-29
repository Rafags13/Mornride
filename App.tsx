import 'react-native-reanimated'
import 'react-native-gesture-handler'
import StackNavigation from './src/routes/StackNavigation';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { Provider } from 'react-redux';
import { store } from './src/apps/store';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

export default function App() {
  return (
    <NavigationContainer>
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <StackNavigation />
          <StatusBar style='auto' />
        </Provider>
      </QueryClientProvider>
    </NavigationContainer>
  );
}
