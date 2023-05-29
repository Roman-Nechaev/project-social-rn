import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Platform } from 'react-native';

import { StatusBar } from 'expo-status-bar';

import RegistrationScreen from './components/Screens/RegistrationScreen/RegistrationScreen';
import LoginScreen from './components/Screens/LoginScreen/LoginScreen';

const MainStack = createStackNavigator();

import { Text, View } from 'react-native';

export default function App() {
  return (
    <NavigationContainer>
      <MainStack.Navigator initialRouteName="Registration">
        <MainStack.Screen
          name="Registration"
          component={RegistrationScreen}
          options={{ headerShown: false }}
        />
        <MainStack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
      </MainStack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
