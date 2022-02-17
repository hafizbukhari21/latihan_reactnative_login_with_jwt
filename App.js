import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {NativeBaseProvider}from 'native-base'
import React, {useEffect} from 'react'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './Page/Login'
import Register from './Page/Register'

export default function App() {
  
  

  const Stack = createNativeStackNavigator();
  return (
    <NativeBaseProvider>
      <NavigationContainer >
        <Stack.Navigator screenOptions ={{headerShown:false}}>
          <Stack.Screen name="login" component={Login}/>
          <Stack.Screen name="register" component={Register}/>
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
