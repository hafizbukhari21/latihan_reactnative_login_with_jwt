import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {BaseUrl} from './Utils/BaseApi'
import React, {useEffect} from 'react'
import jwt_decode from 'jwt-decode'

export default function App() {
  
  useEffect(()=>{
    // BaseUrl.get("/showData").then(e=>console.log(e.data))

    BaseUrl.post("/login",{
      email:'hafiz@gmail.com',
      password:'123'
    }).then(e=>console.log(jwt_decode(e.data.token)))
    
  },[])
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
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
