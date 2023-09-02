import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { TailwindProvider } from 'tailwindcss-react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen'
import HotelScreen from './screens/HotelScreen';
import { SafeAreaProvider, initialWindowMetrics } from 'react-native-safe-area-context';
import Tabs from './navigators/Tabs';
import { Provider } from 'react-redux'
import { store } from './store';




const Stack = createNativeStackNavigator();

function Main(){
  return(
    <Tabs/>
  )
}

export default function App() {
  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <NavigationContainer>
        <Provider store={store}>
          <TailwindProvider>
            <Stack.Navigator>
              <Stack.Screen name='Main' component={Main} options={{headerShown:false}}/>
              <Stack.Screen name='Hotel' component={HotelScreen}/>
            </Stack.Navigator>
          </TailwindProvider>
        </Provider>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}


