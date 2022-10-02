import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainPage from './src/components/MainPage';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
      screenOptions={{headerShown:false}}
      >
        <Stack.Screen
        name="Home"
        component={MainPage}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
